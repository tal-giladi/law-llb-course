---
id: "11.4"
module: 11
minutes: 35
practice_minutes: 60
prerequisites: ["11.3", "02.2"]
objectives:
  - "Read the Judiciary's annual report and compute the clearance rate, the change in pending cases and a rough backlog in months for a given court."
  - "Identify the five common traps in court statistics: selection effects, confounders, averages of closed cases, changes in measurement and nominal sums."
  - "Evaluate a published empirical claim about judges (the Israeli parole-board study and its critique) by asking what else could explain the pattern."
  - "Use base rates from official data to temper your own estimate of how long your case will take and how likely an appeal is to succeed."
volatility: implementation
sources:
  - title: "הרשות השופטת, הנהלת בתי המשפט, דו״ח שנתי 2023 (July 2024)"
    url: https://www.gov.il/BlobFolder/news/spokesmenmessage090724/he/%D7%93%D7%95%D7%97%20%D7%A9%D7%A0%D7%AA%D7%99%202023%20%D7%94%D7%A0%D7%94%D7%9C%D7%AA%20%D7%91%D7%AA%D7%99%20%D7%94%D7%9E%D7%A9%D7%A4%D7%98.pdf
  - title: "Danziger, Levav and Avnaim-Pesso, Extraneous factors in judicial decisions, PNAS 108(17):6889 (2011), PubMed Central"
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3084045/
  - title: "Weinshall-Margel and Shapard, Overlooked factors in the analysis of parole decisions, PNAS 108(42):E833 (2011), PubMed Central"
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3198355/
  - title: "Eisenberg, Fisher and Rosen-Zvi, Israel's Supreme Court Appellate Jurisdiction: An Empirical Study, 96 Cornell L. Rev. 693 (2011)"
    url: https://scholarship.law.cornell.edu/facpub/190
  - title: "Klerman and Lee, The Selection of Disputes at Forty, Yale Journal on Regulation"
    url: https://www.yalejreg.com/wp-content/uploads/11.-Klerman-Lee.-The-Selection-of-Disputes-at-Forty.-Print-1.pdf
  - title: "חוק חופש המידע, התשנ״ח–1998, s. 5 (ויקיטקסט)"
    url: https://he.wikisource.org/wiki/חוק_חופש_המידע
last_verified: "2026-10-17"
---

# 11.4 · Empirical legal studies: reading data about courts

By the end of this lesson you will be able to open the Israeli Judiciary's annual report, find the figures for the court that will hear your case, and turn them into a realistic expectation of time and outcome. You will also learn to spot the traps that make court statistics mislead, using one of the most famous empirical studies of judges ever published, which was carried out on Israeli parole boards and then challenged by Israeli researchers.

## Why it matters

Empirical legal studies use data (case files, court statistics, surveys, experiments) to test claims about how law works. They answer questions doctrine cannot: How long do cases take? Who wins? Do judges differ? Does a reform change behaviour? Lesson 09.4 introduced the realist claim that law is what courts actually do; empirical work is how that claim is tested.

For you the payoff is concrete. Self-represented litigants are often over-optimistic about time and result (lesson 11.2). Official data give you **base rates**: how long cases of your type usually take in your court, how often appeals succeed, how many cases settle. A base rate is not a prediction for your case, but it is the right starting point before you adjust for your facts.

The field also teaches humility. Court data are collected for management, not research; famous findings sometimes dissolve when someone asks what else could explain the pattern. Reading data well means asking those questions yourself.

## Key terms

| עברית | Transliteration | English |
|---|---|---|
| מחקר משפטי אמפירי | mehkar mishpati empiri | empirical legal research |
| קצב שמיעת התיקים (CR) | ketsev shmi'at ha-tikim | clearance rate (closed ÷ opened) |
| מלאי תיקים | mlai tikim | pending caseload (stock) |
| אורך חיי התיק | orekh hayei ha-tik | life (duration) of a case |
| שיעור בסיס | shi'ur basis | base rate |
| הטיית בחירה | hatayat bkhira | selection bias / selection effect |
| משתנה מתערב | mishtane mit'arev | confounding variable |
| מתאם וסיבתיות | mit'am ve-sibatiyut | correlation and causation |
| מחירים קבועים | mehirim kvu'im | constant (inflation-adjusted) prices |

## The law

### Public bodies must report

> רשות ציבורית תפרסם דין וחשבון שנתי שיכלול מידע על אודות פעילותה ותחומי אחריותה והסבר על תפקידיה וסמכויותיה;

