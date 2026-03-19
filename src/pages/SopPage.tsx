import { Card } from "../components/Card";

const sopSections = [
  {
    title: "Purpose",
    points: [
      "Define mandatory front desk intake, identity, logging, routing, and escalation standards.",
      "Ensure consistent visitor handling, record integrity, and professional communication."
    ]
  },
  {
    title: "Scope",
    points: [
      "Applies to all front desk staff during staffed operating hours.",
      "Covers visitors for Law Firm, Finance, Doctor, and Physiotherapy."
    ]
  },
  {
    title: "Mandatory Intake Sequence",
    points: [
      "1) Identify visit purpose",
      "2) Confirm new vs existing status",
      "3) Complete and verify identity record",
      "4) Complete required visitor logging",
      "5) Route visitor",
      "Hard rule: routing must not occur before identity record and required logging are complete."
    ]
  },
  {
    title: "Identification and Digital Intake",
    points: [
      "Primary method: collect and verify valid government-issued ID record.",
      "Fallback method: if no physical ID, capture live digital intake photo and required contact details.",
      "Verify photo clarity, identity match, and correct data pairing before saving."
    ]
  },
  {
    title: "Dual Logging Requirement",
    points: [
      "Physical logbook entry is required for every visitor.",
      "Electronic log entry is required when system access is available.",
      "Electronic logging does not replace physical logbook entry."
    ]
  },
  {
    title: "Finance Routing Boundary",
    points: [
      "Front desk confirms Finance purpose and who the visitor is seeing.",
      "Front desk does not mention AMSL first.",
      "AMSL is handled only when the visitor explicitly mentions AMSL.",
      "Front desk does not discuss internal recommendation decisions."
    ]
  },
  {
    title: "Client Update Service Window",
    points: [
      "Designated update days: Wednesday, Thursday, Friday.",
      "If update requests arrive Monday/Tuesday, assist as operationally possible.",
      "Recommend Wednesday-Friday for fuller update continuity.",
      "Document request, guidance, and routing outcome."
    ]
  },
  {
    title: "Escalation Protocol",
    points: [
      "Escalate to Operations Manager or Managing Partner's office for refusal of required identity/logging steps.",
      "Escalate when operational constraints affect update requests or routing decisions.",
      "Restate policy professionally and document the event before escalation."
    ]
  },
  {
    title: "Compliance Review",
    points: [
      "Supervisors verify intake order, identity completeness, and log consistency.",
      "Supervisors confirm update-day guidance is applied consistently.",
      "SOP acknowledgment is required before independent front desk duty."
    ]
  }
];

export function SopPage() {
  return (
    <div className="space-y-4">
      <Card className="bg-white">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">
          Front Desk Operations
        </p>
        <h1 className="text-2xl font-semibold text-heading">
          Standard Operating Procedure (SOP)
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Enterprise policy reference for orientation package and daily front desk
          execution.
        </p>
      </Card>

      {sopSections.map((section) => (
        <Card key={section.title} title={section.title} className="bg-white">
          <ul className="list-disc space-y-1 pl-5">
            {section.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
