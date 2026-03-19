import { ApprovedScripts } from "../types/models";

export const approvedScripts: ApprovedScripts = {
  greetingScript:
    "Good morning, welcome to the office. My name is [Name], and I'll assist you at the front desk.",
  identifyingPurposeScript:
    "May I confirm the purpose of your visit today? Are you here for Law Firm services, Finance, Doctor, or Physiotherapy?",
  newVsExistingScript:
    "Thank you. Have you visited our office before, or is this your first appointment with us?",
  idRequestScript:
    "Good morning/afternoon. May I have your ID for our records, please? If you do not have physical ID today, our protocol requires a quick digital intake photo and your contact details for the secure visitor log.",
  idRefusalHandlingScript:
    "I understand. In the absence of a physical ID, our protocol requires a quick identification photo and manual contact details. If you prefer, I can explain the requirement clearly. If you still decline, I must escalate to the Operations Manager or Managing Partner's office.",
  verificationScript:
    "Thank you. I'm verifying your details now: department [Department], status [New/Existing], and identity record complete (ID or digital intake photo with required contact details).",
  routingScript:
    "Everything is confirmed. Please proceed to the [Department/Area], and the team there will assist you shortly.",
  closingScript:
    "Thank you for your cooperation. If you need anything else, please return to the front desk and we'll be glad to help."
};
