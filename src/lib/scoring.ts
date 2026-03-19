import { assessmentQuestions } from "../data/questions";
import { AssessmentResult, SkillCategory } from "../types/models";

export const PASS_PERCENTAGE = 80;
const TOTAL_DURATION_SECONDS = 30 * 60;

export const reviewGuidanceMap: Record<SkillCategory, string> = {
  "Greeting & Professionalism":
    "Review professional opening and closing phrasing with calm, clear tone.",
  "Client Identification":
    "Review how to identify visitor purpose across Law Firm, Finance, Doctor, and Physiotherapy.",
  "New vs Existing Handling":
    "Review how to distinguish new and existing clients without assumptions.",
  "ID Protocol":
    "Review when and how identity must be captured and verified, including digital intake photo fallback with required contact details.",
  Routing:
    "Review routing steps for legal, finance, doctor, and physiotherapy visitors.",
  "Scenario Judgment":
    "Review decision order under pressure: identify purpose, confirm status, verify ID, then route."
};

export function getDurationSeconds(): number {
  return TOTAL_DURATION_SECONDS;
}

function formatDateTime(date: Date): { date: string; time: string } {
  return {
    date: date.toISOString().slice(0, 10),
    time: date.toTimeString().slice(0, 5)
  };
}

function toElapsedString(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function getStatus(percentage: number): "Strong" | "Fair" | "Needs Review" {
  if (percentage >= 85) return "Strong";
  if (percentage >= 70) return "Fair";
  return "Needs Review";
}

export function scoreAssessment(params: {
  traineeName: string;
  startedAt: number;
  finishedAt: number;
  answers: Record<string, "A" | "B" | "C" | "D" | "E">;
}): AssessmentResult {
  const { traineeName, startedAt, finishedAt, answers } = params;

  const totalPossible = assessmentQuestions.length;
  let totalScore = 0;

  const byCategory = new Map<
    SkillCategory,
    { achieved: number; total: number }
  >();

  for (const question of assessmentQuestions) {
    const chosen = answers[question.id];
    const correct = chosen === question.correctAnswer;
    if (correct) totalScore += 1;

    const current = byCategory.get(question.category) ?? {
      achieved: 0,
      total: 0
    };
    byCategory.set(question.category, {
      achieved: current.achieved + (correct ? 1 : 0),
      total: current.total + 1
    });
  }

  const percentage = Math.round((totalScore / totalPossible) * 100);
  const result = percentage >= PASS_PERCENTAGE ? "Pass" : "Review Required";

  const categoryBreakdown = Array.from(byCategory.entries()).map(
    ([category, stats]) => {
      const categoryPercent =
        stats.total === 0 ? 0 : (stats.achieved / stats.total) * 100;
      return {
        category,
        achieved: stats.achieved,
        total: stats.total,
        status: getStatus(categoryPercent)
      };
    }
  );

  const areasNeedingReview = categoryBreakdown
    .filter((item) => item.status === "Needs Review")
    .map((item) => ({
      category: item.category,
      guidance: reviewGuidanceMap[item.category]
    }));

  const started = formatDateTime(new Date(startedAt));
  const finished = formatDateTime(new Date(finishedAt));

  return {
    traineeName: traineeName.trim() || "Trainee",
    dateCompleted: finished.date,
    timeStarted: started.time,
    timeFinished: finished.time,
    totalTimeTaken: toElapsedString(finishedAt - startedAt),
    totalScore,
    totalPossible,
    percentage,
    result,
    complianceNote:
      "This result reflects adherence to front desk intake protocol and client handling standards.",
    categoryBreakdown,
    areasNeedingReview,
    answers
  };
}
