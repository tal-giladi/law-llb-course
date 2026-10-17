---
id: "17.10"
module: 17
minutes: 25
practice_minutes: 150
prerequisites: ["17.2", "17.3", "17.4", "17.9"]
objectives:
  - "Check a real payslip against the Wage Protection Law Schedule and the protective statutes, and list every defect with its legal source."
  - "Build a final-settlement table (notice, leave, recuperation, overtime, severance and the pension fund's share) with each line's basis and calculation."
  - "Write a demand letter to the employer that a labour court would treat as a proper prior demand, and decide whether to sue and in which track."
volatility: implementation
sources:
  - title: "חוק הגנת השכר, התשי״ח–1958, ss. 17, 20, 24, 25, 26ב and Schedule"
    url: "https://he.wikisource.org/wiki/חוק_הגנת_השכר"
  - title: "חוק פיצויי פיטורים, התשכ״ג–1963, ss. 12, 14, 29"
    url: "https://he.wikisource.org/wiki/חוק_פיצויי_פיטורים"
  - title: "חוק הודעה מוקדמת לפיטורים ולהתפטרות, התשס״א–2001, ss. 3, 7"
    url: "https://he.wikisource.org/wiki/חוק_הודעה_מוקדמת_לפיטורים_ולהתפטרות"
  - title: "חוק חופשה שנתית, התשי״א–1951, ss. 3, 13"
    url: "https://he.wikisource.org/wiki/חוק_חופשה_שנתית"
  - title: "חוק בית הדין לעבודה, התשכ״ט–1969, s. 31 (expedited hearing)"
    url: "https://he.wikisource.org/wiki/חוק_בית_הדין_לעבודה"
last_verified: "2026-10-17"
---

# 17.10 · Practice lab: check a payslip, calculate final settlement and write to the employer

