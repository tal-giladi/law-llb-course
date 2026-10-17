---
id: "11.5"
module: 11
minutes: 25
practice_minutes: 120
prerequisites: ["11.1", "11.2", "11.4", "08.2", "08.3", "08.6"]
objectives:
  - "Calculate the expected value of a claim, including the chance of winning, the chance of collecting, court fees, costs awards in both directions, interest, time and your own effort."
  - "Apply the costs rules of the Civil Procedure Regulations 2018 (regs 151–157) and the fee rules of the Courts (Fees) Regulations (regs 6 and 14) to a concrete claim."
  - "Decide, with a written worksheet, whether to sue, settle or drop a dispute of your own, and set a reasoned walk-away figure for negotiation."
volatility: implementation
sources:
  - title: "תקנות סדר הדין האזרחי, התשע״ט–2018, regs 4, 37(י), 53, 151–157 (ויקיטקסט)"
    url: https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי
  - title: "תקנות בתי המשפט (אגרות), התשס״ז–2007, regs 6, 14 and Schedule items 1, 34 (ויקיטקסט)"
    url: https://he.wikisource.org/wiki/תקנות_בתי_המשפט_(אגרות)
  - title: "תקנות שיפוט בתביעות קטנות (סדרי דין), התשל״ז–1976 (ויקיטקסט)"
    url: https://he.wikisource.org/wiki/תקנות_שיפוט_בתביעות_קטנות_(סדרי_דין)
  - title: "חוק פסיקת ריבית והצמדה, התשכ״א–1961, s. 2 (ויקיטקסט)"
    url: https://he.wikisource.org/wiki/חוק_פסיקת_ריבית_והצמדה
  - title: "חוק הסיוע המשפטי, התשל״ב–1972, s. 6 (ויקיטקסט)"
    url: https://he.wikisource.org/wiki/חוק_הסיוע_המשפטי
  - title: "הרשות השופטת, דו״ח שנתי 2023"
    url: https://www.gov.il/BlobFolder/news/spokesmenmessage090724/he/%D7%93%D7%95%D7%97%20%D7%A9%D7%A0%D7%AA%D7%99%202023%20%D7%94%D7%A0%D7%94%D7%9C%D7%AA%20%D7%91%D7%AA%D7%99%20%D7%94%D7%9E%D7%A9%D7%A4%D7%98.pdf
last_verified: "2026-10-17"
---

# 11.5 · Practice lab: should you sue? Expected value, costs, risk and time

In this lab you will take a real dispute of your own (or the supplied one) and decide, in writing and with numbers, whether to sue, settle or let it go. You will price every element that a careful litigant weighs: the chance of winning, the chance of actually collecting, the court fee, the costs the court may award for or against you, interest, the months the case will take, and your own time and stress. You will end with a completed worksheet and a walk-away figure you can carry into any negotiation.

## Why it matters

The question "Am I right?" is not the same as "Should I sue?". People with good claims lose money by suing a defendant who cannot pay, by turning down a fair offer out of anger, or by spending three working days to recover ₪800. People with fair claims fail to sue because they overestimate the cost and the risk. Lessons 11.1–11.4 gave you the tools: incentives and settlement ranges, the biases that distort judgment, the barriers people meet, and the base rates for time. This lab puts them in one calculation.

The calculation does not replace judgment. Some cases are worth bringing for principle, for others in the same position, or to stop a pattern; some are not worth bringing even with a positive expected value, because the relationship or your health matters more. But you should know the price of the choice you make.

## Key terms

| עברית | Transliteration | English |
|---|---|---|
| תוחלת | tohelet | expected value |
| סיכוי וסיכון | sikui ve-sikun | chance and risk |
| אגרת בית משפט | agrat beit mishpat | court fee |
| הוצאות משפט | hotza'ot mishpat | legal expenses (court costs other than lawyer's fees) |
| שכר טרחת עורך דין | skhar tirhat orekh din | lawyer's fee (as part of a costs award) |
| ערובה להוצאות | arevut le-hotza'ot | security for costs |
| ריבית שקלית / הפרשי הצמדה | ribit shiklit / hefreshei hatsmada | shekel interest / linkage differentials |
| ערך פשרה | erekh pshara | settlement value |
| נקודת יציאה | nekudat yetsi'a | walk-away figure (reservation point) |

