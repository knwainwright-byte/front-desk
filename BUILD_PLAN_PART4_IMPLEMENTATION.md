# Front Desk Orientation Platform - Part 4 Implementation Checklist

## Build Rules (Do Not Deviate)
- Keep static-only architecture (GitHub Pages compatible).
- No backend, login, database, admin portal, or cloud services.
- Deterministic scoring only (fixed answer key).
- Keep professional law-firm UI style (white, soft gray, muted navy/charcoal, subtle blue).
- Keep all content data-driven from local TS/JSON files.

## Phase 0 - Project Setup
- [ ] Scaffold app with `React + TypeScript + Vite + Tailwind`.
- [ ] Configure base folder structure from `BUILD_PLAN.md`.
- [ ] Add `types/` for shared models (modules, scripts, scenarios, questions, summary).
- [ ] Add `data/` files and import wiring.
- [ ] Confirm project builds locally with no errors.

Done when:
- [ ] `npm run build` succeeds.
- [ ] App renders base shell with routing/navigation.

## Phase 1 - Core Models and Governance
- [ ] Implement dual question taxonomy:
  - `skillCategory`
  - `serviceLine`
  - `clientType`
- [ ] Add explicit core intake rule constants:
  - `Identify Purpose -> Confirm New/Existing -> Collect and Verify ID -> Route`
  - Hard rule: no routing before ID verification.
- [ ] Ensure question model supports `standard`, `scenario`, and `logic` types.

Done when:
- [ ] Type definitions compile cleanly.
- [ ] Seed question objects validate against model.

## Phase 2 - Load Approved Content
- [ ] Load orientation modules from `BUILD_PLAN_PART2_CONTENT.md`.
- [ ] Load approved script set with strengthened policy language.
- [ ] Load 12-scenario bank with scenario prompts/questions.
- [ ] Load 50-question assessment bank with A-E options and answer key.
- [ ] Add `readBeforeBegin` content block.

Done when:
- [ ] All content renders from data files (no hardcoded page text except headings/ui labels).
- [ ] Question count check confirms exactly 50 assessment items.

## Phase 3 - Page Implementation
- [ ] Build `Home` page (platform intro + training flow).
- [ ] Build `Orientation Modules` page (module cards with key rules).
- [ ] Build `Approved Scripts` page (script cards and copy-ready text).
- [ ] Build `Scenario Practice` page:
  - untimed
  - immediate correctness feedback
  - explanation/rationale display
- [ ] Build `Timed Assessment` page:
  - pre-start "Read Before You Begin" block
  - timer start on assessment start
  - no per-question correctness reveal during final test
  - deterministic end scoring
- [ ] Build `Completion Summary` page per Part 3 spec.

Done when:
- [ ] All 6 pages are navigable and functional.
- [ ] Assessment flow works from start to final summary without manual refresh hacks.

## Phase 4 - Assessment Engine Logic
- [ ] Implement answer state store for current session.
- [ ] Implement deterministic scorer by answer key.
- [ ] Implement category aggregates by:
  - skill category
  - service line
  - client type (optional secondary slice in summary logic)
- [ ] Implement pass/fail threshold (configurable constant).
- [ ] Implement time tracking:
  - start time
  - end time
  - elapsed duration
  - auto-submit on timeout
- [ ] Implement "Areas Needing Review" generation from weak categories.
- [ ] Add optional "Review Incorrect Answers" screen after result.

Done when:
- [ ] Same input answers always return identical score/result.
- [ ] Timeout submits and summary still renders valid result.

## Phase 5 - Completion Summary (Print/PDF Ready)
- [ ] Implement header:
  - Platform name
  - Completion Summary
  - subtitle
- [ ] Implement Trainee Information block.
- [ ] Implement Final Result Summary with:
  - score
  - percentage
  - pass/review required
  - compliance note
- [ ] Implement Category Breakdown table/list with status labels.
- [ ] Implement Areas Needing Review with guidance mapping.
- [ ] Implement Supervisor Review fields/spaces.
- [ ] Implement Trainee Acknowledgement fields/spaces.
- [ ] Implement footer note.
- [ ] Add on-screen action buttons:
  - Print / Save as PDF
  - Restart Assessment
  - Return Home
- [ ] Hide action buttons in print mode.

Done when:
- [ ] Print preview on A4 is clean and readable.
- [ ] Buttons are hidden in print output.
- [ ] One-page preferred layout works for typical result; clean second page if overflow.

## Phase 6 - UX Reliability (Static-Safe)
- [ ] Add lightweight `localStorage` persistence for:
  - assessment answers
  - timer start/reference values
- [ ] Restore in-progress state on refresh.
- [ ] Add reset/clear flow for restart.

Done when:
- [ ] Refresh during assessment preserves progress and timer state.
- [ ] Restart clears prior attempt data safely.

## Phase 7 - Styling and Accessibility Pass
- [ ] Apply approved design system tokens (colors, spacing, typography).
- [ ] Ensure calm, professional layout with minimal clutter.
- [ ] Verify desktop and mobile responsiveness.
- [ ] Check keyboard accessibility for forms/questions/buttons.
- [ ] Check text contrast and readable font sizing.

Done when:
- [ ] UI is consistent and professional across pages.
- [ ] No obvious accessibility blockers in keyboard navigation.

## Phase 8 - QA and Release Readiness
- [ ] Validate all required categories appear correctly in reporting.
- [ ] Validate at least 5-7 assessment items enforce intake-order rule.
- [ ] Validate routing-before-ID answers are marked incorrect.
- [ ] Validate pass/fail threshold behavior.
- [ ] Validate print-to-PDF from browser.
- [ ] Run production build and verify static output.

Done when:
- [ ] `npm run build` passes.
- [ ] End-to-end manual test passes:
  - complete assessment
  - view summary
  - print/save PDF
  - restart flow

## Execution Order (Direct)
1. Setup and type models.
2. Load approved content packs.
3. Build pages and navigation.
4. Build assessment logic + timer + scoring.
5. Build completion summary and print mode.
6. Add localStorage resilience.
7. Polish UI/accessibility.
8. QA and static build verification.

## Final Acceptance Checklist
- [ ] Static-only, GitHub Pages friendly.
- [ ] No backend/auth/admin features added.
- [ ] Deterministic 50-question assessment working.
- [ ] Core hard rule enforced: no routing before verified ID.
- [ ] Completion Summary professional and print/PDF ready.
- [ ] Content remains easy to edit in local data files.
