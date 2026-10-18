---
id: "29.1"
module: 29
minutes: 35
practice_minutes: 40
prerequisites: ["03.1", "08.7"]
objectives:
  - "Identify whether a document is a bill of exchange, a cheque or a promissory note under ss. 3, 73 and 84 of the Bills of Exchange Ordinance, and what follows if it is not."
  - "Decide who is liable on a cheque (drawer, endorser, aval guarantor) and within which limitation period (ss. 55, 57, 96)."
  - "Write a cheque, an endorsement and a crossing that comply with the Bills Ordinance and the Cash Reduction Law, and explain what each line on the cheque does."
volatility: implementation
sources:
  - title: "פקודת השטרות [נוסח חדש] (ויקיטקסט), ss. 1–3, 7, 20, 30–31, 55, 57, 73–81, 84, 96"
    url: https://he.wikisource.org/wiki/פקודת_השטרות
  - title: "חוק לצמצום השימוש במזומן, התשע״ח–2018 (ויקיטקסט), s. 4 and Second Schedule"
    url: https://he.wikisource.org/wiki/חוק_לצמצום_השימוש_במזומן
  - title: "חוק סליקת שיקים, התשע״ו–2016 (ויקיטקסט), ss. 2–3"
    url: https://he.wikisource.org/wiki/חוק_סליקת_שיקים
  - title: "חוק ההוצאה לפועל, התשכ״ז–1967 (ויקיטקסט), s. 81א"
    url: https://he.wikisource.org/wiki/חוק_ההוצאה_לפועל#סעיף_81א
last_verified: "2026-10-18"
---

# 29.1 · Bills of exchange: cheques and promissory notes

By the end of this lesson you will be able to read any cheque or promissory note line by line, say who is liable on it and for how long, and write one that does what you intend and nothing more. Israeli commercial life still runs on post-dated cheques (שיקים דחויים) and on promissory notes signed as security for loans and leases; both can be enforced in the Execution Office without a judgment, which is why the debtor's defences ([lesson 28.3](../module-28/lesson-03.md)) and the holder's position ([lesson 29.2](lesson-02.md)) matter so much.

## Why it matters

A cheque is not just a way to pay. It is a separate contract (התחייבות שטרית), abstract from the deal behind it: the person who signs promises to pay the sum written on it, and that promise can be transferred to strangers who never saw the deal. Three consequences follow. First, a creditor holding a cheque or note can skip court and open an execution file directly (Execution Law s. 81א), so the burden of going to court shifts to the debtor. Second, once a cheque has been endorsed to a third party who took it in good faith and for value, the drawer may lose defences he had against the original payee (lesson 29.2). Third, a cheque that bounces for lack of funds counts toward the restricted-account rules (lesson 29.3). A learner who writes cheques carelessly, signs a blank note "just as security" or endorses a cheque without thinking is taking on liabilities the deal itself never contained.

The Ordinance is a 1957 Hebrew restatement of the Mandate ordinance, itself copied from the English Bills of Exchange Act 1882; s. 2 still tells courts to interpret it by reference to English law, except where the Ordinance is inconsistent. That is why Israeli bills law is unusually technical and English in flavour, and why the Supreme Court has occasionally broken from old English-based precedent (see Tal Trading in lesson 29.2).

## Key terms

| עברית | Transliteration | English |
|---|---|---|
| שטר חליפין | shtar chalifin | bill of exchange |
| שיק / שיק דחוי | shek / shek dachuy | cheque / post-dated cheque |
| שטר חוב | shtar chov | promissory note |
| מושך / נמשך / נפרע | moshech / nimshach / nifra | drawer / drawee (the bank) / payee |
| היסב / מסב / נסב | hesev / mesev / nisav | endorsement / endorser / endorsee |
| אוחז | ochez | holder |
| שרטוט; "לא סחיר" | sirtut; lo sachir | crossing; "not negotiable" |
| ערבות לשטר (אוואל) | arvut la-shtar (aval) | bill guarantee (aval) |
| חילול / הודעת חילול | chilul / hoda'at chilul | dishonour / notice of dishonour |

## The law

### What a bill, a cheque and a note are

