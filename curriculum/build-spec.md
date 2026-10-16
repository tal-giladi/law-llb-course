# Build spec for module writers

You write ONE module of "Israeli Law (LL.B. Level): Self-Study with Practice".

## Before you write: read, in this order

1. `C:\Users\TalGiladi\OneDrive\repos\tals-academy\docs\new-course-instructions.md`. It is binding.
2. `curriculum/plan.md`: §0.1 (decisions), §1 (positioning, s. 20), §3 (language), §4 (sources), §5 (your module's lesson list), §6 (lesson format), §7 (practice design), §9 (neutrality).
3. This file.
4. `curriculum/research/llb-curricula.md` and `curriculum/research/representation-rights.md`.
5. `references/current-numbers.md` and `references/can-i-act-without-a-lawyer.md`.
6. One finished module, if one exists, to match its tone and depth.

## Hard limits for agents

- **Do not spawn sub-agents. Work sequentially.** No more than 2 agents run in total.
- **Shared files are off-limits:** `_sidebar.md`, `README.md`, `glossary.md`, `references/`, `templates/`, `BUILD_PROGRESS.md`, `curriculum/plan.md`, other modules' files.
- **Never commit or push.** The main session does that.

## What you produce for module NN

- For every lesson in plan §5: `lessons/module-NN/lesson-MM.md` and `lessons/module-NN/lesson-MM.quiz.yaml` (3–5 questions).
- `assessments/module-NN-quiz.md`: short intro, a "Revisit by topic" list linking each lesson, a link to the project. No questions, no answers.
- `assessments/module-NN-quiz.quiz.yaml`: 10 scenario questions.
- `projects/mNN-<slug>.md`: brief, steps, a self-assessment rubric table, model answer in `<details><summary>Model answer</summary>…</details>`. The project is practical: a real document or case file in the learner's own affairs (or a supplied case).
- `curriculum/question-bank/module-NN.yaml`: at least 60 extra questions (format below).
- Inboxes for the main session:
  - `curriculum/glossary-inbox/module-NN.md`: `- **מונח** (transliteration) — English meaning.` one per line.
  - `curriculum/inbox/module-NN-numbers.md`: every fee, ceiling or deadline you used, with source URL and date checked.
  - `curriculum/inbox/module-NN-laws.md`: every law and ruling cited, with its free full-text URL.
  - `curriculum/inbox/module-NN-forums.md`: any new or corrected row for `references/can-i-act-without-a-lawyer.md` (forum, act for yourself?, who else may represent, source).
  - `curriculum/inbox/module-NN-external.md`: external learning resources assigned (URL, tag, minutes, lessons, last_checked).
  - `curriculum/inbox/templates/<name>.md`: complete drafts of templates; lessons link to the future path `../../templates/<name>.md`.
- Progress: append `lesson-MM done` to `curriculum/status/module-NN.log` after each lesson (md + quiz); `module done` at the end.
- Check: `node curriculum/tools/check-module.mjs NN` from the course root until `0 problems` (template links are broken until the main session moves the drafts; list them in your report).

## Lesson format

Exactly the front-matter and the 10 `##` sections of plan §6, in order.

- **Depth.** This is university level. Explain the doctrine, the competing views and the leading cases, not just the rule. Typical reading time 25–40 minutes.
- **Objectives**: 2–4, quoted, measurable ("Decide…", "Draft…", "Identify…").
- **Sources**: every legal claim has a primary source. Cite only URLs you opened, or that the research files list. gov.il and kolzchut.org.il block bots: you may use URLs from the research files and mark them `(⚠️ manual check)` in your inbox. **Never cite Nevo case pages.** Supreme Court rulings: use supremedecisions.court.gov.il / supreme.court.gov.il links, or Wikisource / university pages that host the text.
- **The law**: exact short Hebrew quotes in blockquotes, `*Gist:*` + one English sentence, free full-text link.
- **Leading cases**: `### <case name in Hebrew> (<citation>)`, then the holding (2–3 sentences), why it matters, and a free link. Never invent a citation; if you cannot verify a case, leave it out.
- **Numbers**: never a bare fee, ceiling or deadline; link `../../references/current-numbers.md` ("a fee of about ₪X (see current numbers)").
- **Do it yourself**: `### You need`, `### Steps`, `### Template`, `### How you know it worked`, `### Self-check`.
- **Without a lawyer**: `### Can you do this yourself?`, `### Where and how`, `### Stop and get a lawyer when` (plan §6). Real filing steps open with `> [!IMPORTANT]` "Act in your own name only. This is not legal advice — check current rules before filing."
- **Review**: 3–5 bullets, then `### Learn more` (free external units with tag FREE-FULL / FREE-AUDIT, minutes, deep link, fallback; or "None.").
- **Worked example**: a realistic Israeli case; invented names for private persons; rotate communities and viewpoints (plan §9).
- Criminal and police content opens with `> [!WARNING]`.

## Quizzes

Guidelines §5: 4 options, `correct` 0–3 spread, `explanation`, no all/none of the above, correct option not the longest. Realistic decisions ("Your landlord kept the deposit 3 months after you left — what is your first step?"). Use `>-` scalars for every text field. Hebrew allowed inside text.

## Question bank

`curriculum/question-bank/module-NN.yaml` (not imported; feeds Tal's daily practice tool):

```yaml
- id: m03-001
  module: 3
  lesson: "03.4"
  subject: good-faith
  difficulty: 2          # 1 recall-plus, 2 apply, 3 tricky real-world decision
  question: >-
    …
  options:
    - >-
      …
  correct: 1
  explanation: >-
    …
```

At least 60, about 7–10 per lesson; difficulties about 30/45/25%. New scenarios, not rewordings of the quizzes. Include bar-exam-style questions where the module covers a Bar subject, "which forum / which remedy" questions, and "spot the mistake in this letter or claim" questions.

## Final report (under 200 words)

Module time estimate: lesson minutes + practice minutes + project + 30 min quizzes, in hours. List anything Unverified and any template drafts.
