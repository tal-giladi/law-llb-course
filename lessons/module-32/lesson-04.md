---
id: "32.4"
module: 32
minutes: 40
practice_minutes: 45
prerequisites: ["32.3", "30.2"]
objectives:
  - "Explain why Israel has no statutory notice-and-takedown regime, and how intermediaries' liability is decided instead."
  - "Decide when to use a platform's own copyright procedure, a demand letter, an application to disclose an anonymous infringer (ss. 60א–60ח) or a blocking order (s. 53א)."
  - "Draft a platform removal request that contains what the platform requires, and anticipate a counter-notice."
volatility: implementation
sources:
  - title: "חוק זכות יוצרים, התשס״ח–2007, ss. 48א, 53א, 56א, 60א–60ח (ויקיטקסט)"
    url: "https://he.wikisource.org/wiki/חוק_זכות_יוצרים"
  - title: "חוק זכות יוצרים (תיקון מס׳ 5), התשע״ט–2019, ס״ח 2777, עמ׳ 187"
    url: "https://fs.knesset.gov.il/20/law/20_lsr_528384.pdf"
  - title: "תקנות זכות יוצרים (סדרי דין בבקשה לחשיפת זהותו של עושה פעולה בתוכן ברשת תקשורת אלקטרונית), התש״ף–2019 (ויקיטקסט)"
    url: "https://he.wikisource.org/wiki/תקנות_זכות_יוצרים_(סדרי_דין_בבקשה_לחשיפת_זהותו_של_עושה_פעולה_בתוכן_ברשת_תקשורת_אלקטרונית)"
  - title: "רע״א 4447/07 רמי מור נ׳ ברק אי.טי.סי. [1995] החברה לשרותי בזק בינלאומיים בע״מ (25.3.2010), full text on jus-tice.co.il"
    url: "https://jus-tice.co.il/ruling-law-complete-4447-07/"
  - title: "שרון בר-זיו וניבה אלקין-קורן, בין שתי זירות: אכיפת זכויות יוצרים באינטרנט, משפטים (preprint, HUJI)"
    url: "https://law.huji.ac.il/sites/default/files/law/files/_zkvyvt_yvtsrym_byntrnt_-_shrvn_br-zyv_vnybh_lqyn-qvrn.pdf"
  - title: "YouTube Help, Submit a copyright removal request"
    url: "https://support.google.com/youtube/answer/2807622?hl=en"
  - title: "YouTube Help, Submit a copyright counter notification"
    url: "https://support.google.com/youtube/answer/2807684?hl=en"
  - title: "Google, Report content for legal reasons"
    url: "https://support.google.com/legal/answer/3110420?hl=en"
last_verified: "2026-10-18"
---

# 32.4 · Copyright online: takedowns, disclosure of infringers and blocking

