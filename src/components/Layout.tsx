import { ReactNode } from "react";

export type ViewKey =
  | "home"
  | "modules"
  | "scripts"
  | "scenarios"
  | "assessment"
  | "summary"
  | "sop"
  | "chatUserManual"
  | "chatSopLoginCheckIn";

interface LayoutProps {
  activeView: ViewKey;
  onNavigate: (view: ViewKey) => void;
  children: ReactNode;
}

const navItems: Array<{ key: ViewKey; label: string }> = [
  { key: "home", label: "Welcome" },
  { key: "modules", label: "Orientation Modules" },
  { key: "scripts", label: "Approved Scripts" },
  { key: "scenarios", label: "Scenario Practice" },
  { key: "assessment", label: "Timed Assessment" },
  { key: "summary", label: "Completion Summary" }
];

export function Layout({ activeView, onNavigate, children }: LayoutProps) {
  const showGlobalHeader =
    activeView !== "sop" &&
    activeView !== "chatUserManual" &&
    activeView !== "chatSopLoginCheckIn";

  return (
    <div className="min-h-screen bg-page text-body">
      {showGlobalHeader ? (
        <header className="border-b border-border bg-white print:hidden">
          <div className="mx-auto max-w-6xl px-4 py-5">
            <h1 className="text-xl font-semibold text-heading">
              Front Desk Orientation Platform
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Internal law firm onboarding and orientation
            </p>
            <nav className="mt-4 flex flex-wrap gap-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => onNavigate(item.key)}
                  className={`rounded-md border px-3 py-1.5 text-sm transition ${
                    activeView === item.key
                      ? "border-accent bg-accentSoft text-heading"
                      : "border-border bg-white text-body hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </header>
      ) : null}
      <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
    </div>
  );
}
