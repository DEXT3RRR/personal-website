"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

/* Inline SVG as a data URL for the “Coming soon” card (no host whitelisting needed) */
const COMING_SOON_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="380" viewBox="0 0 1600 380">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#0f0f0f"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect x="24" y="24" width="1552" height="332" rx="20" ry="20"
        fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="3"
        stroke-dasharray="14 10"/>
  <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle"
        font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        font-size="56" fill="rgba(255,255,255,0.9)" letter-spacing="1">
    Coming soon
  </text>
</svg>`);

/* ------------------------------------------------------------------ */
/* Each project can own its paragraphs in `body: []`.                  */
/* `comingSoon: true` shows only the image and disables interactions.  */
/* ------------------------------------------------------------------ */
const projects = [
  {
    id: 1,
    title: "Snake RL (Pygame + Deep Q-Learning)",
    summary:
      "A reinforcement learning agent that masters Snake. Training loop, replay buffer, and reward shaping.",
    href: "/projects/snake-rl",
    image:
      "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0",
    tag: "Machine Learning",
    date: "2024",
    body: [
      "This project explores the fascinating intersection of reinforcement learning and classic gameplay by training an intelligent agent to master the Snake game. Using Pygame as a simulation environment, I built an interactive canvas that allowed the agent to learn by trial and error, mimicking how reinforcement learning systems adapt to dynamic challenges. At its core, the project utilized Deep Q-Learning (DQL), a powerful algorithm that combines Q-Learning with deep neural networks to make decisions in high-dimensional spaces. One of the most critical aspects of this work was balancing exploration versus exploitation — ensuring that the AI tried new strategies while also consolidating what it had already learned. I designed and iteratively refined a reward function, tuning it so that the agent learned to survive longer and maximize its score, rather than adopting trivial strategies. Through experimentation, I witnessed firsthand the challenges of reward shaping, training instability, and how small architectural or hyperparameter adjustments could drastically alter learning outcomes. This experience deepened my understanding of how reinforcement learning underpins real-world applications such as robotics, self-driving cars, and adaptive control systems. Beyond technical implementation, the project reinforced my ability to test, evaluate, and debug AI models systematically, skills essential to scaling from simple games to complex decision-making systems in practice.",
    ],
  },
  {
    id: 2,
    title: "2D LiDAR SLAM Simulation",
    summary:
      "Simulated LiDAR in a Pygame world with occupancy grids and map building. Includes visualizations.",
    href: "/projects/lidar-slam",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
    tag: "Robotics",
    date: "2024",
    body: [
      "In this robotics-focused project, I set out to simulate a 2D LiDAR sensor inside a Pygame world, replicating the way real-world sensors perceive their environment. The simulation involved dynamically generating occupancy grids and visualizing how LiDAR scans detect obstacles in real time. To achieve this, I implemented a system capable of identifying black regions in an image (representing walls or barriers) and projecting red points onto the environment to visualize obstacle detection. This setup provided a sandbox for exploring Simultaneous Localization and Mapping (SLAM), one of the most important techniques in autonomous navigation. Through experimentation, I learned how SLAM algorithms attempt to reconcile uncertain sensor data with evolving maps, highlighting the importance of noise handling, sensor calibration, and update frequency. The project taught me not only the theoretical aspects of SLAM but also the practical challenges of mapping accuracy, drift, and computational efficiency. Building this simulation gave me hands-on insight into how robots construct their understanding of unknown environments, and it connected abstract algorithms to tangible outputs that I could visualize and refine. By bridging software, simulation, and applied robotics concepts, this work solidified my interest in real-time decision-making systems and laid the groundwork for future explorations in robotics perception and AI-driven navigation.",
    ],
  },
  {
    id: 3,
    title: "Handwritten Digit Classifier (Keras)",
    summary:
      "MNIST CNN with training curves, early stopping, and a demo UI for quick testing.",
    href: "/projects/mnist-cnn",
    image:
      "https://images.unsplash.com/photo-1727434032773-af3cd98375ba?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0",
    tag: "Deep Learning",
    date: "2024",
    body: [
      "This project focused on supervised deep learning, where the task was to design and optimize a convolutional neural network (CNN) capable of classifying handwritten digits from the MNIST dataset. Using Keras, I built a flexible model architecture that allowed experimentation with activation functions, hidden layers, and different optimizers. Early versions of the model revealed common challenges such as overfitting and slow convergence, which I addressed by implementing dropout layers, early stopping, and careful hyperparameter tuning. Iteratively refining the architecture and training pipeline allowed me to reach 98% classification accuracy, demonstrating both strong generalization on unseen data and computational efficiency. Beyond accuracy, I explored the importance of training workflows such as backpropagation, gradient descent, and batch normalization, understanding how these mechanisms work together to stabilize and accelerate learning. A critical lesson from this project was that success in machine learning requires not just building a model, but also diagnosing failure points and adapting the approach systematically. To make the results more interactive, I implemented a small demo UI for testing predictions in real time, bridging the gap between abstract model training and user-facing applications. This project strengthened my grasp of deep learning fundamentals and provided a foundation for tackling more complex domains like optical character recognition (OCR), natural language processing, and computer vision beyond digit classification.",
    ],
  },
  {
    id: 4,
    title: "Handwritten Digit Classifier (Keras)",
    summary:
      "MNIST CNN with training curves, early stopping, and a demo UI for quick testing.",
    href: "/projects/mnist-cnn",
    image: COMING_SOON_SVG, // data-URI: no domain whitelisting needed
    tag: "Deep Learning",
    date: "2024",
    comingSoon: true,
  },
];

export default function ProjectsClient() {
  const [openId, setOpenId] = useState(null);
  const refs = useRef(new Map());
  const search = useSearchParams();

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  // Scroll opened card into view
  useEffect(() => {
    if (openId == null) return;
    const el = refs.current.get(openId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [openId]);

  // Deep-link: /projects?open=2 or /projects#p-2
  useEffect(() => {
    // query param
    const q = search?.get("open");
    // hash
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const fromHash = hash?.startsWith("#p-") ? Number(hash.slice(3)) : null;
    const wanted = Number(q ?? fromHash);
    if (Number.isFinite(wanted) && projects.some((p) => p.id === wanted && !p.comingSoon)) {
      // delay to ensure refs are set after first render
      setTimeout(() => setOpenId(wanted), 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <header className="mx-auto mb-8 max-w-2xl lg:mx-0">
        <h1 className="text-balance text-3xl font-semibold sm:text-4xl">Projects</h1>
        <p className="mt-2 text-sm/6 text-foreground/70">A few things I’ve built recently.</p>
      </header>

      <div className="space-y-8">
        {projects.map((p) => {
          const open = openId === p.id;

          // Coming soon: image only
          if (p.comingSoon) {
            return (
              <article
                key={p.id}
                id={`p-${p.id}`}
                ref={(node) => refs.current.set(p.id, node)}
                className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 ring-1 ring-white/10 shadow-lg"
              >
                <div className="relative aspect-[21/5] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt="Coming soon"
                    fill
                    sizes="(min-width:1024px) 1024px, 100vw"
                    className="object-cover"
                  />
                </div>
              </article>
            );
          }

          // Normal interactive card with accordion
          return (
            <article
              key={p.id}
              id={`p-${p.id}`}
              ref={(node) => refs.current.set(p.id, node)}
              role="button"
              tabIndex={0}
              onClick={() => toggle(p.id)} // click anywhere on the card to toggle
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(p.id);
                }
              }}
              className={`
                group relative w-full overflow-hidden rounded-2xl
                border border-white/10 bg-white/5
                transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:shadow-2xl hover:ring-1 hover:ring-white/15
                ${open ? "ring-1 ring-white/20 shadow-2xl" : ""}
              `}
            >
              {/* Background image + soft overlay */}
              <div className="relative aspect-[21/5] w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width:1024px) 1024px, 100vw"
                  className={`object-cover transition-transform duration-500 ease-out
                              group-hover:scale-[1.03] ${open ? "scale-[1.01]" : ""}`}
                  priority={p.id === 1}
                />
                <div className="pointer-events-none absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
              </div>

              {/* Preview overlay (hidden when open) */}
              {!open && (
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7 flex flex-col gap-3 bg-gradient-to-t from-black/50 via-black/30 to-transparent backdrop-blur-[1px]">
                  <div className="flex items-center gap-3 text-[11px] text-white/80">
                    {p.tag && (
                      <span className="rounded-full border border-white/25 bg-black/30 px-2 py-0.5">
                        {p.tag}
                      </span>
                    )}
                    {p.tag && p.date && <span>•</span>}
                    {p.date && <time>{p.date}</time>}
                  </div>

                  <div className="max-w-3xl">
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{p.title}</h3>
                    {p.summary && <p className="mt-1 text-sm text-white/80">{p.summary}</p>}
                  </div>

                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1 rounded-md border border-white/20 bg-black/30 px-3 py-1.5 text-sm font-medium text-white/90">
                      View project
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-90" aria-hidden>
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </span>
                  </div>
                </div>
              )}

              {/* Expanding section that pushes other cards down */}
              <div className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div
                    className="border-t border-white/10 bg-white/5 px-5 py-6 sm:px-6 lg:px-7"
                    onClick={(e) => e.stopPropagation()} // keep clicks inside from collapsing
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold">{p.title}</h3>
                      <button
                        onClick={() => toggle(p.id)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/5 hover:bg-white/10"
                        aria-label="Close"
                        title="Close"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6 6 18" />
                          <path d="M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-3 space-y-3 text-sm text-foreground/80">
                      {(p.body?.length ? p.body : [
                        `“${p.title}” — a short write-up of the approach, the smallest demo that proves it works, plus key trade-offs and next steps.`,
                      ]).map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
