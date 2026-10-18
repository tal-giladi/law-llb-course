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
| Scope now | All 39 modules written by 2026-10-18; final QA paused. |
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

### Year 1 — Foundations (TAU year 1, all mandatory, 41–43 ש"ס) — WRITTEN

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

#### Year 2 lessons (planned 2026-10-17)

Year 2 modules build on year 1: link to the year-1 lesson instead of repeating it (relative path), and teach the subject at full university depth. Modules 14 and 15 extend modules 6 and 8; module 20 extends module 3; module 18 extends 10.3.

**Module 13 — Property and Land Law**
1. Property rights: ownership and its limits under the Land Law 1969 and the Movable Property Law 1971
2. Land registration: the Land Registry, Israel Land Authority leases and the registration of rights
3. Transactions in land: obligation and transaction, the writing requirement, competing transactions (s. 9)
4. The caveat (הערת אזהרה): what it protects and how it is registered
5. Co-ownership and dissolution of joint ownership
6. Condominiums (בית משותף): bylaws, common property and the superintendent
7. Possession, neighbours and easements; self-help and protection of possession
8. Movables: good-faith acquisition, lost property and pledges
9. Practice lab: read a land-registry extract and check an apartment before buying
10. Practice lab: a condominium dispute before the superintendent

**Module 14 — Administrative Law**
1. Authority and the principle of legality
2. Discretion: relevant considerations, equality and reasonableness after the 2023 amendment
3. Proportionality in administrative decisions
4. Fair procedure: the right to be heard, reasons and conflict of interest
5. The duty to decide, delegation and administrative evidence
6. Tenders, administrative contracts and administrative promises
7. Freedom of information
8. Oversight bodies: the Ombudsman, the State Comptroller and sector ombudsmen
9. Administrative adjudication: the Administrative Courts Law, threshold doctrines and remedies
10. Practice lab: an FOI request and an objection to a decision
11. Practice lab: an administrative petition (dry run)

**Module 15 — Civil Procedure**
1. Jurisdiction, venue, parties, joinder and third-party notice
2. Pleadings under the 2018 Regulations: claim, defence, reply and amendment
3. Service, default judgment and setting it aside
4. Disclosure, inspection of documents and interrogatories
5. Interim relief: temporary injunctions, attachments and security for costs
6. The preliminary hearing, settlement and the expedited procedure
7. The trial: affidavits, cross-examination and summations
8. Judgment, costs and appeals: appeal as of right and leave to appeal
9. Limitation of actions
10. Practice lab: a statement of claim and a defence for a magistrates' court case
11. Practice lab: a motion and an appeal outline

**Module 16 — Corporate Law**
1. Legal persons and business forms: company, partnership, sole trader, amuta, cooperative
2. Incorporation: the Companies Law 1999, the articles and the Companies Registrar
3. Company organs and shareholders' rights
4. Officers' duties of care and loyalty
5. Lifting the corporate veil, distributions and creditor protection
6. Shareholder remedies: oppression, derivative claims and inspection rights
7. The sole trader and partnerships: registration, VAT and liability
8. Practice lab: register a sole-shareholder company and read company filings
9. Practice lab: a founders' agreement checklist and a shareholder's information request

**Module 17 — Labour, Welfare and Social Security Law**
1. Who is an employee: the tests, contractors and manpower agencies
2. Protective legislation: minimum wage, hours, rest, leave and sick pay
3. Wages and payslips: Wage Protection Law, Notice to Employee Law and late-wage compensation
4. Dismissal: hearing, notice, severance pay and pension
5. Equality and sexual harassment at work
6. Collective labour law: unions, collective agreements and strikes
7. National Insurance: contributions and the main benefits
8. Welfare rights: income support, housing assistance and the welfare services
9. National Insurance procedure: claims, medical committees, appeals and the labour court
10. Practice lab: check a payslip, calculate final settlement and write to the employer
11. Practice lab: a National Insurance claim and an appeal from a medical committee

**Module 18 — Family Law**
1. The structure of Israeli family law: religious and civil law, dual jurisdiction
2. Marriage and divorce: who may marry, marriages abroad and registration
3. Cohabitants and same-sex couples: recognition and rights
4. Property between spouses: the balance of resources and property agreements
5. Child and spousal maintenance
6. Parental responsibility, custody and the best interest of the child
7. Domestic violence and protection orders
8. Parentage: adoption, surrogacy and fertility treatment (overview)
9. Practice lab: the request to settle a dispute and the assistance-unit meetings
10. Practice lab: a property-agreement checklist and a protection-order request

**Module 19 — Public International Law**
1. What international law is and its sources
2. Treaties and Israel's treaty practice
3. Customary international law
4. States, recognition, jurisdiction and immunity
5. International courts and tribunals: the ICJ and the ICC (overview)
6. Human-rights treaties and the UN system
7. International law in Israeli courts
8. Practice lab: use a treaty in an Israeli court argument

