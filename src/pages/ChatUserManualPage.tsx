import { Card } from "../components/Card";

const sections = [
  {
    title: "Purpose",
    items: [
      "Explain how to use Team Chat in the current rollout phase.",
      "Support chat-first internal communication while broader Matterscope rollout continues."
    ]
  },
  {
    title: "Who This Is For",
    items: [
      "Lawyers",
      "Legal assistants",
      "Administrators",
      "Front desk users (as configured)"
    ]
  },
  {
    title: "Accessing Chat",
    items: [
      "Use /chat-login to sign in.",
      "Use /chat if already signed in.",
      "Unauthenticated access to /chat redirects to /chat-login."
    ]
  },
  {
    title: "Main Chat Areas",
    items: [
      "New conversation panel (left, top)",
      "Conversations list (left, bottom)",
      "Message thread and composer (right)"
    ]
  },
  {
    title: "Creating Conversations",
    items: [
      "Direct: choose Direct, select one teammate, click Create.",
      "Group: choose Group, add title, select multiple teammates, click Create."
    ]
  },
  {
    title: "Sending Messages",
    items: [
      "Select a conversation, type a message, optionally include matter ID, click Send.",
      "If no messages exist, thread displays 'No messages yet'."
    ]
  },
  {
    title: "Instruction Messages",
    items: [
      "When instruction mode is available, send as Instruction (tag) or Instruction (separate).",
      "Recipients should click Acknowledge.",
      "Instruction acknowledgements are tracked for compliance and reporting."
    ]
  },
  {
    title: "Unread, Archive, and Time Context",
    items: [
      "Unread counts appear on conversation items.",
      "Opening a conversation marks it as read.",
      "Archive hides/close threads without deleting history.",
      "Use Show archived to view archived threads and Unarchive when needed.",
      "Conversation items show last message time context."
    ]
  },
  {
    title: "Best Practices",
    items: [
      "Check chat at start of day and regularly during work hours.",
      "Keep messages concise and actionable.",
      "Use matter ID for matter-related context.",
      "Acknowledge instruction messages promptly.",
      "Archive test/old threads to keep active list clean."
    ]
  },
  {
    title: "Troubleshooting",
    items: [
      "Confirm sign-in status.",
      "Refresh page.",
      "Confirm feature flags are enabled in deployment.",
      "Contact administrator if access/behavior appears incorrect."
    ]
  }
];

export function ChatUserManualPage() {
  return (
    <div className="space-y-5">
      <Card className="bg-gradient-to-r from-slate-50 to-blue-50">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
          Team Chat Documentation
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-heading">
          Chat User Manual
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Operational guidance for Team Chat usage during the chat-first rollout
          phase.
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
