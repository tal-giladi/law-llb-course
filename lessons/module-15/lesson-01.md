---
id: "15.1"
module: 15
minutes: 35
practice_minutes: 45
prerequisites: ["08.2", "01.4"]
objectives:
  - "Decide which court has subject-matter jurisdiction over a civil claim (Courts Law ss. 40, 51) and which district has venue (regs 7–8), including the effect of a jurisdiction clause."
  - "Identify who must or may be joined as plaintiffs and defendants (regs 24–27) and when a claim must include the full remedy (reg. 25)."
  - "Decide whether a defendant should file a counterclaim or a third-party notice (regs 21–23), and by what date."
  - "Raise or answer a jurisdiction, foreign-forum or arbitration argument at the right time (reg. 29, reg. 49(א)(3))."
volatility: implementation
sources:
  - title: "תקנות סדר הדין האזרחי, התשע״ט–2018 (ויקיטקסט), regs 7–8, 21–29, 40, 46, 49, 80–81, 150"
    url: "https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי"
  - title: "חוק בתי המשפט [נוסח משולב], התשמ״ד–1984 (ויקיטקסט), ss. 40, 51, 79"
    url: "https://he.wikisource.org/wiki/חוק_בתי_המשפט"
  - title: "Hotels.com v. Zuz Tourism Ltd., LCA 4716/04 (7.9.2005), Versa / LARC (English)"
    url: "https://larc.cardozo.yu.edu/iscp-opinions/196/"
  - title: "Her Majesty the Queen in Right of Canada v. Edelson, PLA 7092/94 (3.6.1997), Versa / LARC (English)"
    url: "https://larc.cardozo.yu.edu/iscp-opinions/188/"
last_verified: "2026-10-17"
---

# 15.1 · Jurisdiction, venue, parties, joinder and third-party notice

Before a single fact is pleaded, a civil case needs three answers: which court may hear it, in which city, and between whom. This lesson takes the outline from lessons 01.4 and 08.2 to university depth: subject-matter jurisdiction under the Courts Law, venue under regs 7–8 of the Civil Procedure Regulations 2018, joinder of parties and causes, the full-remedy rule, counterclaims and third-party notices. By the end you will be able to fill in the jurisdiction, venue and parties section of a real claim and spot when the other side has got it wrong.

## Why it matters

A claim filed in a court without subject-matter jurisdiction is transferred or struck out; a claim filed in the wrong district can be moved at the defendant's request; a claim against the wrong defendant, or against only one of three people who caused the loss, can be won and still not paid. The 2018 Regulations add a sharper edge: a plaintiff must claim every remedy arising from one cause of action in one claim (reg. 25), and a defendant who wants to blame someone else must issue a third-party notice within the defence period (reg. 23(ב)). Both rules punish the party who thinks about structure too late.

There is also a policy tension the courts keep returning to. Joinder rules aim at **efficiency and consistency**: one trial, one set of findings, no contradictory judgments (reg. 26(א), reg. 40). But a plaintiff is entitled to choose its battle, and a defendant who agreed to arbitrate or to a foreign court is entitled to that bargain. The Supreme Court's Hotels.com decision (below) shows that when an international arbitration clause is involved, the efficiency of a single trial does not override the agreement.

## Key terms

| עברית | Transliteration | English |
|---|---|---|
| סמכות עניינית | samchut inyanit | subject-matter jurisdiction |
| מקום שיפוט (סמכות מקומית) | mekom shiput (samchut mekomit) | venue (territorial jurisdiction) |
| תניית שיפוט ייחודית | tniyat shiput yichudit | exclusive jurisdiction clause |
| צירוף בעלי דין | tziruf ba'alei din | joinder of parties |
| איחוד עילות | ichud ilot | joinder of causes of action |
| פיצול סעדים | pitzul sa'adim | splitting of remedies (with leave) |
| תביעה שכנגד | tvi'a shekeneged | counterclaim |
| הודעה לצד שלישי | hoda'a letzad shlishi | third-party notice |
| עיכוב הליכים | ikuv halichim | stay of proceedings |

## The law

### Subject-matter jurisdiction: Courts Law ss. 51 and 40

