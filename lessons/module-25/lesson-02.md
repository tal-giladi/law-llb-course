---
id: "25.2"
module: 25
minutes: 40
practice_minutes: 60
prerequisites: ["25.1", "17.3"]
objectives:
  - "Count an individual's credit points for 2026 (residency, travel, woman, children, degree, discharged soldier) and turn them into a shekel amount."
  - "Tell a deduction from a credit and apply the main credits an employee can claim (pension and life insurance, donations)."
  - "Decide whether an individual must file an annual return under s. 131 and the Exemption from Filing Regulations, and by when."
volatility: implementation
sources:
  - title: "פקודת מס הכנסה [נוסח חדש], ss. 33א–40ג, 45א, 46, 66, 131, 132, 164, 188 (ויקיטקסט)"
    url: https://he.wikisource.org/wiki/פקודת_מס_הכנסה
  - title: "תקנות מס הכנסה (פטור מהגשת דין־וחשבון), התשמ״ח–1988 (ויקיטקסט)"
    url: https://he.wikisource.org/wiki/תקנות_מס_הכנסה_(פטור_מהגשת_דין_וחשבון)
  - title: "ע״א 4243/08 פקיד שומה גוש דן נ׳ ורד פרי (30.4.2009), ויקיפדיה (מקור משני)"
    url: https://he.wikipedia.org/wiki/פסק_דין_ורד_פרי
last_verified: "2026-10-17"
---

# 25.2 · Individuals: employment income, credit points, deductions and the annual return

By the end of this lesson you will be able to work out how much tax an employee should pay: which credit points she has, what each point is worth in 2026, which payments give a credit or a deduction, and whether she must file an annual return or may simply claim a refund. You will check your own (or a supplied) annual salary summary against the law and find the points most often missed.

## Why it matters

Most Israelis never file a tax return. Their employer withholds tax every month from salary (s. 164), using the details they gave on the employee's card (Form 101), and the tax year closes silently. That system works only if the details are right and complete. A degree finished last year, a child born in December, two jobs at once, a discharged soldier's months, a donation to a recognised charity: each of these changes the tax, and the employer will not know unless the employee says so. The result is that many employees overpay, sometimes for years. This lesson gives you the rules; lesson 25.4 and the practice lab in 25.10 show how to get the money back.

## Key terms

| עברית | Transliteration | English |
|---|---|---|
| נקודת זיכוי | nekudat zikui | credit point (a fixed amount deducted from the tax) |
| זיכוי | zikui | credit (reduces the tax itself) |
| ניכוי | nikui | deduction (reduces the taxable income) |
| ניכוי במקור | nikui ba-makor | withholding at source |
| טופס 101 | tofes 101 | employee's card: the details the employer uses to withhold tax |
| טופס 106 | tofes 106 | employer's annual certificate of salary and tax withheld |
| תיאום מס | te'um mas | tax coordination between two or more employers |
| דוח שנתי | doh shnati | annual income-tax return |
| חישוב נפרד | hishuv nifrad | separate tax computation for spouses |

## The law

### Credit points and their value

> ”נקודת זיכוי“ – סכום של 504 שקלים חדשים [...] לשנת מס, צמוד למדד [...], המקוזז כנגד המס לאותה שנה;

