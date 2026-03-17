import { useMemo, useState } from "react";
import { Card } from "../components/Card";
import { assessmentQuestions } from "../data/questions";
import { reviewGuidanceMap } from "../lib/scoring";
import { AssessmentResult } from "../types/models";

interface CompletionSummaryPageProps {
  result: AssessmentResult;
  onPrint: () => void;
  onRestartAssessment: () => void;
  onReturnHome: () => void;
}

export function CompletionSummaryPage({
  result,
  onPrint,
  onRestartAssessment,
  onReturnHome
}: CompletionSummaryPageProps) {
  const [showIncorrect, setShowIncorrect] = useState(false);

  const incorrectRows = useMemo(
    () =>
      assessmentQuestions
        .filter((question) => result.answers[question.id] !== question.correctAnswer)
        .map((question) => ({
          id: question.id,
          question: question.question,
          selected: result.answers[question.id] ?? "-",
          correct: question.correctAnswer,
          explanation: reviewGuidanceMap[question.category]
        })),
    [result.answers]
  );

  return (
    <div className="space-y-4 print:space-y-3">
      <Card className="print:border-slate-300 print:bg-white">
        <div className="mb-4 border-b border-border pb-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">
            Front Desk Orientation Platform
          </p>
          <h1 className="text-2xl font-semibold text-heading">Completion Summary</h1>
          <p className="text-sm text-slate-600">
            For supervisor review and onboarding record
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-md border border-border bg-white p-4">
            <h2 className="mb-2 text-base font-semibold text-heading">Trainee Information</h2>
            <p>
              <strong>Trainee Name:</strong> {result.traineeName}
            </p>
            <p>
              <strong>Date Completed:</strong> {result.dateCompleted}
            </p>
            <p>
              <strong>Time Started:</strong> {result.timeStarted}
            </p>
            <p>
              <strong>Time Finished:</strong> {result.timeFinished}
            </p>
            <p>
              <strong>Total Time Taken:</strong> {result.totalTimeTaken}
            </p>
          </section>

          <section className="rounded-md border border-border bg-white p-4">
            <h2 className="mb-2 text-base font-semibold text-heading">Final Result Summary</h2>
            <p className="text-lg font-semibold text-heading">
              Total Score: {result.totalScore}/{result.totalPossible}
            </p>
            <p className="text-lg font-semibold text-heading">
              Percentage: {result.percentage}%
            </p>
            <p className="text-base">
              <strong>Result:</strong> {result.result}
            </p>
            <p className="mt-2 text-sm text-slate-600">{result.complianceNote}</p>
          </section>
        </div>
      </Card>

      <Card title="Category Breakdown" className="print:border-slate-300 print:bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-2">Category</th>
                <th className="py-2 pr-2">Score</th>
                <th className="py-2 pr-2">Total</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {result.categoryBreakdown.map((item) => (
                <tr key={item.category} className="border-b border-slate-200">
                  <td className="py-2 pr-2">{item.category}</td>
                  <td className="py-2 pr-2">{item.achieved}</td>
                  <td className="py-2 pr-2">{item.total}</td>
                  <td className="py-2">
                    <span className="rounded border border-border bg-white px-2 py-0.5 text-xs">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="Areas Needing Review" className="print:border-slate-300 print:bg-white">
        {result.areasNeedingReview.length === 0 ? (
          <p>No weak categories were detected in this attempt.</p>
        ) : (
          <ul className="list-disc space-y-1 pl-5">
            {result.areasNeedingReview.map((item) => (
              <li key={item.category}>
                <strong>{item.category}:</strong> {item.guidance}
              </li>
            ))}
          </ul>
        )}
      </Card>

      <Card title="Supervisor Review Section" className="print:border-slate-300 print:bg-white">
        <div className="space-y-4 text-sm">
          <p>Supervisor Name: _______________________________________________</p>
          <p>Supervisor Comments:</p>
          <div className="min-h-20 rounded border border-border bg-white" />
          <p>Supervisor Signature: ____________________________________________</p>
          <p>Date Reviewed: _________________________________________________</p>
        </div>
      </Card>

      <Card title="Trainee Acknowledgement" className="print:border-slate-300 print:bg-white">
        <div className="space-y-4 text-sm">
          <p>Trainee Signature: ______________________________________________</p>
          <p>Date: __________________________________________________________</p>
        </div>
      </Card>

      <Card className="print:border-slate-300 print:bg-white">
        <p className="text-xs text-slate-600">
          This summary reflects the trainee's results based on the current
          version of the Front Desk Orientation Platform assessment.
        </p>
      </Card>

      <Card title="Review Incorrect Answers (Optional)" className="print:hidden">
        <button
          type="button"
          onClick={() => setShowIncorrect((prev) => !prev)}
          className="rounded-md border border-border bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
        >
          {showIncorrect ? "Hide Review" : "Show Review"}
        </button>

        {showIncorrect ? (
          <div className="mt-4 space-y-3">
            {incorrectRows.length === 0 ? (
              <p className="text-sm">No incorrect answers to review.</p>
            ) : (
              incorrectRows.map((row) => (
                <div key={row.id} className="rounded-md border border-border bg-white p-3">
                  <p className="font-medium text-heading">
                    {row.id}: {row.question}
                  </p>
                  <p className="text-sm">Your answer: {row.selected}</p>
                  <p className="text-sm">Correct answer: {row.correct}</p>
                  <p className="text-sm text-slate-600">Guidance: {row.explanation}</p>
                </div>
              ))
            )}
          </div>
        ) : null}
      </Card>

      <div className="flex flex-wrap gap-2 print:hidden">
        <button
          type="button"
          onClick={onPrint}
          className="rounded-md bg-heading px-4 py-2 text-sm font-medium text-white"
        >
          Print / Save as PDF
        </button>
        <button
          type="button"
          onClick={onRestartAssessment}
          className="rounded-md border border-border bg-white px-4 py-2 text-sm hover:bg-slate-50"
        >
          Restart Assessment
        </button>
        <button
          type="button"
          onClick={onReturnHome}
          className="rounded-md border border-border bg-white px-4 py-2 text-sm hover:bg-slate-50"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
