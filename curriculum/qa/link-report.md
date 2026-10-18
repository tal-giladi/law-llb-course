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

## Year 2 (modules 13–21)

Run: 2026-10-17, `node curriculum/tools/check-links.mjs <out.json> lessons/module-13 … lessons/module-21 projects/m13-* … projects/m21-* templates references`. The tool now takes an optional list of paths (files or directories) after the output file; with no paths it scans year 1 as before. `icc-cpi.int` was added to the blocked-host list (gov.il subdomains, including supremedecisions.court.gov.il, knesset.gov.il, rbc.gov.il and btl.gov.il, were already covered).

Scope: 241 files, 573 unique URLs (module 22 excluded).

### Counts

| Status | Count |
|---|---|
| OK (2xx/3xx) | 539 |
| Rate-limited (429, he.wikisource.org), each page confirmed to exist through the MediaWiki API | 14 |
| Blocked host, manual check (gov.il, supremedecisions.court.gov.il, kolzchut) | 15 |
| Other bot-block (403), verified live via search index | 4 (casebook.icrc.org, ohchr.org ×2, ssrn.com) |
| Broken | 0 |

Soft-404 scan: every OK HTML page was re-fetched and its title checked for not-found/error markers (English and Hebrew) and Wikipedia "no article" markers. Nine www.gov.il/BlobFolder PDFs returned an HTML "שגיאה" page when requested with a browser `Accept: text/html` header, but each returns 200 `application/pdf` to a plain request, so they are live. fs.knesset.gov.il PDFs return 406 to some requests and 200 to others (bot filtering); none is broken.

### Fixes

None needed.

### Manual check needed

#### casebook.icrc.org

- https://casebook.icrc.org/case-study/israel-ayub-v-minister-defence (403; the entry "Israel, Ayub v. Minister of Defence" is in the search index as casebook.icrc.org/node/20823) — lessons/module-19/lesson-03.md, lessons/module-19/lesson-07.md

#### www.ohchr.org

- https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights (403; the path is cited by library records) — lessons/module-19/lesson-06.md
- https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-economic-social-and-cultural-rights (403) — lessons/module-19/lesson-06.md

#### www.ssrn.com

- https://www.ssrn.com (403, home page) — lessons/module-21/lesson-02.md

#### supremedecisions.court.gov.il

- https://supremedecisions.court.gov.il (UND_ERR_SOCKET) — lessons/module-13/lesson-01.md, lessons/module-13/lesson-03.md, lessons/module-13/lesson-04.md, lessons/module-20/lesson-07.md, lessons/module-20/lesson-08.md

#### www.gov.il

- https://www.gov.il/he/departments/units/molsa-court-assiatance-units (403) — lessons/module-18/lesson-09.md, references/where-to-get-help.md
- https://www.gov.il/he/service/caveat_filling (403) — lessons/module-13/lesson-04.md, references/can-i-act-without-a-lawyer.md, templates/caveat-request-checklist.md
- https://www.gov.il/he/service/company_registration (403) — lessons/module-16/lesson-02.md, lessons/module-16/lesson-08.md, references/can-i-act-without-a-lawyer.md, templates/company-registration-checklist.md
- https://www.gov.il/he/service/condominiums-supervisor-claims (403) — lessons/module-13/lesson-06.md, lessons/module-13/lesson-10.md, references/can-i-act-without-a-lawyer.md, templates/superintendent-claim.md
- https://www.gov.il/he/service/filing_a_small_claim (403) — references/can-i-act-without-a-lawyer.md, references/current-numbers.md
- https://www.gov.il/he/service/guide-register-rights (403) — lessons/module-13/lesson-02.md
- https://www.gov.il/he/service/land_registration_extract (403) — lessons/module-13/lesson-02.md, lessons/module-13/lesson-09.md, references/current-numbers.md, templates/apartment-purchase-check.md
- https://www.gov.il/he/service/legal_aid_application (403) — references/where-to-get-help.md

#### www.kolzchut.org.il

- https://www.kolzchut.org.il (403) — lessons/module-13/lesson-02.md, lessons/module-13/lesson-04.md, lessons/module-13/lesson-06.md, lessons/module-13/lesson-09.md, lessons/module-13/lesson-10.md, lessons/module-20/lesson-03.md, references/where-to-get-help.md
- https://www.kolzchut.org.il/he/בקשה_לביטול_פסק_דין_שניתן_בהיעדר_הגנה_במעמד_צד_אחד (403) — lessons/module-15/lesson-03.md
- https://www.kolzchut.org.il/he/בקשה_לביצוע_פסק_דין_כספי_בהוצאה_לפועל (403) — references/can-i-act-without-a-lawyer.md, references/current-numbers.md
- https://www.kolzchut.org.il/he/הגשת_תביעה_קטנה (403) — references/can-i-act-without-a-lawyer.md, references/current-numbers.md
- https://www.kolzchut.org.il/he/ייצוג_על_ידי_סניגור_ציבורי_בהליך_פלילי (403) — references/where-to-get-help.md
- https://www.kolzchut.org.il/he/עתירות_אסירים_ועצורים (403) — references/can-i-act-without-a-lawyer.md


## Year 3 (modules 23–30)

Run: 2026-10-18, `node curriculum/tools/check-links.mjs <out.json> lessons/module-23 … lessons/module-30 projects/m23-* … projects/m30-* templates references`. Module 31 excluded (in progress).

Scope: 241 files, 666 unique URLs.

### Counts

