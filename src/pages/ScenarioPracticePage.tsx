import { useState } from "react";
import { Card } from "../components/Card";
import { scenarioBank } from "../data/scenarios";
import { coreRules } from "../data/rules";

export function ScenarioPracticePage() {
  const [openFeedbackById, setOpenFeedbackById] = useState<
    Record<string, boolean>
  >({});

  return (
    <div className="space-y-4">
      {scenarioBank.map((scenario) => {
        const showFeedback = Boolean(openFeedbackById[scenario.id]);
        return (
          <Card key={scenario.id} title={scenario.title}>
            <p className="mb-3 leading-7">{scenario.situation}</p>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
              Practice Questions
            </h3>
            <ul className="list-disc space-y-1 pl-5">
              {scenario.questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() =>
                setOpenFeedbackById((prev) => ({
                  ...prev,
                  [scenario.id]: !showFeedback
                }))
              }
              className="mt-4 rounded-md border border-border bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
            >
              {showFeedback ? "Hide Recommended Guidance" : "Show Recommended Guidance"}
            </button>

            {showFeedback ? (
              <div className="mt-3 rounded-md border border-blue-200 bg-blue-50 p-3 text-sm">
                <p className="font-semibold text-heading">Recommended Approach</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  {coreRules.intakeOrder.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p className="mt-2">
                  Keep communication calm, verify details before routing, and
                  enforce ID protocol consistently.
                </p>
              </div>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}
