import { ApprovedScripts } from "../types/models";

export const approvedScripts: ApprovedScripts = {
  greetingScript:
    "Good morning, welcome to the office. My name is [Name], and I'll assist you at the front desk.",
  identifyingPurposeScript:
    "May I confirm the purpose of your visit today? Are you here for Law Firm services, Finance, Doctor, or Physiotherapy? If this is a Finance visit, who are you here to see?",
  newVsExistingScript:
    "Thank you. Have you visited our office before, or is this your first appointment with us?",
  idRequestScript:
    "Good morning/afternoon. May I have your ID for our records, please? If you do not have physical ID today, our protocol requires a quick digital intake photo and your contact details for the secure visitor log.",
  idRefusalHandlingScript:
    "I understand. In the absence of a physical ID, our protocol requires a quick identification photo and manual contact details. If you prefer, I can explain the requirement clearly. If you still decline, I must escalate to the Operations Manager or Managing Partner's office.",
  verificationScript:
    "Thank you. I'm verifying your details now: department [Department], status [New/Existing], identity record complete, and visitor log entries completed in the system and physical logbook.",
  routingScript:
    "Everything is confirmed. Please proceed to the [Department/Area], and the team there will assist you shortly. For Finance visits, I will route you based on the person and purpose you provided.",
  clientUpdateSchedulingScript:
    "We can assist you today as best as possible. For scheduled client updates, the designated update days are Wednesday, Thursday, and Friday for fuller support and continuity.",
  closingScript:
    "Thank you for your cooperation. If you need anything else, please return to the front desk and we'll be glad to help."
};
