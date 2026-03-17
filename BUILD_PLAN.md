# Front Desk Orientation Platform - Build Plan

## 1) Project Understanding Summary
- Build a static, GitHub Pages-friendly internal training site: **Front Desk Orientation Platform**.
- Purpose: onboard front desk staff with orientation content, approved scripts, scenario practice, a timed deterministic assessment, and a printable/downloadable completion summary.
- Core training focus: correctly classify visitor flow across four service lines (Law Firm, Finance, Doctor, Physiotherapy), each with new vs existing client paths.
- Critical protocol to reinforce everywhere: **collect ID copy or ID photo for record**, communicated professionally and consistently.
- Explicit constraints: no backend, no login, no database, no cloud/admin systems.

## 2) Recommended Folder Structure
- `src/`
- `src/pages/` (Home, Modules, Scripts, Scenarios, Assessment, Summary)
- `src/components/` (layout, cards, progress, question UI, timer UI, result widgets)
- `src/data/`
- `src/data/modules.ts`
- `src/data/scripts.ts`
- `src/data/scenarios.ts`
- `src/data/questions.ts`
- `src/data/answerKey.ts`
- `src/data/categories.ts`
- `src/lib/` (scoring, timing, summary generation, helpers)
- `src/types/` (TypeScript models for all content)
- `src/styles/` (Tailwind base/theme tokens, optional custom CSS)
- `public/` (logos, printable assets)
- `docs/` (optional content-authoring notes for future editors)

## 3) Page / Component Architecture
- **Home**: platform intro, training objectives, module navigation, expected completion flow.
- **Orientation Modules**: structured content blocks explaining role, intake, routing, and ID protocol.
- **Approved Scripts**: categorized script library by service line and new/existing status.
- **Scenario Practice**: untimed scenario drills with immediate feedback and rationale.
- **Timed Assessment**: mixed question types, countdown timer, no immediate per-question reveal, final results only.
- **Completion Summary**: trainee-facing report view with print/download actions.
- Shared components: top nav, section header, category badge, script card, scenario card, MCQ renderer, multipart renderer, timer bar, score panel.

## 4) Content / Data Model
- All training content stored in local TS/JSON data files for easy non-dev edits.
- Core entities:
- `OperationalCategory`: Law Firm, Finance, Doctor, Physiotherapy.
- `SkillCategory`: Greeting & Professionalism, Client Identification, New vs Existing Handling, ID Protocol, Routing, Scenario Judgment.
- `ClientType`: New, Existing.
- `Module`: id, title, objectives, sections, key takeaways.
- `Script`: id, category, clientType, context, scriptText, requiredSteps (includes ID step).
- `Scenario`: id, category, clientType, prompt, expectedActions, feedback.
- `Question`: id, type, skillCategory, serviceLine, clientType, prompt, choices/parts, correctAnswerRef, explanation.
- Clear tagging enables category breakdown reporting and future expansion to ~50 questions.
- Dual tagging (skill + service line) keeps evaluation and operational context separate and reportable.

## 5) Question / Scenario Model
- Supported question types:
- Multiple choice (single best answer).
- Scenario-based single response.
- Multi-part scenario (several linked sub-questions).
- Practice mode:
- Untimed.
- Immediate correctness + explanation.
- Assessment mode:
- Timed.
- Deterministic grading by fixed key.
- End-of-assessment feedback only.
- Authoring-ready structure so you can add questions incrementally without changing UI logic.

## 6) Scoring / Timing Model
- Core intake governance rule (explicit and enforced):
- `Identify Purpose -> Confirm New/Existing -> Collect and Verify ID -> Route Visitor`
- Hard rule: **Routing must not occur before ID is collected and verified.**
- Deterministic scoring only:
- Each question/subpart has fixed point value.
- Total score = sum(correct points) / sum(total points).
- Category breakdown:
- Aggregate by service line and by new/existing tags.
- Pass/fail threshold configurable in local settings (example: 80%).
- Timer:
- Fixed duration for full assessment (configurable).
- Start on first question.
- Auto-submit at zero.
- Time taken captured for summary.

## 7) Completion Summary Model
- Generated client-side after submission with:
- Trainee name.
- Completion date.
- Total score and pass/fail.
- Time taken.
- Category breakdown.
- Areas needing review (low-performing categories/objectives).
- Output options:
- Print-friendly view via browser print stylesheet.
- Downloadable summary as a local file (simple text/HTML export; optional PDF via print dialog to keep stack lightweight).

## 8) Visual Design System Direction
- Tone: professional internal law-firm portal.
- Palette: white background, soft gray panels, muted navy/charcoal text, restrained blue accents.
- Typography: clean modern sans-serif with high readability.
- UI style: clear spacing, low visual noise, subtle borders/shadows, strong hierarchy.
- Interaction: minimal motion, clear states for active/completed/needs review.
- Accessibility baseline: contrast-compliant colors, keyboard-friendly controls, readable sizing.

## 9) Phased Implementation Plan
1. Scaffold app (React + TypeScript + Vite + Tailwind) and base layout/navigation.
2. Define TypeScript models and seed local data files for modules/scripts/scenarios/questions.
3. Build orientation and scripts pages from data-driven components.
4. Add pre-assessment "Read Before You Begin" guidance block with key rules and timer notice.
5. Build scenario practice engine with immediate deterministic feedback.
6. Build timed assessment flow (question navigation, timer, deterministic scoring).
7. Build completion summary view with print/download support.
8. Add optional "Review Incorrect Answers" learning view after final result.
9. Add polish: responsive layout, accessibility checks, content editability pass.
10. Final QA: GitHub Pages static build verification and sample trainee run-through.

## 10) Risks / Simplifications / Assumptions
- Assumption: single-trainee session in browser memory (no persistent server-side records).
- Simplification: results are generated/downloaded locally; supervisors store files manually.
- Risk: accidental page refresh may lose in-progress assessment unless we add lightweight localStorage autosave (still static-safe).
- Assumption: initial content set is starter-level; full ~50 question bank added in later content pass.
- Simplification: deterministic fixed-key grading only, no AI or subjective scoring.
- Risk: if strict PDF download is required without print dialog, that adds complexity; recommended to start with print-friendly export.
