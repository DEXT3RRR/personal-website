export const metadata = {
  title: "Resume – Dexter",
};

import ResumeClient from "./ResumeClient";

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 pt-10">
      <h1 className="mb-6 text-center text-2xl font-bold">Resume</h1>

      {/* ResumeClient shows the thumbnail + modal */}
      <ResumeClient />
    </main>
  );
}
