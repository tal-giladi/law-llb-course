# External link report (modules 01–11)

Run: 2026-10-17, `node curriculum/tools/check-links.mjs` (HEAD then GET fallback, 20 s timeout, browser User-Agent, redirects followed, concurrency 6).

Scope: lessons/module-01..11, projects/m01..m11-*, templates/, references/, glossary.md (203 files). URLs taken from markdown links, front-matter `url:` fields and bare URLs in prose/tables.

## Counts (568 unique URLs)

| Status | Count |
|---|---|
| OK (2xx/3xx), including the 1 fixed URL | 546 |
| Broken before fix (now OK) | 1 |
| Blocked host, manual check (gov.il, kolzchut) | 18 |
| Other bot-block / connection refusal, verified live via search index | 3 (loc.gov ×2, openyls.law.yale.edu) |
| Transient server error | 1 (iep.utm.edu, 200 on first run, whole site returning 500 on rerun) |
| Broken, not fixable | 0 |

No soft-404s: every OK HTML page was re-fetched and its title scanned for "not found"/404/error markers (English and Hebrew) and MediaWiki "no article" markers; none matched.

## Fixes

| File | Old | New | Reason |
|---|---|---|---|
| references/current-numbers.md | https://aljazeera.com/news/2026/7/17/knesset-dissolves-how-will-israel-vote-in-octobers-general-election | https://www.aljazeera.com/news/2026/7/17/knesset-dissolves-how-will-israel-vote-in-octobers-general-election | bare host fails TLS (certificate name mismatch); www host returns 200 |

## Manual check needed

Hosts below refuse automated requests (403 or socket reset). None is treated as broken. Open each in a browser.

### iep.utm.edu

- https://iep.utm.edu/natlaw/ (500, site-wide outage at check time; 200 on first run) — lessons/module-09/lesson-01.md

### openyls.law.yale.edu

- https://openyls.law.yale.edu/entities/publication/4171d715-3ce2-4fd9-a9bb-75a898c45633 (connection reset; record confirmed in search index as Calabresi & Melamed) — lessons/module-11/lesson-01.md

### supremedecisions.court.gov.il

- https://supremedecisions.court.gov.il (UND_ERR_SOCKET) — lessons/module-01/lesson-02.md, lessons/module-01/lesson-03.md, lessons/module-01/lesson-04.md, lessons/module-01/lesson-05.md, lessons/module-01/lesson-06.md, lessons/module-03/lesson-02.md, lessons/module-03/lesson-03.md, lessons/module-03/lesson-04.md, lessons/module-03/lesson-07.md, lessons/module-03/lesson-08.md, lessons/module-05/lesson-01.md, lessons/module-05/lesson-02.md, lessons/module-05/lesson-04.md, lessons/module-05/lesson-05.md, lessons/module-05/lesson-06.md, lessons/module-05/lesson-07.md, lessons/module-06/lesson-01.md, lessons/module-06/lesson-02.md, lessons/module-06/lesson-03.md, lessons/module-06/lesson-04.md, lessons/module-06/lesson-05.md, lessons/module-06/lesson-06.md, lessons/module-06/lesson-07.md, lessons/module-07/lesson-01.md, lessons/module-07/lesson-02.md, lessons/module-07/lesson-03.md, lessons/module-07/lesson-04.md
- https://supremedecisions.court.gov.il/ (UND_ERR_SOCKET) — lessons/module-02/lesson-02.md
- https://supremedecisions.court.gov.il/Home/Download?path=HebrewVerdicts\17\340\052\m03&fileName=17052340.M03&type=2 (UND_ERR_SOCKET) — lessons/module-01/lesson-01.md
- https://supremedecisions.court.gov.il/Home/Download?path=HebrewVerdicts%2F08%2F200%2F081%2Fv04&fileName=08081200_v04.txt&type=2 (UND_ERR_SOCKET) — lessons/module-01/lesson-01.md, lessons/module-01/lesson-06.md, lessons/module-01/lesson-07.md

### www.gov.il

- https://www.gov.il/he/departments/ministry_of_justice_legal_aid/govil-landing-page (403) — lessons/module-11/lesson-03.md
- https://www.gov.il/he/departments/units/molsa-court-assiatance-units (403) — lessons/module-10/lesson-06.md, references/where-to-get-help.md
- https://www.gov.il/he/service/filing_a_small_claim (403) — lessons/module-08/lesson-03.md, lessons/module-08/lesson-08.md, references/can-i-act-without-a-lawyer.md, references/current-numbers.md
- https://www.gov.il/he/service/filing-letter-of-defense (403) — lessons/module-08/lesson-02.md
- https://www.gov.il/he/service/general_request_rabbinical_court (403) — lessons/module-10/lesson-06.md
- https://www.gov.il/he/service/legal_aid_application (403) — lessons/module-01/lesson-06.md, lessons/module-10/lesson-06.md, references/where-to-get-help.md
- https://www.gov.il/he/service/opening_monetary_verdict_file (403) — lessons/module-08/lesson-07.md
- https://www.gov.il/he/service/ordinaty-procedure-filing-a-statement-of-claim (403) — lessons/module-08/lesson-02.md

### www.kolzchut.org.il

- https://www.kolzchut.org.il (403) — lessons/module-02/lesson-01.md, lessons/module-05/lesson-01.md, lessons/module-05/lesson-07.md, lessons/module-05/lesson-08.md, references/where-to-get-help.md
- https://www.kolzchut.org.il/he/בקשה_לביצוע_פסק_דין_כספי_בהוצאה_לפועל (403) — lessons/module-08/lesson-07.md, lessons/module-08/lesson-09.md, references/can-i-act-without-a-lawyer.md, references/current-numbers.md
- https://www.kolzchut.org.il/he/הגשת_תביעה_קטנה (403) — lessons/module-08/lesson-03.md, lessons/module-08/lesson-08.md, references/can-i-act-without-a-lawyer.md, references/current-numbers.md
- https://www.kolzchut.org.il/he/הוצאה_לפועל_וגבייה (403) — lessons/module-08/lesson-07.md
- https://www.kolzchut.org.il/he/ייצוג_על_ידי_סניגור_ציבורי_בהליך_פלילי (403) — references/where-to-get-help.md
- https://www.kolzchut.org.il/he/עתירות_אסירים_ועצורים (403) — references/can-i-act-without-a-lawyer.md

### www.loc.gov

- https://www.loc.gov/item/global-legal-monitor/2021-07-27/israel-supreme-court-affirms-constitutionality-of-basic-law-israel-nation-state-of-the-jewish-people/ (403; article confirmed in search index) — lessons/module-06/lesson-04.md
- https://www.loc.gov/item/global-legal-monitor/2024-07-02/israel-high-court-rules-that-state-must-draft-yeshiva-students-to-the-military/ (403; article confirmed in search index) — lessons/module-06/lesson-04.md

