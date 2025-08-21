// src/app/blog/page.js
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog – Dexter",
  description:
    "Notes and write-ups about projects, learning, and experiments.",
};

export default function Page() {
  return <BlogClient />;
}

