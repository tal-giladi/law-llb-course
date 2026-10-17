---
id: "10.6"
module: 10
minutes: 20
practice_minutes: 150
prerequisites: ["10.3", "08.1"]
objectives:
  - "Prepare a complete dry-run filing file for the rabbinical court: the request to settle the dispute, a claim that meets reg. כו, the documents, the fee or exemption, and the venue."
  - "Decide whether to act alone, with a lawyer, or with a licensed rabbinical pleader (טוען רבני), and verify a pleader's licence."
  - "Plan the hearing day and the deadlines that follow it: default judgment, leave to appeal and appeal to the Great Rabbinical Court."
volatility: implementation
sources:
  - title: "תקנות הדיון בבתי הדין הרבניים בישראל, התשנ״ג (regs ז–כג, כה–לד, לח, מז–נא, נב–ס, קכא, קלג, קלח, רו)"
    url: https://he.wikisource.org/wiki/תקנות_הדיון_בבתי-הדין_הרבניים_בישראל
  - title: "תקנות הטוענים הרבניים, התשס״א–2001, regs 1–2"
    url: https://he.wikisource.org/wiki/תקנות_הטוענים_הרבניים
  - title: "תקנות הדיינים (אגרות), התשי״ז–1957, regs 14א, 15, 22א and First Schedule (amounts updated for 2026 per Wikisource)"
    url: https://he.wikisource.org/wiki/תקנות_הדיינים_(אגרות)
  - title: "חוק להסדר התדיינויות בסכסוכי משפחה, התשע״ה–2014, ss. 2–4"
    url: https://he.wikisource.org/wiki/חוק_להסדר_התדיינויות_בסכסוכי_משפחה
  - title: "חוק לשכת עורכי הדין, התשכ״א–1961, ss. 20–21"
    url: https://he.wikisource.org/wiki/חוק_לשכת_עורכי_הדין
  - title: "gov.il: הגשת בקשה כללית לבית הדין הרבני (⚠️ manual check: gov.il blocks automated access)"
    url: https://www.gov.il/he/service/general_request_rabbinical_court
  - title: "gov.il: יחידות הסיוע ליד בתי המשפט ובתי הדין (⚠️ manual check)"
    url: https://www.gov.il/he/departments/units/molsa-court-assiatance-units
last_verified: "2026-10-17"
---

# 10.6 · Practice lab: a self-represented party in the rabbinical court (procedure, documents, the to'en rabbani)

In this lab you build, for your own situation or a supplied case, the complete file a self-represented party needs in a regional rabbinical court: the request to settle the dispute, a claim that meets the procedure regulations, the documents, the fee or the exemption, a decision about representation, and a plan for the hearing and the deadlines after it. It is a dry run; you file only if you decide to, in your own name.

## Why it matters

