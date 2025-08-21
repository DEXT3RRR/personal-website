import Image from "next/image";

/* --------------------------------- content -------------------------------- */

const books = [
  {
    title: "Leonardo Da Vinci",
    href: "https://www.goodreads.com/book/show/34684622-leonardo-da-vinci?ref=nav_sb_ss_1_8",
    img: "https://images.isbndb.com/covers/12671233482722.jpg",
    alt: "Shoe Dog book cover",
  },
  {
    title: "Outliers",
    href: "https://www.goodreads.com/book/show/3228917-outliers?ref=nav_sb_ss_1_8",
    img: "https://images.isbndb.com/covers/13662303482300.jpg",
    alt: "The Black Swan book cover",
  },
  {
  title: "The Idea Factory",
  href: "https://www.goodreads.com/book/show/11797471-the-idea-factory?ref=nav_sb_ss_1_13",
  img: "https://books.googleusercontent.com/books/content?id=OkECDAAAQBAJ&printsec=frontcover&img=1&zoom=1",
  alt: "The Idea Factory book cover",
},
  {
    title: "Deep work",
    href: "https://www.goodreads.com/book/show/25744928-deep-work?ref=nav_sb_ss_1_15",
    img: "https://images.isbndb.com/covers/10590383482312.jpg",
    alt: "Atomic Habits book cover",
  },
  {
    title: "Atomic Habits",
    href: "https://www.goodreads.com/book/show/40121378-atomic-habits",
    img: "https://images.isbndb.com/covers/20813213482449.jpg",
    alt: "The Daily Stoic book cover",
  },
];

const videos = [
  {
    title: "Chamath Palihapitiya Stanford",
    href: "https://www.youtube.com/watch?v=PMotykw0SIk&list=WL&index=3",
    img: "https://i.ytimg.com/vi/PMotykw0SIk/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDJEUDfyOKBA1Mp3fY3mIoX33sd1g",
    alt: "Stanford lecture thumbnail",
  },
  {
    title: "David Goggins",
    href: "https://www.youtube.com/watch?v=ngvOyccUzzY&list=WL&index=2&t=4s",
    img: "https://i.ytimg.com/vi/ngvOyccUzzY/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCw_2zwgUCYNpZwRCc9gurzfnb2OQ",
    alt: "MIT talk thumbnail",
  },
  {
    title: "Backpropagation",
    href: "https://www.youtube.com/watch?v=SmZmBKc7Lrs&list=WL&index=25&t=226s",
    img: "https://i.ytimg.com/vi/SmZmBKc7Lrs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBqHzHe9n3jKyUO_DAtz181oSSiXA",
    alt: "Build UI thumbnail",
  },
  {
    title: "The Man Behind The Muscle",
    href: "https://www.youtube.com/watch?v=QxcmcE8dwXU&list=WL&index=1",
    img: "https://i.ytimg.com/vi/QxcmcE8dwXU/hqdefault.jpg?sqp=-oaymwE9CPYBEIoBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4EgALgA4oCDAgAEAEYSiBlKGEwDw==&rs=AOn4CLDVqaff5ZZiNn6rbw_B7pYuiYzupQ",
    alt: "Deep learning intro thumbnail",
  },
];

const albums = [
  {
    title: "Diamond Eyes",
    href: "https://open.spotify.com/album/1GjjBpY2iDwSQs5bykQI5e",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/cd/bd/cb/cdbdcbfd-0b6e-93ff-61f7-04c9d5da7368/093624919759.jpg/300x300bb.webp",
    alt: "Album artwork",
  },
  {
    title: "Freudian",
    href: "https://open.spotify.com/album/4E1XUBMTpLO7GpBzUo65Jp",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b6/cd/1a/b6cd1a5b-83af-a1e2-0ad7-ea530fcf2522/859722261219.jpg/300x300bb.webp",
    alt: "Album artwork",
  },
  {
    title: "Channel Orange",
    href: "https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/04/f8/63/04f863fc-2852-604f-c910-a97ac069506b/12UMGIM40339.rgb.jpg/300x300bb.webp",
    alt: "Album artwork",
  },
  {
    title: "2014 Forest Hill Drive",
    href: "https://open.spotify.com/album/0UMMIkurRUmkruZ3KGBLtG",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/92/b9/62/92b9624d-e9fb-0e4f-f14b-6f1f96c0a3e0/21UM1IM54414.rgb.jpg/300x300bb.webp",
    alt: "Album artwork",
  },
];

