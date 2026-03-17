import { Card } from "../components/Card";
import { orientationModules } from "../data/modules";

export function ModulesPage() {
  return (
    <div className="space-y-4">
      {orientationModules.map((module) => (
        <Card key={module.id} title={module.title}>
          <p className="mb-3 leading-7">{module.explanation}</p>
          <ul className="list-disc space-y-1 pl-5">
            {module.keyRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
