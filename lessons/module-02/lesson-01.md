---
id: "02.1"
module: 2
minutes: 30
practice_minutes: 45
prerequisites: ["01.3"]
objectives:
  - "Find the current consolidated text of any Israeli statute or regulation for free and confirm it against the official publication."
  - "Decide which version of a provision applied on a given past date."
  - "Identify amendments, temporary provisions and court rulings that change how a printed text must be read."
volatility: implementation
sources:
  - title: "פקודת סדרי השלטון והמשפט, התש\"ח-1948 (ויקיטקסט)"
    url: "https://he.wikisource.org/wiki/פקודת_סדרי_השלטון_והמשפט"
  - title: "חוק הפרשנות, התשמ\"א-1981 (ויקיטקסט)"
    url: "https://he.wikisource.org/wiki/חוק_הפרשנות"
  - title: "ויקיטקסט: ספר החוקים הפתוח"
    url: "https://he.wikisource.org/wiki/ויקיטקסט:ספר_החוקים_הפתוח"
  - title: "מאגר החקיקה הלאומי, הכנסת"
    url: "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawHome.aspx"
  - title: "חוק-יסוד: השפיטה (ויקיטקסט), כולל הערת המערכת על בג\"ץ 5658/23"
    url: "https://he.wikisource.org/wiki/חוק-יסוד:_השפיטה"
  - title: "HCJ 5658/23 Movement for Quality Government v. Knesset (Versa, English)"
    url: "https://versa.cardozo.yu.edu/opinions/movement-quality-government-israel-v-knesset"
last_verified: "2026-10-16"
---

# 02.1 · Finding the current text of a law for free

By the end of this lesson you will be able to pull up the current text of any Israeli law or regulation without paying for a database, check it against the official gazette, and say with confidence which version of a section governed your situation on a particular date.

## Why it matters

Israeli statutes are amended constantly. The Penal Law 1977 has been amended well over a hundred times; the Civil Procedure Regulations 2018 were amended three times in 2019, before they even came into force. The official gazette, Reshumot (רשומות), publishes each law when it is enacted and then publishes each amendment separately, as a list of instructions ("in section 7, for 'thirty days' substitute…"). Reshumot does not publish an updated full text of a law after each amendment. Nobody hands you the "law as it stands today": you, or someone you trust, must assemble it.

That gap matters in practice. If you quote a deadline from an old printout, a blog post or a PDF of the original law, you may quote a period that was changed years ago. If you rely on the current text for something that happened three years ago, you may apply a rule that did not yet exist. A judge or an official who notices will discount everything else you wrote. This lesson gives you a repeatable routine: find the consolidated text, check where it came from, check the date, check for later changes.

## Key terms