/* ------------------------------- card component --------------------------- */
/**
 * A simple “fan” of cards that scale/lift on hover. Each card is clickable.
 * To keep Tailwind happy, we use inline styles for the rotation angle.
 */
function CardFan({ items, maxAngle = 10, imgW = 220, imgH = 320 }) {
  const center = (items.length - 1) / 2;

  return (
    <ul className="relative flex justify-center gap-0 py-6 sm:py-8">
      {items.map((it, i) => {
        // distribute angles from -maxAngle .. maxAngle
        const t = (i - center) / Math.max(center, 1);
        const angle = (isNaN(t) ? 0 : t) * maxAngle;

        return (
          <li key={it.title} className="relative -mx-6">
            <a
              href={it.href}
              target="_blank"
              rel="noreferrer"
              className="group block"
              aria-label={it.title}
              title={it.title}
            >
              <div
                style={{ transform: `rotate(${angle}deg)` }}
                className="rounded-xl border border-white/10 bg-white/5 shadow-2xl
                           transition-all duration-300 ease-out
                           group-hover:scale-105 group-hover:-translate-y-1
                           group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]
                           [will-change:transform] overflow-hidden"
              >
                <Image
                  src={it.img}
                  alt={it.alt}
                  width={imgW}
                  height={imgH}
                  className="pointer-events-none select-none object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-foreground/70">
                {it.title}
              </p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/* --------------------------------- page ----------------------------------- */

export const metadata = {
  title: "About",
  description: "About me, plus books, videos, and music I recommend.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-12 pb-24">
      {/* ----------------------------- hero ----------------------------- */}
<section
  className="
    grid items-center
    gap-4 [grid-template-columns:1fr_auto]        /* two columns even on phones */
    sm:gap-8 md:grid-cols-2 md:[grid-template-columns:unset]
  "
>
  <div>
    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
      Hi, I&apos;m Dexter Akoulouze Bika.
    </h1>

    <p className="mt-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
      I love learning, building, and sharing what I figure out along the way.
      This site collects some of the things I’m exploring and the resources I
      keep recommending to friends.
    </p>
  </div>

  {/* portrait with a subtle tilt and soft edge */}
  <div className="justify-self-end w-28 sm:w-44 md:w-auto">
    <div className="relative -rotate-2 rounded-3xl border border-white/10 bg-white/5 p-1.5 sm:p-2 shadow-2xl ring-1 ring-white/20">
      {/* Make the image responsive via width of the wrapper */}
      <img
        src="/avatar.jpg"
        alt="Portrait"
        className="rounded-2xl object-cover w-full max-w-[520px]"
        height={520}
        width={520}
      />
    </div>
  </div>
</section>

      {/* ------------------------- Books worth reading ------------------------ */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold">Books worth reading</h2>
        <p className="mt-2 text-foreground/70">
          A few favorites I come back to every now and then.
        </p>
        <CardFan items={books} />
      </section>

      {/* ------------------------- Videos worth watching ---------------------- */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Videos worth watching</h2>
        <p className="mt-2 text-foreground/70">
          Talks and lectures that punch above their runtime.
        </p>
        <CardFan items={videos} maxAngle={8} imgW={260} imgH={160} />
      </section>

      {/* --------------------------- Albums to check out ---------------------- */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Must listen to music </h2>
        <p className="mt-2 text-foreground/70">
          Some of my favorite albums that dont have any skips.
        </p>
        <CardFan items={albums} maxAngle={8} imgW={220} imgH={220} />
      </section>
    </main>
  );
}
