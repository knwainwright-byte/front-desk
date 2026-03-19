import { ScenarioItem } from "../types/models";

export const scenarioBank: ScenarioItem[] = [
  {
    id: "scenario-01",
    title: "Walk-In Legal Inquiry (New Client)",
    situation:
      "A visitor says they need legal advice and appears unsure about the process. They have never visited the office before.",
    questions: [
      "What should you ask first to confirm the correct department?",
      "How do you confirm whether they are a new or existing client?",
      "How should you request ID while keeping the tone professional?",
      "When can you route them to the legal team?"
    ]
  },
  {
    id: "scenario-02",
    title: "Returning Finance Client in a Hurry (Client-Led Routing)",
    situation:
      "A client states they are here for a finance matter, says they are late, and does not mention AMSL. They ask to skip intake and go directly upstairs.",
    questions: [
      "What information must still be verified before routing?",
      "How should you confirm Finance routing without introducing AMSL first?",
      "How should you respond to pressure to skip protocol?",
      "Which logging steps are still mandatory before routing?"
    ]
  },
  {
    id: "scenario-03",
    title: "Doctor Appointment with Unclear Purpose",
    situation:
      "A visitor says, 'I have an appointment upstairs,' but does not specify with whom or for what service.",
    questions: [
      "Which clarifying question should you ask to identify department?",
      "Why is it risky to route without confirmation?",
      "What intake steps must be completed once purpose is confirmed?"
    ]
  },
  {
    id: "scenario-04",
    title: "Physiotherapy Existing Client Without Physical ID",
    situation:
      "An existing physiotherapy client arrives without physical ID and asks to go directly to treatment. They offer to share details later.",
    questions: [
      "What is the required fallback identity method when no physical ID is available?",
      "Which manual contact details must be recorded before routing?",
      "How do you explain this requirement with professional firmness?",
      "Can routing happen before the digital intake record is complete?"
    ]
  },
  {
    id: "scenario-05",
    title: "Visitor Assumed as Existing by Staff",
    situation:
      "A colleague says, 'I think this person is a returning legal client, just send them through.'",
    questions: [
      "What should you do before routing the visitor?",
      "Why is assumption a risk in front desk operations?",
      "How do you professionally confirm new vs existing status?"
    ]
  },
  {
    id: "scenario-06",
    title: "No-ID Visitor in Finance Intake",
    situation:
      "A new finance visitor has no physical ID and agrees to a digital intake photo, but the first image is blurred and partially backlit. The electronic log also appears temporarily unavailable.",
    questions: [
      "What quality checks must be completed before accepting the digital intake photo?",
      "What should you do if the image is blurred or the face is obscured?",
      "What data pairing step is required before saving?",
      "What physical logbook action is still required if the electronic log is unavailable?"
    ]
  },
  {
    id: "scenario-07",
    title: "Family Member Checking In for Doctor Visit",
    situation:
      "A family member arrives with a patient and begins answering all questions on the patient's behalf.",
    questions: [
      "How do you politely verify who the client is?",
      "Whose new/existing status should be confirmed?",
      "What should be done regarding ID collection?"
    ]
  },
  {
    id: "scenario-08",
    title: "Cross-Department Confusion (Legal vs Finance)",
    situation:
      "A visitor asks for help with a settlement payment and legal file update in the same visit.",
    questions: [
      "How should you identify the primary department for first routing?",
      "What should you verify before any routing happens?",
      "How do you communicate next steps clearly when two departments are involved?"
    ]
  },
  {
    id: "scenario-09",
    title: "Existing Physiotherapy Client with Name Mismatch",
    situation:
      "A visitor says they are an existing physiotherapy client, but the name they provide differs from the previous record.",
    questions: [
      "What verification step should be prioritized?",
      "How does ID collection help resolve the mismatch?",
      "Should routing happen before mismatch is clarified?"
    ]
  },
  {
    id: "scenario-10",
    title: "New Doctor Client Without ID and Limited Time",
    situation:
      "A new doctor client says they have no physical ID and only two minutes. They ask to skip intake and be sent directly in.",
    questions: [
      "Which identity steps remain mandatory despite time pressure?",
      "What is the correct script for the digital intake fallback path?",
      "What is the routing decision if identity record is incomplete?"
    ]
  },
  {
    id: "scenario-11",
    title: "Logging Omission During Busy Front Desk Period",
    situation:
      "A staff member completes electronic intake for several visitors during a rush but forgets to enter two visitors in the physical logbook.",
    questions: [
      "What is the compliance issue in this situation?",
      "What corrective action should be taken immediately?",
      "Can visitors be treated as fully logged if only electronic records were completed?"
    ]
  },
  {
    id: "scenario-12",
    title: "Uncertain Walk-In with No ID and Incomplete Details",
    situation:
      "A visitor arrives without appointment details and without physical ID. They are unsure of department and hesitant about being photographed.",
    questions: [
      "What is the best first question to narrow purpose?",
      "How do you determine new vs existing status in uncertain cases?",
      "How do you explain the digital intake photo requirement professionally?",
      "What escalation path applies if the visitor refuses both ID and digital intake?",
      "Can routing happen before identity record and purpose are confirmed?"
    ]
  },
  {
    id: "scenario-13",
    title: "Client Update Request on Monday",
    situation:
      "A client arrives on Monday requesting a full case update and expects the same update flow normally handled later in the week.",
    questions: [
      "How should front desk communicate the designated update days?",
      "What level of assistance should still be offered on Monday?",
      "How should expectations be set without refusing service?",
      "What should be documented in visitor logs?"
    ]
  },
  {
    id: "scenario-14",
    title: "Urgent Update Request Outside Designated Days",
    situation:
      "A client arrives Tuesday and states they urgently need an update before travel. Team availability is limited.",
    questions: [
      "How should staff balance assistance today with update-day policy?",
      "What script communicates Wednesday-Friday scheduling while remaining supportive?",
      "When should escalation be considered for urgent requests?",
      "How should the final routing decision be recorded?"
    ]
  },
  {
    id: "scenario-15",
    title: "Frustrated Client Insisting on Immediate Update",
    situation:
      "A client becomes frustrated on Tuesday and states they will not return later in the week for updates.",
    questions: [
      "What professional wording should front desk use to de-escalate?",
      "How should designated update days be reinforced without sounding dismissive?",
      "What immediate assistance can still be offered?",
      "What escalation path applies if the situation continues?"
    ]
  }
];