**Module 20 — Contracts: Advanced and Special Contracts**
1. Sale of goods: conformity, inspection and notice
2. Buying a new apartment: the Sale (Apartments) Law, defects and buyer guarantees
3. Rental: the Rental and Borrowing Law and the fair-rental rules
4. Services and contracting work
5. Guarantees and the protected guarantor
6. Insurance contracts: disclosure, claims and limitation
7. Consumer contracts: distance sales, cancellation and unfair terms
8. Unjust enrichment
9. Practice lab: an apartment-purchase checklist and a defects claim to the contractor
10. Practice lab: a rental dispute and a rejected insurance claim

**Module 21 — Proseminar: Academic Legal Writing**
1. Choosing a research question
2. Finding and reading the literature with free Israeli journals
3. Structuring a legal paper and its argument
4. Footnotes and the uniform citation rules in depth
5. Academic integrity, plagiarism and AI tools
6. Practice lab: write and self-review the proseminar paper

**Module 22 — Clinic II: Work, Family and Home Without a Lawyer**
1. Choosing the matter and building the file
2. An employment claim: from the letter to the labour court
3. A National Insurance appeal from start to finish
4. Family court: the request to settle a dispute and mediation
5. A tenancy dispute: deposit and repairs from letter to small claims
6. Welfare and housing benefits: application and review
7. The hearing in the labour court and tribunals
8. Closing the file and when to get a lawyer

Year 2 total: 10 modules, 94 lessons.

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

#### Year 3 lessons (planned 2026-10-17)

Year 3 modules build on years 1–2: link to earlier lessons instead of repeating them (relative path). Module 23 deepens 15.7; module 24 deepens module 5's practice labs; module 28 deepens 8.7 and 12.7; module 29 extends modules 3 and 20; module 30 extends module 19.

**Module 23 — Evidence**
1. The structure of evidence law: admissibility and weight
2. Witnesses: competence, compellability and privilege
3. Hearsay and its exceptions
4. Documents, institutional records and digital evidence
5. Illegally obtained evidence
6. Burden of proof, standard of proof and presumptions
7. Expert opinions and medical evidence
8. Confessions and corroboration in criminal cases
9. Practice lab: an affidavit and a document bundle for your own case
10. Practice lab: witness questions and cross-examination

**Module 24 — Criminal Procedure**
1. The structure of the criminal process
2. Police powers: search, arrest and detention
3. Interrogation: the warning, silence, a lawyer and recording
4. Remand, release and bail conditions
5. Prosecution decisions: closing a file, conditional arrangements and the pre-indictment hearing
6. The trial: the plea, plea bargains and the defence case
7. Sentencing and appeals
8. Criminal records, police records and rehabilitation
9. Practice lab: a pre-indictment hearing request and defending yourself in a minor case
10. Practice lab: a request to delete a police record

**Module 25 — Tax Law**
1. Principles of income tax: residency and sources of income
2. Individuals: employment income, credit points, deductions and the annual return
3. The self-employed: VAT, bookkeeping and advance payments
4. Tax refunds for employees
5. Assessment, objection and appeal
6. Real-estate taxation: purchase tax
7. Capital gains on real estate and the single-apartment exemption
8. Collection, penalties and voluntary disclosure
9. Tax and benefits: the work grant and the National Insurance interplay
10. Practice lab: an employee's tax-refund request
11. Practice lab: a purchase-tax self-assessment and an objection

**Module 26 — Inheritance and Wills**
1. The Succession Law: heirs on intestacy and their shares
2. Wills: the four forms and their requirements
3. Validity: capacity, undue influence, defects and curing them
4. Special cases: gifts on death, mutual wills and wills benefiting witnesses
5. Administering an estate: debts, distribution and the spouse's rights
6. Succession and probate orders: the Registrar, objections and the Family Court
7. Inheritance of land and the enduring power of attorney
8. Practice lab: write your own will and deposit it
9. Practice lab: apply for a succession or probate order

**Module 27 — Planning, Building and Local Government**
1. The planning institutions under the Planning and Building Law
2. Plans: outline and detailed plans, and reading a plan online
3. Objections to plans and planning appeals
4. Building permits and exemptions
5. Planning enforcement: offences and demolition orders
6. Betterment levy and compensation for planning harm
7. Local government: structure, powers, bylaws and the council
8. Arnona: classification, exemptions and discounts
9. Practice lab: object to a plan near you
10. Practice lab: an arnona objection and appeal

**Module 28 — Insolvency and Execution**
1. The Execution Law in depth: the file, the warning and the debtor's rights
2. Execution measures: attachments, restrictions and protected assets
3. The debtor's defences: opposition, "I paid" claims and requests to the registrar
4. Consolidating files and payment arrangements
5. Individual insolvency under the 2018 law: the process
6. The rehabilitation plan, the trustee and discharge
7. Corporate insolvency in brief
8. Practice lab: respond to an execution file and propose an arrangement
9. Practice lab: assess and prepare an individual insolvency application (dry run)