By the end of this lesson you will know the four tools an owner has against online infringement in Israel (the platform's own procedure, a notice to the site, a court order to reveal an anonymous infringer, and a blocking order against a pirate site), when each fits, and how a person whose content was taken down can answer.

## Why it matters

Most online copyright problems are solved without a court: a form on YouTube, Instagram or Google, or an e-mail to a site owner. But these procedures are the platforms' private rules, mostly built on the American DMCA, and Israeli law does not have the same statutory system. Knowing the difference matters on both sides. As an owner, you need to know what the platform requires and what Israeli law adds when the platform does not help. As a user whose video, post or listing was removed, you need to know that a takedown is not a court ruling, how to answer it, and what risk a counter-notice carries.

The 2019 amendment (Amendment no. 5) gave owners new court tools against anonymous and foreign infringers. They are powerful but expensive, and they are District Court proceedings.

## Key terms

| עברית | Transliteration | English |
|---|---|---|
| הודעה והסרה | Hoda'a ve-hasara | Notice and takedown |
| גורם ביניים | Gorem beinayim | Intermediary (host, platform, search engine, ISP) |
| ספק גישה | Sapak gisha | Access provider (ISP) |
| ספק שירותי אחסון | Sapak sherutei ichsun | Hosting provider |
| מקור תוכן | Makor tochen | Content source (a website or service) |
| צו הגבלת גישה | Tzav hagbalat gisha | Blocking order |
| בקשה לחשיפת זהות | Bakasha lachasifat zehut | Application to disclose identity |
| עושה הפעולה | Ose ha-pe'ula | The (anonymous) actor |
| הודעה נגדית | Hoda'a negdit | Counter-notice |

## The law

### No statutory notice-and-takedown

The Copyright Law contains no safe harbour for intermediaries and no statutory notice-and-takedown procedure. Checked against the consolidated text on 2026-10-18: the provisions that mention a notice are s. 27א (orphan works) and s. 56א (no statutory damages if a non-commercial poster stops after notice). Intermediaries' liability is decided under the general rules of direct and contributory infringement, and Israeli courts have adopted a notice-and-takedown standard in case law (see Leading cases).

### Indirect infringement by facilitating access

> ועשה אדם, על דרך עיסוק, פעולה שיש בה כדי להקל את הגישה של הציבור ליצירה שהועמדה בהפרה או להרחיב את הגישה של הציבור אליה, במטרה להפיק רווח מעשיית פעולה כאמור ומקיומה של גישה ליצירה שהועמדה בהפרה, מפר הוא בכך את זכות היוצרים, אם בעת ביצוע הפעולה ידע או היה עליו לדעת כי היצירה הועמדה בהפרה.

*Gist:* A person who, as a business and for profit, makes it easier or wider for the public to access a work made available illegally, knowing or having to know it, infringes. ([Copyright Law s. 48א](https://he.wikisource.org/wiki/חוק_זכות_יוצרים)) This targets profit-making link and streaming-index sites, not ordinary users.

### Disclosure of an anonymous infringer

> אדם הטוען כי הופרה זכות יוצרים שלו באמצעות רשת תקשורת אלקטרונית, וזהותו של מי שעשה את הפעולה שעשייתה מהווה את ההפרה כאמור ... אינה ידועה לו, רשאי לבקש מבית משפט להורות לאדם ששמו נקוב בבקשה ... למסור לבית המשפט פרטי מידע שברשותו לגבי עושה הפעולה ...

*Gist:* An owner whose copyright was infringed online by an unknown person may ask the District Court to order a named respondent (a platform, a site operator, an ISP) to give the court information that can identify the infringer, for the purpose of suing him. (same, ss. 60א–60ב)

> הוכח להנחת דעתו של בית המשפט, בהתבסס על ראיות לכאורה שהציג המבקש, כי קיים חשש ממשי שעושה הפעולה ביצע כלפיו הפרה, וכי קיימת אפשרות סבירה שתביעה נגד עושה הפעולה בשל אותה הפרה תוכרע לטובת המבקש, רשאי בית המשפט להורות על מסירה למבקש של פרטי המידע ...

*Gist:* The process is in stages: the court first orders the respondent to give the data to the court only (s. 60ג), may appoint an expert at the applicant's cost, may serve the application on the actor without revealing his name and hear his position (s. 60ד), and releases the identifying details to the applicant only on prima facie evidence of a real concern of infringement and a reasonable chance that a claim will succeed (s. 60ה(ב)). The information may be used only to sue for that infringement (s. 60ז). The 2019 procedure regulations keep two files, an open one and a sealed one, and require the respondent to file on paper (regs 2–3).

### Blocking orders

> בית המשפט רשאי, על פי בקשה של בעל זכות יוצרים או בעל רישיון ייחודי ... לתת צו המופנה כלפי ספק גישה ומורה לו להגביל את הגישה למקור תוכן, כולו או חלקו ... אם שוכנע כי מתקיים לגבי עיקר התוכן שבאותו מקור תוכן אחד מאלה: (1) שידורו או העמדתו לרשות הציבור ... מהווים הפרה של זכות יוצרים לפי סעיף 47; (2) פעולה בו מהווה הפרה של זכות יוצרים לפי סעיפים 48 או 48א.

*Gist:* The District Court may order Israeli access providers to restrict access to a website (in Israel or abroad) whose content is mainly infringing. (same, s. 53א(ב)) The court weighs the effect on the public, the severity of the infringement, how essential the order is, other remedies (including approaching the infringer), harm to access to other content and to users' privacy (s. 53א(ד)). The site's owner, operator and the alleged infringer must be joined, and the access providers must publish a notice of the application; anyone may join (s. 53א(ו)–(ז)). If the server is in Israel or controlled from Israel, the court orders removal instead of blocking (s. 53א(ח)). Anyone may later apply to cancel or vary the order (s. 53א(ט)).

## Leading cases

### רע"א 4447/07 רמי מור נ' ברק אי.טי.סי. [1995] החברה לשרותי בזק בינלאומיים בע"מ (25.3.2010)

A therapist asked the court to order an internet provider to reveal who had posted anonymous attacks on him in a forum. The Supreme Court (majority, Rivlin D.P.) held that anonymous expression online is protected by freedom of expression and privacy, and that without a legislative procedure the courts had no power to order an intermediary to disclose an anonymous user's identity; it called on the Knesset to legislate. Why it matters: the 2019 amendment's chapter 8.1 is the Knesset's answer for copyright only. For other wrongs, such as defamation, the Mor rule still limits disclosure, so do not assume you can unmask an anonymous critic as you can an anonymous pirate. [Full text, jus-tice.co.il](https://jus-tice.co.il/ruling-law-complete-4447-07/) (unofficial host)

### ת"א (מחוזי מרכז) 567-08-09 א.ל.י.ס. אגודה להגנת יצירות סינמטוגרפיות (1993) בע"מ נ' רוטר.נט בע"מ (8.8.2011)

As reported by Bar-Ziv and Elkin-Koren: users of a popular forum site posted links to infringing copies of films. The District Court held that the site owner was not liable for contributory infringement merely because links appeared in its forums, but only if it failed to remove an infringing link after receiving notice, and that intermediaries have no duty of advance monitoring and filtering, given the economic and free-speech costs. Why it matters: it is the leading statement of the Israeli case-law notice-and-takedown standard for hosts and forums. A later District Court decision held that the standard does not apply to access providers, which led to the statutory blocking order. (⚠️ District Court judgments; the texts were not verified on a free host.) [Bar-Ziv and Elkin-Koren, Mishpatim (preprint)](https://law.huji.ac.il/sites/default/files/law/files/_zkvyvt_yvtsrym_byntrnt_-_shrvn_br-zyv_vnybh_lqyn-qvrn.pdf)

### ע"א 9183/09 The Football Association Premier League Limited נ' פלוני (13.5.2012)

Cited in lesson 21.5: the Supreme Court said that streaming an original broadcast "as is" infringed copyright and was not fair use. Bar-Ziv and Elkin-Koren list it among the few Israeli rulings on online intermediaries before 2019. Why it matters here: unlicensed live streaming is the core case that ss. 48א and 53א were later written to reach when the operator cannot be sued directly. (⚠️ Free full text not found; the holding is as reported in lesson 21.5's source and the article above.)

## How it works in practice

### Choosing the tool

| Situation | First tool | If it fails |
|---|---|---|
| Your work on a big platform (YouTube, Instagram, Facebook, TikTok) | The platform's copyright form | Demand letter to the uploader; small claim if you know who it is |
| Your work on an Israeli business's website | Demand letter to the business (lesson 32.8) | Small claim or magistrates' court |
| Your work on an anonymous site or account | Notice to the host or platform | Application to disclose identity (District Court, s. 60ב) |
| A pirate site that mainly streams or links to infringing content | (rights holders' organisations, not individuals) | Blocking order (s. 53א) |
| Search results pointing to infringing copies | Google's legal removal form | Notice to the site itself |

### What platforms require (checked 2026-10-18)

YouTube's removal request must come from the owner or an authorised representative and include contact details, a description of the work, the exact URLs, a good-faith statement and a statement under penalty of perjury that you are the owner or authorised, and a signature with your full legal name; YouTube may ask whether you considered exceptions such as fair use. The uploader can see your name and e-mail, and the request may lead to a "copyright strike". Misuse can lead to account termination or legal consequences. ([YouTube Help](https://support.google.com/youtube/answer/2807622?hl=en))

YouTube's counter-notification is filed by the uploader, with full legal name, address and phone, an explanation of why the removal was a mistake, a statement consenting to the jurisdiction of a US federal court (for non-US addresses, the district where YouTube is located) and to service from the claimant, and a statement under penalty of perjury. The claimant then has 10 US business days to show it has taken legal action; otherwise the content is restored. ([YouTube Help](https://support.google.com/youtube/answer/2807684?hl=en))

Meta (Facebook, Instagram) and TikTok have their own copyright and trade-mark report forms in their help centres; their content and requirements change and were not readable by automated check (⚠️ manual check before use). Google Search has a separate legal-removal form ([Google](https://support.google.com/legal/answer/3110420?hl=en)).

### Thinking before you file

- **A takedown is not a judgment.** The platform decides by its own policy, quickly and without hearing evidence. If the uploader counter-notifies, the matter returns to the courts.
- **A counter-notice is a serious step.** It is a sworn statement, it reveals your details to the claimant, and it consents to US jurisdiction. File it only when you are sure the use was lawful (your own work, a licence, fair use) and you are ready to defend it.
- **False notices have consequences.** Platforms sanction abusers, and a knowingly false notice against a competitor in Israel may expose you to claims, for example under the Commercial Torts Law (false description, unfair interference, ss. 2–3) or for defamation.
- **Keep evidence before you report.** Once content is removed you may lose your proof: save the page as PDF, with the URL, date and time, and a screenshot showing the account name (lesson [23.4](../module-23/lesson-04.md) on digital evidence).

### Disclosure and blocking in practice

Both are District Court applications under the Civil Procedure Regulations, against respondents that often sit abroad (service abroad: lesson [30.2](../module-30/lesson-02.md)), with court fees, possibly an expert's fee (s. 60ג(ד)) and the risk of costs. Blocking orders are, in practice, sought by rights-holder organisations against large pirate sites. For an individual, disclosure makes sense only where the infringement is serious and a claim against the unmasked infringer is realistic.

## Worked example

Michal Abergil, a cookbook author in Rishon LeZion, finds that an Instagram account with no name posts full pages from her book every day, and that a Hebrew website with ads offers the whole book as a PDF download.

1. **Instagram.** She saves each post (PDF and screenshots with the URL and date), then files Instagram's copyright report for each post, as the owner, identifying the book and the URLs. The posts are removed. The account owner does not counter-notify.
2. **The PDF site.** The site is hosted abroad, its owner is unknown, and it profits from ads. She first sends a notice to the contact address and to the hosting company named in public records; nothing happens.
3. **Disclosure?** The site earns from ads, so a claim with statutory damages for each infringement is realistic. She could apply to the District Court under s. 60ב against the hosting company and the ad network for identifying details. The cost (fees, a lawyer, possibly service abroad) is high compared with what she might recover from an anonymous operator abroad.
4. **Her decision.** She sends the evidence to her publisher, which holds the exclusive publishing licence and can join with other rights holders in a blocking application (s. 53א), a tool that fits a site mainly offering pirated books better than an individual claim, and she asks Google to remove the PDF's search results.

## Do it yourself

### You need

- A real or invented case of your work used online without permission (or the worked example).
- The platform's current copyright form, opened in your browser.
- The [copyright notice and response kit](../../templates/copyright-notice-and-response-kit.md), parts A and B.
- 45 minutes.

### Steps

1. Preserve the evidence: PDF of the page, screenshot with URL, date and account name (10 minutes).
2. Choose the tool using the table above and write one sentence explaining why (5 minutes).
3. Fill in a draft platform request in the kit's part A: the work, your ownership, the URLs, the statements; do not submit (15 minutes).
4. Now switch sides: imagine your own video was removed because of a background song. Fill in part B: is the use lawful (licence, s. 22 incidental use, fair use)? Would you counter-notify, edit the video or accept? (10 minutes)
5. Write down what you would do if the platform refuses or the uploader counter-notifies (5 minutes).

### Template

[Copyright notice and response kit](../../templates/copyright-notice-and-response-kit.md), parts A and B.

### How you know it worked

- Your evidence would survive the content being deleted.
- Your draft request contains every element the platform lists.
- Your decision on the counter-notice is justified by a specific legal ground, not by annoyance.

### Self-check

- [ ] I am the owner or an exclusive licensee of the work I reported.
- [ ] I considered fair use and other permitted uses before reporting.
- [ ] I understand that a counter-notice consents to US jurisdiction and reveals my details.
- [ ] I know that disclosure and blocking are District Court proceedings.

## Without a lawyer

### Can you do this yourself?

Yes, for platform reports, notices and counter-notices about your own works and your own content. An application to disclose identity or to block a site can in principle be filed by an individual in his own name (Civil Procedure Regulations reg. 170), but these are complex District Court proceedings, often against foreign respondents; a company needs a lawyer. Sending takedown notices for other people's works as a service is reserved to lawyers (Bar Association Law s. 20), though platforms accept requests from "authorised representatives" under their own rules.

### Where and how

- Platform forms: YouTube, Meta, TikTok and Google help centres (current requirements above; ⚠️ check each form before use).
- Notices to Israeli sites: by e-mail to the address on the site and by registered mail to a business's address (lesson 32.8).
- District Court applications: Net HaMishpat; fees in [current numbers](../../references/current-numbers.md).

> [!IMPORTANT]
> Act in your own name only. This is not legal advice — check current rules before filing.

### Stop and get a lawyer when

- You plan an application to disclose identity or a blocking order.
- You received a counter-notice and the claimant demands that you sue within days.
- Your own channel or business account is at risk of termination because of strikes, or you are threatened with a US lawsuit.

## What goes wrong

| Mistake | Consequence | How to fix | How to avoid |
|---|---|---|---|
| Reporting before saving evidence | Proof lost once the content is removed | Ask the platform or the court for the data later; often impossible | Save PDF and screenshots first |
| Reporting a use that is fair or licensed | Counter-notice, strike reversed, possible liability for a false claim | Withdraw the request | Check permitted uses first |
| Counter-notifying on a hunch | You consent to US jurisdiction and may be sued | Withdraw before the claimant responds, if the platform allows | Counter-notify only on a clear legal ground |
| Applying to unmask a critic for defamation under the copyright chapter | Application refused; Mor still applies outside copyright | Reassess the legal basis | Chapter 8.1 covers copyright only |
| Seeking a blocking order as an individual for one infringing post | Disproportionate; refused or costly | Use the platform's form | Blocking is for sites that are mainly infringing |

## Review

- Israel has no statutory notice-and-takedown; courts apply a case-law notice-and-takedown standard to hosts and forums (Rotter), and platforms apply their own DMCA-style rules.
- Section 48א makes profit-making facilitation of access to illegal copies an indirect infringement.
- Chapter 8.1 (ss. 60א–60ח) lets the District Court reveal an anonymous online infringer in stages, for copyright only; Mor still governs other wrongs.
- Section 53א allows blocking orders against mainly-infringing sites, with public notice, joinder and a preference for removal when the server is in Israel.
- A counter-notice is a sworn statement that consents to foreign jurisdiction; use it only on firm ground.

### Learn more

- [Bar-Ziv and Elkin-Koren, "Between two arenas: copyright enforcement online"](https://law.huji.ac.il/sites/default/files/law/files/_zkvyvt_yvtsrym_byntrnt_-_shrvn_br-zyv_vnybh_lqyn-qvrn.pdf) (FREE-FULL, Hebrew, 60 minutes): an empirical study of Israeli takedown notices and court cases. Fallback: [YouTube's copyright help pages](https://support.google.com/youtube/answer/2807622?hl=en) (FREE-FULL, 15 minutes).
