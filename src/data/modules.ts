import { OrientationModule } from "../types/models";

export const orientationModules: OrientationModule[] = [
  {
    id: "module-role-front-desk",
    title: "Role of the Front Desk",
    explanation:
      "The front desk is the first point of contact for every visitor and a control point for the firm. Your role sets the tone for the visit and protects the quality of service across all departments.",
    keyRules: [
      "Welcome every visitor promptly and professionally.",
      "Treat each interaction as important, even during busy periods.",
      "Collect and confirm required information before routing anyone.",
      "Follow protocol consistently to protect service quality and records.",
      "Stay calm, clear, and respectful in every situation."
    ]
  },
  {
    id: "module-identifying-purpose",
    title: "Identifying Visitor Purpose",
    explanation:
      "Every visitor must be correctly identified by purpose before they are directed. The front desk supports four service lines: Law Firm, Finance, Doctor, and Physiotherapy.",
    keyRules: [
      "Ask a clear purpose question: 'How may we assist you today?'",
      "Confirm which department the visitor is meeting: Law Firm, Finance, Doctor, or Physiotherapy.",
      "Do not route based on assumptions or appearance.",
      "Repeat back the department to confirm understanding.",
      "If details are unclear, ask one more clarifying question before proceeding."
    ]
  },
  {
    id: "module-new-existing",
    title: "New vs Existing Client Identification",
    explanation:
      "The next step after purpose is confirming whether the person is a new or existing client. This affects how the interaction is handled and what information must be verified.",
    keyRules: [
      "Always ask whether the visitor has been here before.",
      "Never assume a person is existing because they seem familiar.",
      "Verify status before moving to ID and routing steps.",
      "Use a neutral, professional tone when asking.",
      "If uncertain, classify only after verification."
    ]
  },
  {
    id: "module-id-protocol",
    title: "Identification and Digital Intake Protocol",
    explanation:
      "Identification collection is a mandatory security and record-keeping requirement. Every visitor must provide a valid government-issued ID for scanning. If a physical ID is unavailable, a Digital Intake Photo must be captured and uploaded to the visitor log with required contact details before routing.",
    keyRules: [
      "Mandatory verification: Request a valid ID from every visitor at arrival.",
      "Primary method: Prioritize a physical scan or clear photo of government-issued ID.",
      "Secondary method (no-ID gap): Capture a live digital intake photo and record full legal name plus phone number; record email when available.",
      "Verification: Confirm the ID or live photo matches the visitor and all recorded data is legible.",
      "Professional firmness: Explain records are required for security and insurance compliance.",
      "Escalation: If a visitor refuses required identification steps, escalate to Operations Manager or Managing Partner's office.",
      "Photo quality procedure: Use neutral background, good lighting, unobstructed face, head-and-shoulders framing, and retake blurred images.",
      "Data pairing control: Confirm the photo is attached to the correct visitor record before saving."
    ]
  },
  {
    id: "module-routing-direction",
    title: "Routing and Direction",
    explanation:
      "After purpose, status, and ID steps are complete, visitors should be directed accurately and clearly to the correct department.",
    keyRules: [
      "Route only after all intake steps are complete.",
      "Direct legal matters to the legal team.",
      "Direct billing/payment matters to finance.",
      "Direct medical consultation matters to doctor services.",
      "Direct rehabilitation or recovery sessions to physiotherapy."
    ]
  },
  {
    id: "module-professional-communication",
    title: "Professional Communication",
    explanation:
      "Front desk communication must be calm, clear, polite, and confident. Professional communication builds trust and prevents confusion.",
    keyRules: [
      "Use short, clear sentences and avoid vague language.",
      "Keep tone respectful and neutral at all times.",
      "Speak with confidence without sounding abrupt.",
      "Listen fully before responding.",
      "Close each interaction with a clear next step."
    ]
  }
];
