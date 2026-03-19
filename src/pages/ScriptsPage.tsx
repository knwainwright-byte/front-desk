import { Card } from "../components/Card";
import { approvedScripts } from "../data/scripts";

const scriptList = [
  { key: "greetingScript", title: "Greeting Script" },
  { key: "identifyingPurposeScript", title: "Identifying Purpose Script" },
  { key: "newVsExistingScript", title: "New vs Existing Script" },
  { key: "idRequestScript", title: "ID Request Script" },
  { key: "idRefusalHandlingScript", title: "No-ID / Refusal Handling Script" },
  { key: "verificationScript", title: "Verification Script" },
  { key: "routingScript", title: "Routing Script" },
  { key: "closingScript", title: "Closing Script" }
] as const;

export function ScriptsPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {scriptList.map((item) => (
        <Card key={item.key} title={item.title}>
          <p className="leading-7">{approvedScripts[item.key]}</p>
        </Card>
      ))}
    </div>
  );
}