> (2) תביעות אזרחיות – למעט תביעות הנוגעות למקרקעין – כשסכום התביעה או שווי הנושא אינו עולה על 2,500,000 שקלים חדשים ביום הגשת התובענה…

*Gist:* The magistrates' court hears civil claims (other than land claims) up to the ceiling, measured on the day of filing, even if interest and linkage later push the sum above it. ([Courts Law s. 51(א)(2)](https://he.wikisource.org/wiki/חוק_בתי_המשפט); ceiling in [current numbers](../../references/current-numbers.md))

The magistrates' court also hears claims about possession or use of land, or its division, whatever the value (s. 51(א)(3)), and a counterclaim arising from the same subject or circumstances whatever its value (s. 51(א)(4)). Everything civil that is not within the magistrates' court goes to the district court, which also hears appeals from the magistrates' court (s. 40(1), (3)). Labour, family, and religious courts have their own jurisdiction (lesson [01.4](../module-01/lesson-04.md)). A court without jurisdiction may transfer the case to the right one, and the receiving court may not transfer it again (s. 79).

### Venue: reg. 7 and reg. 8

> (א) תובענה תוגש לבית המשפט המצוי במחוז שיפוט של מקום מגוריו או מקום עסקו של הנתבע או במקום המעשה או המחדל שבשלו תובעים, ואם היתה התובענה במקרקעין תוגש לבית המשפט שבמחוז שיפוטו הם מצויים; אם קיים הסכם בין בעלי הדין על מקום השיפוט, תוגש התובענה לבית המשפט שעליו הוסכם.

*Gist:* Sue where the defendant lives or does business, or where the act or omission occurred; land claims go where the land is; an agreed venue governs. ([reg. 7(א)](https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי))

Three refinements. A claim over an internet publication or online trade may be filed where either party lives or does business, but a trader (עוסק under the Consumer Protection Law) suing over such a transaction must sue where the defendant lives or does business (reg. 7(ב)). Where there are several defendants, a court with venue over one of them has venue over all (reg. 7(ג)). If no rule gives any venue, the claim goes to Jerusalem, which may send it elsewhere (reg. 8).

### Raising jurisdiction arguments: reg. 29 and reg. 28

> בעל דין יעלה טענת חוסר סמכות, תניית שיפוט זר או פורום בלתי נאות בהזדמנות הראשונה לאחר הגשת כתב התביעה; לא העלה בעל דין טענות אלה במועד כאמור, רשאי בית המשפט לפסוק הוצאות לטובת בעל הדין שכנגד או לטובת אוצר המדינה.

*Gist:* Lack of jurisdiction, a foreign-jurisdiction clause and forum non conveniens must be raised at the first opportunity; a late objection can cost you. ([reg. 29](https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי))

Every preliminary argument must also appear in the defence, or it needs leave later (reg. 28). A motion to stay proceedings under the Arbitration Law or a foreign-jurisdiction clause is one of the few motions allowed between the last pleading and the first pre-trial hearing, and must be filed within 60 days of the last pleading (reg. 49(א)(3), (ב)). A decision on venue can be challenged only by an application for leave to appeal (reg. 150).