*Gist:* Every public authority must publish an annual report on its activity, responsibilities, functions and powers. ([Freedom of Information Law s. 5(א)](https://he.wikisource.org/wiki/חוק_חופש_המידע)) This is the legal source of much of the data in this module: the Ministry of Justice's annual report (lesson 11.3) is published under it. Data that are not published can often be requested under the same Law (lesson 02.7).

### The Judiciary's own statistics

The Courts Administration (הנהלת בתי המשפט) publishes an annual statistical report prepared by its economics and statistics department. It is not a statute, but it is the official source on caseloads, and courts and the Knesset rely on it. The latest report the course could open is for **2023**, published in July 2024. Check for a newer report on the Judiciary's pages on gov.il before relying on these figures.

### Rules that shape the numbers

Statistics reflect procedure. The Civil Procedure Regulations 2018 set time targets, such as judgment within a set period after the end of the hearing (reg. 129(ג)), and the small-claims rules require judgment at the hearing or within days (reg. 15(א) of the Small Claims Regulations); see [current numbers](../../references/current-numbers.md). When a number changes, ask whether the rules changed first.

## Leading cases

### Key text: Danziger, Levav and Avnaim-Pesso, "Extraneous factors in judicial decisions" (PNAS, 2011)

The authors analysed sequential decisions of Israeli parole boards. They recorded the two daily food breaks, which divide the day into three sessions, and found that the share of favourable rulings fell gradually from about 65% to nearly zero within each session and returned abruptly to about 65% after a break. They concluded that judicial rulings can be swayed by extraneous variables. [Article (PubMed Central)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3084045/)

### Key text: Weinshall-Margel and Shapard, "Overlooked factors in the analysis of parole decisions" (PNAS, 2011)

Two researchers, one of them from the Israeli Courts Research Division at the Supreme Court, replied that the analysis assumed the order of cases was random, and it was not. Boards try to finish all cases from one prison before a break; within a session, unrepresented prisoners usually go last; and unrepresented prisoners, about a third of the cases, succeeded far less often than represented ones (in their data, 15% against 35%). Lawyers with several clients may also present their strongest cases first. On this view the pattern reflects the order of presentation, not hunger. [Letter (PubMed Central)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3198355/) The original authors published a reply in the same issue (p. E834).

Why the pair matters: it is a model of how to read any empirical claim about courts. The finding was striking, widely cited and plausible; the critique did not prove judges are immune to fatigue, but showed that a confounder (representation and case order) could produce the same pattern. It also carries a practical lesson: in that data, having a representative was strongly associated with success.

### Key text: Eisenberg, Fisher and Rosen-Zvi, "Israel's Supreme Court Appellate Jurisdiction: An Empirical Study" (2011)

The authors coded 3,562 Supreme Court cases decided in 2006 and 2007. In appeals as of right with clear outcomes, the Court affirmed about 75% of district-court criminal judgments and about 67% of civil ones. In discretionary cases (requests for leave), it granted review in about 6% of criminal and 15% of civil requests and, where it granted review, affirmed about 55% of criminal and 31% of civil cases. Counting refusals of leave as affirmances, criminal litigants obtained relief in 2.3% of appellate filings and civil litigants in 11.0%. The government did markedly better than other litigants. [Repository page and free PDF](https://scholarship.law.cornell.edu/facpub/190)

Why it matters: it gives base rates for appeals (old ones; the data are from 2006–2007) and shows that the identity of the litigant, a repeat player (lesson 11.3), correlates with success.

### Key text: the selection effect (Priest and Klein, 1984)

George Priest and Benjamin Klein argued that the cases that reach judgment are not a random sample of disputes: clear cases settle, so the cases that are tried are the close ones, and under some conditions plaintiffs' win rates in tried cases should tend towards 50% whatever the underlying law. Later work tested and qualified the prediction. [Klerman and Lee, "The Selection of Disputes at Forty" (free PDF)](https://www.yalejreg.com/wp-content/uploads/11.-Klerman-Lee.-The-Selection-of-Disputes-at-Forty.-Print-1.pdf); original article record on [Chicago Unbound](https://chicagounbound.uchicago.edu/jls/vol13/iss1/2/).

Why it matters: a statistic such as "plaintiffs win 60% of tried cases" says little about *your* chances before you decide whether to settle.

## How it works in practice

### The Judiciary's 2023 figures (what the report says)

| Measure | Figure (2023) |
|---|---|
| Cases opened, all courts and labour tribunals | 897,342 |
| Cases closed | 838,259 |
| Clearance rate (CR = closed ÷ opened) | 93.4% |
| Pending at year end | 497,799 |
| Judges (December 2023) | 765, of whom 474 in the magistrates' courts |
| Magistrates' courts CR | 92.3% |
| Magistrates' courts, civil procedure: opened / closed / pending | 351,439 / 320,659 / 280,924 (CR 91.2%) |
| Small claims: opened / closed / pending | 33,711 / 31,681 / 16,615 (CR 94.0%) |
| Average life of a case, magistrates' courts: small claims / civil / family | 4.8 / 10.9 / 5.3 months |
| Magistrates' cases pending three years or more | 18,171 (4.4% of the stock) |
| Average claim in the magistrates' courts | ₪76,765 (₪55,472 at 2005 prices) |

### Three calculations you can do yourself

1. **Clearance rate.** $CR = \dfrac{\text{closed}}{\text{opened}}$. Below 100% means the pending stock is growing. Small claims 2023: $31{,}681 / 33{,}711 \approx 94.0\%$.
2. **Change in stock.** Opened minus closed is roughly the growth in pending cases: $33{,}711 - 31{,}681 = 2{,}030$ more small claims pending.
3. **Rough backlog in months.** $\dfrac{\text{pending}}{\text{closed per month}}$. Small claims: $16{,}615 / (31{,}681 / 12) \approx 6.3$ months of work waiting. This is a crude measure of queue length, not a waiting time for any one case.

### Five traps

| Trap | Example | The question to ask |
|---|---|---|
| Selection effect | "Plaintiffs win most tried cases" | Which cases settled or were dropped before trial? |
| Confounder | Parole rulings fall before lunch | What else changes over the session (case order, representation)? |
| Averages of closed cases | "Average life of a case is 4.8 months" | Does the average include cases still pending? Is it a mean pulled up or down by extremes? What is the median? |
| Change in measurement | Legal Aid's 2025 report says a new system changed how requests were counted (lesson 11.3) | Did the definition or the system change between years? |
| Nominal money | Average claims "doubled" since 2005 | Is it in current shekels or constant prices? |

Add a sixth: **one unusual year**. The 2023 figures include the emergency regime in the courts after 7 October 2023; the report says so. Compare several years before drawing a trend.

### From base rate to your case

Start with the base rate for your court and type of case, then adjust for what is different about yours: how strong your documents are, whether the other side will defend, whether there will be experts, whether you will ask for postponements. Write both the base rate and your adjusted estimate in your decision worksheet (lesson 11.5).

## Worked example

Viktor Melnik, an engineer in Ashdod, has a ₪22,000 dispute with a renovation contractor. He is choosing between small claims and the magistrates' court (lesson 08.3) and wants to know how long each might take. A friend tells him "court cases take years".

1. **Find the data.** He opens the Judiciary's 2023 report, chapter 4 (magistrates' courts), and finds the activity table and the chart of average case life.
2. **Base rates.** Average life in 2023: small claims 4.8 months; civil cases in the magistrates' courts 10.9 months. Small claims cleared 94.0% of the new cases that year.
3. **Check the traps.** The averages are for the whole country and include very simple cases; 2023 was an unusual year; and a defended case with an expert opinion takes longer than the average. He also notes that only 4.4% of the magistrates' pending stock was three years old or more, so "years" is the exception, not the rule.
4. **Adjust.** His case is defended and may need a repair expert, so he moves his estimate up: perhaps six to nine months in small claims, longer in the magistrates' court.
5. **Decision input.** The time estimate goes into the "time" line of his worksheet in lesson 11.5, together with the court fee and the risk of costs. His friend's "years" was a vivid anecdote (availability, lesson 11.2), not a base rate.

## Do it yourself

### You need

- The Judiciary's annual report for 2023 (link in Sources), or a newer one if published.
- A calculator or spreadsheet.
- One claim about courts from a news article, a social-media post or a conversation (for step 6).
- 60 minutes.

### Steps

1. **Locate (10 min).** In the report, find the national summary chart (chapter 1) and the chapter for the court that would hear a dispute of yours (magistrates', district, labour, family).
2. **Extract (10 min).** Write down opened, closed and pending for that court and, if shown, for your type of case. Write the average case life.
3. **Calculate (10 min).** Compute the clearance rate, the change in stock and the rough backlog in months. Check your CR against the one printed in the report.
4. **Trend (10 min).** In chapter 8 (activity over time), look at the clearance rate for your court over several years. Is 2023 typical?
5. **Traps (10 min).** For each of the five traps, write one sentence on whether it could distort the figure you will rely on.
6. **Critique (10 min).** Take the claim you collected. Write what data would be needed to test it, and one confounder that could explain it.

### Template

None. The decision worksheet in lesson 11.5 has a line for the base rate you find here.

### How you know it worked

- Your computed clearance rate matches the report's figure to within rounding.
- You can say, in one sentence, how long cases of your type took on average in 2023, and why your case may differ.
- Your critique names a specific confounder, not just "correlation is not causation".

### Self-check

- [ ] I can define clearance rate, pending stock and average case life, and compute the first two from a table.
- [ ] I can explain the parole-board study and the main objection to it.
- [ ] I can explain the selection effect and why tried cases are not a random sample.
- [ ] I can name the five traps and give an Israeli example of two.

## Without a lawyer

### Can you do this yourself?

Not a filing lesson. Data help you decide your own case: which forum is faster, how long to plan for, whether an appeal is realistic. Anyone may read the reports and ask a public authority for further data under the Freedom of Information Law (lesson 02.7).

### Where and how

- The Judiciary's annual reports and Freedom of Information reports are on gov.il (search for "הנהלת בתי המשפט דוח שנתי"). gov.il sometimes blocks automated access; open it in a normal browser.
- For a specific court, the court's own registry or the information centre can say how hearings are being scheduled now.
- For your own case, Net HaMishpat shows the dates and decisions in your file (lesson 08.1).

### Stop and get a lawyer when

- You are deciding whether to appeal and the base rates are low (as for leave to appeal): a lawyer can say whether your case is one of the exceptions.
- The other side relies on statistics or an expert report (for example on damages or medical causation) that you cannot evaluate.

## What goes wrong

| Mistake | Consequence | How to fix | How to avoid |
|---|---|---|---|
| Treating the national average as your waiting time | Wrong planning; frustration | Adjust for defence, experts and your court | Use the base rate as a start, then adjust |
| Reading a single year as a trend | You see a crisis or an improvement that is not there | Look at five or more years | Use chapter 8's time series |
| Accepting a striking study at face value | You argue from a finding that may be an artefact | Look for replies and replications | Ask what else could explain the pattern |
| Comparing figures counted differently | False comparison between years or bodies | Read the report's notes on definitions | Check for changes in systems and definitions |
| Using old appeal statistics as current | Over- or under-estimating chances | Say the year of the data and look for newer data | Always note the data period |

## Review

- Empirical legal studies test claims about law with data; for a litigant, official statistics give base rates that temper optimism.
- The 2023 Judiciary report: 897,342 cases opened, 838,259 closed, CR 93.4%; small claims averaged 4.8 months and civil magistrates' cases 10.9 months.
- Compute CR as closed ÷ opened, stock change as opened minus closed, and backlog as pending ÷ monthly closures.
- The Israeli parole study and its critique show the danger of confounders; the selection effect warns that tried cases are not typical disputes.
- Watch for selection, confounders, averages of closed cases, measurement changes, nominal money and unusual years.

### Learn more

- The Judiciary's annual report 2023 (Hebrew), chapters 1, 4 and 8. FREE-FULL, about 45 minutes: [PDF](https://www.gov.il/BlobFolder/news/spokesmenmessage090724/he/%D7%93%D7%95%D7%97%20%D7%A9%D7%A0%D7%AA%D7%99%202023%20%D7%94%D7%A0%D7%94%D7%9C%D7%AA%20%D7%91%D7%AA%D7%99%20%D7%94%D7%9E%D7%A9%D7%A4%D7%98.pdf). Fallback: search gov.il for "דוח שנתי הנהלת בתי המשפט".
- Danziger et al. and the reply by Weinshall-Margel and Shapard. FREE-FULL, about 30 minutes together: [study](https://pmc.ncbi.nlm.nih.gov/articles/PMC3084045/), [reply](https://pmc.ncbi.nlm.nih.gov/articles/PMC3198355/). Fallback: the PubMed records, https://pubmed.ncbi.nlm.nih.gov/21482790/ and https://pubmed.ncbi.nlm.nih.gov/21987788/.
- Eisenberg, Fisher and Rosen-Zvi on the Israeli Supreme Court. FREE-FULL, about 60 minutes: [repository](https://scholarship.law.cornell.edu/facpub/190). Fallback: the Cornell Law Review page, https://scholarship.law.cornell.edu/clr/vol96/iss4/20.
