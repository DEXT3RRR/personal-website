import { Suspense } from "react";
import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Projects – Dexter",
  description: "Selected projects and experiments.",
};

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-sm text-foreground/60">
          Loading projects…
        </div>
      }
    >
      <ProjectsClient />
    </Suspense>
  );
}
