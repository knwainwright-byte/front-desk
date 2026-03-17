import { ApprovedScripts } from "../types/models";

export const approvedScripts: ApprovedScripts = {
  greetingScript:
    "Good morning, welcome to the office. My name is [Name], and I'll assist you at the front desk.",
  identifyingPurposeScript:
    "May I confirm the purpose of your visit today? Are you here for Law Firm services, Finance, Doctor, or Physiotherapy?",
  newVsExistingScript:
    "Thank you. Have you visited our office before, or is this your first appointment with us?",
  idRequestScript:
    "As part of our standard intake process, we are required to take a copy of your ID, or we can take a clear photo of it for our records.",
  idRefusalHandlingScript:
    "I understand your concern. We are required to complete this ID step for all visitors as part of office protocol. If you'd like, I can explain the process clearly or connect you with a supervisor.",
  verificationScript:
    "Thank you. I'm just verifying your details now: your department is [Department], and your status is [New/Existing].",
  routingScript:
    "Everything is confirmed. Please proceed to the [Department/Area], and the team there will assist you shortly.",
  closingScript:
    "Thank you for your cooperation. If you need anything else, please return to the front desk and we'll be glad to help."
};