In this lab you take a real ending of employment (your own, a family member's with their consent, or the supplied case) and produce the three documents of almost every employee's dispute: a payslip check, a final-settlement table in spreadsheet form, and a demand letter. If the employer pays, the matter ends there; if not, the same three documents become the backbone of a labour-court claim.

## Why it matters

Most employees who leave a job never check the final settlement. Employers make mistakes (and sometimes rely on employees not checking): recuperation pay forgotten, leave balances wrong, notice paid short, the pension fund's severance treated as the whole severance. A calculation that shows each line, its legal basis and its arithmetic is persuasive to an employer's accountant, to a mediator and to a labour-court judge. It also tells you honestly when the sums are too small to fight about.

## Key terms

| עברית | Transliteration | English |
|---|---|---|
| גמר חשבון | gmar heshbon | final settlement |
| תחשיב | tahshiv | calculation sheet |
| דמי הבראה | dmei havra'a | recuperation pay (from an extension order) |
| פדיון חופשה | pidyon hufsha | redemption of unused leave |
| השלמת פיצויים | hashlamat pitzuyim | severance top-up |
| טופס 161 | tofes 161 | employer's tax form on retirement payments |
| מכתב דרישה | michtav drisha | demand letter |

## The law

Every line of the table rests on a section you met earlier:

| Line | Source | Lesson |
|---|---|---|
| Last wage, on time | Wage Protection Law ss. 9, 12; late-wage compensation s. 17 | 17.3 |
| Pay in lieu of notice | Prior Notice Law ss. 3–4, 7 | 17.4 |
| Leave redemption | Annual Leave Law ss. 3, 13 | 17.2 |
| Recuperation pay | Extension order on recuperation pay (⚠️ rate and days per seniority from secondary sources) | 17.2 |
| Overtime and rest-day pay | Hours of Work and Rest Law ss. 16–17; burden s. 26ב | 17.2, 17.3 |
| Severance and the fund | Severance Pay Law ss. 12, 14, 29; late severance s. 20 | 17.4 |
| Pension deposits | Mandatory pension extension order (⚠️) | 17.4 |

> פשרה לענין פיצויי פיטורים והודאת סילוק לא יהא להם תוקף, אלא אם נערכו בכתב ונאמר בהם במפורש שהם לגבי פיצויי הפיטורים.

*Gist:* A settlement or release about severance is valid only in writing and expressly about severance. ([Severance Pay Law s. 29](https://he.wikisource.org/wiki/חוק_פיצויי_פיטורים)) Sign a receipt for what you received, not a general release, until your table is done.

## Leading cases

None new. Use Kota (lesson 17.1) if your status is disputed, the tips ruling (lesson 17.3) if tips were part of pay, and the s. 26ב presumptions (lesson 17.3) if the employer kept no hours.

## How it works in practice

### Order of work

1. Collect: contract or written terms, all payslips (at least the last 12), the dismissal or resignation letter, your own record of hours, the pension fund's latest statement, bank statements.
2. Check three payslips against the Schedule (lesson 17.3), then scan the rest for changes.
3. Build the table (below) with formulas, so you can change one input and see the effect.
4. Write the demand letter: facts, table, legal basis, a deadline (7–14 days), and the request for the release letter to the fund and form 161.
5. Diary: severance becomes late on day 16 after the end of employment (Wage Protection Law s. 20); late-wage compensation has a 60-day limit from receipt (s. 17א).

### Choosing the track

If the total is under the expedited-hearing ceiling (about ₪40,000; [current numbers](../../references/current-numbers.md)), the claim will be heard in one fast hearing (Labour Court Law s. 31). Wage, minimum-wage and late-wage heads are fee-free; severance and notice heads pay a fee (half in an expedited hearing, Fees Regulations reg. 6). Mediation through the court is often offered at the first hearing (lesson [08.6](../module-08/lesson-06.md)).

## Worked example

Yonatan Tadesse, 29, from Netanya, worked as a monthly-paid warehouse worker from 1 March 2023 to 30 September 2026 (3 years and 7 months). Last basic wage ₪7,200 for a 42-hour, five-day week. He was dismissed on 16 September with notice to 30 September. He has 8 unused leave days, kept his own record showing about 6 unpaid overtime hours a month in the last 12 months, and his pension fund shows severance contributions of 6% from September 2023 (after a six-month waiting period), with a written s. 14 arrangement in his contract. Recuperation for earlier years was paid.

### The final-settlement table

| # | Item | Legal basis | Calculation | Due (₪) |
|---|---|---|---|---|
| 1 | Hourly regular wage | Hours Law s. 18 (regular wage) | 7,200 ÷ 182 | 39.56 |
| 2 | Daily wage (5-day week) | Annual Leave Law s. 10 | 7,200 ÷ 21.67 | 332.26 |
| 3 | Notice due | Prior Notice Law s. 3(3) | one month after the first year | 1 month |
| 4 | Pay in lieu of the missing notice | s. 7(א) | 7,200 × 16 ÷ 30 (14 of 30 days given) | 3,840 |
| 5 | Leave redemption | Annual Leave Law s. 13 | 8 × 332.26 | 2,658 |
| 6 | Recuperation, current year (year 4) | Extension order (⚠️ 7 days in years 4–10; ₪451.50 a day from the 2026 order) | 7 × 7/12 × 451.50 | 1,844 |
| 7 | Unpaid overtime, last 12 months | Hours Law s. 16; Wage Protection Law s. 26ב | 6 × 12 × 39.56 × 1.25 | 3,560 |
| 8 | Severance in full | Severance Pay Law s. 12 | 7,200 × 43 ÷ 12 | 25,800 |
| 9 | Severance for the first 6 months (no fund) | s. 12 | 7,200 × 6 ÷ 12 | 3,600 |
| 10 | Severance for the 37 funded months | s. 12 | 7,200 × 37 ÷ 12 | 22,200 |
| 11 | Covered by the fund at 6% (72%) | s. 14; general approval (⚠️) | 22,200 × 72% | 15,984 |
| 12 | Employer's top-up for funded months | s. 14 | 22,200 − 15,984 | 6,216 |
| 13 | Severance top-up total | | 3,600 + 6,216 | 9,816 |
| 14 | **Total demanded from the employer** | | 3,840 + 2,658 + 1,844 + 3,560 + 9,816 | **21,718** |
| 15 | Plus: release letter to the fund for its severance balance | s. 14 | about 15,984 plus returns | — |

Spreadsheet tip: put the inputs (wage, months, leave days, overtime hours, rates) in separate cells and every line as a formula (for example `=B1/182` for line 1 and `=B1*B2/12` for line 8), so that a corrected input updates the total.

Checks on the table: line 6 uses the 2026 rate only if the order applies to the period (⚠️ if the employer argues the old ₪418 rate, the difference is about ₪137); line 7 depends on Yonatan's own record, which the court may accept if the employer has no attendance records (s. 26ב). The total is below the expedited-hearing ceiling.

## Do it yourself

> [!IMPORTANT]
> Act in your own name only. This is not legal advice — check current rules before filing.

### You need

- Your own (or, with consent, a family member's) payslips for the last 12 months, contract or written terms, ending letter, pension statement and hours record; or Yonatan's facts as a dry run.
- A spreadsheet program (LibreOffice Calc, Google Sheets or Excel).
- The [payslip and final-settlement worksheet](../../templates/payslip-and-final-settlement-worksheet.md) and the [letter to employer](../../templates/letter-to-employer-wage-claim.md).
- [Current numbers](../../references/current-numbers.md) for the minimum wage, recuperation rate and expedited-hearing ceiling.
- About 150 minutes, in two sittings.

### Steps

**Part A: the payslip check (40 min)**

1. **Three payslips (20 min).** Tick the nine Schedule groups on the last three payslips (worksheet part A). List every missing item.
2. **Rates (10 min).** Hourly wage against the minimum; overtime lines against your hours.
3. **Balances and pension (10 min).** Leave and sick balances move correctly; pension contributions match the fund statement.

**Part B: the final-settlement table (60 min)**

4. **Inputs (10 min).** Enter start and end dates, last wage, monthly hours, leave balance, overtime hours, fund data, recuperation rate.
5. **Lines (35 min).** Build lines 1–15 of the model table with formulas, deleting lines that do not apply and adding any others (late wages, travel, tips, minimum-wage shortfall).
6. **Sources (10 min).** Next to each line, the section and lesson.
7. **Sense check (5 min).** Is any line suspiciously large or small? Recheck its input.

**Part C: the letter and the decision (50 min)**

8. **Letter (30 min).** Fill in the letter template: facts, the table as an annex, the legal basis, the amount, a 14-day deadline, the release letter to the fund, form 161, corrected payslips.
9. **Decision (10 min).** Write two lines: if the employer does not pay, will you sue? In which court and track? Is the amount worth the time (lesson [11.5](../module-11/lesson-05.md))?
10. **Send or keep (10 min).** If this is your own current matter and the facts are solid, send the letter by email and registered mail and keep proof; otherwise keep it as a dry run.

### Template

- [Payslip and final-settlement worksheet](../../templates/payslip-and-final-settlement-worksheet.md).
- [Letter to employer: wage and final-settlement demand](../../templates/letter-to-employer-wage-claim.md).

### How you know it worked

- Every line of your table has a legal source and a formula; changing the wage changes the total.
- Your severance line separates the period covered by a s. 14 arrangement from any period not covered.
- Your letter states an amount, a deadline and exactly what documents you want, and attaches the table.
- You signed no general release.

### Self-check

- [ ] My payslip check cites Schedule items.
- [ ] My notice line uses the right section for my pay basis.
- [ ] My leave and recuperation lines use my seniority.
- [ ] My overtime line is backed by my own record.
- [ ] I know which heads are fee-free and whether my total falls in the expedited track.

## Without a lawyer

### Can you do this yourself?

Yes. Calculating and demanding your own final settlement, and suing for it, are your own affairs (lessons 17.1 and 17.9 on representation). Preparing these documents for other people as an occupation is reserved to lawyers (Bar Association Law s. 20); helping a family member without pay is not an occupation, but they must sign and send it themselves.

### Where and how

- Send the letter to the employer's registered address and HR or payroll email; keep the delivery proof.
- If unpaid: the regional labour court for the place of work; standard forms for wage and severance claims (procedure regs reg. 13); fee rules and the expedited ceiling in [current numbers](../../references/current-numbers.md).
- Free help: the court's information desks or volunteer desks where they operate, workers' rights NGOs, your union, Kol-Zchut's final-settlement guide (⚠️ manual check).

### Stop and get a lawyer when

- The employer is insolvent, in liquidation or disappeared (claims go to the liquidator and the NII's insolvency benefit).
- Your status as an employee is disputed and the sums are large (Kota calculations need expert evidence).
- The employer counterclaims or accuses you of theft or damage.

## What goes wrong

| Mistake | Consequence | How to fix | How to avoid |
|---|---|---|---|
| Hard-coding numbers instead of formulas | One error spreads unseen | Rebuild with input cells | Inputs on top, formulas below |
| Treating gross wage with overtime as the severance base | Over-claiming; credibility lost | Use the severance wage (basic + listed increments) | Read severance regs reg. 1 |
| Forgetting the period before pension deposits began | Severance top-up missed | Add a line for unfunded months | Check the fund's first deposit date |
| Demanding without a deadline | No clear refusal to sue on | Send a short reminder with a date | Always give 7–14 days |
| Signing "no further claims" to get the last cheque | Arguments about waiver | Rely on s. 29 and narrow reading | Sign a receipt only |

## Review

- Collect payslips, terms, the ending letter, hours record and fund statement before calculating.
- Each final-settlement line needs a legal source and a formula: notice, leave, recuperation, overtime, severance minus the fund's share under s. 14.
- Severance waivers need writing and express reference (s. 29); sign receipts, not releases.
- Small claims go to an expedited hearing; wage heads are fee-free.
- A clear demand letter with the table often ends the dispute without court.

### Learn more

None.
