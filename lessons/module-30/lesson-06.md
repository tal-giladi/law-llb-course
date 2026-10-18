---
id: "30.6"
module: 30
minutes: 35
practice_minutes: 45
prerequisites: ["30.2", "30.3", "20.7"]
objectives:
  - "Choose, for an international online purchase that went wrong, the right order of remedies: the seller, the platform's buyer protection, the card issuer under the Payment Services Law, a regulator, and a small claim in Israel."
  - "Write a valid notice to a card issuer under Payment Services Law s. 17 (goods not supplied and the transaction cancelled) or s. 29 (a card-not-present charge you did not make), and know the issuer's duties."
  - "Decide whether Israeli consumer law (cancellation of a distance sale, misleading, exemplary damages) can be relied on against a foreign seller, and what the practical limits are."
volatility: implementation
sources:
  - title: "חוק שירותי תשלום, התשע״ט–2019, ss. 1, 17, 18, 18א, 27, 29, 47, 55, 77 (Wikisource)"
    url: "https://he.wikisource.org/wiki/חוק_שירותי_תשלום"
  - title: "חוק כרטיסי חיוב, התשמ״ו–1986 (repealed 14.10.2020), Wikisource"
    url: "https://he.wikisource.org/wiki/חוק_כרטיסי_חיוב"
  - title: "חוק הגנת הצרכן, התשמ״א–1981, ss. 14ג, 14ה, 22כז–22לב, 31א (Wikisource)"
    url: "https://he.wikisource.org/wiki/חוק_הגנת_הצרכן"
  - title: "תקנות סדר הדין האזרחי, התשע״ט–2018, regs 166–167 (Wikisource)"
    url: "https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי"
  - title: "רע״א 5860/16 Facebook Inc. נ׳ בן חמו (31.5.2018), full text (law.co.il)"
    url: "https://www.law.co.il/media/computer-law/ben_hemo2.pdf"
last_verified: "2026-10-18"
---

# 30.6 · International online purchases and cross-border disputes

By the end of this lesson you will be able to get your money back, or at least stop paying, when a foreign website does not deliver, sends something else, or charges you for an order you never made. You will know which steps are legal rights under Israeli law, which are only the rules of a card network or a platform, and in what order to use them so that one does not spoil the other.

## Why it matters

Most cross-border disputes Israelis actually have are small: a parcel that never came, a counterfeit, a subscription that keeps charging, a hotel booked through a foreign site that was not there. Suing abroad is unrealistic, and even an Israeli judgment against a foreign seller may be hard to collect (lesson 30.5 works in the other direction). The most effective remedies are therefore those that act on the *money*, which is still in the Israeli payment system: the card issuer's duty to stop a charge, the issuer's refund duty for unauthorised remote charges, and the platform's own buyer-protection scheme.

A common mistake is to rely on the Debit Cards Law 1986. It was repealed on 14 October 2020 and replaced by the **Payment Services Law 2019**, which covers credit cards, debit cards, digital wallets and other payment instruments. Advice that still cites "s. 8 of the Debit Cards Law" or its s. 10 is out of date.

## Key terms

| עברית | Transliteration | English |
|---|---|---|
| נותן שירותי תשלום למשלם | noten sherutei tashlum la-meshalem | the payer's payment service provider (your card issuer, bank or wallet) |
| עסקת יסוד | iskat yesod | the underlying transaction (your purchase) |
| פעולת תשלום מובטחת | pe'ulat tashlum muvtachat | guaranteed payment transaction (typical card payment) |
| הפסקת חיוב בשל אי־אספקה | hafsakat chiyuv bishvil i-aspaka | stopping a charge for non-supply |
| פעולת תשלום במסמך חסר | pe'ulat tashlum be-mismach chaser | payment without a signed or strongly authenticated record (card-not-present) |
| שימוש לרעה | shimush le-ra'a | misuse (unauthorised use) |
| עסקת מכר מרחוק | iskat mecher me-rachok | distance sale |
| עוסק מפר בנסיבות מחמירות | osek mefer be-nesibot machmirot | dealer found in aggravated breach (2024 regime) |

