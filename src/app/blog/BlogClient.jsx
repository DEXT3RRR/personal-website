"use client";

import { useEffect, useRef, useState } from "react";

/* Posts with per-post paragraphs in `body: []` */
const posts = [
  {
    id: 1,
    slug: "#",
    title: "Life Through an External Lens",
    excerpt:
      "Filming and editing became a favorite creative outlet—capturing everyday moments and shaping them into something alive.",
    date: "Aug 2025",
    category: "Creative",
    body: [
      "What started as a curiosity has turned into one of my favorite outlets for creativity: filming and editing. I love the challenge of capturing everyday moments and shaping them into something that feels alive and full of personality. Editing especially has become a craft I enjoy — from finding the perfect soundtrack to layering effects until the final cut just clicks. Each project feels like a puzzle where all the small details eventually fit together. It’s my way of sharing a playful, sometimes chaotic view of life with others.",
    ],
  },
  {
    id: 2,
    slug: "#",
    title: "Iron and Discipline",
    excerpt:
      "Three years in the gym taught me discipline, patience, and how small daily habits compound into long-term results.",
    date: "Aug 2025",
    category: "Fitness",
    body: [
      "Three years ago, I stepped into the gym out of curiosity, never imagining how transformative it would be. What began as a small experiment has grown into thousands of hours of dedication that shaped both my body and my mindset. The gym taught me discipline, patience, and how small daily habits accumulate into long-term results. Beyond physical progress, it gave me confidence and a structure I carry into other parts of life. Fitness has become less about lifting weights and more about lifting myself toward consistency and growth.",
    ],
  },
  {
    id: 3,
    slug: "#",
    title: "Wired for Tomorrow",
    excerpt:
      "I’m fascinated by fast-moving tech—from AI to quantum—and the ideas these tools unlock for the future.",
    date: "Jul 2025",
    category: "Tech",
    body: [
      "Technology moves fast, and I find excitement in keeping pace with it. From AI breakthroughs to the possibilities of quantum computing, I’m fascinated not just by the tools themselves but by the ideas they unlock for the future. Exploring these developments feels less like keeping up with change and more like joining a global conversation about what’s possible. I enjoy diving into new concepts, experimenting with them, and imagining how they might shape the way we live and work. For me, tech isn’t just a field — it’s an evolving playground of curiosity.",
    ],
  },
  {
    id: 4,
    slug: "#",
    title: "The Freedom of Distance",
    excerpt:
      "Solo travel pushed me outside my comfort zone and taught me how to rely on myself in unfamiliar settings.",
    date: "Jul 2025",
    category: "Travel",
    body: [
      "Traveling has always been part of my life thanks to family ties in France and Cameroon, but over time I discovered the unique joy of traveling alone. Solo trips have pushed me outside my comfort zone and taught me how to rely on myself in unfamiliar settings. Being on my own allows me to experience new places without filters, shaping my own perspectives without outside influence. It’s liberating to explore at my own pace and create memories that feel personal and unshared. Independence on the road has given me clarity about who I am and how I want to see the world.",
    ],
  },
  {
    id: 5,
    slug: "#",
    title: "The Weight of Mentality",
    excerpt:
      "In a world optimized for quick dopamine, a strong mentality is rare—and incredibly valuable.",
    date: "Jun 2025",
    category: "Mindset",
    body: [
      "A strong mentality feels rare in a world that’s wired for instant gratification. Social media and modern habits push us toward quick dopamine hits, but I’ve learned that real growth comes from enduring discomfort and delayed rewards. Training your mind to push through long hours, repeated failures, and slow progress is like rewiring your entire operating system. It’s not easy, but it builds resilience and strength that can’t be faked. To me, mindset is the hidden driver behind success, far more valuable than talent alone.",
    ],
  },
  {
    id: 6,
    slug: "#",
    title: "Beyond the Balance Sheet",
    excerpt:
      "My drive is about freedom, peace of mind, and lifting up the people I care about—not possessions.",
    date: "Jun 2025",
    category: "Life",
    body: [
      "Many chase money for material comfort, but my drive comes from something deeper. I want to create a life where my parents never have to worry about finances again and where I can live with peace of mind. My passion isn’t just about achieving wealth but about building freedom, enjoying what I do, and striving to become the best version of myself. True fulfillment, I believe, comes from pursuing growth for yourself and lifting up the people you care about along the way. It’s about living with purpose, not possessions.",
    ],
  },
];

export default function BlogClient() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Focus the close button + lock body scroll while modal is open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const prevActive = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      if (prevActive && prevActive.focus) {
        try { prevActive.focus(); } catch {}
      }
    };
  }, [open]);

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
      {/* Header */}
      <header className="mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-sm sm:text-base text-foreground/70">
          Short write-ups on about anything my mind conjures.
        </p>
      </header>

      {/* Cards grid (same look) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group relative rounded-2xl border border-white/10 bg-white/5 shadow-lg ring-1 ring-white/10
                       transition-all duration-300 ease-out hover:shadow-2xl hover:ring-white/20 hover:scale-[1.01] hover:-translate-y-1
                       focus-within:ring-white/30"
          >
            <div className="p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-3 text-xs text-foreground/60">
                <span className="rounded-full bg-white/5 px-2.5 py-1 font-medium">{post.category}</span>
                <span aria-hidden="true">•</span>
                <time className="tabular-nums">{post.date}</time>
              </div>

              <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
                <a
                  href={post.slug}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(post);
                    setOpen(true);
                  }}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                >
                  <span className="absolute inset-0 rounded-2xl" />
                  {post.title}
                </a>
              </h2>

              <p className="mt-3 text-sm text-foreground/70 line-clamp-3">{post.excerpt}</p>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => {
                    setActive(post);
                    setOpen(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm transition-colors hover:bg-white/10"
                  aria-label={`Read: ${post.title}`}
                >
                  Read post <span aria-hidden="true" className="text-foreground/60">↗</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Full-screen modal */}
      {open && active && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)} // click backdrop to close
        >
          <div
            className="relative w-[min(92vw,960px)] max-h-[92vh] overflow-auto rounded-2xl bg-neutral-900 p-6 shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()} // don't close when clicking panel
          >
            <button
              ref={closeRef}
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 hover:bg-white/10 active:bg-white/15"
              aria-label="Close"
              title="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold">{active.title}</h2>
            <div className="mt-1 text-sm text-foreground/60">{active.category} • {active.date}</div>

            <div className="prose prose-invert mt-5 max-w-none">
              {(active.body?.length ? active.body : [active.excerpt]).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
