// External link checker (QA tool, not imported).
// Usage (from the course root): node curriculum/tools/check-links.mjs [out.json] [path ...]
// With no paths: scans lessons/module-01..11, projects/m01..m11-*, templates/, references/, glossary.md.
// With paths (files or directories, walked recursively): scans only those.
// Extracts markdown link targets and front-matter `url:` fields, fetches each unique URL
// (HEAD, then GET fallback; 20 s timeout; redirects followed; concurrency 6) and writes JSON.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = process.argv[2] ?? "curriculum/qa/link-results.json";
const MODULES = Array.from({ length: 11 }, (_, i) => String(i + 1).padStart(2, "0"));
const BLOCKED = [/(^|\.)gov\.il$/, /(^|\.)kolzchut\.org\.il$/, /(^|\.)sefaria\.org(\.il)?$/, /(^|\.)icc-cpi\.int$/];
const PATHS = process.argv.slice(3);
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36";
const TIMEOUT = 20000;
const CONCURRENCY = 6;

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(md|ya?ml)$/.test(e.name)) acc.push(p);
  }
  return acc;
}

const files = PATHS.length
  ? PATHS.flatMap((p) => {
      const abs = path.resolve(root, p);
      return fs.statSync(abs).isDirectory() ? walk(abs) : [abs];
    })
  : [
  ...MODULES.flatMap((nn) => walk(path.join(root, "lessons", `module-${nn}`))),
  ...fs.readdirSync(path.join(root, "projects"))
    .filter((f) => MODULES.some((nn) => f.startsWith(`m${nn}-`)))
    .map((f) => path.join(root, "projects", f)),
  ...walk(path.join(root, "templates")),
  ...walk(path.join(root, "references")),
  path.join(root, "glossary.md"),
];

// Markdown link target, allowing one level of balanced parentheses inside the URL.
const MD_LINK = /\]\((https?:\/\/(?:[^()\s]|\([^()\s]*\))+)(?:\s+"[^"]*")?\)/g;
const FM_URL = /^\s*-?\s*url:\s*"?(https?:\/\/[^\s"]+)"?\s*$/gm;
// Bare URLs in prose and tables (trailing punctuation stripped below).
const BARE = /(https?:\/\/(?:[^\s()<>"`\[\]|]|\([^\s()]*\))+)/g;

const urls = new Map();
for (const f of files) {
  const rel = path.relative(root, f).replace(/\\/g, "/");
  const text = fs.readFileSync(f, "utf8");
  for (const re of [MD_LINK, FM_URL, BARE]) {
    for (const m of text.matchAll(re)) {
      const u = m[1].replace(/[.,;:*_]+$/, "");
      if (!urls.has(u)) urls.set(u, new Set());
      urls.get(u).add(rel);
    }
  }
}

function isBlocked(u) {
  try {
    const h = new URL(u).hostname.toLowerCase();
    return BLOCKED.some((re) => re.test(h));
  } catch {
    return false;
  }
}

async function attempt(u, method) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT);
  try {
    const r = await fetch(u, {
      method,
      redirect: "follow",
      signal: ctrl.signal,
      headers: { "User-Agent": UA, Accept: "text/html,application/xhtml+xml,application/pdf,*/*;q=0.8", "Accept-Language": "en,he;q=0.8" },
    });
    if (method === "GET") r.body?.cancel().catch(() => {});
    return { status: r.status, finalUrl: r.url };
  } catch (e) {
    const code = e.cause?.code ?? (e.name === "AbortError" ? "TIMEOUT" : e.name);
    return { status: 0, error: String(code) };
  } finally {
    clearTimeout(t);
  }
}

async function check(u) {
  let r = await attempt(u, "HEAD");
  if (r.status < 200 || r.status >= 400) {
    const g = await attempt(u, "GET");
    if (g.status || !r.status) r = g;
  }
  let category;
  if (r.status >= 200 && r.status < 400) category = "ok";
  else if (isBlocked(u)) category = "blocked";
  else if (r.status === 404 || r.status === 410) category = "broken";
  else if (["ENOTFOUND", "EAI_AGAIN"].includes(r.error)) category = "dns";
  else if (r.status === 0) category = "error";
  else category = "http-" + r.status;
  return { url: u, ...r, category, blockedHost: isBlocked(u), files: [...urls.get(u)].sort() };
}

const list = [...urls.keys()].sort();
const results = [];
let i = 0;
async function worker() {
  while (i < list.length) {
    const u = list[i++];
    results.push(await check(u));
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
results.sort((a, b) => a.url.localeCompare(b.url));
fs.mkdirSync(path.dirname(path.resolve(root, out)), { recursive: true });
fs.writeFileSync(path.resolve(root, out), JSON.stringify(results, null, 2));
const counts = {};
for (const r of results) counts[r.category] = (counts[r.category] ?? 0) + 1;
console.log(`files: ${files.length}, unique urls: ${results.length}`);
console.log(counts);
for (const r of results.filter((r) => !["ok", "blocked"].includes(r.category)))
  console.log(`${r.category}\t${r.status || r.error}\t${r.url}\t${r.files.join(", ")}`);
