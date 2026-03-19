import { AssessmentQuestion, BaseQuestion, ClientType, ServiceLine } from "../types/models";

export const baseAssessmentQuestions: BaseQuestion[] = [
{
    id: "Q01",
    style: "standard",
    category: "Greeting & Professionalism",
    question: "What is the best opening line for a first-time visitor?",
    options: {
      A: "Please wait there.",
      B: "Next.",
      C: "Good morning, welcome to the office. How may I assist you today?",
      D: "Do you have all your paperwork?",
      E: "Are you late for your appointment?"
    },
    correctAnswer: "C"
  },
  {
    id: "Q02",
    style: "standard",
    category: "Client Identification",
    question: "Which question best identifies visitor purpose?",
    options: {
      A: "Are you here for someone important?",
      B: "Which department are you visiting today: Law Firm, Finance, Doctor, or Physiotherapy?",
      C: "Can you go upstairs now?",
      D: "Do you know where to go?",
      E: "Are you paying today?"
    },
    correctAnswer: "B"
  },
  {
    id: "Q03",
    style: "standard",
    category: "New vs Existing Handling",
    question: "What is the correct approach to new vs existing status?",
    options: {
      A: "Assume existing if the face looks familiar.",
      B: "Ask only new visitors.",
      C: "Always ask whether the person has visited before and verify.",
      D: "Skip this if the office is busy.",
      E: "Let the client decide without verification."
    },
    correctAnswer: "C"
  },
  {
    id: "Q04",
    style: "standard",
    category: "ID Protocol",
    question: "Which statement reflects the office ID protocol?",
    options: {
      A: "ID is optional for existing clients.",
      B: "ID is requested only for legal clients.",
      C: "ID must be collected as copy or photo for records.",
      D: "ID can be skipped if the client is in a hurry.",
      E: "ID is only needed when supervisors are present."
    },
    correctAnswer: "C"
  },
  {
    id: "Q05",
    style: "standard",
    category: "Routing",
    question: "A visitor is here for billing questions. Where should they be routed?",
    options: {
      A: "Legal team",
      B: "Finance",
      C: "Doctor",
      D: "Physiotherapy",
      E: "Any available office"
    },
    correctAnswer: "B"
  },
  {
    id: "Q06",
    style: "scenario",
    category: "Scenario Judgment",
    question:
      "A visitor says, 'I'm here to see someone upstairs,' but gives no department details. What should you do first?",
    options: {
      A: "Send them upstairs quickly.",
      B: "Ask a clarifying question to identify the exact department.",
      C: "Call security immediately.",
      D: "Assume they are legal.",
      E: "Ask for payment details first."
    },
    correctAnswer: "B"
  },
  {
    id: "Q07",
    style: "standard",
    category: "Greeting & Professionalism",
    question: "Which tone is most appropriate at the front desk?",
    options: {
      A: "Casual and joking with every visitor",
      B: "Short and abrupt to save time",
      C: "Calm, respectful, and clear",
      D: "Informal and overly personal",
      E: "Silent unless asked questions"
    },
    correctAnswer: "C"
  },
  {
    id: "Q08",
    style: "standard",
    category: "Client Identification",
    question: "Why is purpose identification required before routing?",
    options: {
      A: "To reduce conversation length only",
      B: "To avoid confirming new/existing status",
      C: "To ensure accurate direction to the correct service line",
      D: "To avoid asking for ID",
      E: "To let visitors choose randomly"
    },
    correctAnswer: "C"
  },
  {
    id: "Q09",
    style: "standard",
    category: "New vs Existing Handling",
    question: "A client says they have visited before. What should you do next?",
    options: {
      A: "Skip all verification steps.",
      B: "Verify details before proceeding.",
      C: "Ignore and mark as new.",
      D: "Route immediately.",
      E: "Ask another staff member to guess."
    },
    correctAnswer: "B"
  },
  {
    id: "Q10",
    style: "standard",
    category: "ID Protocol",
    question: "What is the best way to request ID?",
    options: {
      A: "Give me your ID now.",
      B: "You can skip ID if this is quick.",
      C: "As part of our standard intake, we need a copy or photo of your ID for records.",
      D: "I don't know if ID is required today.",
      E: "Only show ID if you want to."
    },
    correctAnswer: "C"
  },
  {
    id: "Q11",
    style: "standard",
    category: "Routing",
    question: "A client is here for physical recovery sessions. Which department applies?",
    options: {
      A: "Law Firm",
      B: "Finance",
      C: "Doctor",
      D: "Physiotherapy",
      E: "Reception only"
    },
    correctAnswer: "D"
  },
  {
    id: "Q12",
    style: "scenario",
    category: "Scenario Judgment",
    question:
      "A visitor has no physical ID and says, 'I only have one question.' What is the best response?",
    options: {
      A: "Allow entry without ID to avoid conflict.",
      B: "End the conversation immediately.",
      C: "Explain that identity record is mandatory, complete digital intake photo plus required contact details, and escalate only if they refuse.",
      D: "Tell them to return another day without documenting anything.",
      E: "Ask another client for advice."
    },
    correctAnswer: "C"
  },
  {
    id: "Q13",
    style: "standard",
    category: "Greeting & Professionalism",
    question: "What should you avoid during front desk conversations?",
    options: {
      A: "Clear instructions",
      B: "Polite confirmation",
      C: "Assumptive language and dismissive tone",
      D: "Professional greeting",
      E: "Calm pace"
    },
    correctAnswer: "C"
  },
  {
    id: "Q14",
    style: "standard",
    category: "Client Identification",
    question: "Which is a correct purpose category used by this office?",
    options: {
      A: "Human Resources",
      B: "Marketing",
      C: "Finance",
      D: "IT Support",
      E: "Sales"
    },
    correctAnswer: "C"
  },
  {
    id: "Q15",
    style: "standard",
    category: "New vs Existing Handling",
    question: "When should new/existing status be determined?",
    options: {
      A: "After routing is complete",
      B: "Before verification and routing",
      C: "Only for finance visitors",
      D: "Only for new legal clients",
      E: "It is not needed"
    },
    correctAnswer: "B"
  },
  {
    id: "Q16",
    style: "standard",
    category: "ID Protocol",
    question: "What must be verified after collecting ID?",
    options: {
      A: "Nothing else is needed",
      B: "That the image is clear and details match the visitor",
      C: "Only the first name",
      D: "Only whether the visitor smiles",
      E: "Only the appointment time"
    },
    correctAnswer: "B"
  },
  {
    id: "Q17",
    style: "standard",
    category: "Routing",
    question: "Legal consultation visitors should be directed to:",
    options: {
      A: "Doctor",
      B: "Finance",
      C: "Physiotherapy",
      D: "Legal team",
      E: "Storage area"
    },
    correctAnswer: "D"
  },
  {
    id: "Q18",
    style: "scenario",
    category: "Scenario Judgment",
    question:
      "An existing client says, 'You already know me, skip questions.' What should you do?",
    options: {
      A: "Skip all questions to keep them happy.",
      B: "Explain verification is standard for all visitors and continue protocol.",
      C: "Ask them to leave.",
      D: "Route first and verify later.",
      E: "Ask another visitor to confirm identity."
    },
    correctAnswer: "B"
  },
  {
    id: "Q19",
    style: "standard",
    category: "Greeting & Professionalism",
    question: "Which closing is best after successful intake?",
    options: {
      A: "You're done. Next.",
      B: "Go wherever you think is right.",
      C: "Thank you. Please proceed to the assigned department; we are here if you need help.",
      D: "Don't come back without documents.",
      E: "No closing is needed."
    },
    correctAnswer: "C"
  },
  {
    id: "Q20",
    style: "standard",
    category: "Client Identification",
    question: "If a visitor gives a vague answer about purpose, you should:",
    options: {
      A: "Guess the department and continue.",
      B: "Politely ask a clarifying question.",
      C: "Send to finance by default.",
      D: "Skip intake steps.",
      E: "Ask unrelated personal questions."
    },
    correctAnswer: "B"
  },
  {
    id: "Q21",
    style: "standard",
    category: "New vs Existing Handling",
    question: "Why is 'never assume' important in new/existing handling?",
    options: {
      A: "Assumptions speed up service.",
      B: "Assumptions reduce documentation needs.",
      C: "Assumptions can cause incorrect routing and record errors.",
      D: "Assumptions are required in busy offices.",
      E: "Assumptions improve privacy."
    },
    correctAnswer: "C"
  },
  {
    id: "Q22",
    style: "standard",
    category: "ID Protocol",
    question: "Which option meets ID protocol?",
    options: {
      A: "No ID for returning clients",
      B: "ID only for doctor visits",
      C: "Physical ID is collected and verified, or digital intake photo plus full legal name and phone number is captured and verified",
      D: "Client verbal confirmation only",
      E: "Any document without verification"
    },
    correctAnswer: "C"
  },
  {
    id: "Q23",
    style: "standard",
    category: "Routing",
    question: "A visitor asks about payment plans and invoices. Best routing?",
    options: {
      A: "Legal team",
      B: "Finance",
      C: "Doctor",
      D: "Physiotherapy",
      E: "Security desk"
    },
    correctAnswer: "B"
  },
  {
    id: "Q24",
    style: "scenario",
    category: "Scenario Judgment",
    question:
      "A visitor appears confident and starts walking past the desk toward offices. What should you do?",
    options: {
      A: "Ignore because they seem familiar.",
      B: "Politely stop and complete intake before allowing routing.",
      C: "Shout for them to return.",
      D: "Let them proceed and record later.",
      E: "Ask another client to assist."
    },
    correctAnswer: "B"
  },
  {
    id: "Q25",
    style: "standard",
    category: "Greeting & Professionalism",
    question: "Which behavior best reflects confidence at front desk?",
    options: {
      A: "Speaking unclearly to avoid mistakes",
      B: "Using consistent protocol with clear, calm language",
      C: "Skipping steps when challenged",
      D: "Avoiding eye contact",
      E: "Arguing with visitors"
    },
    correctAnswer: "B"
  },
  {
    id: "Q26",
    style: "standard",
    category: "Client Identification",
    question: "Which list includes all valid service lines?",
    options: {
      A: "Legal, Marketing, IT, Doctor",
      B: "Law Firm, Finance, Doctor, Physiotherapy",
      C: "Finance, Sales, HR, Physiotherapy",
      D: "Doctor, IT, Finance, Security",
      E: "Law Firm, Accounting, Surgery, Therapy"
    },
    correctAnswer: "B"
  },
  {
    id: "Q27",
    style: "standard",
    category: "New vs Existing Handling",
    question: "A colleague says 'I know this person.' What is your best action?",
    options: {
      A: "Accept the statement and skip your checks.",
      B: "Still verify the visitor's new/existing status directly.",
      C: "Send the visitor to any department.",
      D: "Ask the visitor to come later.",
      E: "Ignore the visitor."
    },
    correctAnswer: "B"
  },
  {
    id: "Q28",
    style: "standard",
    category: "ID Protocol",
    question: "A clear reason to communicate ID requirement is:",
    options: {
      A: "So staff can choose who to process",
      B: "Because records protocol applies to all visitors",
      C: "Because it is optional but preferred",
      D: "Because only supervisors asked once",
      E: "Because it replaces all other verification"
    },
    correctAnswer: "B"
  },
  {
    id: "Q29",
    style: "standard",
    category: "Routing",
    question: "A visitor reports a scheduled medical consultation. Route to:",
    options: {
      A: "Law Firm",
      B: "Finance",
      C: "Doctor",
      D: "Physiotherapy",
      E: "Parking office"
    },
    correctAnswer: "C"
  },
  {
    id: "Q30",
    style: "scenario",
    category: "Scenario Judgment",
    question:
      "A physiotherapy client says they are late and has no physical ID. What is correct?",
    options: {
      A: "Allow exception automatically.",
      B: "Explain identity record is required before routing and offer quick digital intake photo plus required contact details.",
      C: "Mark them absent.",
      D: "Ask them to return next week.",
      E: "Skip all checks for this department."
    },
    correctAnswer: "B"
  },
  {
    id: "Q31",
    style: "logic",
    category: "Scenario Judgment",
    question:
      "Order the intake steps correctly: 1) route visitor, 2) verify new/existing, 3) identify purpose, 4) collect/verify ID.",
    options: {
      A: "3 -> 2 -> 4 -> 1",
      B: "2 -> 3 -> 1 -> 4",
      C: "1 -> 3 -> 2 -> 4",
      D: "4 -> 3 -> 2 -> 1",
      E: "3 -> 4 -> 2 -> 1"
    },
    correctAnswer: "A"
  },
  {
    id: "Q32",
    style: "standard",
    category: "Greeting & Professionalism",
    question: "If a visitor is frustrated, your best communication style is:",
    options: {
      A: "Match their frustration to show urgency",
      B: "Remain calm, polite, and clear",
      C: "Speak louder to gain control",
      D: "Ignore their concerns",
      E: "End interaction quickly without explanation"
    },
    correctAnswer: "B"
  },
  {
    id: "Q33",
    style: "standard",
    category: "Client Identification",
    question: "Which phrase best confirms purpose after initial response?",
    options: {
      A: "So you are probably here for legal, correct?",
      B: "Let me confirm: you are here for the [Department] service today.",
      C: "You can decide later.",
      D: "I'll choose a department for you.",
      E: "That is not necessary."
    },
    correctAnswer: "B"
  },
  {
    id: "Q34",
    style: "standard",
    category: "New vs Existing Handling",
    question: "What should be done if the visitor is unsure whether they visited before?",
    options: {
      A: "Skip the status question entirely",
      B: "Assume new and route immediately",
      C: "Verify carefully before final classification",
      D: "Tell them to return with proof only",
      E: "Classify randomly"
    },
    correctAnswer: "C"
  },
  {
    id: "Q35",
    style: "standard",
    category: "ID Protocol",
    question: "Which response is best when a visitor asks why ID or digital intake photo is needed?",
    options: {
      A: "Because I said so.",
      B: "No reason, just policy.",
      C: "It is a mandatory requirement for firm security, insurance compliance, and record verification.",
      D: "Only today we need it.",
      E: "Only new clients need ID."
    },
    correctAnswer: "C"
  },
  {
    id: "Q36",
    style: "standard",
    category: "Routing",
    question: "A visitor comes for post-injury rehabilitation sessions. Route to:",
    options: {
      A: "Law Firm",
      B: "Finance",
      C: "Doctor",
      D: "Physiotherapy",
      E: "Main lobby seating only"
    },
    correctAnswer: "D"
  },
  {
    id: "Q37",
    style: "scenario",
    category: "Scenario Judgment",
    question:
      "A visitor says they need both legal advice and a payment update. What is best first step?",
    options: {
      A: "Send directly to legal without intake.",
      B: "Identify and confirm primary immediate purpose, complete intake, then route accordingly.",
      C: "Route to doctor as neutral option.",
      D: "Decline service due to two requests.",
      E: "Ask them to choose later upstairs."
    },
    correctAnswer: "B"
  },
  {
    id: "Q38",
    style: "standard",
    category: "Greeting & Professionalism",
    question: "Which statement shows professional consistency?",
    options: {
      A: "I only ask full questions when supervisors watch.",
      B: "I follow the same protocol for every visitor.",
      C: "I skip steps for familiar faces.",
      D: "I avoid explanations to save time.",
      E: "I let visitors create the process."
    },
    correctAnswer: "B"
  },
  {
    id: "Q39",
    style: "standard",
    category: "Client Identification",
    question: "What is the risk of routing before purpose confirmation?",
    options: {
      A: "No risk; all departments are interchangeable.",
      B: "It can cause delays, confusion, and service errors.",
      C: "It improves efficiency in most cases.",
      D: "It removes need for ID protocol.",
      E: "It only affects new clients."
    },
    correctAnswer: "B"
  },
  {
    id: "Q40",
    style: "logic",
    category: "Scenario Judgment",
    question:
      "Client is existing, purpose is finance, has no physical ID, and refuses digital intake photo. Which is correct next action?",
    options: {
      A: "Route immediately because they are existing.",
      B: "Restate mandatory identity requirements professionally and escalate to Operations Manager or Managing Partner's office if refusal continues.",
      C: "Reclassify as legal client.",
      D: "Skip ID and note verbal refusal only.",
      E: "End service without explanation."
    },
    correctAnswer: "B"
  },
  {
    id: "Q41",
    style: "standard",
    category: "New vs Existing Handling",
    question: "Which statement best fits protocol?",
    options: {
      A: "Existing clients do not need status confirmation.",
      B: "New/existing should be confirmed for every visitor.",
      C: "Status is needed only for legal matters.",
      D: "Status can be guessed from appointment style.",
      E: "Status is optional during busy hours."
    },
    correctAnswer: "B"
  },
  {
    id: "Q42",
    style: "standard",
    category: "ID Protocol",
    question: "What qualifies as acceptable ID handling under protocol?",
    options: {
      A: "A quick glance without record",
      B: "Client verbally states ID number",
      C: "Collect physical ID record or digital intake photo fallback with full legal name and phone number, then verify match and legibility",
      D: "Record initials only",
      E: "Skip if client appears trustworthy"
    },
    correctAnswer: "C"
  },
  {
    id: "Q43",
    style: "standard",
    category: "Routing",
    question: "If intake is incomplete, routing should:",
    options: {
      A: "Proceed anyway to avoid delays",
      B: "Pause until required steps are complete",
      C: "Default to legal team",
      D: "Be delegated to waiting visitors",
      E: "Be skipped entirely"
    },
    correctAnswer: "B"
  },
  {
    id: "Q44",
    style: "scenario",
    category: "Scenario Judgment",
    question:
      "A visitor insists they were told 'no ID or photo needed today.' What should you do?",
    options: {
      A: "Accept the claim and skip policy.",
      B: "Calmly restate mandatory identity protocol, continue required steps, and escalate if they refuse all approved methods.",
      C: "Argue until they agree.",
      D: "Ignore and route.",
      E: "Send them home without explanation."
    },
    correctAnswer: "B"
  },
  {
    id: "Q45",
    style: "standard",
    category: "Greeting & Professionalism",
    question: "Which action best supports a calm client experience?",
    options: {
      A: "Speaking quickly and skipping confirmations",
      B: "Using clear steps and confirming understanding",
      C: "Using technical jargon",
      D: "Giving different instructions each time",
      E: "Avoiding eye contact and closure"
    },
    correctAnswer: "B"
  },
  {
    id: "Q46",
    style: "logic",
    category: "Scenario Judgment",
    question:
      "A new visitor arrives for doctor services with unclear details. Which sequence is best?",
    options: {
      A: "Route -> ask if new -> request ID -> confirm purpose",
      B: "Confirm purpose -> ask new/existing -> request and verify ID -> route",
      C: "Request ID -> route -> confirm purpose -> ask status",
      D: "Ask status -> route -> confirm purpose -> request ID",
      E: "Route and complete everything later"
    },
    correctAnswer: "B"
  },
  {
    id: "Q47",
    style: "standard",
    category: "Client Identification",
    question: "A visitor says, 'I'm here for recovery sessions.' Which department is most likely?",
    options: {
      A: "Law Firm",
      B: "Finance",
      C: "Doctor",
      D: "Physiotherapy",
      E: "Records office"
    },
    correctAnswer: "D"
  },
  {
    id: "Q48",
    style: "standard",
    category: "New vs Existing Handling",
    question: "Which phrase best asks status professionally?",
    options: {
      A: "You're not new, right?",
      B: "Have you visited our office before, or is this your first time?",
      C: "You look familiar, so I'll mark existing.",
      D: "I don't need to ask this today.",
      E: "Tell me quickly: new or old?"
    },
    correctAnswer: "B"
  },
  {
    id: "Q49",
    style: "standard",
    category: "ID Protocol",
    question: "If the digital intake photo is blurry or backlit, the correct action is to:",
    options: {
      A: "Accept it to save time",
      B: "Proceed without record",
      C: "Retake the photo under proper lighting and verify it is attached to the correct visitor record before routing",
      D: "Ignore and mark complete",
      E: "Route first, verify later"
    },
    correctAnswer: "C"
  },
  {
    id: "Q50",
    style: "scenario",
    category: "Routing",
    question:
      "All intake steps are complete for an existing legal client. What should happen next?",
    options: {
      A: "Repeat the entire intake again",
      B: "Hold the client at front desk without reason",
      C: "Route the client clearly to the legal team",
      D: "Send to finance first",
      E: "Ask them to self-navigate without instruction"
    },
    correctAnswer: "C"
  }
];

