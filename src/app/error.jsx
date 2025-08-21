// src/app/error.jsx
"use client";

export default function Error({ error, reset }) {
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold">Something went wrong</h1>
      <pre className="mt-4 whitespace-pre-wrap text-sm opacity-80">
        {error?.message ?? "Unknown error"}
      </pre>
      <button className="mt-6 border px-3 py-1 rounded" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