## The law

### Costs follow the result, the resources and conduct

> חיוב בעל דין בתשלום הוצאות נועד לשפות את בעל הדין שכנגד על הוצאותיו בהליך בהתחשב בתוצאותיו, במשאבים שנדרשו לניהולו ובהתנהלות בעלי הדין.

*Gist:* Costs compensate the other side for its expenses, in light of the result, the resources needed and the parties' conduct. ([reg. 151(א)](https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי)) The court must balance access to the courts, property and equality (reg. 151(ב), lesson 11.3), and may award costs for abuse of process or breach of the Regulations, even against a lawyer in special cases (reg. 151(ג)).

> בתום הדיון יפסוק בית המשפט הוצאות סבירות והוגנות, זולת אם מצא שקיימים טעמים מיוחדים שלא לחייב בהוצאות כאמור.

*Gist:* At the end of the hearing the court awards reasonable and fair costs, unless there are special reasons not to. ([reg. 152](https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי)) In practice: if you lose, expect to pay something.

The amount: a lawyer's fee awarded to a winning party is not less than the Bar Association's minimum recommended tariff unless the court orders less for special reasons (reg. 153(א)); the court considers the relief granted against the sum claimed, the conduct of the case, its complexity, the resources invested and the costs requested, and must give reasons (reg. 153(ג)–(ד)).

> בית המשפט יפסוק הוצאות משפט, ובלבד שבעל הדין פירט בסיכומי טענותיו באופן מפורש ומפורט את הוצאות המשפט כפי שנדרשו לצורך ההליך וצירף מסמכים התומכים בכך.

*Gist:* Legal expenses are awarded only if the party listed them explicitly and in detail in the closing submissions and attached supporting documents. ([reg. 155(א)](https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי)) For a self-represented party, whose recovery is usually expenses rather than a lawyer's fee (lesson 08.1), this rule decides whether you get anything.

Further rules that change the numbers: costs for each motion, regardless of the final result (reg. 53); costs for prolonging the case needlessly (reg. 156); security for the defendant's costs, on pain of striking out the claim (reg. 157); costs for not attending the mediation-intake meeting (reg. 37(י)); and costs for abuse of process (reg. 4, lesson 08.1).

### The court fee: two halves and a refund for early settlement

> בתביעה כאמור בפרטים 1, 8 או 22 לתוספת, תשולם אגרה בשני שיעורים:

