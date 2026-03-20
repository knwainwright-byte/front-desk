import { Card } from "../components/Card";

const sections = [
  {
    title: "Purpose",
    items: [
      "Define minimum daily Team Chat behavior.",
      "Ensure communication is reviewed, instructions are acknowledged, and guidance is preserved."
    ]
  },
  {
    title: "Scope",
    items: [
      "Applies to all users assigned Team Chat access during chat-first rollout.",
      "Matterscope is not fully online yet; this SOP applies to current Team Chat operations."
    ]
  },
  {
    title: "Daily Standard (Required)",
    items: [
      "Log into Team Chat at start of day.",
      "Check active conversations and unread items.",
      "Read new messages.",
      "Acknowledge instruction messages when required.",
      "Repeat check-ins through the day (recommended every 60-90 minutes)."
    ]
  },
  {
    title: "Login Route",
    items: [
      "Use /chat-login for chat-first entry.",
      "If already authenticated, /chat opens directly."
    ]
  },
  {
    title: "Required User Actions",
    items: [
      "Review conversation list and unread indicators.",
      "Prioritize leadership and active work threads.",
      "Use last-message timestamps for recency prioritization.",
      "Acknowledge instruction messages as a recipient.",
      "Include matter ID context when relevant."
    ]
  },
  {
    title: "Conversation Hygiene",
    items: [
      "Use direct conversations for person-to-person updates.",
      "Use group conversations for shared operational threads.",
      "Archive old/test threads instead of deleting history.",
      "Unarchive only when operationally needed."
    ]
  },
  {
    title: "Compliance Expectations",
    items: [
      "Daily chat check-ins are expected.",
      "Instruction acknowledgements are expected when required.",
      "Managers may review instruction compliance reports."
    ]
  },
  {
    title: "Manager/Administrator Notes",
    items: [
      "Ensure assigned users can access chat.",
      "Confirm Managing Partner identity tag is configured where applicable.",
      "Monitor acknowledgement trends through report views."
    ]
  },
  {
    title: "Rollout Note",
    items: [
      "This SOP supports the chat-first adoption phase.",
      "Full Matterscope workflow adoption follows once rollout readiness is confirmed."
    ]
  }
];

export function ChatSopLoginCheckInPage() {
  return (
    <div className="space-y-5">
      <Card className="bg-gradient-to-r from-slate-50 to-blue-50">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
          Team Chat SOP
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-heading">
          Chat SOP - Login and Check-In
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Daily behavior standard for reliable communication and instruction
          compliance.
        </p>
      </Card>

      {sections.map((section) => (
        <Card
          key={section.title}
          title={section.title}
          className="border-l-4 border-l-blue-400 bg-white"
        >
          <ul className="list-disc space-y-1 pl-5">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
