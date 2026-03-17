import { useEffect, useMemo, useState } from "react";
import { Card } from "../components/Card";
import { assessmentQuestions } from "../data/questions";
import { readBeforeBegin } from "../data/rules";
import { getDurationSeconds, scoreAssessment } from "../lib/scoring";
import { AssessmentResult } from "../types/models";

const STORAGE_KEY = "fdop_assessment_session_v1";

type AnswerOption = "A" | "B" | "C" | "D" | "E";

interface PersistedSession {
  traineeName: string;
  startedAt: number | null;
  currentIndex: number;
  answers: Record<string, AnswerOption>;
}

interface AssessmentPageProps {
  onComplete: (result: AssessmentResult) => void;
  onReturnHome: () => void;
}

function formatTimer(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function loadSession(): PersistedSession {
  const fallback: PersistedSession = {
    traineeName: "",
    startedAt: null,
    currentIndex: 0,
    answers: {}
  };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as PersistedSession;
    return {
      traineeName: parsed.traineeName ?? "",
      startedAt: parsed.startedAt ?? null,
      currentIndex: parsed.currentIndex ?? 0,
      answers: parsed.answers ?? {}
    };
  } catch {
    return fallback;
  }
}

export function AssessmentPage({ onComplete, onReturnHome }: AssessmentPageProps) {
  const loaded = loadSession();
  const [traineeName, setTraineeName] = useState<string>(loaded.traineeName);
  const [startedAt, setStartedAt] = useState<number | null>(loaded.startedAt);
  const [currentIndex, setCurrentIndex] = useState<number>(loaded.currentIndex);
  const [answers, setAnswers] = useState<Record<string, AnswerOption>>(loaded.answers);
  const [tick, setTick] = useState<number>(Date.now());

  const durationSeconds = getDurationSeconds();
  const now = startedAt ? tick : Date.now();
  const elapsedSeconds = startedAt
    ? Math.max(0, Math.floor((now - startedAt) / 1000))
    : 0;
  const remainingSeconds = Math.max(0, durationSeconds - elapsedSeconds);
  const hasStarted = startedAt !== null;

  const currentQuestion = assessmentQuestions[currentIndex];
  const answeredCount = useMemo(
    () => Object.keys(answers).length,
    [answers]
  );

  useEffect(() => {
    const payload: PersistedSession = {
      traineeName,
      startedAt,
      currentIndex,
      answers
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [answers, currentIndex, startedAt, traineeName]);

  useEffect(() => {
    if (!hasStarted) return;
    const interval = window.setInterval(() => setTick(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted && remainingSeconds <= 0 && startedAt !== null) {
      const result = scoreAssessment({
        traineeName,
        startedAt,
        finishedAt: Date.now(),
        answers
      });
      localStorage.removeItem(STORAGE_KEY);
      onComplete(result);
    }
  }, [answers, hasStarted, onComplete, remainingSeconds, startedAt, traineeName]);

  const handleStart = () => {
    const start = Date.now();
    setStartedAt(start);
    setCurrentIndex(0);
  };

  const handleAnswerChange = (option: AnswerOption) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option
    }));
  };

  const handleSubmit = () => {
    if (!startedAt) return;
    const result = scoreAssessment({
      traineeName,
      startedAt,
      finishedAt: Date.now(),
      answers
    });
    localStorage.removeItem(STORAGE_KEY);
    onComplete(result);
  };

  const handleRestart = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAnswers({});
    setCurrentIndex(0);
    setStartedAt(null);
    setTraineeName("");
  };

  if (!hasStarted) {
    return (
      <div className="space-y-4">
        <Card title={readBeforeBegin.title}>
          <p className="mb-3 text-sm text-slate-700">
            Complete all questions in one sitting when possible.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            {readBeforeBegin.body.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-3 font-medium">{readBeforeBegin.action}</p>

          <label className="mt-4 block text-sm font-medium text-heading">
            Trainee Name
          </label>
          <input
            value={traineeName}
            onChange={(event) => setTraineeName(event.target.value)}
            className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2"
            placeholder="Enter full name"
          />

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleStart}
              className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              Start Assessment
            </button>
            <button
              type="button"
              onClick={onReturnHome}
              className="rounded-md border border-border bg-white px-4 py-2 text-sm hover:bg-slate-50"
            >
              Return Home
            </button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold text-heading">Timed Assessment</h2>
            <p className="text-sm text-slate-600">
              Question {currentIndex + 1} of {assessmentQuestions.length} | Answered{" "}
              {answeredCount}
            </p>
          </div>
          <div className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-heading">
            Time Remaining: {formatTimer(remainingSeconds)}
          </div>
        </div>
      </Card>

      <Card title={currentQuestion.question}>
        <p className="mb-3 text-sm text-slate-600">
          Category: {currentQuestion.category} | Service Line:{" "}
          {currentQuestion.serviceLine} | Client Type: {currentQuestion.clientType}
        </p>

        <div className="space-y-2">
          {(Object.keys(currentQuestion.options) as AnswerOption[]).map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-start gap-3 rounded-md border border-border bg-white p-3"
            >
              <input
                type="radio"
                name={currentQuestion.id}
                checked={answers[currentQuestion.id] === option}
                onChange={() => handleAnswerChange(option)}
                className="mt-1"
              />
              <span>
                <span className="font-semibold">{option}.</span>{" "}
                {currentQuestion.options[option]}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="rounded-md border border-border bg-white px-4 py-2 text-sm disabled:opacity-40"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() =>
              setCurrentIndex((prev) =>
                Math.min(assessmentQuestions.length - 1, prev + 1)
              )
            }
            disabled={currentIndex === assessmentQuestions.length - 1}
            className="rounded-md border border-border bg-white px-4 py-2 text-sm disabled:opacity-40"
          >
            Next
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-md bg-heading px-4 py-2 text-sm font-medium text-white"
          >
            Submit Assessment
          </button>
          <button
            type="button"
            onClick={handleRestart}
            className="rounded-md border border-red-200 bg-white px-4 py-2 text-sm text-red-700"
          >
            Restart / Reset
          </button>
        </div>
      </Card>
    </div>
  );
}
