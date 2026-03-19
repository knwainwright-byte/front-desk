import { ReactNode } from "react";
import { Card } from "../components/Card";

type Section = { id: string; title: string };

const toc: Section[] = [
  { id: "sec-purpose", title: "1. Purpose" },
  { id: "sec-scope", title: "2. Scope" },
  { id: "sec-principles", title: "3. Core Operating Principles" },
  { id: "sec-finance-def", title: "3A. Finance Routing Definitions" },
  { id: "sec-sequence", title: "4. Mandatory Intake Sequence" },
  { id: "sec-id", title: "5. Identification and Digital Intake Protocol" },
  { id: "sec-logging", title: "6. Visitor Logging Requirement (Dual Logging)" },
  { id: "sec-finance-boundary", title: "7. Finance Routing Boundary (Client-Led)" },
  { id: "sec-routing", title: "8. Routing Standards" },
  { id: "sec-updates", title: "9. Client Update Service Window" },
  { id: "sec-escalation", title: "10. Escalation Protocol" },
  { id: "sec-comms", title: "11. Communication Standards" },
  { id: "sec-monitoring", title: "12. Compliance Monitoring" },
  { id: "sec-records", title: "13. Required Records" },
  { id: "sec-orientation", title: "14. Orientation and Acknowledgment" },
  { id: "sec-version", title: "15. SOP Review and Version Control" },
  { id: "sec-signoff", title: "16. Acknowledgment Section (Print Use)" }
];

function SopSection(props: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={props.id} className="scroll-mt-20">
      <Card className="border-l-4 border-l-blue-400 bg-white">
        <h2 className="mb-3 text-xl font-semibold text-heading">{props.title}</h2>
        <div className="space-y-3 leading-7 text-slate-700">{props.children}</div>
      </Card>
    </section>
  );
}