*Gist:* In a claim for a fixed sum the fee is paid in two halves: the first on filing, the second (linked to the index) before the first hearing date. ([Courts (Fees) Regulations reg. 6(א)](https://he.wikisource.org/wiki/תקנות_בתי_המשפט_(אגרות))) If the case ends before the end of the third pre-trial hearing because it was withdrawn, settled, or sent to arbitration or successful mediation, the fee is refunded less a fixed deduction (reg. 6(ב)); the second half is not due at all if the case ends before the hearing begins (reg. 6(ג)). The rate, minimum and deduction are in [current numbers](../../references/current-numbers.md). The small-claims fee is a lower percentage with a low minimum (same page). A person who cannot pay may ask for an exemption with the first filing (reg. 14); a winner who was exempted may have the fee charged to the other side (reg. 14(י)).

### Interest runs from filing

A court that awards a sum may add shekel interest, and in some cases linkage or other rates; for the judgment sum the period runs by default from the day the claim was filed until payment, and for costs from the day of the decision (Adjudication of Interest and Linkage Law s. 2(א)–(ב), as amended in 2024). ([s. 2](https://he.wikisource.org/wiki/חוק_פסיקת_ריבית_והצמדה)) Interest partly compensates you for time; it does not compensate for your effort.

### If you have Legal Aid

Costs and lawyer's fees awarded to an aided person are treated as awarded to the State Treasury; the office repays the person's own reasonable expenses from them, unless the court orders otherwise. ([Legal Aid Law s. 6](https://he.wikisource.org/wiki/חוק_הסיוע_המשפטי))

## Leading cases

### Key text: Chapter 18 of the Civil Procedure Regulations (regs 151–157)

No free Supreme Court decision on costs could be opened for this lab, so the Regulations are the authority. Read chapter 18 in full on [Wikisource](https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי) (about 10 minutes). Three practical points follow from its text: costs are the default (reg. 152); the amount depends on conduct and on the ratio between what you claimed and what you won (reg. 153(ג)), so an inflated claim can cost you even if you win; and expenses you do not list with documents in your summations are lost (reg. 155(א)).

### Key text: lesson 08.6 and the settlement range

The settlement value of a case lies between the plaintiff's expected net recovery and the defendant's expected total cost of defending. Lesson 08.6 explains how to write a settlement that can be enforced; this lab gives you the figures to decide whether to sign it.

## How it works in practice

### The expected-value formula

For a money claim, your expected net result from suing is

$$EV = p \cdot c \cdot (J + I) + p \cdot K_{w} - (1-p) \cdot K_{l} - F - E - T$$

| Symbol | Meaning | Where it comes from |
|---|---|---|
| $p$ | probability you win (or the share of the claim you expect to win) | your evidence and the law; lessons on the substance |
| $c$ | probability you actually collect | the defendant's assets; lesson 08.7 |
| $J$ | the amount you expect to be awarded | your documents, not your hopes |
| $I$ | interest from filing to payment | Interest Law s. 2 |
| $K_w$ | costs awarded to you if you win | regs 152–155; for a self-represented party, mainly documented expenses |
| $K_l$ | costs you pay if you lose | regs 151–153 |
| $F$ | court fee you will not get back | Fees Regulations; [current numbers](../../references/current-numbers.md) |
| $E$ | other expenses: expert, translation, service, travel | quotes and receipts |
| $T$ | value of your time and stress | days off work at your daily wage, plus an honest figure for stress |

Then compare $EV$ with a settlement offer $S$ that is paid now and certain. If $S \geq EV$, the offer is at least as good on the numbers, before you add your own risk aversion (a certain sum is worth more to most people than a gamble with the same average, lesson 11.2) and the time value of money.

### Settlement range

The defendant also has an expected cost of defending: the expected judgment and interest, its own lawyer's fees, its time, and the costs it may pay. Any settlement between your $EV$ and the defendant's expected cost leaves both better off than a trial. That range is the space you negotiate in; your **walk-away figure** should sit at or slightly above your $EV$.

### Sensitivity: which number matters most

Change one number at a time and see how $EV$ moves. In most small disputes the decisive numbers are $p$ (be honest; lesson 11.2), $c$ (a judgment against a person with nothing is worth little) and $T$ (your days). A 10-point change in $p$ usually matters more than the court fee.

### Decision rules of thumb

- **Sue** when $EV$ is clearly positive, the defendant can pay, and the offer on the table is well below $EV$.
- **Settle** when an offer is at or above your $EV$, or close to it and certain.
- **Drop or wait** when $EV$ is negative or $c$ is very low, unless a principle, a pattern of conduct or other people in your position justify going on (then consider a regulator, a class action or an organisation).
- **Check the deadline** in every case: limitation (see [current numbers](../../references/current-numbers.md)) can force the decision.

## Worked example

Michal Azulay, a nurse from Sderot, left a rented flat in June 2026. The landlord, a private individual who owns three flats, kept her ₪9,000 deposit, claiming damage to the walls. Michal has a signed entry inventory, photos from the day she left, and a painter's quote showing that the walls were only dirty (₪1,200 to repaint). The landlord has offered to return ₪5,000.

| Item | Estimate | Reasoning |
|---|---|---|
| $J$ | ₪7,800 | She claims ₪9,000; she expects ₪9,000 less the ₪1,200 a court might allow for repainting |
| $p$ | 0.8 | Strong documents; the landlord has only his word |
| $c$ | 0.95 | He owns flats; an execution file would likely succeed |
| $I$ | about ₪200 | Shekel interest from filing for about 6 months (estimate) |
| $K_w$ | ₪300 | Her documented expenses (copies, travel), if she lists them (reg. 155) |
| $K_l$ | ₪500 | A modest award against her if she loses (estimate) |
| $F$ | ₪90 | Small-claims fee of 1% of the ₪9,000 claimed (current numbers) |
| $E$ | ₪0 | No expert needed; the painter's quote is enough in small claims |
| $T$ | ₪1,400 | Two days off (₪600 each) and ₪200 for stress |

$$EV = 0.8 \times 0.95 \times (7{,}800 + 200) + 0.8 \times 300 - 0.2 \times 500 - 90 - 0 - 1{,}400$$

$$EV = 6{,}080 + 240 - 100 - 90 - 1{,}400 = 4{,}730$$

1. **Compare.** The offer of ₪5,000, paid now, is slightly above her $EV$ of ₪4,730. On the numbers alone, it is acceptable.
2. **Sensitivity.** If she can file and attend in one day, $T$ falls to ₪800 and $EV$ rises to ₪5,330. If her chance is really 0.9, $EV$ rises by about ₪800. Her real position is better than the offer.
3. **The landlord's side.** If he defends, he risks paying about ₪7,800 plus interest and costs, and a day in court; his expected cost is around ₪6,500–7,000.
4. **Range and walk-away.** The settlement range is roughly ₪5,000–7,000. She sets her walk-away figure at ₪5,500, framed around the documents and his costs of defending (lesson 11.2).
5. **Outcome.** She writes a pre-action letter offering to settle for ₪7,000 within 14 days. He offers ₪6,000; she accepts in writing, payable within 7 days, with a default clause.

The worksheet did not tell her she was right; it told her how much being right was worth, net.

## Do it yourself

### You need

- One money dispute of your own: a deposit, an unpaid invoice, a defective product or repair, a refund, an insurance payout. If you have none, use the supplied case below.
- Your documents, and any offer the other side has made.
- The [decision worksheet (האם לתבוע?)](../../templates/should-you-sue-worksheet.md), the [current numbers](../../references/current-numbers.md) page and the Judiciary's annual report (lesson 11.4).
- A calculator or spreadsheet. 120 minutes.

**Supplied case (invented).** Yousef Haddad, a graphic designer in Nazareth, did work worth ₪18,500 for a small events company, "א.ל. אירועים בע״מ", under an email agreement. The company paid ₪4,000 and stopped answering. It is still trading and posts new events weekly. It now offers ₪8,000 "to close the matter". Yousef earns about ₪900 a day.

### Steps

1. **Facts and forum (15 min).** Write the claim in three sentences, the amount you can document, and the forum: small claims if you are an individual and the sum is within the ceiling, otherwise the magistrates' court (lesson 08.3). Note the limitation date.
2. **Chance of winning, $p$ (20 min).** List the elements you must prove and the document for each. Give each element a probability; your $p$ is roughly their product if all are needed. Write the other side's best argument and lower $p$ if it is strong. Do not round up.
3. **Chance of collecting, $c$ (10 min).** Is the defendant a company that is still trading, an individual with property or wages, or someone with nothing? Check what you can lawfully: company status, public information, lesson 08.7.
4. **Costs (20 min).** Fill the cost lines: court fee (and whether the two-half rule and refund for early settlement apply), expenses, a cautious figure for costs you might pay if you lose, and the documented expenses you could recover if you win. Note regs 152, 153 and 155.
5. **Time (10 min).** From the 2023 report, take the base rate for your court (lesson 11.4) and adjust it. Estimate interest roughly for that period.
6. **Your time and stress, $T$ (5 min).** Days off, travel, preparation hours at your hourly rate, and an honest figure for stress.
7. **Calculate (15 min).** Compute $EV$. Then run three sensitivity checks: $p$ ±0.1, $c$ ±0.2, $T$ halved and doubled.
8. **Range and walk-away (10 min).** Estimate the other side's expected cost of defending. Write the settlement range and your walk-away figure.
9. **Decision (15 min).** Decide: sue, settle (at what figure), or drop or wait. Write three sentences explaining why, including any non-money reason. Draft the first step: an offer, a pre-action letter (template in lesson 08.8) or a note to diarise the limitation date.

### Template

[Decision worksheet: should you sue? (האם לתבוע?)](../../templates/should-you-sue-worksheet.md)

### How you know it worked

- Every number in your worksheet has a source: a document, a regulation, the current-numbers page, the annual report or a stated assumption.
- Your $EV$ changes in the way you expect when you change $p$, $c$ or $T$.
- Your walk-away figure is written down before you talk to the other side.
- For the supplied case, your $EV$ comes out above the ₪8,000 offer if you assess $p$ and $c$ as high, and close to or below it if collection is doubtful, and your answer explains which inputs drive the difference.

### Self-check

- [ ] I can write and explain each term of the expected-value formula.
- [ ] I can state what regs 152, 153(ג) and 155(א) mean for a self-represented plaintiff.
- [ ] I know when the second half of a magistrates' court fee is not due and when part of the fee is refunded.
- [ ] I set a walk-away figure and can say why it is where it is.

## Without a lawyer

### Can you do this yourself?

Yes. Deciding whether to sue, and negotiating your own settlement, is something every person may do for themselves. Individuals may file and argue their own claims in the small-claims and magistrates' courts; a company usually needs a lawyer (check per forum, lesson 01.1) and may not sue in small claims at all (lesson 08.3). You may not run this analysis as a service for others (Bar Association Law s. 20).

### Where and how

> [!IMPORTANT]
> Act in your own name only. This is not legal advice — check current rules before filing.

- File online through Net HaMishpat or the Judiciary's small-claims service (lessons 08.3 and 08.8). Check the current fee and ceiling on the [current numbers](../../references/current-numbers.md) page and on the Judiciary's site before paying.
- If you cannot pay the fee, ask for an exemption with your first filing (Fees Regulations reg. 14).
- If you win, list your expenses with receipts in your closing submissions or at the hearing (reg. 155(א)). If the judgment is not paid, open an execution file (lesson 08.9).
- Free help: the court information centres, Legal Aid if you qualify, and Kol-Zchut (see [where to get help](../../references/where-to-get-help.md)).

### Stop and get a lawyer when

- Your $EV$ depends on a disputed point of law or an expert opinion (medical, engineering, valuation).
- The other side has asked the court for security for costs (reg. 157), or has a lawyer and has filed a counterclaim larger than your claim.
- The sum is large relative to your means, so that a costs award against you would be a serious hardship.
- The limitation date is close and you are not sure of the forum.

## What goes wrong

| Mistake | Consequence | How to fix | How to avoid |
|---|---|---|---|
| Using "I am right" as $p = 1$ | You reject fair offers and risk costs | Re-score each element with documents | Write the other side's best argument first |
| Ignoring $c$ | A judgment you cannot collect | Check assets before filing; consider settling | Research the defendant early |
| Claiming more than you can prove to "anchor" | Higher fee, smaller costs award under reg. 153(ג) | Amend the sum | Claim what your documents support |
| Not listing expenses in summations | Nothing recovered under reg. 155(א) | Ask to submit the list with receipts if still possible | Keep every receipt and list them |
| Forgetting the second fee half | The case may not proceed until paid | Pay promptly with linkage | Diarise it from the date of the first hearing |
| Deciding on sunk costs | Throwing good money after bad | Recalculate on future costs only | Re-run the worksheet at each stage |

## Review

- Whether to sue is a calculation as well as a question of right: $EV = p \cdot c \cdot (J + I) + p \cdot K_w - (1-p) \cdot K_l - F - E - T$.
- Costs are the default (reg. 152), depend on conduct and on what you won against what you claimed (reg. 153), and expenses must be itemised with documents (reg. 155).
- In the magistrates' court the fee is paid in two halves; early settlement brings a refund less a fixed deduction (Fees Regulations reg. 6); exemption is possible for those who cannot pay (reg. 14).
- The settlement range runs from your $EV$ to the defendant's expected cost of defending; set your walk-away figure before you negotiate.
- The most decisive inputs are usually your honest chance of winning, the chance of collecting and the value of your own time.

### Learn more

- Civil Procedure Regulations 2018, chapter 18 (regs 151–157). FREE-FULL, about 10 minutes: [Wikisource](https://he.wikisource.org/wiki/תקנות_סדר_הדין_האזרחי). Fallback: the Knesset legislation database, https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawHome.aspx.
- Courts (Fees) Regulations, regs 6 and 14 and the Schedule. FREE-FULL, about 15 minutes: [Wikisource](https://he.wikisource.org/wiki/תקנות_בתי_המשפט_(אגרות)). Fallback: the Judiciary's fees information on gov.il (⚠️ blocks bots; open in a browser).
