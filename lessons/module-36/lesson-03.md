---
id: "36.3"
module: 36
minutes: 35
practice_minutes: 120
prerequisites: ["36.2", "02.1", "02.2", "02.4", "07.1"]
objectives:
  - "Reconstruct the full legislative history of a law or section: every amending law, the bill, the explanatory notes, the committee sessions and protocols, and the Reshumot text."
  - "Query the Knesset's open parliamentary database (OData) to list a law's amendments, bill documents and committee sessions."
  - "Use the Wikisource version history and source box to see how and when a consolidated text changed, and cite a fixed version."
  - "Decide how much weight each kind of legislative material can carry in an argument about purpose."
volatility: implementation
sources:
  - title: "חוק זכות יוצרים, התשס״ח–2007, s. 6 (ויקיטקסט)"
    url: "https://he.wikisource.org/wiki/חוק_זכות_יוצרים"
  - title: "חוק תובענות ייצוגיות, התשס״ו–2006, s. 1 and source box (ויקיטקסט)"
    url: "https://he.wikisource.org/wiki/חוק_תובענות_ייצוגיות"
  - title: "Knesset parliamentary database, OData service ParliamentInfo.svc"
    url: "https://knesset.gov.il/Odata/ParliamentInfo.svc/"
  - title: "הצעת חוק תובענות ייצוגיות לקריאה הראשונה (fs.knesset.gov.il)"
    url: "https://fs.knesset.gov.il//16/law/16_ls1_559693.pdf"
  - title: "חוק תובענות ייצוגיות, ס״ח תשס״ו 264 (Reshumot PDF, fs.knesset.gov.il)"
    url: "https://fs.knesset.gov.il/16/law/16_lsr_299748.pdf"
  - title: "רשומות – משרד המשפטים"
    url: "https://reshumot.justice.gov.il/"
  - title: "ע״א 165/82 קיבוץ חצור נ׳ פקיד שומה רחובות, פ״ד לט(2) 70 (עותק חופשי)"
    url: "https://www.efraty.com/wp-content/uploads/2018/09/khtsvr82.doc"
last_verified: "2026-10-18"
---

# 36.3 · Working with primary sources at scale: legislative history, protocols and case databases

By the end of this lesson you will be able to rebuild the whole legislative history of an Israeli law from free sources: every amendment, the bill and its explanatory notes, every committee session and its protocol, and the official Reshumot text. You will query the Knesset's open database directly, read the version history of the Wikisource text, and record it all on one worksheet. In module 2 you looked up one bill's explanatory notes ([02.4](../module-02/lesson-04.md)); here you work through dozens of documents systematically.

## Why it matters

A seminar paper earns much of its originality from primary sources that others have not read closely. Most laws have a paper trail that almost nobody opens after enactment: a private member's bill that started it, a government version, a subcommittee that met eighteen times, protocols where the Ministry of Justice, business groups and NGOs argued over each section, and a final text that differs from the bill in ways the explanatory notes never mention. Reading that trail lets you show why a section says what it says, which purpose the Knesset actually debated, and which compromise produced an ambiguity.

The same skill matters for interpretation. Israeli courts read statutes by their purpose, and the subjective purpose comes from the legislative history ([02.4](../module-02/lesson-04.md), [07.4](../module-07/lesson-04.md)). A reconstruction that covers every stage is stronger than a single quotation from the explanatory notes, and it protects you from relying on a sentence that a later committee changed.

## Key terms

| עברית | Transliteration | English |
|---|---|---|
| היסטוריה חקיקתית | Historia chakikatit | Legislative history |
| הצעת חוק לדיון מוקדם | Hatza'at chok le-diyun mukdam | Private member's bill at the preliminary reading |
| הצעת חוק לקריאה הראשונה | Hatza'at chok la-kri'a ha-rishona | Bill for first reading (with explanatory notes) |
| דברי הסבר | Divrei hesber | Explanatory notes |
| פרוטוקול ועדה | Protokol va'ada | Committee protocol (transcript) |
| ועדת משנה | Va'adat mishne | Subcommittee |
| דברי הכנסת | Divrei ha-Knesset | Knesset plenary record |
| ספר החוקים / רשומות | Sefer ha-chukim / Reshumot | Statute book / official gazette |
| גרסה קבועה | Girsa kvu'a | Fixed (permanent) version of a web page |

