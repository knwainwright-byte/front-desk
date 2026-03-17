# Front Desk Orientation Platform - Part 3 Completion Summary Plan

## Goal
Create a professional, print-friendly Completion Summary screen suitable for browser print and PDF export, aligned with a law firm internal onboarding environment.

## Page Metadata
```ts
export const completionSummaryPageMeta = {
  platformName: "Front Desk Orientation Platform",
  pageTitle: "Completion Summary",
  subtitle: "For supervisor review and onboarding record"
};
```

## Visual Direction
```ts
export const completionSummaryStyle = {
  background: "white",
  headingColor: "muted navy / charcoal",
  sectionStyle: "soft gray border cards with minimal fills",
  spacing: "professional, consistent vertical rhythm",
  clutter: "minimal",
  context: "internal law firm document style"
};
```

## Data Model (Code-Ready)
```ts
export type CategoryName =
  | "Greeting & Professionalism"
  | "Client Identification"
  | "New vs Existing Handling"
  | "ID Protocol"
  | "Routing"
  | "Scenario Judgment";

export type CategoryStatus = "Strong" | "Fair" | "Needs Review";

export interface TraineeInfo {
  traineeName: string;
  dateCompleted: string;
  timeStarted: string;
  timeFinished: string;
  totalTimeTaken: string;
}

export interface FinalResult {
  totalScore: number;
  totalPossible: number;
  percentage: number;
  result: "Pass" | "Review Required";
  complianceNote: string;
}

export interface CategoryBreakdownItem {
  category: CategoryName;
  achieved: number;
  total: number;
  status: CategoryStatus;
}

export interface ReviewItem {
  category: CategoryName;
  guidance: string;
}

export interface SupervisorReview {
  supervisorName: string;
  supervisorComments: string;
  supervisorSignature: string;
  dateReviewed: string;
}

export interface TraineeAcknowledgement {
  traineeSignature: string;
  date: string;
}

export interface CompletionSummaryRecord {
  header: {
    platformName: string;
    title: string;
    subtitle: string;
  };
  traineeInfo: TraineeInfo;
  finalResult: FinalResult;
  categoryBreakdown: CategoryBreakdownItem[];
  areasNeedingReview: ReviewItem[];
  supervisorReview: SupervisorReview;
  traineeAcknowledgement: TraineeAcknowledgement;
  footerNote: string;
}
```

## Section Layout Specification
```ts
export const completionSummaryLayout = [
  {
    id: "header",
    title: "Header",
    fields: ["platformName", "title", "subtitle"]
  },
  {
    id: "trainee-information",
    title: "Trainee Information",
    fields: [
      "traineeName",
      "dateCompleted",
      "timeStarted",
      "timeFinished",
      "totalTimeTaken"
    ]
  },
  {
    id: "final-result-summary",
    title: "Final Result Summary",
    fields: ["totalScore", "percentage", "result", "complianceNote"],
    emphasis: "prominent visual priority"
  },
  {
    id: "category-breakdown",
    title: "Category Breakdown",
    fields: [
      "Greeting & Professionalism",
      "Client Identification",
      "New vs Existing Handling",
      "ID Protocol",
      "Routing",
      "Scenario Judgment"
    ],
    rowFields: ["achieved", "total", "status"]
  },
  {
    id: "areas-needing-review",
    title: "Areas Needing Review",
    behavior: "show weak categories with short guidance"
  },
  {
    id: "supervisor-review",
    title: "Supervisor Review",
    fields: [
      "Supervisor Name",
      "Supervisor Comments",
      "Supervisor Signature",
      "Date Reviewed"
    ],
    presentation: "blank lines or bordered spaces"
  },
  {
    id: "trainee-acknowledgement",
    title: "Trainee Acknowledgement",
    fields: ["Trainee Signature", "Date"]
  },
  {
    id: "footer",
    title: "Footer",
    text: "This summary reflects the trainee's results based on the current version of the Front Desk Orientation Platform assessment."
  }
];
```

