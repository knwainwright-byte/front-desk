export type ServiceLine = "Law Firm" | "Finance" | "Doctor" | "Physiotherapy";
export type ClientType = "New" | "Existing";
export type SkillCategory =
  | "Greeting & Professionalism"
  | "Client Identification"
  | "New vs Existing Handling"
  | "ID Protocol"
  | "Routing"
  | "Scenario Judgment";

export type QuestionStyle = "standard" | "scenario" | "logic";

export interface OrientationModule {
  id: string;
  title: string;
  explanation: string;
  keyRules: string[];
}

export interface ApprovedScripts {
  greetingScript: string;
  identifyingPurposeScript: string;
  newVsExistingScript: string;
  idRequestScript: string;
  idRefusalHandlingScript: string;
  verificationScript: string;
  routingScript: string;
  clientUpdateSchedulingScript: string;
  closingScript: string;
}

export interface ScenarioItem {
  id: string;
  title: string;
  situation: string;
  questions: string[];
}

export interface BaseQuestion {
  id: string;
  style: QuestionStyle;
  category: SkillCategory;
  question: string;
  options: Record<"A" | "B" | "C" | "D" | "E", string>;
  correctAnswer: "A" | "B" | "C" | "D" | "E";
}

export interface AssessmentQuestion extends BaseQuestion {
  serviceLine: ServiceLine;
  clientType: ClientType;
}

export interface AssessmentResult {
  traineeName: string;
  dateCompleted: string;
  timeStarted: string;
  timeFinished: string;
  totalTimeTaken: string;
  totalScore: number;
  totalPossible: number;
  percentage: number;
  result: "Pass" | "Review Required";
  complianceNote: string;
  categoryBreakdown: Array<{
    category: SkillCategory;
    achieved: number;
    total: number;
    status: "Strong" | "Fair" | "Needs Review";
  }>;
  areasNeedingReview: Array<{
    category: SkillCategory;
    guidance: string;
  }>;
  answers: Record<string, "A" | "B" | "C" | "D" | "E">;
}

export interface CoreRules {
  intakeOrder: string[];
  hardRule: string;
}