> שטר־חליפין הוא פקודה ללא תנאי ערוכה בכתב מאת אדם אל חברו, חתומה בידי נותנה, בה נדרש האדם שאליו ערוכה הפקודה לשלם לאדם פלוני או לפקודתו, או למוכ״ז, סכום מסויים בכסף, עם דרישה או בזמן עתיד קבוע או ניתן לקביעה.

*Gist:* A bill of exchange is an unconditional written order, signed by the drawer, telling another person to pay a fixed sum of money to a named person, to his order or to bearer, on demand or at a fixed or determinable future time. [s. 3(א)](https://he.wikisource.org/wiki/פקודת_השטרות#סעיף_3)

Every element matters. A document that orders payment "if the goods arrive" is conditional and is not a bill (s. 3(ב)); it may still be a contract, but it cannot be executed under s. 81א. An order to pay out of a particular fund is conditional, but naming the account to be debited or the transaction behind the bill is not (s. 3(ג)). A missing date or a missing statement of value does not invalidate the bill (s. 3(ד)).

> שיק הוא שטר חליפין משוך על בנקאי ובר־פרעון עם דרישה [...] שיק יכול שהתאריך הנקוב בו יהיה מאוחר מיום הוצאתו, אולם שיק כזה (שיק מאוחר) לא יהיה בר־פרעון [...] אלא מהתאריך הנקוב בו.

*Gist:* A cheque is a bill drawn on a banker and payable on demand; a post-dated cheque is valid but payable only from its date. [s. 73](https://he.wikisource.org/wiki/פקודת_השטרות#סעיף_73)

> שטר חוב הוא הבטחה ללא תנאי ערוכה בכתב מאת אדם לחברו, חתומה בידי עושה השטר, בה הוא מתחייב לפרוע לאדם פלוני או לפקודתו, או למוכ״ז [...] סכום מסויים בכסף.

*Gist:* A promissory note is the maker's own unconditional written promise to pay a fixed sum; unlike a cheque there is no bank in the middle, and it is complete only on delivery (s. 85). [s. 84](https://he.wikisource.org/wiki/פקודת_השטרות#סעיף_84) Landlords, leasing companies and lenders often take an undated note for a large sum "as security"; s. 19 lets the holder fill in missing particulars, but only within a reasonable time and strictly according to the authority given, unless the note reaches a holder in due course.

### Negotiability and transfer

A bill payable "to order" is transferred by endorsement and delivery; a bearer bill by delivery alone (s. 30). A bill with words prohibiting transfer, such as "למוטב בלבד" (to the payee only), is valid between the parties but not negotiable (s. 7(א)). A crossing (two parallel lines) means the bank pays only to another bank, not over the counter (ss. 76, 79). The words "לא סחיר" on a crossed cheque do not stop transfer but mean the taker gets no better title than the person he took it from (s. 81): he cannot become a holder in due course.

### Who is liable

> מי שהסב שטר, הריהו, במעשהו זה – מתחייב שהשטר, לכשיוצג כראוי, יקובל וייפרע ככתבו, ושאם יחולל – יפצה את האוחז או כל מֵסֵב שלאחר אותו מסב [...] ובלבד שכל ההליכים הדרושים לאחר חילול ננקטו כראוי;

*Gist:* The drawer and every endorser promise that the bill will be paid when properly presented and, if it is dishonoured, to compensate the holder, provided the steps required after dishonour were taken. [s. 55](https://he.wikisource.org/wiki/פקודת_השטרות#סעיף_55)

Anyone who signs other than as drawer or acceptor is liable as an endorser to a holder in due course (s. 56). A bill guarantee (aval) is created by "ערב" or an equivalent word plus a signature; the guarantor is liable jointly and severally with the person he guaranteed, even if that person's obligation is void for a reason other than a defect of form (s. 57). An aval is a bills obligation, not an ordinary guarantee; whether the Guarantee Law's protected-guarantor rules apply to it is a question to raise with a lawyer ([lesson 20.5](../module-20/lesson-05.md)).

### Cheques: presentment, stop orders, digital cheques

A cheque should be presented within a reasonable time after its date; delay discharges the drawer only to the extent the delay caused him actual loss (s. 74). The bank's authority to pay ends on a stop order, on notice of the customer's death, or on notice of his bankruptcy (s. 75). Since the Cheque Clearing Law 2016, banks present cheques to each other as scanned images; when a scanned cheque is refused, the customer is entitled to a printout showing the reason, and that printout counts as the cheque in court ([Cheque Clearing Law ss. 2–3](https://he.wikisource.org/wiki/חוק_סליקת_שיקים)).

### The Cash Reduction Law's cheque rules

> לא יסב אדם שיק ולא יקבל נסב שיק מוסב, בלי ששמו ומספר זהותו של המסב נקובים בשיק.

*Gist:* No one may endorse a cheque, or take an endorsed cheque, unless the endorser's name and ID number are written on it; other rules require the payee's name on cheques above a threshold or to a business, and banks may not pay an endorsed cheque above a threshold that was endorsed more than once (subject to exceptions for regulated financial bodies). [s. 4(ה) and Second Schedule](https://he.wikisource.org/wiki/חוק_לצמצום_השימוש_במזומן#סעיף_4) Thresholds: [current numbers](../../references/current-numbers.md).

### Limitation and enforcement

> אין להיזקק לתובענה על פי שטר חליפין או שיק או שטר חוב כנגד מי שהוא צד להם ואינו מסב, לאחר שעברו שבע שנים, וכנגד מסב – לאחר שעברו שנתיים [...]

*Gist:* A claim on a bill, cheque or note is barred after a longer period against a party who is not an endorser (the drawer, the maker, the acceptor) and after a much shorter one against an endorser, counted from when the cause of action first arose for the holder; against a drawer or endorser the period runs from receipt of notice of dishonour. [s. 96](https://he.wikisource.org/wiki/פקודת_השטרות#סעיף_96) Periods: [current numbers](../../references/current-numbers.md). The holder can sue on the bill in court, or open an execution file on it directly; the debtor then has a short period to oppose ([Execution Law s. 81א](https://he.wikisource.org/wiki/חוק_ההוצאה_לפועל#סעיף_81א); [lesson 28.3](../module-28/lesson-03.md)).

## Leading cases

### Key text: the abstract nature of the bills obligation (פקודת השטרות ss. 2, 26–29, 37)

No single ruling defines what a cheque is; the Ordinance does. Read ss. 2, 26–29 and 37 together: value is presumed (s. 29(א)), a holder is presumed to be a holder in due course (s. 29(ב)), and a holder in due course takes free of personal defences (s. 37(2)). These presumptions are what make a cheque "better than cash" for the creditor and dangerous for the drawer. The leading case on how far a holder who is not in due course is protected, Tal Trading (2015, further hearing 2017), is briefed in [lesson 29.2](lesson-02.md). Free text of the Ordinance: [Wikisource](https://he.wikisource.org/wiki/פקודת_השטרות).

### Key text: the Cash Reduction Law and the end of the "cheque chain" (חוק לצמצום השימוש במזומן, s. 4)

Before 2019 a post-dated cheque could travel through many hands as informal credit, often ending with a cheque-discounting business. The Cash Reduction Law (in force for most provisions from 1 January 2019) limits endorsements of larger cheques and requires names and ID numbers, and a bank must refuse to pay a cheque that breaks these limits (s. 5 and the Second Schedule). Why it matters: a cheque you receive by endorsement may simply not be paid, and you may be exposed to a financial sanction (ss. 6, 20). [Wikisource](https://he.wikisource.org/wiki/חוק_לצמצום_השימוש_במזומן)

## How it works in practice

### Reading a cheque, line by line

| On the cheque | Legal meaning |
|---|---|
| Bank, branch, account number printed | The drawee (s. 73); the account is the drawer's |
| "שלמו ל..." (pay to) and a name | The payee (s. 6); without "למוטב בלבד" the cheque is payable to order and can be endorsed (s. 7(ד)) |
| Sum in words and figures | Words prevail if they differ (s. 8(ב)) |
| Date | Payable only from this date (s. 73(ב)) |
| Two parallel lines | Crossed: paid only into a bank account (ss. 76, 79) |
| "למוטב בלבד" | Not transferable (s. 7(א)) |
| Signature on the back | Endorsement (s. 31), now with name and ID number (Cash Reduction Law s. 4(ה)) |
| "ערב" and a signature | Aval guarantee (s. 57) |

### Habits that protect you

1. Write the payee's full name, cross the cheque and add "למוטב בלבד" unless you mean it to be transferred.
2. Never sign a blank cheque or an undated note. If a note is security, write in a side letter what it secures and when it may be completed (s. 19(ב)), and get a copy.
3. Keep a log of post-dated cheques: number, sum, date, payee, and what each pays for.
4. If the deal fails before the cheque's date, send a written stop order to your bank at once and tell the payee in writing why (s. 75(1)). A stop order alone is not a defence; your reason is (lesson 29.2).
5. If you receive a cheque by endorsement, check that it carries the endorser's name and ID number and that it has not been endorsed more than once if the sum is above the threshold.

### Time and money

Writing a cheque costs nothing beyond any bank fee in your bank's tariff (lesson 29.5). Opening an execution file on a cheque costs the creditor a fee ([current numbers](../../references/current-numbers.md)) and is done online; the debtor's opposition period runs from service of the warning ([lesson 28.1](../module-28/lesson-01.md)).

## Worked example

Avi Mizrahi runs a small appliance shop in Be'er Sheva. He bought stock from a wholesaler and gave three post-dated cheques of ₪8,000 each, dated 1 March, 1 April and 1 May, crossed but without "למוטב בלבד". He also signed a promissory note for ₪50,000, undated and with no payee, "as security for credit", when the wholesaler gave him payment terms. In March the wholesaler endorsed the April cheque to a discount company; in April the wholesaler stopped delivering.

1. **Classify.** The three are cheques (s. 73); the post-dated ones are payable only from their dates (s. 73(ב)). The note is a promissory note (s. 84) with missing particulars; the holder may complete them only within a reasonable time and within the authority Avi gave (s. 19).
2. **Transfer.** The April cheque was payable to order, so endorsement was possible (s. 7(ד)). If the sum was above the Cash Reduction Law threshold, the endorsement had to carry the wholesaler's name and ID number; a second endorsement would make it unpayable (Second Schedule).
3. **Liability.** Avi as drawer promised payment (s. 55(א)). The wholesaler, by endorsing, is also liable to the discount company if the cheque is dishonoured and notice is given (ss. 47, 55(ב)).
4. **What Avi can do now.** Stop the May cheque (s. 75) and write to the wholesaler that delivery stopped. Whether he must still pay the discount company on the April cheque depends on whether it is a holder in due course: that is lesson 29.2.
5. **The note.** Avi writes to the wholesaler asking for the note back, or a written statement of the maximum it secures. If the wholesaler fills in ₪50,000 when only ₪6,000 is owed, that exceeds the authority (s. 19(ב)); Avi would oppose an execution file on the note within the opposition period (lesson 28.3).
6. **Limitation.** The discount company has the longer period against Avi as drawer, but only the short period against the wholesaler as endorser, from notice of dishonour (s. 96).

## Do it yourself

### You need

- A cheque book (or a blank cheque image from your bank's app) and any promissory note or "security cheque" you have signed for a lease, a loan or a car.
- The Ordinance on Wikisource, ss. 3, 7, 55, 57, 73–76, 84, 96.
- 40 minutes.

### Steps

1. Take one cheque (a real one you wrote, a photocopy, or a sample) and fill in the line-by-line table above for it.
2. Write, on a sample (write "דוגמה" across it), a cheque that cannot be transferred and can only be paid into an account. Write the crossing and the words.
3. Write, on the back of another sample, a valid endorsement under the Cash Reduction Law.
4. List every cheque, note or "security cheque" you have signed in the last two years: who holds it, what it secures, whether it is dated and complete.
5. For one of them, write a two-paragraph side letter you would ask the holder to sign: what it secures, the maximum amount, when it must be returned.
6. Compute, for one cheque, the last day the holder could sue you as drawer and the last day he could sue an endorser (s. 96; dates from the cheque's date and the notice).

### Template

None. For an opposition to an execution file on a bill, use the [execution debtor response kit](../../templates/execution-debtor-response-kit.md) from module 28.

### How you know it worked

- Your sample cheque shows a crossing and "למוטב בלבד", and you can say which section gives each effect.
- Your endorsement has a name, ID number and signature.
- Your list identifies at least one document you would ask to get back or limit in writing.

### Self-check

- [ ] I can tell a bill, a cheque and a promissory note apart.
- [ ] I know that a post-dated cheque is payable only from its date.
- [ ] I know the difference between "למוטב בלבד" and "לא סחיר".
- [ ] I know that an endorser is liable and that the limitation period against him is short.

## Without a lawyer

### Can you do this yourself?

Yes. Writing, stopping and endorsing cheques, asking for a security note back and negotiating with a payee are your own affairs. If a creditor opens an execution file on a cheque or note, you may file the opposition yourself (an individual may act for himself in the Execution Office and the magistrates' court); a company must normally act through a lawyer in court. Drafting oppositions for others is reserved to lawyers (Bar Association Law s. 20).

### Where and how

> [!IMPORTANT]
> Act in your own name only. This is not legal advice — check current rules before filing.

- Stop order: through your bank's app or branch, in writing; keep the confirmation.
- Information on a bounced cheque: the drawee bank must give the holder the drawer's identity details (Cheques Without Cover Law s. 12) and a printout of a refused scanned cheque (Cheque Clearing Law s. 2(ג)).
- Execution files on bills: the Enforcement and Collection Authority's online services ([lesson 28.1](../module-28/lesson-01.md)); fees in [current numbers](../../references/current-numbers.md).
- Free help: Kol-Zchut pages on cheques and bills (⚠️ manual check), court information centres, Legal Aid where eligible.

### Stop and get a lawyer when

- You signed a large undated note or a guarantee (aval) on a note for someone else's business.
- The cheque has passed through a discount company or a non-bank lender and the sum is large.
- You suspect a forged signature or an altered cheque (ss. 23, 64): there may be criminal aspects.
- You are a company or a business with many cheques in circulation.

## What goes wrong

| Mistake | Consequence | How to fix | How to avoid |
|---|---|---|---|
| Signing an undated, blank note as "security" | The holder fills in a large sum and executes it | Demand the note back or a written limit; oppose any file within the period | Complete the note yourself, with a side letter |
| Leaving out "למוטב בלבד" | The cheque is endorsed to a stranger who may defeat your defences | Stop the cheque and notify in writing; see lesson 29.2 | Write it on every cheque you do not mean to circulate |
| Stopping a cheque without telling the payee why | Looks like bad faith; the bank's refusal may count as a bounced cheque if funds were short | Write to the payee with the reason at once | Stop in writing and send the reason the same day |
| Accepting a cheque endorsed several times | The bank refuses to pay it (Cash Reduction Law) | Ask the person who gave it for payment another way | Check endorsements before you accept |
| Ignoring the short period against endorsers | Claim against the endorser is barred | Sue the drawer within the longer period | Sue or claim from endorsers quickly |

## Review

- A bill is an unconditional written order; a cheque is a bill on a bank payable on demand; a note is a promise. Conditions destroy the bill but not necessarily the contract.
- Negotiability is the default; "למוטב בלבד" stops transfer, "לא סחיר" on a crossed cheque stops a taker from getting a better title.
- Drawer and endorsers guarantee payment, subject to presentment and notice of dishonour; an aval guarantor is jointly liable.
- The Cash Reduction Law requires names and ID numbers and limits endorsements; banks refuse non-compliant cheques.
- Limitation is long against drawers and makers, short against endorsers; holders can execute bills without a judgment.

### Learn more

- Bills of Exchange Ordinance, full text. FREE-FULL, about 45 minutes: [Wikisource](https://he.wikisource.org/wiki/פקודת_השטרות). Fallback: the Knesset legislation database, https://main.knesset.gov.il.
- Cash Reduction Law, ss. 1–6 and the schedules. FREE-FULL, about 20 minutes: [Wikisource](https://he.wikisource.org/wiki/חוק_לצמצום_השימוש_במזומן). Fallback: https://main.knesset.gov.il.