const serviceLineCycle: ServiceLine[] = ["Law Firm", "Finance", "Doctor", "Physiotherapy"];
const clientTypeCycle: ClientType[] = ["New", "Existing"];

function detectServiceLine(questionText: string, fallbackIndex: number): ServiceLine {
  const text = questionText.toLowerCase();
  if (text.includes("finance") || text.includes("billing") || text.includes("payment")) {
    return "Finance";
  }
  if (
    text.includes("physiotherapy") ||
    text.includes("rehabilitation") ||
    text.includes("recovery")
  ) {
    return "Physiotherapy";
  }
  if (text.includes("doctor") || text.includes("medical")) {
    return "Doctor";
  }
  if (text.includes("legal") || text.includes("law firm")) {
    return "Law Firm";
  }
  return serviceLineCycle[fallbackIndex % serviceLineCycle.length];
}

function detectClientType(questionText: string, fallbackIndex: number): ClientType {
  const text = questionText.toLowerCase();
  if (text.includes("existing")) return "Existing";
  if (text.includes("new")) return "New";
  return clientTypeCycle[fallbackIndex % clientTypeCycle.length];
}

export const assessmentQuestions: AssessmentQuestion[] = baseAssessmentQuestions.map((question, index) => ({
  ...question,
  serviceLine: detectServiceLine(question.question, index),
  clientType: detectClientType(question.question, index)
}));

export const answerKey = Object.fromEntries(
  assessmentQuestions.map((question) => [question.id, question.correctAnswer])
) as Record<string, "A" | "B" | "C" | "D" | "E"
>;