Rabbinical-court procedure is not the civil procedure of module 8. It has its own regulations (enacted in 1993 by the Chief Rabbinate Council and the Great Rabbinical Court's dayanim), its own representatives (licensed rabbinical pleaders as well as lawyers), its own expectations of the parties (you speak first, in person, in modest dress) and short appeal periods. Most mistakes by self-represented parties here are practical: the wrong regional court, a claim that joins issues vaguely, a missing maintenance form, or a missed ten-day window for leave to appeal.

## Key terms

| עברית | Transliteration | English |
|---|---|---|
| בית הדין הרבני האזורי | beit ha-din ha-rabani ha-ezori | regional rabbinical court |
| בית הדין הרבני הגדול | beit ha-din ha-rabani ha-gadol | Great Rabbinical Court (appeals), Jerusalem |
| טוען רבני | to'en rabani | licensed rabbinical pleader |
| מורשה / הרשאה | murshe / harsha'a | representative / written authorisation |
| כתב תביעה | ktav tvi'a | statement of claim |
| מזכירות בית הדין | mazkirut beit ha-din | the court's secretariat |
| ועדת אגרות / דחיית אגרה | va'adat agrot / dhiyat agra | fee committee / deferral of the fee |
| פסק דין במעמד צד אחד | psak din be-ma'amad tzad ehad | default (ex parte) judgment |
| סידור גט | siddur get | arranging the get ceremony |

## The law

### Who may represent you: regs נ and the pleaders' regulations

> (1) כמורשה בבית־הדין כשיר לפעול (א) עורך־דין בעל רשיון [...] (ב) טוען רבני בעל רשיון [...]
> (2) בית־הדין יכול להרשות הופעת מורשה לשם פעולה מסוימת או משפט מסוים, אף אם המורשה אינו עורך־דין או טוען רבני מוסמך.

*Gist:* A lawyer or a licensed rabbinical pleader may represent a party; the court may permit another person for a specific step or case, and that permission is needed for each appearance (reg. נ(4)). [Regulations, reg. נ](https://he.wikisource.org/wiki/תקנות_הדיון_בבתי-הדין_הרבניים_בישראל)

> מי שאיננו עורך דין לא ייצג בפני בתי הדין הרבניים אדם אחר, לא יטען ולא יעשה כל פעולה אחרת בשמו, דרך עיסוק או בתמורה, אף שלא בדרך עיסוק, אלא אם כן קיבל רישיון של טוען רבני לפי תקנות אלה.

*Gist:* Only a lawyer or a licensed pleader may represent others before the rabbinical courts as an occupation or for pay. [Pleaders Regulations 2001, reg. 1](https://he.wikisource.org/wiki/תקנות_הטוענים_הרבניים#סעיף_1) A licence requires residence in Israel, years of study at a yeshiva or a recognised institution, examinations including a practical one, and suitable character (reg. 2); it is valid for five years. The Bar Association Law's monopoly does not apply in religious courts (s. 21), which is why this second profession exists.

### Where to file: regs ז and י

> (1) תביעה בין בני־זוג בענייני אישות תוגש לבית־הדין הרבני של מקום־המגורים האחרון של בני־הזוג.

*Gist:* A matrimonial claim goes to the regional rabbinical court of the spouses' last joint residence; otherwise the claimant follows the defendant (reg. ז). [reg. י](https://he.wikisource.org/wiki/תקנות_הדיון_בבתי-הדין_הרבניים_בישראל) The list of regional courts and the towns each covers is annexed to reg. ו and updated by notices.

### What a claim must contain: regs כה–כט, לג

> כל כתב־תביעה יכיל (1) שם בית־הדין [...] (2) שם התובע ושם משפחתו, מספר זהותו, מענו [...] (3) שם הנתבע [...] (4) העובדות המשמשות יסוד לתביעה. (5) עתירת התובע [...]

*Gist:* The claim names the court and both parties with ID numbers and addresses, states the facts and the relief, and, for money, the amount (reg. כו); each separate claim joined in one document must be set out separately (reg. כז); you sign it, and the signature is certified by the secretariat (reg. כח); you file copies for the court and each defendant (reg. כט). A maintenance claim is filed with the prescribed form and listed for the earliest possible date (reg. לג).

### Hearing rules: regs נב, נג, נז, ס

> (1) גם אם יש לצדדים מורשים, חייבים בעלי־הדין לטעון בעצמם בתחילה ולברר את דבריהם, ומורשיהם יוכלו להסביר ולנמק את טענותיהם אחרי־כן.

*Gist:* Even if represented, the parties plead first in person; representatives explain afterwards (reg. ס). Parties must attend throughout unless excused (reg. נז); family matters are heard behind closed doors (reg. נב); appearance in "לבוש צנוע והולם, כולל כיסוי־ראש" is required (reg. נג).

### After judgment: regs קכא, קלג, קלח

*Gist:* An application to set aside a default judgment within 30 days of receiving it (reg. קכא); leave to appeal an interim decision within 10 days (reg. קלג(2)); appeal from a final judgment to the Great Rabbinical Court within 30 days (reg. קלח), on the grounds of error in halakha, a clear error in discretion or facts, or a procedural defect affecting the result (reg. קלה). [Chapters יג–טו](https://he.wikisource.org/wiki/תקנות_הדיון_בבתי-הדין_הרבניים_בישראל) Periods are also in [current numbers](../../references/current-numbers.md).

### Fees: Dayanim (Fees) Regulations

*Gist:* Fees are listed in the First Schedule and updated each January; a maintenance claimant is exempt (reg. 14א); a party represented by Legal Aid, or entitled to it under the Legal Aid Law's schedule, is exempt (reg. 22א); anyone may ask the fee committee to defer the fee for inability to pay, with a Legal Aid certificate as prima facie proof (reg. 15). [Regulations](https://he.wikisource.org/wiki/תקנות_הדיינים_(אגרות)) Amounts: [current numbers](../../references/current-numbers.md).

## Leading cases

### Key text: the procedure regulations themselves

There is no single ruling to brief in this lab. Your authorities are the [procedure regulations](https://he.wikisource.org/wiki/תקנות_הדיון_בבתי-הדין_הרבניים_בישראל), the [pleaders' regulations](https://he.wikisource.org/wiki/תקנות_הטוענים_הרבניים) and the [fee regulations](https://he.wikisource.org/wiki/תקנות_הדיינים_(אגרות)), plus the jurisdiction rules and cases of lesson 10.3 (and Amir and Lev, lesson 01.4). The rabbinical courts' own website and gov.il service pages give current forms and online services; they block automated access, so the course could not open them (⚠️ manual check).

## How it works in practice

What the course established on 17 October 2026 from the regulations and from gov.il search listings (⚠️ check each on the day):

- **Opening a file.** A claim is filed by delivering it to the secretariat (reg. כה). Before any contested family claim you file the request to settle the dispute (lesson 10.3); a divorce *agreed* by both spouses is excluded from that requirement (Dispute Resolution Law s. 2, definition, item (1)).
- **After the file is open.** gov.il lists a "general request to the rabbinical court" service for parties and their representatives in existing files (dates, decisions, documents, status, inspection), and a service for registering for digital contact with the court; a separate service issues the divorce certificate. Inspection of your file is allowed while it is pending (reg. רו).
- **Assistance unit.** Every regional rabbinical court with an assistance unit runs the mahut meetings and can offer mediation; it does not represent you.
- **Legal Aid.** Eligible applicants (means and merit tests) may get a lawyer for rabbinical-court proceedings; Legal Aid representation also exempts you from fees (reg. 22א).
- **Choosing a pleader.** Ask the pleader for the licence and its year (licences run for five years from 1 Tishrei of the year of issue, reg. 4); check with the rabbinical courts administration that it is current; agree the fee in writing.

> [!IMPORTANT]
> Act in your own name only. This is not legal advice — check current rules before filing.

## Worked example

Ortal and Shlomo Azulay from Ashdod agree to divorce after six years. They have one child and a rented flat; they have written an agreement on custody, contact, child maintenance and the car.

1. **Is a request to settle needed?** For the divorce itself, filed by agreement, no (s. 2, item (1)). They go straight to a joint application.
2. **Which court?** Their last joint residence is Ashdod; they find the regional court for Ashdod in the annex to reg. ו.
3. **What do they file?** A joint application to approve the divorce agreement and give it the force of a judgment, and a request to arrange the get. They attach IDs, the marriage certificate, the child's birth certificate and the signed agreement.
4. **Fees.** They look up the items "בקשה למתן תוקף פסק־דין להסכם גירושין" and "בקשה לסידור גט" in the First Schedule and the 2026 amounts in [current numbers](../../references/current-numbers.md).
5. **Representation.** Neither has a lawyer. They read reg. ס and prepare to explain the agreement themselves; the dayanim will check that both understand it and consent freely. They agree that if questions arise about the child's maintenance level, they will ask the assistance unit, not a friend, to help.
6. **Hearing day.** Both attend in person (reg. נז), in modest dress with head covering (reg. נג). The court approves the agreement and sets a date for the get. Shlomo diarises 30 days to appeal (reg. קלח) though neither intends to.

## Do it yourself

### You need

- Your own situation (a separation, a request to approve an agreement, or a maintenance claim), or the supplied case below.
- The procedure regulations, the fee regulations and [current numbers](../../references/current-numbers.md).
- The [rabbinical-court filing file template](../../templates/rabbinical-court-filing-file.md) (Hebrew).
- About two and a half hours, in three sittings.

**Supplied case.** Hadas Mor (34) and Erez Mor (36), both Jewish Israeli citizens, married by the Rabbinate in 2016, lived together in Modi'in until Erez moved to Ra'anana in May 2026. Two children (8 and 5) live with Hadas. Erez pays irregular sums. Hadas wants a divorce, child maintenance, primary custody and her share of the jointly registered flat. Erez has said he will "go to the rabbinate first".

### Steps

**Part A — before anything is filed (40 min)**

1. **Is this a family dispute under the 2014 Law?** Write which items are covered (s. 2) and confirm that a request to settle must come first.
2. **Draft the request to settle** in the template's short form: forum, parties, no facts, no jurisdiction arguments.
3. **Forum strategy.** Using lesson 10.3, decide where Hadas would file each claim after the mahut stage and why. Write one paragraph per forum, with legal and procedural reasons only.
4. **Venue.** Find the regional rabbinical court for the spouses' last joint residence (reg. י and the annex to reg. ו).

**Part B — the claim and the documents (60 min)**

5. **Draft the divorce claim** in the template, meeting each item of reg. כו, and set out each joined issue separately (reg. כז): custody, child maintenance, the flat. For each, state the facts and the exact relief.
6. **Maintenance.** Note that the maintenance claim needs the prescribed form (reg. לג) and that a maintenance claimant is exempt from the fee (reg. 14א).
7. **Documents.** Build the list in the template: IDs, marriage certificate, children's birth certificates, the land-registry extract for the flat, income evidence for both spouses, the children's expenses, bank statements showing Erez's payments.
8. **Fees.** List each item you would file and its fee (or exemption) from [current numbers](../../references/current-numbers.md). If Hadas cannot pay, draft the request for deferral (reg. 15).

**Part C — representation, hearing and after (50 min)**

9. **Representation decision.** Fill in the template's table: act alone, lawyer, licensed pleader, Legal Aid. For the pleader option, list the three checks (licence, current year, written fee agreement).
10. **Hearing plan.** One page: what Hadas will say first in person (reg. ס), the documents she will hand up, the questions she expects from the dayanim, and the dress rules (reg. נג).
11. **Deadlines.** A table from judgment day: set aside a default judgment (30 days), leave to appeal an interim decision (10 days), appeal (30 days), each with the regulation.
12. **Stop.** Do not file. If this is your real case, decide in writing whether to file yourself, and when you would bring in a lawyer or pleader.

### Template

[Rabbinical-court filing file (תיק הגשה לבית הדין הרבני)](../../templates/rabbinical-court-filing-file.md) (Hebrew): request to settle, claim skeleton by reg. כו, documents checklist, fees table, representation table, deadlines table.

### How you know it worked

- The request to settle contains no facts and no jurisdiction arguments.
- The claim meets every item of reg. כו and sets out each joined issue separately with a specific relief.
- Every document on the list is something you can actually obtain, with where you get it.
- Your deadlines table has the three periods and their regulations.
- You made a written decision on representation, with reasons.

### Self-check

- [ ] I am acting in my own name about my own matter (or on the supplied case).
- [ ] I filed nothing during this lab, or filed deliberately in my own name.
- [ ] I know which regional court is competent and why.
- [ ] I know how to verify a rabbinical pleader's licence.
- [ ] I diarised the appeal periods.

## Without a lawyer

### Can you do this yourself?

Yes. A party may conduct their own case in the rabbinical court; the regulations assume you will plead in person in any case (reg. ס). Representing someone else for pay or as an occupation is reserved to lawyers and licensed pleaders (Pleaders Regulations reg. 1); a relative or friend may help only with the court's permission for a specific step (reg. נ(2), (4)). See [Can I act without a lawyer?](../../references/can-i-act-without-a-lawyer.md).

### Where and how

- The regional court's secretariat; online services on gov.il for existing files (⚠️ manual check).
- Assistance units at the rabbinical courts: [Welfare Ministry assistance units](https://www.gov.il/he/departments/units/molsa-court-assiatance-units) (⚠️ manual check).
- Legal Aid: [application](https://www.gov.il/he/service/legal_aid_application) (⚠️ manual check); [where to get help](../../references/where-to-get-help.md).
- Fees and periods: [current numbers](../../references/current-numbers.md).

### Stop and get a lawyer when

- The other spouse is represented and contests jurisdiction, property or custody.
- There is a get refusal, a spouse abroad, or a request for restriction orders.
- There is violence or a risk to the children.
- A property, pension or business issue is joined to the divorce.
- You are about to sign an arbitration deed (שטר בוררות) or an agreement waiving the civil property law (lesson 10.3).

## What goes wrong

| Mistake | Consequence | How to fix | How to avoid |
|---|---|---|---|
| Filing in the court of your new city | Venue objection; delay | Ask to transfer; refile in the last-joint-residence court | Check reg. י and the annex first |
| One paragraph "joining all matters" | Joinder challenged; issues lost to the other forum | File an amended claim particularising each issue | Follow reg. כז: each claim separately |
| Maintenance claim without the form | Claim returned or delayed | Attach the form | Check reg. לג |
| Paying a fee you are exempt from, or not paying one you owe | Wasted money or a struck-out claim | Ask for a refund or the deferral committee | Check regs 14א, 15, 22א |
| Bringing a friend to argue for you | The court refuses to hear him | Ask permission for the specific step, or plead yourself | Read reg. נ |
| Missing the 10-day window for leave to appeal | Interim decision becomes unappealable for now | Ask for an extension (fee item exists) with reasons | Diarise on the day of the decision |
| Hiring a "pleader" without checking the licence | Unlicensed representation; possible offence | Change representative | Check licence and year before signing |

## Review

- Start every contested family case with the request to settle; an agreed divorce is exempt.
- File in the regional court of the last joint residence; the claim must meet reg. כו and set out each joined issue separately.
- You plead first, in person; a lawyer or licensed rabbinical pleader may represent you; anyone else only with the court's permission for a specific step.
- Maintenance claimants and Legal Aid clients are exempt from fees; others can ask for deferral.
- Diarise 30 days (default judgment), 10 days (leave to appeal) and 30 days (appeal).

### Learn more

- The rabbinical court procedure regulations, chapters ב–ו, read for structure. FREE-FULL, about 40 minutes: [Wikisource](https://he.wikisource.org/wiki/תקנות_הדיון_בבתי-הדין_הרבניים_בישראל). Fallback: the regulations published in Yalkut HaPirsumim 4102 (link in the Wikisource header).
