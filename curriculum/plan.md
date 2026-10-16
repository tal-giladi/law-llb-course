# Plan: Israeli Law (LL.B. Level): Self-Study with Practice

Status: approved direction (Tal, 2026-10-16): a new course, separate from `activist-law-course`; plan all four years, write year 1 first.

## 0. Binding rules — read first

1. **The Academy guidelines are binding:** `C:\Users\TalGiladi\OneDrive\repos\tals-academy\docs\new-course-instructions.md`. Read the whole file before writing anything. Where this plan disagrees with it, the guidelines win, except for the approved deviations in §0.1.
2. Then this plan, then `curriculum/build-spec.md` (the per-module instructions for writers).

### 0.1 Decisions by Tal (2026-10-16)

| Decision | Value |
|---|---|
| Repo | `tal-giladi/law-llb-course`, public |
| Language | My choice for accuracy: English prose; Israeli statutes, rulings, forms and templates quoted in Hebrew (same as the activist course, which Tal approved on 2026-10-12). This is the one deviation from "English only". |
| Relation to activist course | Standalone. No links to `activist-law-course`; some overlap is accepted. |
| Scope now | Full plan + year 1 (modules 1–12). Years 2–4 later. |
| Practice | Besides the university curriculum, as many practice sections as possible, so a learner can act for themselves without a lawyer wherever Israeli law allows it. |

## 1. Purpose and honest positioning

