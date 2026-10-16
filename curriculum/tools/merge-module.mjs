// Main-session tool: merge a finished module's inboxes into the shared files and rebuild _sidebar.md.
// Usage (from the course root): node curriculum/tools/merge-module.mjs 01
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire("C:/Users/TalGiladi/OneDrive/repos/tals-academy/package.json");
const yaml = require("js-yaml");

const NN = process.argv[2];
if (!/^\d{2}$/.test(NN ?? "")) { console.error("usage: node curriculum/tools/merge-module.mjs NN"); process.exit(2); }
const read = (f) => fs.readFileSync(f, "utf8").replace(/\r/g, "");
const write = (f, s) => fs.writeFileSync(f, s.replace(/\r/g, ""));
const exists = (f) => fs.existsSync(f);
const tableRows = (s) => s.split("\n").filter((l) => /^\|/.test(l) && !/^\|\s*-/.test(l)).slice(1);

// 1. Templates: move drafts into templates/ and rebuild the README list.
const draftDir = "curriculum/inbox/templates";
if (exists(draftDir)) for (const f of fs.readdirSync(draftDir)) {
  if (!f.endsWith(".md")) continue;
  if (exists(`templates/${f}`)) console.log(`template exists, kept: ${f}`);
  else fs.renameSync(`${draftDir}/${f}`, `templates/${f}`);
}
{
  const items = fs.readdirSync("templates").filter((f) => f.endsWith(".md") && f !== "README.md").map((f) => {
    const h1 = (read(`templates/${f}`).match(/^# (.+)$/m) ?? [, f])[1].trim();
    return `- [${h1}](${f})`;
  }).sort((a, b) => a.localeCompare(b));
  const head = read("templates/README.md").split("## All templates")[0];
  write("templates/README.md", `${head}## All templates\n\n${items.join("\n")}\n`);
}

// 2. Glossary: merge, dedupe by Hebrew term, sort.
const gi = `curriculum/glossary-inbox/module-${NN}.md`;
if (exists(gi)) {
  const g = read("glossary.md");
  const [head] = g.split("## Terms");
  const terms = new Map();
  for (const l of (g + "\n" + read(gi)).split("\n")) {
    const m = /^- \*\*(.+?)\*\*/.exec(l);
    if (m && !terms.has(m[1])) terms.set(m[1], l.trim());
  }
  const sorted = [...terms.entries()].sort((a, b) => a[0].localeCompare(b[0], "he")).map((e) => e[1]);
  write("glossary.md", `${head}## Terms\n\n${sorted.join("\n")}\n`);
}

// 3. Numbers and forums: append new rows (dedupe by first cell).
function appendRows(target, inbox, header) {
  if (!exists(inbox)) return;
  let t = read(target);
  if (header && !t.includes(header.title)) t = t.trimEnd() + `\n\n${header.title}\n\n${header.table}\n`;
  const have = new Set(tableRows(t).map((r) => r.split("|")[1].trim()));
  const add = tableRows(read(inbox)).filter((r) => !have.has(r.split("|")[1].trim()));
  write(target, t.trimEnd() + (add.length ? "\n" + add.join("\n") : "") + "\n");
}
appendRows("references/current-numbers.md", `curriculum/inbox/module-${NN}-numbers.md`);
appendRows("references/can-i-act-without-a-lawyer.md", `curriculum/inbox/module-${NN}-forums.md`, {
  title: "## Details and sources",
  table: "| Forum | Act for yourself? | Who else may represent you | Source | Note |\n|---|---|---|---|---|",
});

// 4. Sidebar: rebuild from the lesson files of every written module.
const plan = read("curriculum/plan.md");
const stages = [[1, "Year 1 — Foundations"], [13, "Year 2 — Core Courses"], [23, "Year 3 — Advanced Core"], [32, "Year 4 — Specialisation, Ethics and Capstone"]];
const titles = {};
for (const m of plan.matchAll(/^\*\*Module (\d+) — (.+?)\*\*$/gm)) titles[Number(m[1])] = m[2].trim();
const done = (n) => { const f = `curriculum/status/module-${String(n).padStart(2, "0")}.log`; return exists(f) && /module done/.test(read(f)); };
const mods = fs.readdirSync("lessons").filter((d) => /^module-\d{2}$/.test(d)).map((d) => Number(d.slice(7))).filter(done).sort((a, b) => a - b);
const top = read("_sidebar.md").split("\n\n")[0].trimEnd();
let out = top + "\n";
let running = 0;
for (const m of mods) {
  const st = stages.find((s) => s[0] === m) ?? (m === mods[0] ? [...stages].reverse().find((s) => s[0] <= m) : null);
  if (st) out += `\n- ${st[1]}\n`;
  const dir = `lessons/module-${String(m).padStart(2, "0")}`;
  const files = fs.readdirSync(dir).filter((f) => /^lesson-\d{2}\.md$/.test(f)).sort();
  let mins = 30;
  const lines = [];
  for (const f of files) {
    const raw = read(`${dir}/${f}`);
    const fm = yaml.load(/^---\n([\s\S]*?)\n---\n/.exec(raw)[1]);
    mins += (fm.minutes ?? 0) + (fm.practice_minutes ?? 0);
    const h1 = /^# \d+\.\d+ · (.+)$/m.exec(raw)[1].trim();
    running++;
    lines.push(`  - [${String(running).padStart(2, "0")} · ${h1}](${dir}/${f})`);
  }
  const proj = fs.readdirSync("projects").find((p) => p.startsWith(`m${String(m).padStart(2, "0")}-`));
  if (proj) {
    const pm = /(\d+)\s*(?:hours|h)\b/i.exec(read(`projects/${proj}`));
    mins += pm ? Number(pm[1]) * 60 : 180;
  }
  out += `- **Module ${m} — ${titles[m] ?? `Module ${m}`} (about ${Math.round(mins / 60)} hours)**\n${lines.join("\n")}\n  - [Module ${m} quiz](assessments/module-${String(m).padStart(2, "0")}-quiz.md)\n`;
}
write("_sidebar.md", out);
console.log(`merged module ${NN}; sidebar has ${mods.length} modules, ${running} lessons`);