## The law

### You may copy the primary sources freely (Copyright Law s. 6)

> על אף הוראות סעיף 4, לא תהא זכות יוצרים בחוקים, בתקנות, בדברי הכנסת ובהחלטות שיפוטיות של בית משפט או של כל רשות שלטונית המפעילה סמכות שפיטה על פי דין.

*Gist:* There is no copyright in statutes, regulations, Knesset proceedings, or judicial decisions of a court or any authority exercising judicial power by law. ([Copyright Law 2007 s. 6](https://he.wikisource.org/wiki/חוק_זכות_יוצרים)) You may download, store, quote at length and reproduce these texts in an appendix. Articles and books about them are a different matter (lesson [21.2](../module-21/lesson-02.md)). Section 6 does not override the publication bans in the Courts Law (lesson [36.2](lesson-02.md)).

### The object of study: a purpose clause (Class Actions Law s. 1)

> מטרתו של חוק זה לקבוע כללים אחידים לענין הגשה וניהול של תובענות ייצוגיות, לשם שיפור ההגנה על זכויות, ובכך לקדם בפרט את אלה: (1) מימוש זכות הגישה לבית המשפט, לרבות לסוגי אוכלוסיה המתקשים לפנות לבית המשפט כיחידים; (2) אכיפת הדין והרתעה מפני הפרתו; (3) מתן סעד הולם לנפגעים מהפרת הדין; (4) ניהול יעיל, הוגן וממצה של תביעות.

*Gist:* The Law's stated purposes are access to court (especially for groups that find it hard to sue alone), enforcement and deterrence, adequate relief for those harmed, and efficient, fair and complete handling of claims. ([Class Actions Law 2006 s. 1](https://he.wikisource.org/wiki/חוק_תובענות_ייצוגיות)) This lesson uses the Class Actions Law as its running example because its paper trail is complete online and module 33 taught its substance. A purpose clause tells you what the Knesset finally said; the legislative history tells you how it got there and which purpose won where they conflicted.

## Leading cases

### ע"א 165/82 קיבוץ חצור נ' פקיד שומה רחובות, פ"ד לט(2) 70 (1985)

Briefed in lesson [02.4](../module-02/lesson-04.md). For this lesson the point is one sentence of method: purpose is learned from the law itself, its structure, the problem it was meant to solve and its legislative history. Why it matters: the legislative history is a legitimate source of purpose, but one among several; your reconstruction supports an argument, it does not end it. Free copy: [efraty.com (Word file)](https://www.efraty.com/wp-content/uploads/2018/09/khtsvr82.doc).

### Key text: the paper trail of the Class Actions Law (checked 2026-10-18)

The Knesset's open database lists, for the bill that became the Class Actions Law (bill record 74972), four documents: the bill for the preliminary reading, the bill for first reading with its explanatory notes, an extract from the plenary record, and the law as published in Sefer HaChukim 5766 p. 264 (12.3.2006). It also lists 21 committee sessions on the bill between 20.4.2005 and 1.3.2006: 18 in the subcommittee set up to discuss it (ועדת המשנה לדיון בהצעת חוק תובענות ייצוגיות) and 3 in the Constitution, Law and Justice Committee, each with a protocol file. The law has 17 linked records: the original law and 16 amending laws. Why it matters: this is the scale of material behind one ordinary law. A paper that reads the first-reading notes and the final text has read two documents out of more than twenty. [Bill for first reading (PDF)](https://fs.knesset.gov.il//16/law/16_ls1_559693.pdf); [the law in Reshumot (PDF)](https://fs.knesset.gov.il/16/law/16_lsr_299748.pdf).

## How it works in practice

### The four free sources and what each gives you

| Source | What you get | Status | Use it for |
|---|---|---|---|
| [Wikisource](https://he.wikisource.org/wiki/חוק_תובענות_ייצוגיות) (ספר החוקים הפתוח) | Consolidated text; a source box listing every amending law with a link to its Reshumot PDF; a link (Knesset icon) to the law's page in the Knesset database; per-section amendment years | Unofficial (lesson [02.1](../module-02/lesson-01.md)) | The map: which amendments exist, and their Reshumot pages |
| Wikisource version history | Every edit to the consolidated page, with date and a fixed link to each version | Unofficial | What the consolidated text said on a past date; citing a fixed version |
| [Knesset OData service](https://knesset.gov.il/Odata/ParliamentInfo.svc/) | The Knesset's open parliamentary database as data: laws, bills, bill documents, committee sessions and their protocol files | Official, open, no login; also listed on data.gov.il | Listing every document at once instead of clicking page by page |
| Reshumot | The official gazette: Sefer HaChukim (laws), Hatza'ot Chok (bills), Kovetz HaTakanot (regulations) | Official; prevails over every other version | The exact wording you quote |

The Knesset's own website pages (the National Legislation Database and committee pages) show the same material with a friendlier interface, but they block automated access; the course could not test them on 2026-10-18. The Ministry of Justice's [Reshumot site](https://reshumot.justice.gov.il/) opened, but its search runs in the browser and was not tested. The Reshumot PDFs of each law are also linked from the Wikisource source box and the OData records, and those links were opened.

### Step 1: the map from Wikisource

Open the law on Wikisource. The source box (מקור) lists the original publication and every amending law in date order, each linked to its Reshumot PDF on fs.knesset.gov.il. The small Knesset icon links to the law's database page; the number at the end of that link is the law's ID in the Knesset database (for the Class Actions Law, 2000026). Copy the list into the worksheet.

### Step 2: the version history

Click the "גרסאות קודמות" tab (View history) on the Wikisource page. Each line is one edit with a date; clicking a date opens the page as it was then, with a fixed address containing `oldid=`. Use it to:

- see when an amendment was merged into the consolidated text (and whether it was merged late);
- read the text as it stood on a past date (then confirm against Reshumot);
- cite a fixed version in a footnote when the live page may change ("נוסח ויקיטקסט מיום …").

For the Class Actions Law the history showed edits on 17.8.2026, 28.7.2026, 4.2.2026 and earlier when checked.

### Step 3: everything about the law in the Knesset's open database

The OData service answers simple web addresses with data. You can paste each address into a browser (add `$format=json` for readable output) or use `curl`. The tables you need:

| Table | What it holds | Key field |
|---|---|---|
| `KNS_IsraelLaw` | One row per law in force or repealed | `IsraelLawID` |
| `KNS_LawBinding` | Links a law to its original and amending laws (`BindingTypeDesc`: מקורי / מתקן) | `IsraelLawID`, `LawID` |
| `KNS_Bill` | One row per bill; `LawID` above is the bill's `BillID` | `BillID` |
| `KNS_DocumentBill` | The bill's documents: preliminary-reading bill, first-reading bill, plenary extract, Reshumot | `BillID` |
| `KNS_CmtSessionItem` | Which committee sessions discussed the bill | `ItemID` (the bill's ID) |
| `KNS_CommitteeSession` | Date and committee of each session | `CommitteeSessionID` |
| `KNS_DocumentCommitteeSession` | The protocol file of each session | `CommitteeSessionID` |

The Class Actions Law, step by step (checked 2026-10-18):

```bash
# 1. Find the law's ID (startswith works with Hebrew; percent-encode it when using curl)
curl -g "https://knesset.gov.il/Odata/ParliamentInfo.svc/KNS_IsraelLaw?\$filter=startswith(Name,'%D7%97%D7%95%D7%A7%20%D7%AA%D7%95%D7%91%D7%A2%D7%A0%D7%95%D7%AA')&\$format=json"

# 2. The original law and every amending law
curl -g "https://knesset.gov.il/Odata/ParliamentInfo.svc/KNS_LawBinding?\$filter=IsraelLawID%20eq%202000026&\$format=json"

# 3. The original bill and its documents
curl -g "https://knesset.gov.il/Odata/ParliamentInfo.svc/KNS_Bill(74972)?\$format=json"
curl -g "https://knesset.gov.il/Odata/ParliamentInfo.svc/KNS_DocumentBill?\$filter=BillID%20eq%2074972&\$format=json"

# 4. Committee sessions on the bill, then the date and protocol of one session
curl -g "https://knesset.gov.il/Odata/ParliamentInfo.svc/KNS_CmtSessionItem?\$filter=ItemID%20eq%2074972&\$format=json"
curl -g "https://knesset.gov.il/Odata/ParliamentInfo.svc/KNS_CommitteeSession(98527)?\$format=json"
curl -g "https://knesset.gov.il/Odata/ParliamentInfo.svc/KNS_DocumentCommitteeSession?\$filter=CommitteeSessionID%20eq%2098527&\$format=json"
```

In a browser you can type the Hebrew directly: `…/KNS_IsraelLaw?$filter=startswith(Name,'חוק תובענות')&$format=json`. In PowerShell, use `curl.exe` and single quotes. The output is JSON; each document row has a `FilePath` you can open. Hebrew in the raw output appears as `ח…` escapes; a browser or any JSON viewer shows it as Hebrew.

### Step 4: read in the right order

1. **The final text in Reshumot**, for the exact words.
2. **The first-reading bill and its explanatory notes**, for the stated purpose and the original wording.
3. **Compare** the bill with the final text, section by section. Every change is a question: which session produced it, and why?
4. **The protocols** of the sessions that discussed the sections you care about. Search each file for the section number and key words; you rarely need to read all of them in full.
5. **The plenary extract**, for the second and third readings (usually short).
6. **Each amending law** that touched your section, with its own bill and notes.

### Step 5: weigh what you found

| Material | Weight in an argument about purpose |
|---|---|
| Statute text and structure | Highest; always first |
| Explanatory notes of the bill as passed at first reading | Strong evidence of the proposers' purpose, weaker where the committee later changed the section |
| Committee protocols: the chair's summary, the legal adviser's explanation of a change, an agreed amendment | Good evidence of why a change was made |
| One member's or one lobby's statement in committee | Evidence of a view, not of the Knesset's intent |
| Plenary speeches | Context; rarely decisive |
| Later explanatory notes describing the earlier law | The later Knesset's reading, useful but not the original purpose |

### Case databases at scale

The same discipline applies to rulings: define the search, record it, and keep every result. Use the free-text and case-number searches on Net HaMishpat and the Supreme Court site (lesson [02.2](../module-02/lesson-02.md); the Supreme Court decisions site was unreachable from the course's checker on 2026-10-18, so test it in a browser), and the Class Actions Registry for class actions (lesson [33.1](../module-33/lesson-01.md)). Keep a search log: date, site, exact query, number of results, how many you read.

## Worked example

Wasim Khatib, a student from Sakhnin, writes his seminar paper on whether the access-to-court purpose (s. 1(1) of the Class Actions Law) shaped the Law's design.

1. **Map.** Wikisource source box: the original law (ס"ח תשס"ו 264) and a long list of amendments; the Knesset link gives ID 2000026.
2. **OData.** `KNS_LawBinding` returns 17 rows (1 original, 16 amending). `KNS_DocumentBill` for bill 74972 returns four documents. `KNS_CmtSessionItem` returns 21 sessions, 18 in the subcommittee and 3 in the full committee.
3. **Compare.** He puts the first-reading bill's s. 1 next to the final s. 1 in a two-column table and marks each difference in wording.
4. **Protocols.** He searches the 21 protocol files for "גישה לבית המשפט" and "סעיף 1", and reads in full only the sessions where s. 1 or the class definition was debated.
5. **Weigh.** He finds a legal adviser's explanation of a change in one session and quotes it; a business representative's objection in another session he cites as a view, not as the purpose.
6. **Record.** Every document goes on the [legislative-history worksheet](../../templates/legislative-history-worksheet.md) with its date, file address and pinpoint, and every search goes in the search log.
7. **Neutrality.** The paper reports the arguments for a broad class action (access, deterrence) and for a narrow one (burden on businesses, meritless claims) as the protocols record them, before arguing.

## Do it yourself

### You need

- A law relevant to your seminar question (or the Class Actions Law if you have none yet).
- A browser; optionally `curl` (built into Windows 10 and later, macOS and Linux).
- The [legislative-history worksheet](../../templates/legislative-history-worksheet.md).
- 120 minutes.

### Steps

1. Open the law on Wikisource; copy the source box into part A of the worksheet and note the Knesset ID from the Knesset icon link (10 minutes).
2. Open the version history; note the date of the latest edit and the fixed link of the version you are working from (10 minutes).
3. Query `KNS_LawBinding` with the law's ID; list the original and amending laws (15 minutes).
4. For the original bill (and one amending bill that touched your section), query `KNS_DocumentBill`; open the first-reading bill and copy the explanatory note on your section (20 minutes).
5. Query `KNS_CmtSessionItem` for the bill; list every session with its date and committee; open the protocols of the two sessions most likely to discuss your section and search them (40 minutes).
6. Compare the bill and the final text of your section; record each change and, where you found it, the session that explains it (15 minutes).
7. Fill in the weight column and write a three-sentence summary of what the history shows (10 minutes).

### Template

[Legislative-history worksheet](../../templates/legislative-history-worksheet.md), parts A to D.

### How you know it worked

- The number of amending laws on your worksheet matches the Wikisource source box and the OData result; if not, you found the missing one.
- Every change between bill and final text is either explained by a protocol or marked "not explained".
- Each entry has a file address and a pinpoint (page or speaker and time) that someone else could open.
- Your summary distinguishes what the Knesset decided from what individual speakers said.

### Self-check

- [ ] I quote the wording from Reshumot, not from Wikisource.
- [ ] I recorded which version of the Wikisource page I used.
- [ ] I read the protocols where my section was discussed, not only the explanatory notes.
- [ ] I gave a lobby's or one member's statement the weight of a view, not of the Knesset's intent.
- [ ] My search log lists every query I ran.

## Without a lawyer

### Can you do this yourself?

Partly. This is a research lesson, not a filing lesson, but it is one of the most useful research skills for your own case. When a statute's words can bear two meanings and the case law has not settled the point, a short, accurate legislative-history paragraph is often the best argument a self-represented party can make for a purposive reading.

### Where and how

Rebuild the history of the one section in dispute (steps 1, 3, 4 and 6 above). In your claim, defence, appeal or summations, write one paragraph: the wording of the bill, the change made in committee and the reason recorded in the protocol, with exact citations; attach the relevant pages as an exhibit if the court's rules allow. Quote the explanatory notes and protocols in Hebrew, exactly, with the file and page. Pair it with the objective purpose (the system's values) as lesson 02.4 recommends. Free help with the substance: [where to get help](../../references/where-to-get-help.md).

### Stop and get a lawyer when

The other side relies on a different reading of the same history and the stakes are high, the history is long and contradictory (many amendments, conflicting protocols), or your argument would require the court to depart from a Supreme Court ruling on the section.

## What goes wrong

| Mistake | Consequence | How to fix | How to avoid |
|---|---|---|---|
| Quoting the explanatory notes for a section the committee later rewrote | Your "purpose" belongs to a text that was not enacted | Compare bill and final text; find the session that changed it | Always do step 4.3 (compare) before quoting |
| Treating one member's speech as the Knesset's intent | Little or no weight; looks like cherry-picking | Recast it as one view; look for the chair's or adviser's explanation | Use the weight table |
| Missing an amendment | Your history and text are out of date | Count amendments in three places (Wikisource, OData, Reshumot) | Fill in part A completely |
| Citing the live Wikisource page | The page changes after you cite it | Cite Reshumot; give the fixed version link | Note the `oldid` version you used |
| No search log | Cannot show your method; cannot repeat it | Rebuild the log from browser history | Log every query as you run it |

## Review

- A law's paper trail includes amending laws, bills, explanatory notes, many committee protocols, plenary extracts and the Reshumot text; the Class Actions Law alone has 21 committee sessions and 16 amending laws on record.
- Wikisource gives the map (source box, Knesset ID) and the version history; Reshumot gives the authoritative wording.
- The Knesset's open OData service lists every amendment, bill document, committee session and protocol file directly.
- Compare the bill with the final text before quoting the explanatory notes, and weigh committee material by who said it.
- There is no copyright in statutes, Knesset proceedings or judicial decisions (Copyright Law s. 6), so you may reproduce them in appendices.

### Learn more

- [Knesset OData service](https://knesset.gov.il/Odata/ParliamentInfo.svc/) (FREE-FULL, 30 minutes): open the list of tables and run the Class Actions Law queries above in a browser. Fallback: the Knesset's database description page `https://main.knesset.gov.il/Activity/Info/Pages/Databases.aspx` (blocks automated access; open in a browser).