export function SopPage() {
  return (
    <div className="space-y-5">
      <Card className="overflow-hidden border-slate-300 bg-gradient-to-r from-slate-50 to-blue-50">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
          Front Desk Operations
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-800">
          Standard Operating Procedure (SOP)
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Policy reference for orientation package and daily execution. This is
          the formal operating standard for visitor intake, identity, routing,
          logging, and escalation.
        </p>
        <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
          <div className="rounded-md border border-slate-200 bg-white p-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">Version</p>
            <p className="font-semibold text-heading">1.0 (Proposed)</p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">Owner</p>
            <p className="font-semibold text-heading">Operations Manager</p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">Organization</p>
            <p className="font-semibold text-heading">Bignall Law</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
        <div className="space-y-4">
          <SopSection id="sec-purpose" title="1. Purpose">
            <p>
              This SOP defines the required front desk process for visitor
              intake, identification, logging, routing, and escalation.
            </p>
            <p>It is designed to ensure:</p>
            <ul className="list-disc pl-5">
              <li>consistent visitor handling,</li>
              <li>accurate and complete records,</li>
              <li>professional communication,</li>
              <li>and policy compliance.</li>
            </ul>
          </SopSection>

          <SopSection id="sec-scope" title="2. Scope">
            <p>
              This SOP applies to all front desk staff handling visitor arrivals
              for Law Firm, Finance, Doctor, and Physiotherapy.
            </p>
            <p>This SOP applies during all staffed front desk hours.</p>
          </SopSection>

          <SopSection id="sec-principles" title="3. Core Operating Principles">
            <ol className="list-decimal pl-5">
              <li>Every visitor is handled through the same intake sequence.</li>
              <li>No routing occurs before intake requirements are complete.</li>
              <li>
                Front desk staff do not make internal eligibility or
                recommendation decisions.
              </li>
              <li>
                Record quality and completeness are mandatory, not optional.
              </li>
              <li>
                Professional, neutral, and respectful communication is required
                at all times.
              </li>
            </ol>
          </SopSection>

          <SopSection id="sec-finance-def" title="3A. Finance Routing Definitions">
            <ul className="list-disc pl-5">
              <li>
                <strong>Bignall Law Finance:</strong> Finance consultations,
                litigation/medical fee payments, and settlement-related payments.
              </li>
              <li>
                <strong>AMSL:</strong> A separate finance visit route that is
                only handled as AMSL when the visitor explicitly states AMSL.
              </li>
            </ul>
            <p>
              Front desk staff do not determine internal recommendation status
              and do not explain internal recommendation decisions.
            </p>
          </SopSection>

          <SopSection id="sec-sequence" title="4. Mandatory Intake Sequence">
            <p>Front desk staff must follow this order for every visitor:</p>
            <ol className="list-decimal pl-5">
              <li>Identify visit purpose (department)</li>
              <li>Confirm new vs existing status</li>
              <li>Complete and verify identity record</li>
              <li>Complete required visitor logging</li>
              <li>Route visitor</li>
            </ol>
            <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900">
              <strong>Hard Rule:</strong> Routing must not occur before identity
              record and required logging are completed and verified.
            </div>
          </SopSection>

          <SopSection
            id="sec-id"
            title="5. Identification and Digital Intake Protocol"
          >
            <h3 className="font-semibold text-heading">5.1 Primary Method</h3>
            <p>
              Request valid government-issued identification from every visitor
              and complete the required record.
            </p>
            <h3 className="font-semibold text-heading">
              5.2 Secondary Method (No Physical ID)
            </h3>
            <ul className="list-disc pl-5">
              <li>Capture a live digital intake photo.</li>
              <li>Record full legal name and phone number at minimum.</li>
              <li>Record email when available.</li>
            </ul>
            <h3 className="font-semibold text-heading">5.3 Verification Standard</h3>
            <ul className="list-disc pl-5">
              <li>Confirm identity record matches the visitor.</li>
              <li>Confirm entered data is legible and complete.</li>
              <li>
                Confirm the digital photo is clear and attached to the correct
                visitor entry.
              </li>
            </ul>
            <h3 className="font-semibold text-heading">5.4 Photo Quality Standard</h3>
            <ul className="list-disc pl-5">
              <li>Use neutral background and adequate lighting.</li>
              <li>
                Ask visitor to remove temporary face obstructions when needed.
              </li>
              <li>Capture head-and-shoulders framing.</li>
              <li>Retake blurred or obscured images.</li>
            </ul>
            <h3 className="font-semibold text-heading">5.5 Professional Firmness</h3>
            <p>
              Explain that identity records are required for security,
              compliance, and record integrity.
            </p>
          </SopSection>

          <SopSection
            id="sec-logging"
            title="6. Visitor Logging Requirement (Dual Logging)"
          >
            <p>Visitor logging is mandatory for every visit:</p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Physical logbook:</strong> required for all visitors,
                every time.
              </li>
              <li>
                <strong>Electronic log:</strong> required when system is
                available.
              </li>
            </ul>
            <p>Electronic logging does not replace physical logbook entry.</p>
            <p>If electronic logging is temporarily unavailable:</p>
            <ul className="list-disc pl-5">
              <li>Complete physical logbook immediately.</li>
              <li>Complete electronic entry once system is restored.</li>
            </ul>
          </SopSection>

          <SopSection
            id="sec-finance-boundary"
            title="7. Finance Routing Boundary (Client-Led)"
          >
            <ul className="list-disc pl-5">
              <li>
                Confirm Finance purpose and ask who the visitor is coming to see.
              </li>
              <li>Do not introduce AMSL unless the visitor mentions AMSL first.</li>
              <li>
                If AMSL is not mentioned, keep routing in standard Bignall Law
                Finance flow.
              </li>
              <li>
                Route based on visitor-stated purpose and contact, not
                inference.
              </li>
            </ul>
            <p>
              Front desk staff must not discuss or infer internal recommendation
              decisions.
            </p>
          </SopSection>

          <SopSection id="sec-routing" title="8. Routing Standards">
            <ul className="list-disc pl-5">
              <li>Legal matters &rarr; Legal team</li>
              <li>
                Billing/consultation/settlement payment matters &rarr; Finance
              </li>
              <li>Medical consultation &rarr; Doctor</li>
              <li>Rehabilitation/recovery services &rarr; Physiotherapy</li>
            </ul>
            <p>
              If purpose is unclear, ask neutral clarifying questions before
              routing.
            </p>
          </SopSection>

          <SopSection id="sec-updates" title="9. Client Update Service Window">
            <p>Client updates are primarily accommodated on:</p>
            <ul className="list-disc pl-5">
              <li>Wednesday</li>
              <li>Thursday</li>
              <li>Friday</li>
            </ul>
            <p>If a client requests updates on Monday or Tuesday:</p>
            <ul className="list-disc pl-5">
              <li>assist as operationally possible,</li>
              <li>communicate preferred update days,</li>
              <li>set expectations professionally,</li>
              <li>document request and outcome.</li>
            </ul>
            <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
              This policy supports service continuity and does not authorize
              refusal of reasonable assistance.
            </div>
          </SopSection>

          <SopSection id="sec-escalation" title="10. Escalation Protocol">
            <p>Escalate to Operations Manager or Managing Partner's office when:</p>
            <ul className="list-disc pl-5">
              <li>visitor refuses required identity steps,</li>
              <li>visitor refuses required record/logging process,</li>
              <li>visitor disputes mandatory intake protocol,</li>
              <li>
                client-update requests outside designated days require
                supervisory decision due to operational constraints,
              </li>
              <li>safety or conduct concerns arise.</li>
            </ul>
            <p>Before escalation: restate policy, avoid argument, document issue.</p>
          </SopSection>

          <SopSection id="sec-comms" title="11. Communication Standards">
            <p>Communication must be calm, clear, respectful, confident, concise.</p>
            <p>Prohibited behaviors:</p>
            <ul className="list-disc pl-5">
              <li>assumptions about visitor category or status,</li>
              <li>inconsistent application of protocol,</li>
              <li>bypassing steps due to pressure or familiarity.</li>
            </ul>
          </SopSection>

          <SopSection id="sec-monitoring" title="12. Compliance Monitoring">
            <p>Supervisors should verify:</p>
            <ul className="list-disc pl-5">
              <li>intake sequence followed,</li>
              <li>identity records complete and verifiable,</li>
              <li>physical and electronic logs aligned,</li>
              <li>routing accuracy by department,</li>
              <li>update-day guidance applied consistently,</li>
              <li>proper escalation when required.</li>
            </ul>
            <p>Recommended checks: daily spot checks, weekly reconciliation, monthly review.</p>
          </SopSection>

          <SopSection id="sec-records" title="13. Required Records">
            <p>Maintain:</p>
            <ul className="list-disc pl-5">
              <li>physical visitor logbook,</li>
              <li>electronic visitor logs,</li>
              <li>escalation notes (when applicable),</li>
              <li>orientation/SOP acknowledgment forms.</li>
            </ul>
            <p>Retention and storage follow firm records policy.</p>
          </SopSection>

          <SopSection id="sec-orientation" title="14. Orientation and Acknowledgment">
            <p>All new front desk staff must:</p>
            <ol className="list-decimal pl-5">
              <li>Complete Front Desk Orientation Platform training.</li>
              <li>Review this SOP document.</li>
              <li>
                Sign SOP acknowledgment before independent front desk duty.
              </li>
            </ol>
          </SopSection>

          <SopSection id="sec-version" title="15. SOP Review and Version Control">
            <p>This SOP should be reviewed:</p>
            <ul className="list-disc pl-5">
              <li>at least quarterly, or</li>
              <li>sooner if operational/legal/compliance needs change.</li>
            </ul>
            <p>
              Changes require document version update and re-acknowledgment as
              required.
            </p>
          </SopSection>

          <SopSection id="sec-signoff" title="16. Acknowledgment Section (Print Use)">
            <div className="space-y-2 rounded-md border border-slate-300 bg-slate-50 p-4 text-sm">
              <p>Employee Name: ____________________________________________</p>
              <p>Role: _____________________________________________________</p>
              <p>Date Reviewed: ____________________________________________</p>
              <p>Employee Signature: _______________________________________</p>
              <p>Supervisor Name: __________________________________________</p>
              <p>Supervisor Signature: ______________________________________</p>
              <p>Date: _____________________________________________________</p>
            </div>
          </SopSection>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-6 lg:h-fit">
          <Card className="border-slate-300 bg-white">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
              Section Navigation
            </h3>
            <nav className="max-h-[520px] space-y-1 overflow-auto pr-1 text-sm">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded px-2 py-1 text-slate-700 hover:bg-slate-100"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-800">
              Non-Negotiable
            </h3>
            <p className="mt-2 text-sm text-red-900">
              No routing before identity record and required logging are
              complete.
            </p>
          </Card>
        </aside>
      </div>
    </div>
  );
}