## Category Status Rules
```ts
export const categoryStatusRules = {
  strong: ">= 85%",
  fair: ">= 70% and < 85%",
  needsReview: "< 70%"
};
```

## Areas Needing Review Rules
```ts
export const reviewGuidanceMap: Record<CategoryName, string> = {
  "Greeting & Professionalism":
    "Review professional opening and closing phrasing with calm, clear tone.",
  "Client Identification":
    "Review how to identify visitor purpose across Law Firm, Finance, Doctor, and Physiotherapy.",
  "New vs Existing Handling":
    "Review how to distinguish new and existing clients without assumptions.",
  "ID Protocol":
    "Review when and how ID must be requested, collected, and verified.",
  Routing:
    "Review routing steps for legal, finance, doctor, and physiotherapy visitors.",
  "Scenario Judgment":
    "Review decision order under pressure: identify purpose, confirm status, verify ID, then route."
};
```

## Print / PDF Specification
```ts
export const printRules = {
  paper: "A4",
  orientation: "portrait",
  margins: "generous",
  backgrounds: "minimal/no heavy fills",
  pageBreakBehavior: [
    "avoid section splits where possible",
    "keep supervisor and acknowledgement blocks intact",
    "allow clean second page only when content exceeds one page"
  ],
  target: "one-page preferred"
};
```

## On-Screen Action Buttons (Hidden in Print)
```ts
export const completionSummaryActions = [
  { id: "print", label: "Print / Save as PDF" },
  { id: "restart", label: "Restart Assessment" },
  { id: "home", label: "Return Home" }
];

export const printVisibilityRule = {
  hideInPrint: ["print", "restart", "home"]
};
```

## Example Record (Display Preview)
```ts
export const sampleCompletionSummaryRecord: CompletionSummaryRecord = {
  header: {
    platformName: "Front Desk Orientation Platform",
    title: "Completion Summary",
    subtitle: "For supervisor review and onboarding record"
  },
  traineeInfo: {
    traineeName: "Jordan Rivera",
    dateCompleted: "2026-03-17",
    timeStarted: "09:00",
    timeFinished: "09:42",
    totalTimeTaken: "00:42"
  },
  finalResult: {
    totalScore: 42,
    totalPossible: 50,
    percentage: 84,
    result: "Pass",
    complianceNote:
      "This result reflects adherence to front desk intake protocol and client handling standards."
  },
  categoryBreakdown: [
    { category: "Greeting & Professionalism", achieved: 8, total: 8, status: "Strong" },
    { category: "Client Identification", achieved: 7, total: 9, status: "Fair" },
    { category: "New vs Existing Handling", achieved: 6, total: 8, status: "Fair" },
    { category: "ID Protocol", achieved: 9, total: 10, status: "Strong" },
    { category: "Routing", achieved: 6, total: 8, status: "Fair" },
    { category: "Scenario Judgment", achieved: 6, total: 7, status: "Strong" }
  ],
  areasNeedingReview: [
    {
      category: "New vs Existing Handling",
      guidance: "Review how to distinguish new and existing clients without assumptions."
    },
    {
      category: "Routing",
      guidance: "Review routing steps for legal, finance, doctor, and physiotherapy visitors."
    }
  ],
  supervisorReview: {
    supervisorName: "",
    supervisorComments: "",
    supervisorSignature: "",
    dateReviewed: ""
  },
  traineeAcknowledgement: {
    traineeSignature: "",
    date: ""
  },
  footerNote:
    "This summary reflects the trainee's results based on the current version of the Front Desk Orientation Platform assessment."
};
```

## Print Notes for Implementation
- Keep each major section in a bordered card with subtle separators.
- Use text-first hierarchy; avoid decorative graphics.
- Keep buttons in a top/right action row on screen only.
- Ensure Supervisor Review and Trainee Acknowledgement fields leave enough writable space when printed.
- Preserve structure if a second page is required.
