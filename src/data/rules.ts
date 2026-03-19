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
    "For Finance visits, do not mention AMSL unless the visitor mentions it first.",
    "New vs existing status must always be verified.",
    "Identity record collection is mandatory (physical ID or approved digital intake fallback).",
    "Visitor logging is mandatory: physical logbook always, electronic log when available.",
    "Routing happens only after all steps are complete."
  ],
  action: "Click Start when ready."
};

export const operationalControls = {
  financeConversationBoundary:
    "For Finance visits, front desk does not introduce AMSL first. Confirm Finance, ask who the visitor is here to see, and route based on visitor-stated purpose.",
  loggingRule:
    "Physical logbook entry is required for every visitor. Electronic log is completed when available and does not replace the physical logbook requirement."
};
