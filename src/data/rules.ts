import { CoreRules } from "../types/models";

export const coreRules: CoreRules = {
  intakeOrder: [
    "Identify Purpose",
    "Confirm New or Existing",
    "Collect and Verify Identity Record",
    "Route Visitor"
  ],
  hardRule:
    "Routing must not occur before the identity record is completed and verified (physical ID or approved digital intake fallback)."
};

export const readBeforeBegin = {
  title: "Read Before You Begin",
  body: [
    "This assessment is timed.",
    "You have 30 minutes to complete all questions.",
    "Visitor purpose must always be confirmed.",
    "New vs existing status must always be verified.",
    "Identity record collection is mandatory (physical ID or approved digital intake fallback).",
    "Routing happens only after all steps are complete."
  ],
  action: "Click Start when ready."
};