| עברית | Transliteration | English |
|---|---|---|
| רשומות | Reshumot | The official gazette in which laws, regulations and notices are published |
| ספר החוקים (ס"ח) | Sefer HaChukim | The Reshumot series for Knesset laws |
| קובץ התקנות (ק"ת) | Kovetz HaTakanot | The Reshumot series for regulations and other secondary legislation |
| הצעות חוק (ה"ח) | Hatza'ot Chok | The Reshumot series for government and committee bills |
| ילקוט הפרסומים (י"פ) | Yalkut HaPirsumim | The Reshumot series for official notices and appointments |
| נוסח משולב | Nusach meshulav | A consolidated version of an Israeli law, approved by the Knesset Constitution Committee and published as such |
| נוסח חדש | Nusach chadash | A new Hebrew version of a Mandate-era law (for example the Evidence Ordinance [New Version]) |
| הוראת שעה | Hora'at sha'ah | A temporary provision that applies only for a set period |
| תיקון עקיף | Tikkun akif | An indirect amendment: a change to law A made inside law B |
| מאגר החקיקה הלאומי | Ma'agar HaChakika HaLeumi | The Knesset's National Legislation Database |

## The law

### When a law takes effect and what proves it

The Law and Administration Ordinance 1948, the State's founding statute on legislation, makes publication in Reshumot the moment a law comes into force and the proof that it was properly made:

> (א) כל פקודה תקבל תוקף ביום פרסומה ברשומות, בלתי אם נקבע בה כי תקבל תוקף בתאריך מוקדם או מאוחר מיום הפרסום.
> (ב) פרסומה של פקודה ברשומות ישמש ראיה כי אותה פקודה נתנה ונחתמה כדין.

*Gist:* A law takes effect on the day it is published in Reshumot unless it sets another date, and its publication there is evidence that it was validly made. ([Law and Administration Ordinance, s. 10, full text](https://he.wikisource.org/wiki/פקודת_סדרי_השלטון_והמשפט))

The practical consequence: the **official** text is the one in Reshumot. Everything else (the Knesset database's page, Wikisource, a commercial database) is a convenience copy. When they disagree, Reshumot wins.

### The exact minute

> שעת תחילת תקפו של חיקוק היא בשעה 00.01 של יום תחילתו.

*Gist:* An enactment takes effect at one minute past midnight on its commencement day. ([Interpretation Law 1981, s. 21](https://he.wikisource.org/wiki/חוק_הפרשנות))

### References are to the law "as it stands when needed"

> אזכור של חיקוק בחיקוק אחר - כוונתו לחיקוק המאוזכר כנוסחו בשעה שנזקקים לו, לרבות הוראות שנוספו בו והוראות שבאו במקומו בחיקוק אחר.

*Gist:* When one law refers to another, it means the other law as amended at the time you need to apply it, including provisions later added or moved elsewhere. ([Interpretation Law 1981, s. 25](https://he.wikisource.org/wiki/חוק_הפרשנות))

So a regulation that says "as defined in the Consumer Protection Law" follows that law's definition as later amended, not as it read when the regulation was made.

### Repeal does not undo the past

> ביטולו של דין אין כוחו יפה - (1) להחיות דבר שלא היה לו תוקף בשעה שהביטול נכנס לתקפו; (2) להשפיע על פעולה קודמת של הדין המבוטל או על מה שנעשה לפיו; (3) להשפיע על זכות או חיוב שלפי הדין המבוטל.

*Gist:* Repealing a law does not revive what had already lapsed, and does not affect things done, or rights and duties that arose, under the repealed law. ([Interpretation Law 1981, s. 22](https://he.wikisource.org/wiki/חוק_הפרשנות))

Together with the specific transition provisions most amending laws contain (usually a section headed "תחולה" or "הוראות מעבר"), s. 22 is why the version that governed **your events** is often not today's version.

### Consolidated and new versions

The Minister of Justice may propose, and the Knesset Constitution Committee may approve, a **consolidated version** of a law that incorporates all its amendments; it is then published in Reshumot and becomes the official text:

> שר המשפטים רשאי להציע לועדת החוקה, חוק ומשפט של הכנסת נוסח משולב של כל חוק שניתן במדינה, לרבות של נוסח חדש לפי סעיף זה; נוסח משולב יכיל את כל השינויים שחלו באותו חוק מכוח חקיקה.

*Gist:* The Minister of Justice may propose to the Constitution Committee a consolidated version of any Israeli law, containing every change made to it by legislation. ([Law and Administration Ordinance, s. 16(ד)](https://he.wikisource.org/wiki/פקודת_סדרי_השלטון_והמשפט))

This is why some laws carry "[נוסח משולב]" in their name (Courts Law [Consolidated Version] 1984, National Insurance Law [Consolidated Version] 1995). Only a handful of laws have had this treatment, and each has been amended again since. For almost everything, an official up-to-date full text simply does not exist.

## Leading cases

### בג"ץ 5658/23 התנועה למען איכות השלטון בישראל נ' הכנסת (1.1.2024)

In July 2023 the Knesset enacted Amendment No. 3 to Basic Law: The Judiciary, adding s. 15(ד1), which barred courts from reviewing the reasonableness of decisions of the Government, the Prime Minister and ministers. On 1 January 2024 a fifteen-justice bench held, by 12 to 3, that the Court may review Basic Laws in rare and extreme cases of excess of constituent power, and, by 8 to 7, that the amendment was void. The decision was, and remains, one of the most contested in Israel's history: the majority held that the Knesset's constituent power has limits and that the amendment struck at core features of the democratic system; the minority held, in different ways, that the Court has no authority to review Basic Laws or that the amendment could be read narrowly and left standing. Module 6 covers the substance and both sides' arguments.

Why it matters for legal research: the amendment was published in Reshumot (ס"ח התשפ"ג 548) and was never repealed by the Knesset. A researcher who reads only the Reshumot text sees s. 15(ד1) as part of the Basic Law. The consolidated text on Wikisource shows it struck through with an editorial note "תיקון מס' 3 בוטל בבג"ץ 5658/23", and lists the ruling among the law's sources. Lesson: the text of a statute can be changed by a court ruling, not only by the Knesset, and a good consolidated source tells you so. The same page also shows Amendment No. 4 (ס"ח התשפ"ה 434), enacted later, which is why the date you check matters. Free text of the Basic Law with the note: [Wikisource, Basic Law: The Judiciary](https://he.wikisource.org/wiki/חוק-יסוד:_השפיטה). The ruling itself is on the Supreme Court's decisions site (file 23056580.V31; see lesson 02.2 for how to search it), and in English translation on [Versa](https://versa.cardozo.yu.edu/opinions/movement-quality-government-israel-v-knesset).

## How it works in practice

### The three free sources and what each is good for

| Source | What you get | Status | Use it for |
|---|---|---|---|
| [Open Law Book on Wikisource](https://he.wikisource.org/wiki/ויקיטקסט:ספר_החוקים_הפתוח) (ספר החוקים הפתוח) | Consolidated, searchable text of about 6,000 laws and regulations, with each section marked with the years it was amended and a source box listing every Reshumot publication | Unofficial; volunteers merge each amendment by hand. Its own disclaimer: "אין לראות בנוסח ייעוץ משפטי או קביעה כי הנוסח כאן הוא הנוסח המלא, הנכון והמעודכן." | Reading the law as it stands now; seeing at a glance which sections changed and when |
| [Knesset National Legislation Database](https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawHome.aspx) (מאגר החקיקה הלאומי) | One page per law listing the original law and every amendment, each with its Reshumot reference, the bill, explanatory notes and committee protocols | Official Knesset site; the Knesset itself states that in case of conflict the official publications (Reshumot) prevail. It does not generally give a consolidated full text | Checking that no amendment is missing; reading the bill's explanatory notes (דברי הסבר) when you need the purpose of a provision |
| Reshumot PDFs (linked from the Knesset page of each law and from the Wikisource source box) | The scanned official gazette pages | Official | Confirming the exact wording of a provision that matters to your case |

Neither Nevo nor Takdin is needed for statutes. Both are paid databases; the course does not rely on them.

### Reading a Wikisource law page

1. At the top, the title includes the Hebrew and Gregorian year of enactment: "חוק הפרשנות, התשמ"א-1981".
2. Below it is a source box (מקור) listing the original publication (for example "ס"ח תשמ"א, 302") and every amending law with its year and page. This is the law's amendment history in one line.
3. Each section heading shows, in brackets, the years in which that section was amended: "@ 1. תחולת החוק וסייגיה (תיקון: תשנ"ד)". A section with no bracket has not been amended since enactment.
4. Notes in double brackets, such as "((הנוסח שולב בחוק החוזים (חלק כללי)…))", tell you a provision was moved, repealed or affected by another law or a ruling.
5. The project keeps a public list of recently updated laws ([עדכונים אחרונים](https://he.wikisource.org/wiki/ויקיטקסט:ספר_החוקים_הפתוח/עדכונים_אחרונים)). If an amendment was published last week, it may not have been merged yet.

### The Knesset database page of a law

Search by the law's name. The law's page lists, in date order, the original law and each amendment, with the Reshumot booklet and page, and links to the bill and committee protocols. Use it to count: if Wikisource's source box lists 12 amending laws and the Knesset page lists 13, find the missing one before you rely on the text.

> [!NOTE]
> The Knesset site blocks automated access, so the course could not test its pages mechanically on 2026-10-16. The address above was the database's home page at that date. If it moves, search the Knesset website for "מאגר החקיקה הלאומי".

### Which version applied on a past date

1. Find the date that matters: when the contract was signed, when the act happened, when the decision was made.
2. On the Wikisource page, look at the section's amendment years. If none is later than your date, the current text applied.
3. If an amendment is later, open that amending law (from the source box or the Knesset page) and read its commencement and transition sections (תחילה, תחולה, הוראות מעבר). Some amendments apply only to contracts made, offences committed or proceedings opened after commencement; some apply to pending matters.
4. Reconstruct the earlier wording from the amending law: it states what was replaced.

### Regulations, orders and municipal by-laws

Regulations (תקנות) live in Kovetz HaTakanot and are on Wikisource too, usually under their full name. Municipal by-laws (חוקי עזר) are published in a sub-series (ק"ת חש"ם) and are often easiest to find on the local authority's website. Always check that the regulation you are reading was made under the law you think it was: the opening paragraph names the enabling section ("בתוקף סמכותי לפי סעיפים 108 ו-109 לחוק בתי המשפט").

## Worked example

Olga Petrenko, a pharmacist in Ashdod, wrote to her municipality on 3 March 2026 asking for a residents' parking permit for her street. By 30 April she had no answer. A neighbour told her "the city has 30 days to answer, otherwise it's automatically approved". She wants to check before she writes again.

1. **Find the law.** A web search for "חובת מתן תשובה רשות 45 ימים" leads to the Decisions and Reasons Law. On Wikisource, the page is [חוק לתיקון סדרי המינהל (החלטות והנמקות), תשי"ט-1958](https://he.wikisource.org/wiki/חוק_לתיקון_סדרי_המינהל_%28החלטות_והנמקות%29).
2. **Read the source box.** Original law ס"ח תשי"ט 7; amendments in תשכ"ט, תשנ"ד, and two in תשנ"ה. Nothing after 1995.
3. **Check the Knesset page** for the same law: the same five entries. Nothing missing, so the Wikisource text is the current text, and it was the text in March 2026.
4. **Read the section.** Section 2(א): the official must decide and answer in writing "בהקדם, אך לא יאוחר מארבעים וחמישה ימים מיום קבלת הבקשה". Section 6(ב): if no answer is given within three months, that is treated as a refusal without reasons.
5. **Result.** The neighbour was wrong twice: the period is 45 days, not 30, and silence counts as a **refusal** after three months, not an approval. Olga's next letter (lesson 02.7) cites s. 2(א) and asks for a decision. How to count the 45 days exactly is in lesson 02.4.

## Do it yourself

### You need

- A computer or phone with internet access.
- A legal question from your own life that turns on a statute: a deadline, a right, a definition. If you have none, use: "How long does a public authority have to answer a freedom-of-information request?"
- 45 minutes.

### Steps

1. Write down the question and the date that matters.
2. Find the law's name (web search, Kol-Zchut, or a ruling that mentions it).
3. Open the law on Wikisource. Copy the title line and the source box into your notes.
4. Find the section that answers your question. Copy it word for word in Hebrew.
5. Note the section's amendment years.
6. Open the Knesset database page for the same law. Compare its list of amendments with the Wikisource source box. Write down any difference.
7. If any amendment to your section is later than your date, open the amending law and read its commencement and transition provisions. Write down which version applied.
8. Open the Reshumot PDF for the latest amendment to your section and check that the wording you copied matches.
9. Write a three-line answer: the rule, the source (section and law), and the version check you did.

### Template

None. Lesson 02.6 turns these notes into a research memo using [the research memo template](../../templates/research-memo.md).

### How you know it worked

You can state the rule, quote the Hebrew section, name the Reshumot publication of the latest amendment, and explain in one sentence why that version applies to your date. Someone else following your notes reaches the same text.

### Self-check

- [ ] I copied the section word for word, not from memory or a summary.
- [ ] I compared the amendment lists in two sources.
- [ ] I checked the transition provisions of any amendment later than my date.
- [ ] I looked at the official Reshumot text for the wording that matters.
- [ ] My answer names the law with its year.

## Without a lawyer

### Can you do this yourself?

Yes. Reading the law is open to everyone and is the first thing any self-represented person must do. The limit is s. 20 of the Bar Association Law (lesson 01.1): researching the law and telling **someone else** what it means for them, as an occupation or for payment, is "ייעוץ וחיווי דעת משפטיים" reserved to lawyers. Research for your own matters only.

### Where and how

- Consolidated text: [Open Law Book](https://he.wikisource.org/wiki/ספר_החוקים_הפתוח) (alphabetical list).
- Amendment history and bills: [Knesset National Legislation Database](https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawHome.aspx).
- Plain-language explanation of the same law: [Kol-Zchut](https://www.kolzchut.org.il), which usually links to the statute. Use it to find the law, not as the law.
- No fee, no registration, no deadline.

### Stop and get a lawyer when

- The answer depends on transition provisions you cannot reconcile, and a real deadline or large sum turns on it.
- Two sources disagree and you cannot find the Reshumot text.
- The provision has been interpreted by courts in a way that changes its plain meaning (lesson 02.4) and the stakes are high.
- The matter is criminal, or you are already in proceedings and the other side has a lawyer.

## What goes wrong

| Mistake | Consequence | How to fix | How to avoid |
|---|---|---|---|
| Quoting the law from a blog, a news story or an old PDF | You cite a superseded deadline or an amount that changed | Re-check against Wikisource and the Knesset amendment list; send a short correction letter if you already wrote | Always start from a consolidated source and note its amendment years |
| Using today's text for events years ago | You rely on a right or duty that did not yet exist, or miss one that was later repealed | Read the transition provisions of every later amendment to that section | Write the relevant date at the top of your notes before you research |
| Treating Wikisource as official | An unmerged amendment or a typo goes into your claim | Compare with the Reshumot PDF for the wording that matters | Compare amendment counts in two sources every time |
| Missing an indirect amendment | You think a section is unchanged because the law's own amendments do not mention it | Search the Knesset page and the Wikisource source box, where amending laws are listed by name even when their main subject is another law | Look for notes like "(תיקון עקיף…)" and "הנוסח שולב ב…" |
| Ignoring a court ruling that voided or narrowed a provision | You rely on text that has no legal force | Check the source box and editorial notes; search case law (lesson 02.2) | For any provision you rely on heavily, search for rulings that mention it |

## Review

- Reshumot is the official text; it publishes laws and amendments, not updated full texts.
- The Open Law Book on Wikisource gives a free consolidated text with the amendment history of every section; it is unofficial and says so.
- The Knesset National Legislation Database is the official list of amendments and the place to find bills and explanatory notes.
- The version that governs your case depends on your date and on the amending laws' transition provisions; repeal does not undo the past (Interpretation Law s. 22).
- A court ruling can void a provision that still appears in Reshumot, as the 2024 ruling on Amendment No. 3 to Basic Law: The Judiciary shows.

### Learn more

- [Open Law Book project page](https://he.wikisource.org/wiki/ויקיטקסט:ספר_החוקים_הפתוח) (FREE-FULL, 15 minutes): how the volunteers build and update the consolidated texts. Fallback: the [alphabetical list of laws](https://he.wikisource.org/wiki/ספר_החוקים_הפתוח).