## The law

### The Debit Cards Law is gone

The Wikisource text of the Debit Cards Law states that it was repealed on 14.10.2020 by s. 55 of the Payment Services Law; the new Law came into force on that date ([s. 77(א)](https://he.wikisource.org/wiki/חוק_שירותי_תשלום#סעיף_77)) and applies also to payment instruments issued before it (s. 78(א)).

### Stopping a charge when goods or services are not supplied (s. 17)

> נעשתה עסקת יסוד בין משלם למוטב ובשלה נתן המשלם הוראת תשלום לביצוע פעולת תשלום מובטחת, והודיע המשלם לנותן שירותי התשלום למשלם שהוא צד לפעולת התשלום המובטחת כי מתקיימים התנאים שלהלן, יפסיק נותן שירותי התשלום למשלם את ביצוע הוראת התשלום ואת חיוב המשלם מכוחה החל ממועד מסירת ההודעה על ידי המשלם:
> (1) הנכס או השירות שנרכש בעסקת היסוד לא סופק אף שחלף מועד האספקה שעליו הוסכם בין המשלם ובין המוטב, ואם מועד האספקה כאמור טרם חלף – המוטב הפסיק, דרך קבע, לספק נכסים או שירותים מסוגו של הנכס או השירות שנרכש בעסקה;
> (2) המשלם הודיע למוטב על ביטול עסקת היסוד, ככל שהיה ניתן להודיע לו על כך.

*Gist:* If you paid by a guaranteed payment (a card payment) and tell your issuer that the goods or service were not supplied by the agreed date (or the seller has permanently stopped supplying them) and that you notified the seller of cancellation where possible, the issuer must stop executing the payment and charging you from the date of your notice. ([s. 17(א)](https://he.wikisource.org/wiki/חוק_שירותי_תשלום#סעיף_17))

Points to note:

- **Both conditions.** Non-supply after the agreed date *and* cancellation notice to the seller "ככל שהיה ניתן" (as far as it was possible to notify him). Send the seller a cancellation notice first, and keep it.
- **It stops charging from the notice.** It protects amounts not yet charged: instalments, a charge not yet debited on your monthly statement. For amounts already debited, the statute does not give a refund; you are in the card network's chargeback process (below).
- **Partial supply:** the section applies to the part not supplied, if the price can be separated (s. 17(ג)).
- **The issuer may re-charge** if it finds the conditions were not met, after a written, reasoned notice at least 15 days before the charge, with copies of its documents on request (s. 17(ב)).
- **Wrong goods or defects are not "non-supply".** Section 17 is about things not supplied at all; a broken or fake item is a contract dispute with the seller (and a chargeback claim under network rules).

### Charges you did not make: misuse and card-not-present payments (ss. 27, 29)

> חויב משלם בשל פעולת תשלום במסמך חסר והודיע לנותן שירותי התשלום למשלם, בתוך 30 ימים מיום שמסר לו הודעה על החיוב, כי הוא לא ביצע את פעולת התשלום או כי הסכום לחיוב הוגדל בלא הרשאה, ישיב לו נותן שירותי התשלום למשלם את סכום החיוב בערכו ביום החיוב, ...; הסכום כאמור יושב בתוך שמונה ימי עסקים מיום מסירת הודעת המשלם...

*Gist:* For a payment with no signed document and no strongly authenticated record of your consent (a typical online card-not-present charge), if you tell your issuer within 30 days of the charge notice that you did not make it, or that the amount was increased without authority, the issuer must refund within eight business days, subject to its right to re-charge on reasoned notice. ([s. 29(ב)](https://he.wikisource.org/wiki/חוק_שירותי_תשלום#סעיף_29))

If the payment *was* strongly authenticated (for example a one-time code to your phone), s. 29 does not apply; you report misuse instead, and the issuer refunds misuse charges beyond your limited liability within eight business days of your notice, with the same right to re-charge if, for example, you acted fraudulently (s. 27). See [current numbers](../../references/current-numbers.md) for the periods.

### Foreign payment providers and rogue dealers

- A payment service provider that is not an Israeli resident is bound by the Law when it serves Israeli residents and targets Israeli customers, judged by factors such as an Israeli address, Hebrew, or shekel prices (s. 47). This can bring a foreign wallet or payment app within the Law. (⚠️ Whether a specific service such as PayPal is treated as "targeting" Israel has not been checked for this module.)
- Since 2024, the Consumer Protection Commissioner can declare a dealer an "aggravated-circumstances breacher" (repeated misleading, unfair influence or failure to refund cancelled transactions, against vulnerable consumers, with threats, or with special harm to many consumers). Supervised payment providers must then freeze and return payments to that dealer ([Consumer Protection Law ss. 22כז–22לב](https://he.wikisource.org/wiki/חוק_הגנת_הצרכן#סעיף_22כח); [Payment Services Law s. 18א](https://he.wikisource.org/wiki/חוק_שירותי_תשלום#סעיף_18א)). The regime works through Israeli-supervised payment providers; its reach to purely foreign sellers is limited.
- If the seller becomes insolvent, s. 18 lets the issuer stop transferring money for goods not yet supplied once an insolvency application is filed.

### Israeli consumer law and the foreign seller

The Consumer Protection Law has no clause on its territorial reach. Its distance-sale rules (cancellation within 14 days of receipt or of the disclosure document, refund within 14 days, cancellation fee capped, lesson [20.7](../module-20/lesson-07.md)) apply to a "dealer" (עוסק). Whether an Israeli court applies them to a foreign seller is a choice-of-law question (lesson 30.3): the seller's terms may choose its own law; you can argue that the protective rules are mandatory, or that the clause deprives you of particular claims (Ben Hamo); and in practice, if neither side proves the foreign law, the court tends to decide by Israeli law. Exemplary damages under s. 31א need a prior written demand.

### Customs and VAT are separate

Taxes on personal imports are collected by the Tax Authority under customs and VAT law, not by the seller's contract. The exemption threshold for personal parcels was changed and contested in 2025–2026; check the Tax Authority's current guidance before relying on any figure (⚠️ manual check). Paying import tax does not affect your rights against the seller.

### Network chargebacks and platform protection: practice, not law

- **Card network chargebacks** (Visa, Mastercard and others) are rules between banks. Your issuer may file a chargeback for "goods not received", "not as described", "cancelled recurring charge" and similar reasons, within time limits set by the network. You have no statutory right to a chargeback as such; your statutory rights are ss. 17, 27 and 29 above. In practice, issuers ask for a written dispute, the order, your correspondence with the seller and proof of cancellation or return.
- **Platform buyer protection** (PayPal, marketplaces) is a contract term of the platform: you open a dispute inside the platform within its deadline, escalate it to a claim, and the platform decides. Read the current terms; deadlines are often counted from the payment date, and opening a card chargeback at the same time may close the platform case.

## Leading cases

### Key text: Payment Services Law 2019, ss. 17 and 29

No Supreme Court ruling on these sections was verified for this module. The statute is the authority: quote it in your notice. [Wikisource](https://he.wikisource.org/wiki/חוק_שירותי_תשלום)

### רע״א 5860/16 Facebook Inc. נ׳ בן חמו (31.5.2018): recap

Lessons 30.2–30.3: a foreign-court clause in a consumer's standard contract with a global platform is presumed depriving and was struck; the foreign-law clause stood absent proof that it removed specific claims. Why it matters here: it is your answer when a foreign seller's terms say you may sue only in its home country. [Full text (law.co.il)](https://www.law.co.il/media/computer-law/ben_hemo2.pdf)

## How it works in practice

### The order of steps

| Step | When | Deadline driver |
|---|---|---|
| 1. Written demand and cancellation to the seller | At once, by e-mail and through the site's form; keep screenshots | Your consumer cancellation period; s. 17(א)(2) requires cancellation notice where possible |
| 2. Platform dispute (if you paid through a platform) | Before its deadline | Platform terms |
| 3. Notice to your card issuer: s. 17 (not supplied) or s. 29 (not your charge) | As soon as delivery is overdue, or within 30 days of the charge notice for s. 29 | Statute; network chargeback limits |
| 4. Complaint to the Consumer Protection and Fair Trade Authority | If the seller targets Israel (Hebrew, shekels) or there is a pattern | None, but early helps |
| 5. Small claim in Israel with service abroad | If money is still lost and the seller has a reachable presence | Limitation; collection prospects |

### What to keep

The order confirmation, the advertisement or listing, delivery tracking, all messages, the cancellation notice and its date, the card statement, photographs of what arrived.

## Worked example

Hadas Kaplan, a nurse from Kiryat Shmona, ordered a ₪1,250 winter coat from a fashion site with a Hebrew interface and prices in shekels, operated by a company in Hong Kong, paying by credit card in three instalments. Delivery was promised by 15 November. On 1 December nothing had arrived; the tracking number showed "label created". Customer service stopped answering.

1. **Seller:** on 2 December she e-mails a cancellation notice for non-delivery, citing the late delivery and the Consumer Protection Law s. 14ג, and demands a refund within 14 days (s. 14ה).
2. **Issuer, s. 17:** on 3 December she writes to her card issuer: the coat was not supplied by the agreed date, and she has notified the seller of cancellation (attached). The issuer must stop charging the remaining two instalments from the date of her notice.
3. **Already charged instalment:** she asks the issuer to open a chargeback under the network's "goods not received" rule for the first instalment, with the same documents.
4. **Result:** the issuer stops the instalments and, two weeks later, credits the first instalment after the chargeback. The seller later claims it shipped; the issuer may re-charge only after a reasoned 15-day notice (s. 17(ב)), and Hadas then has time to answer with the tracking evidence.
5. **If the issuer refuses:** a complaint to the Bank of Israel's Banking Supervision public enquiries unit (⚠️ manual check of the current route for non-bank issuers) and, if needed, a small claim against the issuer in Israel, which is easier than suing the Hong Kong company.

## Do it yourself

### You need

- A real or invented failed foreign purchase: the order, card statement, messages.
- 45 minutes.

### Steps

1. **Classify the problem (5 min):** not supplied; wrong or defective; not your charge; subscription after cancellation.
2. **Pick the legal hook (5 min):** s. 17, s. 29 or s. 27, or none (contract dispute only).
3. **Draft the cancellation and demand to the seller (10 min)**, in English if the seller is abroad, with the Hebrew legal basis in brackets.
4. **Draft the notice to the issuer (15 min)** using the template below.
5. **Write your follow-up plan (10 min):** platform dispute, regulator, small claim, with dates.

### Template

```text
לכבוד: ____________ (שם חברת כרטיסי האשראי / הבנק), מחלקת בירורים
באמצעות: דוא"ל / טופס מקוון / דואר רשום
תאריך: ________

הנדון: הודעה לפי סעיף 17 לחוק שירותי תשלום, התשע"ט-2019 – בקשה להפסקת חיוב
מספר כרטיס (4 ספרות אחרונות): ____  |  בית העסק: ____________  |  תאריך העסקה: ________  |  סכום: ________

1. ביום ________ רכשתי באתר ____________ את ____________ (נספח א – אישור הזמנה).
2. מועד האספקה המוסכם היה ________; הנכס לא סופק עד היום (נספח ב – מעקב משלוח).
3. ביום ________ הודעתי לבית העסק על ביטול העסקה (נספח ג).
4. לפיכך מתקיימים התנאים שבסעיף 17(א) לחוק, ואבקשכם להפסיק את ביצוע הוראת התשלום ואת חיובי בשלה החל ממועד הודעה זו, לרבות התשלומים שטרם חויבו.
5. לגבי סכום שכבר חויב – אבקשכם לפתוח בירור והחזר חיוב (chargeback) מול בית העסק לפי כללי הארגון הבינלאומי, ולעדכן אותי בכתב.
6. אם תסברו כי לא התקיימו התנאים, אבקש הודעה מנומקת בכתב ואת העתקי המסמכים שבידיכם (סעיף 17(ב)).

בכבוד רב,
____________  ת"ז ____________  טלפון ____________
```

For a charge you did not make, replace items 1–4 with: "לא ביצעתי את פעולת התשלום / הסכום הוגדל בלא הרשאה; אבקש השבה לפי סעיף 29(ב) לחוק בתוך שמונה ימי עסקים", and send it within 30 days of the statement that showed the charge.

### How you know it worked

- Your issuer notice names the right section and attaches proof of both s. 17 conditions.
- You sent the seller a cancellation notice before (or with) the issuer notice.
- You have a dated plan for the next step if the issuer refuses or re-charges.

### Self-check

- [ ] I know that the Debit Cards Law was repealed in 2020 and what replaced it.
- [ ] I can state the two conditions of s. 17 and what it does and does not do for amounts already charged.
- [ ] I can state the s. 29 window and refund period.
- [ ] I can tell a statutory right from a network chargeback or a platform rule.
- [ ] I can argue for Israeli consumer law against a foreign seller and name the limits.

## Without a lawyer

> [!IMPORTANT]
> Act in your own name only. This is not legal advice — check current rules before filing.

### Can you do this yourself?

Yes. Notices to your issuer, platform disputes and regulator complaints are things every consumer does for himself. A small claim against the issuer or the seller is designed for self-representation ([can I act without a lawyer](../../references/can-i-act-without-a-lawyer.md)); in small claims a lawyer appears only with leave.

### Where and how

- **Issuer:** its written disputes channel (online form or e-mail); keep the confirmation.
- **Consumer Protection and Fair Trade Authority:** online complaint form on gov.il (⚠️ manual check).
- **Complaints against banks and card issuers:** Bank of Israel, Banking Supervision Department, public enquiries (⚠️ manual check for non-bank issuers).
- **Small claims:** lesson [08.3](../module-08/lesson-03.md); for a foreign defendant add the request for service abroad (lesson 30.2). Fees and ceiling: [current numbers](../../references/current-numbers.md).

### Stop and get a lawyer when

- The amount is above the small-claims ceiling and the seller is abroad.
- You face a counterclaim or a demand from a foreign collection agency (check first whether a foreign judgment exists: lesson 30.5).
- The dispute is with a business you run, not as a consumer (the CISG may apply, lesson 30.3).

## What goes wrong

| Mistake | Consequence | How to fix | How to avoid |
|---|---|---|---|
| Citing the repealed Debit Cards Law | The issuer replies that the law no longer exists | Resend under the Payment Services Law | Use ss. 17, 27, 29 of the 2019 Law |
| Notice to the issuer without cancelling with the seller | s. 17(א)(2) not met | Send the cancellation and renew the notice | Cancel with the seller first |
| Using s. 17 for a defective item | Refused: the item was supplied | Use the chargeback and a claim against the seller | Match the hook to the problem |
| Missing the 30-day window of s. 29 | Statutory refund lost | Report as misuse (s. 27) if it fits; ask for a goodwill chargeback | Check statements monthly |
| Opening a platform dispute and a chargeback at once | The platform may close its case | Follow one route at a time | Read the platform terms first |

## Review

- The Payment Services Law 2019 replaced the Debit Cards Law on 14.10.2020.
- Section 17: not supplied by the agreed date plus cancellation notice to the seller means the issuer stops charging from your notice; amounts already charged go through the network chargeback.
- Section 29: a card-not-present charge you did not make, reported within 30 days, is refunded within eight business days.
- Chargebacks and platform buyer protection are practice, not statutory rights; use them in order.
- Israeli consumer law against a foreign seller is a choice-of-law question; a foreign-court clause in a consumer's terms is usually void (Ben Hamo).

### Learn more

None. No free external unit on the Payment Services Law could be verified; read ss. 17, 27 and 29 on Wikisource.
