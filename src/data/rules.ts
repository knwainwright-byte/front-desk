import { CoreRules } from "../types/models";

export const coreRules: CoreRules = {
  intakeOrder: [
    "Identify Purpose",
    "Confirm New or Existing",
    "Collect and Verify ID",
    "Route Visitor"
  ],
  hardRule: "Routing must not occur before ID is collected and verified."
};

export const readBeforeBegin = {
  title: "Read Before You Begin",
  body: [
    "This assessment is timed.",
    "You have 30 minutes to complete all questions.",
    "Visitor purpose must always be confirmed.",
    "New vs existing status must always be verified.",
    "ID collection is mandatory.",
    "Routing happens only after all steps are complete."
  ],
  action: "Click Start when ready."
};
