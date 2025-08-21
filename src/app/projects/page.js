// src/app/projects/page.js
import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Projects – Dexter",
  description: "Selected projects and experiments.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