**Module 29 — Commercial Law: Payments, Liens and Consumer Protection**
1. Bills of exchange: cheques and promissory notes
2. The holder in due course and defences against payment
3. Bounced cheques and the restricted-account rules
4. Pledges and liens: the Pledges Law and the registrar
5. Banks and customers: duties, fees and complaints
6. Consumer protection: misleading, unfair practices and enforcement
7. Credit and debt: fair-credit rules and collection
8. Practice lab: check the pledges registry and answer a bounced-cheque demand
9. Practice lab: a consumer claim with exemplary damages

**Module 30 — Private International Law**
1. What private international law is: jurisdiction, choice of law and recognition
2. International jurisdiction of Israeli courts and service abroad
3. Choice of law in contracts and torts
4. Family and succession across borders
5. Enforcing foreign judgments
6. International online purchases and cross-border disputes
7. Practice lab: a foreign judgment and an international purchase dispute

**Module 31 — Clinic III: Property, Estates and Money**
1. Choosing the matter and building the file
2. Your own will and enduring power of attorney
3. A succession order from start to finish
4. Registering rights in land
5. A tax refund and an objection
6. Defending an execution file and reaching an arrangement
7. An arnona objection from start to finish
8. Closing the file and when to get a lawyer

Year 3 total: 9 modules, 83 lessons.

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

#### Year 4 lessons (planned 2026-10-18)

Year 4 modules build on years 1–3: link to earlier lessons instead of repeating them. Module 37 reuses module 5, 14 and 24 templates; module 38 reviews the Bar subjects with links to the modules that teach them; module 39 draws on every clinic.

**Module 32 — Intellectual Property**
1. What intellectual property protects: an overview
2. Copyright: works, authorship, ownership and duration
3. Infringement, fair use and moral rights
4. Copyright online: takedowns, disclosure of infringers and blocking
5. Trademarks: registration, distinctiveness, infringement and passing off
6. Patents and designs: the basics
7. Trade secrets and employee inventions
8. Practice lab: protect your own work and send or answer a takedown notice
9. Practice lab: a trademark search and registration application

**Module 33 — Class Actions and Public-Interest Litigation**
1. The Class Actions Law: purpose and the Second Schedule
2. Certification: the requirements, the representative plaintiff and the lawyer
3. Settlements, opting out and objections
4. Remedies, the class-actions fund, fees and awards
5. Public-interest litigation: public petitioners, NGOs and amicus briefs
6. Choosing the tool: class action, small claim or regulator complaint
7. Practice lab: read a class-action settlement and decide whether to opt out or object
8. Practice lab: an objection to a settlement

**Module 34 — Environmental Law**
1. The framework of Israeli environmental law
2. Pollution and nuisance: air, noise and odour
3. Water, waste, hazardous materials and recycling laws
4. Environmental data: the pollutant release register and other public sources
5. Environmental information and freedom of information
6. Enforcement: fines, citizens' suits and private complaints
7. Climate law: the current state of legislation and litigation
8. Practice lab: an environmental complaint and a data request

**Module 35 — The Legal Profession and Ethics**
1. The Bar and the profession: admission, internship and the Bar exam
2. What only lawyers may do, and unauthorised practice
3. Professional conduct: loyalty, conflicts and confidentiality
4. Fees: fee agreements, contingency fees and statutory caps
5. Choosing and supervising a lawyer
6. When things go wrong: ethics complaints, fee disputes and malpractice claims
7. AI in legal work: duties and the courts' response
8. Practice lab: review a fee agreement and draft an ethics complaint (dry run)

**Module 36 — Seminar Paper**
1. From proseminar to seminar: what changes
2. Original research: doctrinal, comparative, empirical and historical
3. Working with primary sources at scale: legislative history, protocols and case databases
4. Writing the long paper: chapters, argument maps and revision
5. Presenting and defending your paper
6. Practice lab: write the 30-page seminar paper

**Module 37 — Clinic IV: Public and Criminal Matters Without a Lawyer**
1. Choosing the matter and building the file
2. An administrative petition from start to finish
3. A police complaint and following it up
4. Defending a traffic ticket: the request to be tried
5. Deleting a police record
6. A complaint to an oversight body
7. The hearing in the administrative or magistrates' court
8. Closing the file and when to get a lawyer

**Module 38 — Bar-Exam-Style Review**
1. The Bar exam: structure, rules and strategy
2. Procedural law review I: jurisdiction and civil procedure
3. Procedural law review II: criminal procedure, evidence, execution, insolvency and discipline
4. Substantive law review I: contracts, torts and limitation
5. Substantive law review II: property, commercial and corporate law, real-estate taxation
6. Substantive law review III: criminal law, Basic Laws and professional ethics
7. The writing task: drafting a legal document under time pressure
8. Practice lab: a full mock exam

**Module 39 — Capstone: Your Own Case File, End to End**
1. Choosing your capstone matter
2. The case theory and the strategy map
3. Building the evidence and research file
4. The documents: letters, filings and submissions
5. Running the matter and keeping the log
6. Retrospective: what you learned and your next steps

Year 4 total: 8 modules, 61 lessons. Course total: 39 modules, 327 lessons.

Detailed lesson lists for years 2–4 are in the "Year N lessons" subsections.

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
