import { useEffect, useState } from "react";
import { Layout, ViewKey } from "./components/Layout";
import { AssessmentPage } from "./pages/AssessmentPage";
import { ChatSopLoginCheckInPage } from "./pages/ChatSopLoginCheckInPage";
import { ChatUserManualPage } from "./pages/ChatUserManualPage";
import { CompletionSummaryPage } from "./pages/CompletionSummaryPage";
import { HomePage } from "./pages/HomePage";
import { ModulesPage } from "./pages/ModulesPage";
import { ScenarioPracticePage } from "./pages/ScenarioPracticePage";
import { ScriptsPage } from "./pages/ScriptsPage";
import { SopPage } from "./pages/SopPage";
import { AssessmentResult } from "./types/models";

const SUMMARY_STORAGE_KEY = "fdop_last_summary_v1";
const SESSION_STORAGE_KEY = "fdop_assessment_session_v1";

function loadStoredSummary(): AssessmentResult | null {
  try {
    const raw = localStorage.getItem(SUMMARY_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AssessmentResult;
  } catch {
    return null;
  }
}

export default function App() {
  const [activeView, setActiveView] = useState<ViewKey>("home");
  const [summary, setSummary] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    setSummary(loadStoredSummary());
  }, []);

  useEffect(() => {
    const syncHiddenViewFromPath = () => {
      const normalizedPath = window.location.pathname
        .toLowerCase()
        .replace(/\/+$/, "");
      const restoredPath = new URLSearchParams(window.location.search)
        .get("p")
        ?.toLowerCase();
      const isSopPath =
        normalizedPath.endsWith("/sop") || restoredPath?.endsWith("/sop");
      const isChatUserManualPath =
        normalizedPath.endsWith("/chat-user-manual") ||
        restoredPath?.endsWith("/chat-user-manual");
      const isChatSopPath =
        normalizedPath.endsWith("/chat-sop-login-check-in") ||
        restoredPath?.endsWith("/chat-sop-login-check-in");

      if (isSopPath) {
        setActiveView("sop");
      } else if (isChatUserManualPath) {
        setActiveView("chatUserManual");
      } else if (isChatSopPath) {
        setActiveView("chatSopLoginCheckIn");
      }
    };

    syncHiddenViewFromPath();
    window.addEventListener("popstate", syncHiddenViewFromPath);
    return () => window.removeEventListener("popstate", syncHiddenViewFromPath);
  }, []);

  const handleAssessmentComplete = (result: AssessmentResult) => {
    setSummary(result);
    localStorage.setItem(SUMMARY_STORAGE_KEY, JSON.stringify(result));
    setActiveView("summary");
  };

  const handleRestartAssessment = () => {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    setActiveView("assessment");
  };

  const renderPage = () => {
    switch (activeView) {
      case "home":
        return <HomePage />;
      case "modules":
        return <ModulesPage />;
      case "scripts":
        return <ScriptsPage />;
      case "scenarios":
        return <ScenarioPracticePage />;
      case "assessment":
        return (
          <AssessmentPage
            onComplete={handleAssessmentComplete}
            onReturnHome={() => setActiveView("home")}
          />
        );
      case "summary":
        if (!summary) {
          return (
            <div className="rounded-lg border border-border bg-panel p-5">
              <h2 className="text-lg font-semibold text-heading">
                Completion Summary
              </h2>
              <p className="mt-2">
                No completed assessment found yet. Please complete the timed
                assessment first.
              </p>
            </div>
          );
        }
        return (
          <CompletionSummaryPage
            result={summary}
            onPrint={() => window.print()}
            onRestartAssessment={handleRestartAssessment}
            onReturnHome={() => setActiveView("home")}
          />
        );
      case "sop":
        return <SopPage />;
      case "chatUserManual":
        return <ChatUserManualPage />;
      case "chatSopLoginCheckIn":
        return <ChatSopLoginCheckInPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout activeView={activeView} onNavigate={setActiveView}>
      {renderPage()}
    </Layout>
  );
}
