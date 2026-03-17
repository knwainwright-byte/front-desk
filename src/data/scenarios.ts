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
    title: "Returning Finance Client in a Hurry",
    situation:
      "A client states they are here to discuss billing and says they have visited many times. They ask to skip intake because they are late.",
    questions: [
      "What information must still be verified before routing?",
      "How should you respond to pressure to skip protocol?",
      "What is the correct way to handle ID collection in this moment?"
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
    title: "Physiotherapy Existing Client Without ID Ready",
    situation:
      "An existing physiotherapy client arrives and says their ID is in the car. They ask to go directly to treatment first.",
    questions: [
      "What is the correct response regarding ID protocol?",
      "How can you keep the interaction calm and respectful?",
      "What options can you offer while maintaining policy?"
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
    title: "ID Refusal in Finance Department Intake",
    situation:
      "A new finance visitor refuses to provide ID and says it is unnecessary for a simple question.",
    questions: [
      "How do you explain the ID requirement clearly?",
      "What wording helps maintain professionalism during refusal?",
      "What is the next step if refusal continues?"
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
    title: "New Doctor Client with Limited Time",
    situation:
      "A new doctor client says they only have two minutes and asks to skip questions and be sent directly in.",
    questions: [
      "Which steps are non-negotiable despite time pressure?",
      "How can you phrase requirements briefly and clearly?",
      "What is the correct routing decision if intake is incomplete?"
    ]
  },
  {
    id: "scenario-11",
    title: "Existing Legal Client Upset About Repetition",
    situation:
      "An existing legal client says, 'You ask the same questions every time. This is unnecessary.'",
    questions: [
      "How should you respond to protect rapport and policy?",
      "What explanation can you give for repeat verification?",
      "What should you avoid saying in this interaction?"
    ]
  },
  {
    id: "scenario-12",
    title: "Uncertain Walk-In with No Appointment Details",
    situation:
      "A visitor arrives without appointment details and says, 'I think I came to the right place, but I'm not sure for what department.'",
    questions: [
      "What is the best first question to narrow purpose?",
      "How do you determine new vs existing status in uncertain cases?",
      "When should ID be requested in this conversation?",
      "How do you route once details are confirmed?"
    ]
  }
];
