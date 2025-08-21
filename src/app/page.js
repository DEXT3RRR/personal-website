// src/app/page.js
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home – Dexter",
  description: "Personal site of Dexter Akoulouze Bika",
};

const allSkills = [
  "Python", "JavaScript/TypeScript", "React/Next.js", "Tailwind CSS",
  "Node.js", "Pygame", "Keras", "SQL", "Git/GitHub", "Raspberry Pi",
];

const keySkills = [
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Keras", icon: "/icons/keras.svg" },
  { name: "React / Next.js", icon: "/icons/react.svg" },
  { name: "GitHub", icon: "/icons/github-filled.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "DeepQ Learning", icon: "/icons/deep.svg" },
];

// Feature the Snake RL card; clicking goes to Projects with that card opened
const featuredProject = {
  id: 1,
  title: "Snake RL (Pygame + Deep Q-Learning)",
  year: "2024",
  tag: "Machine Learning",
  blurb:
    "A reinforcement learning agent that masters Snake using a replay buffer, reward shaping, and a DQN.",
};

// Home shows two blog teasers (IDs match blog/client.jsx)
const homePosts = [
  {
    id: 1,
    title: "Life Through an External Lens",
    category: "Filming / Editing",
    date: "Aug 2025",
    blurb:
      "Filming & editing as a creative outlet—capturing everyday moments and shaping them into something alive.",
  },
  {
    id: 3,
    title: "Wired for Tomorrow",
    category: "Tech",
    date: "Aug 2025",
    blurb:
      "Chasing fast-moving tech and the ideas it unlocks—AI to quantum and beyond.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* ---------- HERO ---------- */}
      <div className="flex flex-col items-center text-center">
        <Image
          src="/avatar.jpg"
          alt="Dexter"
          width={96}
          height={96}
          className="rounded-full ring-2 ring-white/10"
          priority
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
          Dexter Akoulouze Bika
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-foreground/70">
          I may not know the meaning of life, but if anything I know it wasn’t
          meant to be spent waiting around. So ask yourself if you want your
          future self to hold regret or pride—<span className="italic">you</span> decide.
        </p>

        {/* social row */}
        <div className="mt-5 flex items-center gap-4">
          <a aria-label="GitHub" href="https://github.com/DEXT3RRR" target="_blank" rel="noreferrer">
            <Image src="/icons/github.svg" alt="" width={20} height={20} />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/lloyd-dextera/" target="_blank" rel="noreferrer">
            <Image src="/icons/linkedin.svg" alt="" width={20} height={20} />
          </a>
          <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer">
            <Image src="/icons/instagram.svg" alt="" width={20} height={20} />
          </a>
        </div>
      </div>

      {/* ---------- SEPARATOR LINE ---------- */}
      <hr className="mx-auto my-10 w-full border-t border-white/10" />

      {/* ---------- CONTENT GRID ---------- */}
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
        {/* LEFT COLUMN: project + two blog cards */}
        <div className="space-y-10 lg:col-span-2">
          {/* Featured Project (whole card is a Link) */}
          <Link
            href={`/projects?open=${featuredProject.id}`}
            className="block rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg ring-1 ring-white/10
                       transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl"
            aria-label={`Open project: ${featuredProject.title}`}
          >
            <div className="flex items-center gap-3 text-xs text-foreground/60">
              <span className="rounded-full bg-white/5 px-2 py-1">{featuredProject.tag}</span>
              <span>•</span>
              <span>{featuredProject.year}</span>
            </div>

            <h3 className="mt-3 text-lg font-semibold text-foreground">
              {featuredProject.title}
            </h3>
            <p className="mt-2 text-sm text-foreground/70">{featuredProject.blurb}</p>

            <div className="mt-4">
              <span
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm
                           transition-colors hover:bg-white/10"
              >
                View project <span aria-hidden>↗</span>
              </span>
            </div>
          </Link>

          {/* Blog previews (each card is a Link to /blog?open=ID) */}
          {homePosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog?open=${post.id}`}
              className="block rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg ring-1 ring-white/10
                         transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl"
              aria-label={`Open blog: ${post.title}`}
            >
              <div className="mb-2 flex items-center gap-3 text-xs text-foreground/60">
                <span className="rounded-full bg-white/5 px-2.5 py-1 font-medium">
                  {post.category}
                </span>
                <span aria-hidden>•</span>
                <time className="tabular-nums">{post.date}</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{post.blurb}</p>

              <div className="mt-4">
                <span
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm
                             transition-colors hover:bg-white/10"
                >
                  Read post <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* RIGHT COLUMN: Skills card */}
        <aside
          className="min-h-[440px] rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg ring-1 ring-white/10"
        >
          <h2 className="text-base font-semibold text-foreground">Skills</h2>
          <p className="mt-1 text-sm text-foreground/70">
            A snapshot of tools and areas I use regularly.
          </p>

          {/* Key skills with icons */}
          <ul className="mt-4 space-y-3">
            {keySkills.map((s) => (
              <li key={s.name} className="flex items-center gap-3">
                <span
                  className="inline-flex size-7 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10"
                  aria-hidden
                >
                  {s.icon ? (
                    <Image
                      src={s.icon}
                      alt=""
                      width={14}
                      height={14}
                      className="opacity-90"
                    />
                  ) : (
                    <span className="text-[10px] text-foreground/70">•</span>
                  )}
                </span>
                <span className="text-sm text-foreground/85">{s.name}</span>
              </li>
            ))}
          </ul>

          {/* The rest as compact pills */}
          <div className="mt-6">
            <h3 className="mb-2 text-xs font-medium tracking-wide text-foreground/60">
              More
            </h3>
            <ul className="flex flex-wrap gap-2">
              {allSkills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