Two points of doctrine sit behind reg. 29. Subject-matter jurisdiction cannot be created by consent or waiver: a judgment given without it is open to attack, and the court must check it of its own motion. Venue is different: before 2021 the case law treated a defendant who did not object at the first opportunity as consenting to the venue, and whether that rule survives reg. 29, which speaks of costs rather than consent, is still debated (see the summary on [Hebrew Wikipedia: סמכות מקומית](https://he.wikipedia.org/wiki/סמכות_מקומית), a secondary source).

### Joinder of causes and parties: regs 24–27

> תובע יאחד בכתב תביעה אחד את כל עילות התביעה כלפי נתבע בשל אותה מסכת עובדתית…

*Gist:* All causes of action against a defendant arising from the same set of facts must go into one claim; others may be joined, subject to jurisdiction. ([reg. 24](https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי))

> (א) תובע יכלול בכתב תביעה את מלוא הסעד שלטענתו הוא זכאי לו בשל עילת התביעה ולא יוכל להגיש תביעה בשל החלק שלא תבע.

*Gist:* Claim the full remedy for each cause of action, or lose the part you left out; several remedies for one cause go together unless the court allows splitting, decided by the end of the pre-trial stage. ([reg. 25(א)–(ג)](https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי))

> (א) מותר לצרף בכתב תביעה אחד, כתובע או כנתבע, כל אדם הדרוש לצורך הכרעה ביעילות ובשלמות בתובענה, ובלבד שהתובענה מעוררת שאלה עובדתית או משפטית משותפת לכל בעלי הדין.

*Gist:* Anyone needed for an efficient and complete decision may be joined, if a common question of fact or law links them; a plaintiff unsure who is liable may sue several defendants and let the trial decide (reg. 26(ב)). ([reg. 26](https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי))

You may not plead contradictory or alternative facts unless you verify by affidavit that you do not know the true facts (reg. 27). The court may add or strike a party at any time, weighing the applicant's conduct, the stage and the purpose of the change (reg. 46(א)), and may consolidate related claims (reg. 40).

### Counterclaim and third-party notice: regs 21–23

> נתבע רשאי לתת הודעה לצד שלישי לכל אדם, במקרים שבהם הוא זכאי ממנו להשתתפות, לשיפוי או לביצוע פעולה בנוגע לסעד הנתבע ממנו או אם מתקיים קשר עובדתי או משפטי משותף בסוגיה שבינו ובין הצד השלישי, הכרוכה בנושא התובענה.

*Gist:* A defendant may bring in anyone from whom it is entitled to contribution or indemnity, or with whom it shares a factual or legal link to the subject of the claim. ([reg. 22](https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי))

The notice is filed within the defence period of reg. 9(ב), with copies of the pleadings (reg. 23(ב)); the third party is treated as a defendant but may not counterclaim (reg. 23(ג)) and files its defence within a set period (reg. 23(ד)); the court decides when the notice is heard (reg. 23(ה)). A counterclaim is filed with the defence and lives on even if the main claim ends (reg. 21). On the fast track a third-party notice needs the court's leave and the third party has a shorter period (reg. 80(ב)); in a claim to evict a tenant there are no counterclaims or third-party notices at all (reg. 81(ג)). All periods: [current numbers](../../references/current-numbers.md).

## Leading cases

### Hotels.com נ׳ Zuz Tourism Ltd. (רע״א 4716/04, 7.9.2005)

An Israeli company sued Hotels.com and a second defendant in the district court. Hotels.com's contract with the plaintiff had an arbitration clause (in Texas) subject to the New York Convention; the second defendant was not a party to it. The district court refused a stay, reasoning that otherwise the dispute would be split between two forums. The Supreme Court reversed: under s. 6 of the Arbitration Law and art. II(3) of the Convention, a court must stay proceedings on an international arbitration agreement unless it is "null and void, inoperative or incapable of being performed", and the joinder of a non-party does not make it so.

**Why it matters:** joinder is a tool for efficiency, not a way around an agreed forum. For domestic arbitration the court keeps a discretion (s. 5), so the answer depends on which kind of clause you face. The motion is made early (reg. 49(א)(3)). English translation: [Versa / LARC](https://larc.cardozo.yu.edu/iscp-opinions/196/).

### הוד מלכותה המלכה בזכות קנדה נ׳ אדלסון (רע״א 7092/94, 3.6.1997)

Landlords sued Canada in the magistrates' court over the lease of the ambassador's residence. Canada claimed absolute immunity. The Supreme Court held that a foreign state enjoys only relative immunity: in a private, commercial transaction such as a lease it is subject to Israeli courts, and the test is the legal nature of the transaction, not its purpose.

**Why it matters:** jurisdiction is not only about which Israeli court; sometimes the question is whether any Israeli court may hear the defendant at all. The rule is now codified in the Foreign States Immunity Law 2008, and service on a foreign state follows that law (reg. 163(ט)). The case also reached the Supreme Court on leave after two instances, an example for lesson 15.8. English translation: [Versa / LARC](https://larc.cardozo.yu.edu/iscp-opinions/188/).

## How it works in practice

### The four questions, in order

1. **Which court?** Value on the filing day (with every remedy listed in the heading, reg. 10(9)), land or not, family or labour subject or not. Small claims (lesson [08.3](../module-08/lesson-03.md)) is an option for an individual below its ceiling.
2. **Which district?** List every connecting factor: defendant's home, defendant's business, place of the act or omission, place of the land, and any clause. With several defendants, pick a district that works for one of them (reg. 7(ג)).
3. **Who are the parties?** Exact legal names and ID or company numbers (reg. 10(2), (5)); everyone who may be liable (reg. 26(ב)); everyone needed for a complete decision (reg. 26(א)).
4. **Which causes and remedies?** Every cause from the same facts (reg. 24) and the full remedy for each (reg. 25). If you cannot yet quantify a later head of damage, ask for leave to split remedies, not silence.

### Reading a jurisdiction clause

- **Exclusive** ("לבתי המשפט בתל אביב תהיה סמכות ייחודית / בלעדית"): only that district. A defendant who is sued elsewhere objects at the first opportunity (reg. 29).
- **Parallel** ("לבתי המשפט בתל אביב תהיה סמכות"): an extra option, not a limit. Courts read clauses in standard contracts against the drafter, and a clause that makes a consumer travel far may be attacked as an unfair term in a standard contract (lesson [03.6](../module-03/lesson-06.md)).
- A clause cannot give a court subject-matter jurisdiction it does not have.

### For the defendant: the first 60 days

The defence period runs from service (reg. 9(ב)). Within it you must decide: object to jurisdiction or venue (and say so in the defence, reg. 28), move to stay for arbitration (reg. 49(א)(3)), file a counterclaim (reg. 21(א)), and issue any third-party notice (reg. 23(ב)). Extensions are possible for good reasons (reg. 9(ב)), but do not assume one.

## Worked example

Ruth and Amos Peretz of Netanya hired "גל שיפוצים בע״מ", whose registered office is in Haifa, to renovate their bathroom for ₪62,000. The company subcontracted the plumbing to Fadi Halabi, a sole trader from Daliyat al-Karmel. Six months later a pipe burst and flooded the flat below, owned by Yonatan Mizrahi. Ruth and Amos paid ₪9,000 to repair Yonatan's flat and ₪14,000 to redo their own bathroom.

1. **Court.** ₪23,000 in damages, below the small-claims ceiling, so small claims is open to them (lesson 08.3). They choose the magistrates' court because they expect the company to bring in the subcontractor and want full procedure, expert evidence and a right of appeal. The value is far below the magistrates' ceiling (s. 51(א)(2)).
2. **Venue.** The act or omission (the faulty installation) occurred in Netanya; the company does business in Haifa. Both districts have venue (reg. 7(א)). The quote says nothing about venue. They file in Netanya (Central district).
3. **Parties.** They are unsure whether the fault lies with the company's design or Fadi's work. They sue only the company, with whom they have a contract. Could they also sue Fadi in tort? Yes (reg. 26(ב)), but they decide to let the company bring him in.
4. **Causes and remedies.** Breach of contract and negligence arise from the same facts, so both go in one claim (reg. 24), with both heads of damage (reg. 25). They do not leave out the ₪9,000 to sue for later: that part would be lost.
5. **Track.** A money claim of ₪23,000 is under the fast-track ceiling, so the case runs on the fast track (reg. 78(א)(1); lesson 15.6).
6. **The company's move.** With its defence the company asks leave to issue a third-party notice against Fadi for indemnity (regs 22, 80(ב)); on the ordinary track it would not need leave, only the defence-period deadline (reg. 23(ב)). Fadi, now a third party, files his own defence and may not counterclaim in the notice proceeding (reg. 23(ג)).

## Do it yourself

### You need

- A civil dispute of your own (or the Peretz case above).
- The Courts Law ss. 40, 51 and regs 7–8, 21–29 open in another window.
- About 45 minutes.

### Steps

1. **Value (5 min).** List every remedy and its value on today's date. Add them up.
2. **Court (5 min).** Decide: small claims, magistrates' or district court, or another tribunal. Write the section number that decides it.
3. **Venue (10 min).** List every connecting factor under reg. 7 and every clause. Pick a district and write one sentence of reasons.
4. **Parties (10 min).** List every person or company who might be liable, with exact legal name and number. Mark which you will sue and why.
5. **Causes (5 min).** List every cause of action from the same facts (contract, negligence, statutory duty, unjust enrichment). Check each remedy appears once.
6. **Defendant's view (10 min).** Play the defendant: which jurisdiction objection, stay motion, counterclaim or third-party notice could they bring, and by what date?

### Template

- [Statement of claim, magistrates' court (כתב תביעה)](../../templates/statement-of-claim-magistrates.md): the heading and summary sections take the answers you wrote here (full lab in 15.10).

### How you know it worked

- Each of your choices cites a section or regulation.
- Your parties list has exact legal names, not trade names.
- You can say what you would lose if you left a remedy out (reg. 25).
- You named the defendant's deadline for a third-party notice.

### Self-check

- [ ] I can tell subject-matter jurisdiction from venue.
- [ ] I know the difference between an exclusive and a parallel jurisdiction clause.
- [ ] I know that all remedies from one cause go in one claim.
- [ ] I know when a third-party notice must be filed.

## Without a lawyer

> [!IMPORTANT]
> Act in your own name only. This is not legal advice — check current rules before filing.

### Can you do this yourself?

Yes, for your own claim or defence: an individual may take any step personally (reg. 170). A company generally acts through a lawyer in the civil courts (see [can I act without a lawyer](../../references/can-i-act-without-a-lawyer.md)). Issuing a third-party notice or counterclaim is a step you may take yourself; drafting one for someone else is reserved to lawyers (Bar Association Law s. 20).

### Where and how

- File in the magistrates' court of the district you chose, at the registry or, where available, through Net HaMishpat (lesson [08.8](../module-08/lesson-08.md)).
- Ceilings, defence periods and third-party periods: [current numbers](../../references/current-numbers.md).
- Free help: court information centre and volunteer desks, Legal Aid where eligible ([where to get help](../../references/where-to-get-help.md)).

### Stop and get a lawyer when

- The other side moves to stay for arbitration or a foreign court, or the defendant is a foreign company or state.
- You are brought in as a third party by a defendant with a lawyer.
- The claim involves land rights (not just possession), or is near the magistrates' ceiling.
- You are unsure whether a later head of damage must be claimed now or split with leave.

## What goes wrong

| Mistake | Consequence | How to fix | How to avoid |
|---|---|---|---|
| Filing in the district where you live, with no connecting factor | Defendant moves to transfer; costs | Agree to transfer early | List reg. 7 factors before filing |
| Leaving out part of the damage "for later" | The omitted part is lost (reg. 25(א)) | Apply to amend before judgment (reg. 46) | Claim the full remedy, or ask leave to split |
| Suing a trade name | Judgment against no one; enforcement fails | Amend to add the right party (reg. 46) | Check the Companies Registrar or the Population Registry details |
| Objecting to venue months after the defence | Costs or the objection is refused (regs 28–29) | Raise it at once with reasons | Put every preliminary argument in the defence |
| Defendant forgets the third-party notice | Must sue the subcontractor separately; risk of conflicting findings | Ask leave to file late (reg. 176(ג) for court-set dates) | Diary the defence date for the notice too |

## Review

- Subject-matter jurisdiction comes from the Courts Law (s. 51: value on filing day, land, counterclaims); venue from regs 7–8; one does not cure the other.
- Raise jurisdiction, foreign-clause and forum arguments at the first opportunity and in the defence (regs 28–29); stay motions within 60 days of the last pleading (reg. 49).
- Join all causes from the same facts and claim the full remedy (regs 24–25); join every party needed for a complete decision (reg. 26).
- A defendant's counterclaim and third-party notice go in with the defence (regs 21–23); the fast track and eviction claims restrict them (regs 80–81).

### Learn more

- Versa / LARC, *Hotels.com v. Zuz Tourism Ltd.*, LCA 4716/04, English translation. FREE-FULL, 40 minutes, [larc.cardozo.yu.edu/iscp-opinions/196](https://larc.cardozo.yu.edu/iscp-opinions/196/). Fallback: search "Hotels.com" at [larc.cardozo.yu.edu/iscp-opinions](https://larc.cardozo.yu.edu/iscp-opinions/).