*Gist:* A credit point is a fixed annual amount, linked to the index, that is set off against the tax; the Wikisource note gives its value for 2024–2027 (see [current numbers](../../references/current-numbers.md): ₪2,904 a year, ₪242 a month). [Income Tax Ordinance s. 33א](https://he.wikisource.org/wiki/פקודת_מס_הכנסה#סעיף_33א)

Because the value is frozen for 2025–2027, a point is worth the same in 2026 as in 2024. A credit point is worth the same to everyone who pays at least that much tax; it is not refunded to someone whose tax is lower than his points (that gap is what the work grant of lesson 25.9 addresses).

### Who gets which points (main cases)

| Section | Who | Points |
|---|---|---|
| s. 34 | Every resident individual | 2 |
| s. 36 | Every resident individual ("travel" point) | ¼ |
| s. 36א | A woman | ½ |
| s. 66(ג)(4) | A mother, for each child, against her income from personal exertion | 2½ in the birth year; 4½ in the years the child is 1 and 2; 3½ at 3; 2½ at 4 and 5; 2 from 6 until the year before 18; ½ in the year of 18 ⚠️ check the 6–17 figure against the official text |
| s. 66(ג)(5) | A father, for each child | 2½ in the birth year; 4½ at 1 and 2; 3½ at 3; 2½ at 4 and 5; 1 from 6 until the year before 18 |
| s. 40(ב) | A single parent with whom the children live | extra points |
| s. 39א | A discharged soldier (regular service) | ⅙ point a month for 36 months if the service was at least 23 months (men) or 22 (women); otherwise ¹⁄₁₂ |
| s. 40ג | A graduate | 1 point per year for a first degree and ½ for a second, from the tax year after the studies end, for as many years as the studies lasted, up to 3 (first) or 2 (second) years |
| s. 35 | A new immigrant | points for a period after immigration |

> בחישוב המס של אשה תובא בחשבון ½ נקודת זיכוי.

*Gist:* A woman gets an extra half point. [s. 36א](https://he.wikisource.org/wiki/פקודת_מס_הכנסה#סעיף_36א)

The degree points ask for a certificate of entitlement to the degree (s. 40ג(ה)), and someone whose degree is a condition for an internship (law, accounting) may choose to start the points after the internship (s. 40ג(ג1)).

### Credits and deductions

- **Pension and life insurance.** An individual is credited with 35% of payments to a pension fund and 25% of payments for life insurance, within ceilings (s. 45א(א)–(ב), (ד)). For employees the employer reports these on Form 106.
- **Donations.** A person who donated more than the minimum amount (₪207 for 2024–2027 per the Wikisource note) to a recognised public institution is credited with 35% of the donation, within an overall cap (s. 46(א), 46א).
- **Deduction, not credit.** A deduction (ניכוי) lowers taxable income, so its value depends on your marginal rate; a credit (זיכוי) lowers the tax by a fixed percentage. The self-employed deduct part of their pension deposits (s. 47); employees mostly get credits.

### Who must file an annual return

> אלה חייבים להגיש דו״ח: (1) יחיד תושב ישראל שבתחילת שנת המס מלאו לו 18 שנים; [...]

*Gist:* Every resident aged 18 or over at the start of the tax year must file a return, subject to exemptions the Minister makes. [s. 131(א)(1)](https://he.wikisource.org/wiki/פקודת_מס_הכנסה#סעיף_131)

> יחיד תושב ישראל שכל הכנסתו בשנת המס היתה הכנסה ממשכורת או הכנסה מדמי שכירות, [...] יהא פטור מהגשת דין וחשבון לפי סעיף 131 לפקודה.

*Gist:* A resident whose income in the year was only salary (up to a ceiling, with full tax withheld), rent taxed at the special rate, small exempt or fully-taxed interest and securities income, and the other listed kinds, is exempt from filing. [Exemption Regulations reg. 2(א)](https://he.wikisource.org/wiki/תקנות_מס_הכנסה_(פטור_מהגשת_דין_וחשבון))

The salary ceiling for 2026 is on the [current numbers](../../references/current-numbers.md) page (₪723,000 in the Wikisource note for 2023–2026). The exemption does **not** apply (reg. 3) to, among others: a controlling shareholder (or spouse) in a company; a person whose income includes the spouse's and who cannot ask for a separate computation; a person who had to file for the previous year; a person, spouse or minor child with foreign assets or foreign bank balances above the threshold; and anyone liable to the additional tax on high incomes (s. 121ב). A person the assessing officer asks to file must file (s. 131(א)(6); reg. 6). Business owners, landlords who do not use the special rent track, and anyone with foreign income must also file.

> דו״ח לפי סעיף 131 יימסר לפקיד השומה לא יאוחר מיום 30 באפריל של כל שנה.

*Gist:* The return is due by 30 April after the tax year; an online return (required for business, employment or agricultural income, s. 131(ב2)) is due by 31 May. [s. 132](https://he.wikisource.org/wiki/פקודת_מס_הכנסה#סעיף_132) The Tax Authority usually announces later dates every year (⚠️ manual check of the current year's extension). A late return carries a monthly fine (s. 188(א), linked; see [current numbers](../../references/current-numbers.md)).

## Leading cases

### ע״א 4243/08 פקיד שומה גוש דן נ׳ ורד פרי (30.4.2009)

Vered Peri, a lawyer and mother of two, deducted what she paid for supervising her children while she worked as an expense "in the production of income". The assessing officer refused, as the Tax Authority had always done. The Supreme Court (Deputy President Rivlin writing) held that such child-care costs of a working parent may be an expense allowed as a deduction. The Knesset then legislated to restore the previous policy of not recognising these costs, with some limited measures for families; a petition against the amendment (בג״ץ 6795/09 שדולת הנשים בישראל נ׳ שר האוצר) was withdrawn on the court's recommendation on 23.2.2011. Why it matters: it shows the line between a deduction (expense in producing income) and a credit (a fixed, policy-based benefit), and how the legislature answers a ruling with a credit-point policy. Source: [Hebrew Wikipedia article](https://he.wikipedia.org/wiki/פסק_דין_ורד_פרי) (secondary; ⚠️ official text not opened).

## How it works in practice

### The employee's year

1. **Start of a job or of the year.** Fill in Form 101 for each employer: personal details, spouse, children, and the credit points you claim (with documents: degree certificate, discharge certificate). If you have more than one employer, the main employer gives your points and the others withhold at the maximum rate unless you obtain a tax coordination (תיאום מס) from the assessing officer or online (⚠️ manual check of the current online service).
2. **Every month.** The employer withholds tax and shows it on the payslip ([lesson 17.3](../module-17/lesson-03.md)).
3. **After the year.** By the end of March the employer gives Form 106: gross salary, tax withheld, pension deposits, credit points used. Check it against your own list.
4. **Decide.** If you must file (reg. 3 or other income), file the annual return (Form 1301) online. If you are exempt but overpaid, ask for a refund (Form 135 or the online service, lesson 25.4). If you neither must file nor overpaid, nothing is needed.

### The value of one point

In 2026 one point reduces the tax by ₪242 a month. If your monthly tax before points is lower than your points' value, the unused part is lost; it does not become a payment, which is why low earners are pointed to the work grant (lesson 25.9).

## Worked example

Maya Azoulay, 29, from Ashdod, works as a lab technician. Her son was born in March 2023. She finished her B.Sc. (three years) in July 2025 and was discharged from the army in 2017 after 24 months. In 2026 she also gave ₪1,200 to a recognised charity. Her employer's Form 101 lists only "resident, woman, one child".

1. **Points the employer used.** Resident 2 + travel ¼ + woman ½ = 2¾; son, the year he turns 3 (2026): 3½. Total 6¼.
2. **Points she missed.** Degree: her studies ended in 2025, so from 2026 she has 1 point a year for three years (s. 40ג(ב)–(ג)). Discharged soldier: her 36 months ended long ago (s. 39א), so nothing.
3. **Value.** 1 extra point × ₪2,904 = ₪2,904 for 2026, assuming her tax is at least that high.
4. **Donation.** ₪1,200 is above the minimum; credit 35% = ₪420 (s. 46(א)).
5. **Action.** Now: give the employer an updated Form 101 with the degree certificate, so the rest of 2026 is corrected through payroll. After the year: if the employer did not correct it retroactively, she asks for a refund with the donation receipt (lesson 25.4). She is exempt from filing (salary only, below the ceiling, no reg. 3 exclusions), so the refund route is Form 135 or the online service, not a full return.

## Do it yourself

### You need

- Your Form 106 for 2025 (or the Azoulay case), your last payslip, and your Form 101.
- Documents for any points you may have: children's birth dates, degree certificate, discharge certificate, immigration certificate.
- Donation receipts (section 46) and private pension or life-insurance statements.
- 60 minutes.

### Steps

1. **Points table (20 min).** List every point you are entitled to for the year, with the section; total them.
2. **Compare (10 min).** Compare with the points on the payslip or Form 106. Note every difference.
3. **Credits (10 min).** Add the 35% donation credit and any pension or life-insurance credits not already in Form 106.
4. **Filing duty (10 min).** Go through reg. 2 and reg. 3: are you exempt from filing? Write the answer and the reason.
5. **Action plan (10 min).** Write what you will do: update Form 101 now, ask for a tax coordination, claim a refund, or file a return, with the date.

### Template

None for this step; the refund request template comes in lesson 25.4.

### How you know it worked

- Your points table has a section number for every line, and the total is multiplied by the 2026 value from the current numbers page.
- You found at least one difference, or confirmed none with reasons.
- Your filing decision cites reg. 2 and checks every exclusion in reg. 3.

### Self-check

- [ ] I can list the points every resident woman and man receives.
- [ ] I know when degree points start and how long they last.
- [ ] I can explain why a credit point is worth nothing to someone who pays no tax.
- [ ] I can name three situations that cancel the exemption from filing.

## Without a lawyer

### Can you do this yourself?

Yes. Updating your Form 101, asking for a tax coordination and filing your own return are done in your own name, online or at the assessing office. Preparing returns for others for pay is regulated (accountants, tax advisers) and representing others is reserved (Income Tax Ordinance s. 236; Bar Association Law ss. 20–21).

> [!IMPORTANT]
> Act in your own name only. This is not legal advice — check current rules before filing.

### Where and how

- Your employer's payroll department (Form 101, retroactive correction within the year).
- The Tax Authority's personal area and online services: tax coordination, annual return, refund request (⚠️ manual check on gov.il; the site blocks automated access).
- The assessing office for your area; the Tax Authority call centre.
- Free help: [where to get help](../../references/where-to-get-help.md).

### Stop and get a lawyer (or accountant) when

- You are a controlling shareholder, have foreign assets above the threshold, or are near the additional-tax threshold.
- You have business, rental or foreign income alongside your salary.
- The assessing officer asks you to file and you do not understand why.

## What goes wrong

| Mistake | Consequence | How to fix | How to avoid |
|---|---|---|---|
| Not telling the employer about a new degree or child | Too much tax withheld | Updated Form 101; refund for past years | Update Form 101 every January and after every life event |
| Two jobs, points given at both | Too little tax; a bill after the year | Tax coordination; pay the difference | Give points only to the main employer |
| Second job taxed at the maximum without coordination | Overpayment | Tax coordination now; refund later | Ask for coordination when the second job starts |
| Assuming "salaried means never file" | Fine for not filing when reg. 3 applies | File late, ask to waive the fine | Check reg. 3 every year |
| Losing donation receipts | Credit refused | Ask the charity for a copy | Keep receipts with your tax papers |

## Review

- In 2026 a credit point is worth ₪2,904 a year (₪242 a month); every resident has 2¼, a woman ½ more, parents more for each child (ss. 33א, 34, 36, 36א, 66).
- Degree, discharged-soldier and new-immigrant points are often missed because the employer does not know.
- A credit (pension 35%, life insurance 25%, donations 35%) lowers the tax; a deduction lowers income (ss. 45א, 46, 47).
- Every resident adult must file (s. 131), but a salaried person within reg. 2 is exempt unless reg. 3 applies; the return is due by 30 April, or 31 May online (s. 132).

### Learn more

- Income Tax Ordinance on Wikisource, ss. 33א–40ג and 66. FREE-FULL, about 30 minutes: [he.wikisource.org](https://he.wikisource.org/wiki/פקודת_מס_הכנסה#סעיף_33א). Fallback: the Knesset National Legislation Database.
- Exemption from Filing Regulations on Wikisource. FREE-FULL, about 15 minutes: [he.wikisource.org](https://he.wikisource.org/wiki/תקנות_מס_הכנסה_(פטור_מהגשת_דין_וחשבון)). Fallback: the Tax Authority's "who must file" page (⚠️ manual check).