| Status | Count |
|---|---|
| OK (2xx/3xx) | 624 |
| Rate-limited (429, he.wikisource.org), each page confirmed to exist through the MediaWiki API | 8 |
| Temporary error (503, globes.co.il article 860638), 200 on re-check | 1 |
| Blocked host, manual check (gov.il, kolzchut) | 33 |
| Broken | 0 |

Soft-404 scan: the 82 OK non-wiki HTML pages were re-fetched and their titles checked for not-found and error markers; none found. The Kol-Zchut MediaWiki API was not reachable (404/403), so its pages could not be confirmed.

### Fixes

None needed.

### Manual check needed

#### www.gov.il

- https://www.gov.il/he/departments/units/molsa-court-assiatance-units (403) — references/where-to-get-help.md
- https://www.gov.il/he/service/caveat_filling (403) — references/can-i-act-without-a-lawyer.md, templates/caveat-request-checklist.md
- https://www.gov.il/he/service/claim_employee_dismissal_compensation_or_social_rights (403) — references/can-i-act-without-a-lawyer.md
- https://www.gov.il/he/service/company_registration (403) — references/can-i-act-without-a-lawyer.md, templates/company-registration-checklist.md
- https://www.gov.il/he/service/condominiums-supervisor-claims (403) — references/can-i-act-without-a-lawyer.md, templates/superintendent-claim.md
- https://www.gov.il/he/service/file_defense_action_in_employment_dispute (403) — references/can-i-act-without-a-lawyer.md
- https://www.gov.il/he/service/filing_a_small_claim (403) — references/can-i-act-without-a-lawyer.md, references/current-numbers.md
- https://www.gov.il/he/service/filing-lawsuit-family-dispute (403) — references/can-i-act-without-a-lawyer.md
- https://www.gov.il/he/service/general-request-execution (403) — lessons/module-28/lesson-01.md, lessons/module-28/lesson-08.md
- https://www.gov.il/he/service/land_registration_extract (403) — references/current-numbers.md, templates/apartment-purchase-check.md
- https://www.gov.il/he/service/legal_aid_application (403) — references/where-to-get-help.md
- https://www.gov.il/he/service/submitting-an-online-claim-for-job-grant (403) — references/can-i-act-without-a-lawyer.md, references/current-numbers.md

#### www.kolzchut.org.il (all 403)

- https://www.kolzchut.org.il — references/where-to-get-help.md
- https://www.kolzchut.org.il/he/בקשה_לאיחוד_תיקים_של_חייב_בהוצאה_לפועל — lessons/module-28/lesson-04.md
- https://www.kolzchut.org.il/he/בקשה_לביצוע_פסק_דין_כספי_בהוצאה_לפועל — references/can-i-act-without-a-lawyer.md, references/current-numbers.md
- https://www.kolzchut.org.il/he/בקשה_לקבלת_החזר_כספי_בגין_סכומים_ששולמו_לממונה_על_הליכי_חדלות_פירעון — lessons/module-28/lesson-09.md
- https://www.kolzchut.org.il/he/הגשת_בקשה_ידנית_לקבלת_צו_ירושה_למי_שאינו_מיוצג — lessons/module-26/lesson-09.md
- https://www.kolzchut.org.il/he/הגשת_בקשה_מקוונת_לקבלת_צו_ירושה — lessons/module-26/lesson-06.md, lessons/module-26/lesson-09.md, references/can-i-act-without-a-lawyer.md
- https://www.kolzchut.org.il/he/הגשת_התנגדות_לתוכנית_בניה — lessons/module-27/lesson-03.md
- https://www.kolzchut.org.il/he/הגשת_תביעה_קטנה — references/can-i-act-without-a-lawyer.md, references/current-numbers.md
- https://www.kolzchut.org.il/he/הוצאה_לפועל_וגבייה — lessons/module-28/lesson-01.md
- https://www.kolzchut.org.il/he/החזר_מס_הכנסה — lessons/module-25/lesson-04.md
- https://www.kolzchut.org.il/he/הפקדת_צוואה_אצל_רשם_הירושה_במשרד_המשפטים — lessons/module-26/lesson-08.md
- https://www.kolzchut.org.il/he/התנגדות_למתן_צו_ירושה — lessons/module-26/lesson-06.md
- https://www.kolzchut.org.il/he/ועדת_חריגים_לסיוע_בשכר_דירה — references/can-i-act-without-a-lawyer.md
- https://www.kolzchut.org.il/he/ייצוג_על_ידי_סניגור_ציבורי_בהליך_פלילי — references/where-to-get-help.md
- https://www.kolzchut.org.il/he/מענק_עבודה_(מענק_הכנסה,_מס_הכנסה_שלילי) — lessons/module-25/lesson-09.md
- https://www.kolzchut.org.il/he/סידור_מגורים_חלופי_לחייב_שדירת_מגוריו_עוקלה_ונמכרה_בהוצאה_לפועל — lessons/module-28/lesson-02.md
- https://www.kolzchut.org.il/he/סיוע_מוגדל_בשכר_דירה_לממתינים_לדיור_ציבורי — references/current-numbers.md
- https://www.kolzchut.org.il/he/ערעור_על_החלטה_של_משרד_הבינוי_והשיכון_בנושא_סיוע_בשכר_דירה — references/can-i-act-without-a-lawyer.md, references/current-numbers.md
- https://www.kolzchut.org.il/he/עתירות_אסירים_ועצורים — references/can-i-act-without-a-lawyer.md
- https://www.kolzchut.org.il/he/צוואה_בכתב_יד — lessons/module-26/lesson-08.md
- https://www.kolzchut.org.il/he/רישום_זכויות_יורשים_במקרקעין — lessons/module-26/lesson-07.md, references/can-i-act-without-a-lawyer.md