The course mirrors the Israeli LL.B. course by course (Tel Aviv University's program is the spine, checked against HUJI, Bar-Ilan and Haifa), and the subjects of the Israel Bar exam. On top of the academic content it adds a **practice track**: in every lesson, and in a dedicated lab at the end of every course, the learner does the thing a self-represented person actually does — reads the contract, sends the notice, files the claim, writes the will, opens the execution file, appeals the decision.

What it is not:
- Not a degree. It does not qualify anyone to sit the Bar exam (that needs a recognised LL.B., a 12-month supervised internship (התמחות, Bar Association Law s. 35) and the written Bar exam) or to practise law.
- Not legal advice.

The legal limit every learner must know (taught in lesson 01.1 and repeated in every "Without a lawyer" section):
- Anyone may act **for themselves** in any Israeli court or office (individuals; a company usually needs a lawyer — check per forum).
- Representing others, drafting legal documents for others, and giving legal advice as an occupation are reserved to lawyers (Bar Association Law 1961, s. 20). The course trains people to handle their own affairs and those of no one else.

Certificate disclaimer (exact wording): "This certificate confirms completion of the online course Israeli Law (LL.B. Level): Self-Study with Practice. It is not a law degree, does not qualify the holder to sit the Bar exam or to practise law, and is not issued by any university or the Israel Bar Association."

## 2. Target learner

Adults in Israel with no legal background who want a university-level understanding of Israeli law and the ability to run their own legal affairs: contracts, consumer and rental disputes, small claims, employment, family, inheritance, property, tax, dealings with authorities, and being a victim, witness or suspect. Also useful for pre-law students and people preparing to study law. Reads Hebrew and English.

## 3. Language

- English prose. Hebrew legal terms in the Key terms table (`| עברית | Transliteration | English |`).
- Statutes and rulings are quoted in the original Hebrew, short, in a blockquote, followed by `*Gist:*` and one English sentence, and a link to the free full text. Never translate a statute in full.
- Forms and templates are in Hebrew, because that is what is filed; explanations around them are in English.

## 4. Sources and freshness

- Primary sources only for legal claims: the Knesset legislation database, the official gazette (Reshumot), gov.il, the Judiciary's site (supreme.court.gov.il, court decisions on gov.il / Net HaMishpat), Wikisource for statute text, Kol-Zchut for practice (mark ⚠️ manual check: it blocks bots). Never cite paid Nevo case pages.
- Every lesson has `last_verified`. Fees, ceilings and deadlines are never written as bare facts: they live in `references/current-numbers.md` with a source and date.
- External free courses (Open University, campus.gov.il, university YouTube lectures, Coursera audit) may be assigned in "Learn more" with tag FREE-FULL or FREE-AUDIT, minutes, deep link and fallback.

## 5. Architecture

Four years, like the LL.B. (TAU: 141 ש"ס, 3.5 years). **One module = one university course.** Each year ends with a **Clinic module** that is all practice: real self-representation tasks in the learner's own affairs, the home-study replacement for law clinics.

Every module has:
- 6–10 lessons; the **last one or two are "Practice lab" lessons** (`NN · Practice lab: …`), entirely hands-on;
- a lesson quiz per lesson, a module quiz (10 scenario questions), a project in `projects/`, a question bank in `curriculum/question-bank/`.

### Year 1 — Foundations (TAU year 1, all mandatory, 41–43 ש"ס) — WRITE NOW

| # | Module (course) | University match | Practice labs (end of module) |
|---|---|---|---|
| 1 | Israeli Law: Sources, Courts and the Legal System | TAU משפט ישראלי 1411-9103; HUJI 62962 | Find the right forum for a real dispute; can you act alone there? |
| 2 | Legal Research and Writing | TAU ניתוח מקורות וכתיבה משפטית 1411-9106; HUJI 62121 | Research memo; formal letter to an authority or company |
| 3 | Contract Law | TAU דיני חוזים 1411-9101 | Mark up a real rental/service contract; notice of breach and cancellation; withdraw from a consumer transaction |
| 4 | Tort Law | TAU דיני נזיקין 1411-9104 | Tort demand letter; insurance claim and road-accident claim checklist |
| 5 | Criminal Law | TAU דיני עונשין 1411-9109 | Victim's complaint and victims' rights; appeal against closing a file; private criminal complaint |
| 6 | Constitutional Law | TAU משפט חוקתי 1411-9102; HUJI 62110 | Proportionality analysis; self-represented HCJ petition (dry run) |
| 7 | Legislation and Regulation | TAU חקיקה ורגולציה 1411-9107 | Comment on a draft bill or regulation; request to a Knesset committee |
| 8 | Introduction to Procedure | TAU פרוצדורה 1411-9110 | Pre-action letter; open a case on Net HaMishpat (dry run); open an execution file |
| 9 | Legal Theory | TAU תיאוריה משפטית 1411-9111 | Read one ruling through four theories |
| 10 | Introduction to Jewish Law (and religious law in Israel) | TAU מבוא למשפט עברי 1411-9108 / מבוא למשפט מוסלמי 9113 | Find Jewish-law reasoning in a Supreme Court ruling; rabbinical-court procedure for a self-represented party |
| 11 | Law, Economics and Society | TAU פוליטיקה, כלכלה, חברה 1411-9105 | Decide whether to sue: expected value, costs and risk |
| 12 | Clinic I: Your Everyday Civil Dispute, Start to Finish | Clinic / practical workshop | Whole small-claims case file, hearing day, enforcement |

#### Year 1 lessons

**Module 1 — Israeli Law: Sources, Courts and the Legal System**
1. What this course can and cannot make you (s. 20, acting for yourself)
2. Israel's mixed legal system: Ottoman, Mandate, common law, codification, Foundations of Law Act 1980
3. Sources of law and the hierarchy of norms
4. The court map: general courts, tribunals, labour courts, religious courts, jurisdiction
5. Precedent: Basic Law: The Judiciary s. 20 and how to read a ruling
6. The legal system's people: judges, registrars, lawyers, prosecution, Public Defender, Legal Aid
7. Practice lab: map your dispute to the right forum and decide if you can act alone

**Module 2 — Legal Research and Writing**
1. Finding the current text of a law for free
2. Finding case law for free
3. Briefing a ruling
4. Statutory interpretation: language, purpose and the Barak method
5. The uniform citation rules (כללי האזכור האחיד)
6. Practice lab: a research memo
7. Practice lab: a formal letter to an authority or company

**Module 3 — Contract Law**
1. What a contract is: Contracts (General Part) Law 1973 and the codification
2. Offer, acceptance and certainty; preliminary agreements and זיכרון דברים
3. Form requirements: land transactions (s. 8 Land Law), guarantees, gifts
4. Good faith in negotiation and performance (ss. 12 and 39)
5. Defects in formation: mistake, deceit, duress, exploitation
6. Illegal contracts, standard contracts and consumer contracts
7. Interpretation (s. 25) and implied terms
8. Breach and remedies: Contracts (Remedies for Breach) Law 1970
9. Practice lab: review and negotiate a rental or service contract
10. Practice lab: notice of breach, cancellation, and consumer withdrawal

**Module 4 — Tort Law**
1. The Civil Wrongs Ordinance: structure and the list of torts
2. Negligence: duty of care, breach, the reasonable person
3. Causation, remoteness and damage
4. Specific torts: trespass, nuisance, false imprisonment, breach of statutory duty
5. Defences, contributory negligence and limitation
6. Road accidents: the no-fault compensation law
7. Liability of the state, employers and professionals; insurance
8. Practice lab: a tort demand letter and the insurance claim
9. Practice lab: small claim for property damage (dry run)

**Module 5 — Criminal Law**
1. Principles: legality, culpability, the general part of the Penal Law 1977
2. The elements of an offence: conduct, circumstances, result, mental element
3. Attempt, accomplices and inchoate offences
4. Defences: self-defence, necessity, duress, mistake, de minimis
5. Core offences: against the person, property and public order
6. Sentencing: structuring discretion (Amendment 113)
7. Practice lab: filing a police complaint as a victim and using the Crime Victims' Rights Law
8. Practice lab: appealing a decision to close a file; the private criminal complaint (קובלנה פלילית)

**Module 6 — Constitutional Law**
1. A constitution built from Basic Laws: the constituent-authority debate
2. The constitutional revolution: Bank Mizrahi and judicial review
3. The limitation clause and proportionality
4. Rights: dignity, liberty, equality, expression, religion, property, occupation
5. Institutions: Knesset, Government, President, State Comptroller
6. Judicial review, its limits and the 2023–2026 dispute
7. Practice lab: a proportionality analysis of a real law
8. Practice lab: a self-represented HCJ petition (dry run)

**Module 7 — Legislation and Regulation**
1. How a law is made: government bills, private bills, committees
2. Secondary legislation: regulations, orders, directives, and parliamentary approval
3. Regulators and regulatory tools
4. Interpreting legislation and checking validity
5. Practice lab: comment on a draft bill or regulation (תזכירי חוק)
6. Practice lab: write to a Knesset committee and follow the bill

**Module 8 — Introduction to Procedure**
1. Why procedure matters: the Civil Procedure Regulations 2018 and their principles
2. The life of a civil case: pre-action letter, statement of claim, defence, preliminary hearing, trial, judgment
3. Small claims and the magistrates' court
4. Criminal procedure in brief: investigation, indictment, trial
5. Administrative procedure in brief: petitions and appeals
6. Settling out of court: mediation, arbitration, settlement
7. Enforcing a judgment: the Execution Office (הוצאה לפועל)
8. Practice lab: a pre-action letter and opening a case on Net HaMishpat (dry run)
9. Practice lab: opening an execution file for a judgment

**Module 9 — Legal Theory**
1. Natural law
2. Legal positivism: Austin, Kelsen, Hart
3. Dworkin: principles and law as integrity
4. Legal realism and critical theories
5. Rights, justice and the rule of law
6. Practice lab: read one Israeli ruling through four theories

**Module 10 — Introduction to Jewish Law and Religious Law in Israel**
1. Sources and structure of Jewish law (מקורות המשפט העברי)
2. Jewish law in the Israeli legal system: Foundations of Law Act and the courts
3. Personal status: religious courts and their jurisdiction
4. Muslim, Christian and Druze religious courts
5. Practice lab: find Jewish-law reasoning in a Supreme Court ruling
6. Practice lab: a self-represented party in the rabbinical court (procedure, documents, the to'en rabbani)

**Module 11 — Law, Economics and Society**
1. Law and economics: efficiency, incentives, Coase
2. Behavioural law and economics
3. Law and society: how law works in practice
4. Empirical legal studies: reading data about courts
5. Practice lab: should you sue? Expected value, costs, risk and time

**Module 12 — Clinic I: Your Everyday Civil Dispute, Start to Finish**
1. Choosing a dispute and the facts file
2. Evidence you can collect lawfully
3. The demand letter and negotiating a settlement
4. Consumer complaints and regulators before court
5. Writing the small-claims statement
6. The hearing: presenting, questioning, settlement proposals
7. After judgment: payment, enforcement, request for leave to appeal
8. When to stop and get a lawyer, and where to get free help

Year 1 total: 12 modules, 92 lessons.

### Year 2 — Core courses (TAU year-2 core pool + proseminar)

| # | Module | University match | Practice labs |
|---|---|---|---|
| 13 | Property and Land Law | דיני קניין | Read a land-registry extract (נסח טאבו); register a caveat (הערת אזהרה); condominium (בית משותף) disputes before the superintendent |
| 14 | Administrative Law | משפט מנהלי 1411-9224; HUJI 62819 | FOI request; objection to an administrative decision; administrative petition (dry run) |
| 15 | Civil Procedure | דיון אזרחי | Full statement of claim and defence in a magistrates' court; motions; appeals |
| 16 | Corporate Law | דיני תאגידים 1411-9222 | Register a company online; read company filings; shareholder rights |
| 17 | Labour, Welfare and Social Security Law | דיני עבודה + דיני רווחה (TAU 9225, 9226) | Check a payslip; claim to the labour court; NII claims, medical committees and appeals |
| 18 | Family Law | דיני משפחות | Family-court procedure; maintenance and custody basics; cohabitation and property agreements |
| 19 | Public International Law | משפט בינלאומי פומבי | Use a treaty in an Israeli court argument |
| 20 | Contracts: Advanced and Special Contracts | חוזים – סוגיות מתקדמות | Sale (apartment purchase checklist), rental (Fair Rental), services, guarantee, insurance claim |
| 21 | Proseminar: Academic Legal Writing | פרוסמינר | A 15-page research paper |
| 22 | Clinic II: Work, Family and Home Without a Lawyer | Clinic | Labour-court claim, NII appeal, family-court request, tenancy dispute |

### Year 3 — Advanced core (TAU year 3–4 core pool, bar-exam subjects)

| # | Module | Practice labs |
|---|---|---|
| 23 | Evidence | Affidavits, documents, digital evidence, witness questions |
| 24 | Criminal Procedure | Rights in interrogation and arrest; defending yourself in a minor case; criminal record deletion |
| 25 | Tax Law (incl. real-estate taxation, a Bar subject) | Annual return, refund request, objection and appeal; purchase-tax self-assessment |
| 26 | Inheritance and Wills | Write your own will; probate or succession order from the Registrar of Inheritance |
| 27 | Planning, Building and Local Government | Objection to a plan; building-permit check; municipal tax (arnona) objection and appeal |
| 28 | Insolvency and Execution | Respond to an execution file; debt arrangement; insolvency of an individual |
| 29 | Commercial Law: Payments, Liens and Consumer Protection | Cheques, liens registry check, consumer claim |
| 30 | Private International Law | Foreign judgment, international purchase dispute |
| 31 | Clinic III: Property, Estates and Money | Will, succession order, land registration, tax refund |

### Year 4 — Specialisation, ethics and capstone

| # | Module | Practice labs |
|---|---|---|
| 32 | Intellectual Property | Copyright notice and takedown; trademark search |
| 33 | Class Actions and Public-Interest Litigation | Read a class-action settlement; object or opt out |
| 34 | Environmental Law | Environmental complaint; data requests |
| 35 | The Legal Profession and Ethics | Choosing and supervising a lawyer; fee agreements; complaint to the Bar ethics committee |
| 36 | Seminar Paper | A 30-page seminar paper |
| 37 | Clinic IV: Public and Criminal Matters Without a Lawyer | Administrative petition, police complaint, defending a traffic ticket |
| 38 | Bar-Exam-Style Review | Mock exam: writing task + 40 procedural + 40 substantive questions |
| 39 | Capstone: Your Own Case File, End to End | A complete file in a real matter of the learner's own |

Module and lesson titles for years 2–4 are provisional until each year is planned in detail.

## 6. Lesson format (exact, every lesson)

```markdown
---
id: "03.4"
module: 3
minutes: 30
practice_minutes: 60
prerequisites: ["03.3"]
objectives:
  - "Decide whether a party negotiated in bad faith under s. 12."
  - "Write a letter that reserves your rights after a breach."
volatility: concept
sources:
  - title: "חוק החוזים (חלק כללי), התשל״ג-1973"
    url: https://…
last_verified: "2026-10-.."
---

# 03.4 · Good faith in negotiation and performance

One plain intro paragraph: what the learner will be able to do by the end.

## Why it matters
## Key terms
## The law
## Leading cases
## How it works in practice
## Worked example
## Do it yourself
## Without a lawyer
## What goes wrong
## Review
```

- **Exactly these 10 `##` sections**, in this order. `###` inside them.
- **Key terms**: table `| עברית | Transliteration | English |`, 3–10 terms.
- **The law**: exact Hebrew quotes of the needed sections, each with `*Gist:*` and a free full-text link.
- **Leading cases**: 1–4 rulings, each with name and citation in Hebrew, a free link, the holding in 2–3 English sentences, and why it matters. University depth lives here. If no case fits (theory lessons), name the key text and its free source instead.
- **How it works in practice**: who, where, which form, how long, what it costs (numbers link to `../../references/current-numbers.md`).
- **Worked example**: a realistic Israeli case, solved step by step; invented names for private persons.
- **Do it yourself**: `### You need`, `### Steps` (numbered), `### Template` (link to `templates/` or "None"), `### How you know it worked`, `### Self-check` (task list). Default level is a dry run on the learner's own facts.
- **Without a lawyer**: the practice section Tal asked for. Always these subsections:
  - `### Can you do this yourself?` — yes / partly / no, with the legal basis (who may appear, whether a company needs a lawyer, s. 20 limits).
  - `### Where and how` — the forum or office, the online service or form, fee and deadline (via current numbers), free help (court information centres, Legal Aid, Kol-Zchut, clinics).
  - `### Stop and get a lawyer when` — concrete red flags (stakes, criminal exposure, the other side has a lawyer and it is complex, deadlines you cannot meet).
  For pure theory lessons write "Not a filing lesson." plus where the idea shows up in practice.
- **What goes wrong**: table `| Mistake | Consequence | How to fix | How to avoid |`.
- **Review**: 3–5 bullets.
- **Learn more** goes at the end of "Review" as `### Learn more` (free external units, or "None.").
- Every real-world filing step opens with `> [!IMPORTANT]` "Act in your own name only. This is not legal advice — check current rules before filing." Criminal-law and police practice opens with `> [!WARNING]`.
- `volatility: implementation` for anything with fees, deadlines, forms, procedures or legislation in flux; else `concept`.
- **Practice lab lessons** use the same 10 sections; "Do it yourself" is the bulk of the lesson (60–180 practice minutes), and the other sections are short.

## 7. Practice design

- Every lesson ends in a task; every module ends in Practice lab lessons and a project.
- Levels: **dry run** (default: real facts of the learner's own life or a supplied case, nothing filed); **real, own name** (Clinic modules and labs where the action is low-risk: a consumer withdrawal, an FOI request, a will, a caveat). Never acting for others.
- Projects (`projects/mNN-<slug>.md`): brief, steps, a self-assessment rubric table, model answer in `<details>`.
- Templates in Hebrew under `templates/`, each with a header: what it is for, who may file it, where, and a disclaimer.
- `references/` (main session only): `current-numbers.md`, `where-to-get-help.md`, `can-i-act-without-a-lawyer.md` (forum-by-forum table, built up as modules are written), `laws-index.md`, `external-resources.md`.

## 8. Quizzes and question bank

- Lesson quiz 3–5 questions, module quiz 10 scenario questions, per guidelines §5.
- Question bank `curriculum/question-bank/module-NN.yaml`: at least 60 questions per module (format in build-spec), for Tal's daily practice tool. Include bar-exam-style questions (procedural and substantive) wherever the module covers a bar subject.

## 9. Neutrality

Present contested issues (judicial review, religion and state, the 2023–2026 dispute) with each side's strongest legal argument and the current state of the law; no political verdicts. Rotate worked examples across communities and viewpoints.

## 10. Build process

- At most two writing agents at once (main session + one, or two sub-agents); sub-agents never spawn agents. Each writes one module per `curriculum/build-spec.md`. Only the main session edits shared files, commits and pushes.
- Main session after each module: merge inboxes (glossary, numbers, laws, external, templates), add the module to `_sidebar.md`, run `node curriculum/tools/check-module.mjs NN` and the Academy dry run, update `BUILD_PROGRESS.md`, commit, push.

## 11. Time

Per module: lesson minutes + practice minutes + project + 30 minutes of quizzes, rounded to hours, recorded in `BUILD_PROGRESS.md` and the sidebar. Expected order of magnitude: 15–30 hours per module, about 250–300 hours for year 1. A real LL.B. year is far more (about 40 hours of work per credit); the course is condensed and says so in the README.

## 12. Open questions for Tal

- Free or paid (suggestion: free).
- Whether to add a Hebrew-language edition later.
