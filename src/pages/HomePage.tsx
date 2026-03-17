import { Card } from "../components/Card";
import { coreRules } from "../data/rules";

export function HomePage() {
  return (
    <div className="space-y-5">
      <Card title="Welcome">
        <p className="leading-7">
          This platform provides structured front desk orientation for law firm
          onboarding. Training covers intake protocol, approved scripts,
          scenario decision-making, and final assessment.
        </p>
      </Card>

      <Card title="Training Flow">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Review orientation modules.</li>
          <li>Practice approved front desk scripts.</li>
          <li>Complete scenario practice with immediate guidance.</li>
          <li>Take the timed 50-question assessment.</li>
          <li>Download or print the completion summary.</li>
        </ol>
      </Card>

      <Card title="Mandatory Intake Order">
        <ol className="list-decimal space-y-2 pl-5">
          {coreRules.intakeOrder.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="mt-4 rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-slate-700">
          <strong>Hard Rule:</strong> {coreRules.hardRule}
        </p>
      </Card>
    </div>
  );
}
