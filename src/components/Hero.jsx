// src/components/Hero.jsx
import Image from "next/image";
import Link from "next/link";

/**
 * Hero: top-of-page personal intro.
 *
 * Props are optional; we hard-code your current name/tagline for simplicity.
 * Later we can pass props or load from a data file / CMS.
 */
export default function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-4 pt-16 text-center sm:pt-24">
            {/* Avatar */}
      <div className="relative mx-auto mb-6 size-24">
        <Image
          src="/avatar.jpg"
          alt="Portrait of Dexter Akoulouze Bika"
          fill                // make the image expand to fill the wrapper
          sizes="96px"        // hint to the browser; matches size-24 (~96px)
          className="rounded-full object-cover"
          priority
        />
      </div>


      {/* Name */}
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Dexter Akoulouze Bika
      </h1>

      {/* Tagline */}
      <p className="mt-4 text-base text-foreground/80 sm:text-lg">
        I may not know the meaning of life, but if anything I know it wasn&apos;t meant
        to be spent waiting around. So ask yourself if you want your future self
        to hold regret or pride—you decide.
      </p>

      {/* Social links */}
      <ul className="mt-6 flex items-center justify-center gap-5 text-sm text-foreground/70">
        {/* GitHub */}
        <li>
          <Link
            href="https://github.com/DEXT3RRR"
            aria-label="GitHub profile"
            className="transition-colors hover:text-foreground"
          >
            {/* If you added /public/icons/github.svg, show it */}
            <Image
              src="/icons/github.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
            />
          </Link>
        </li>

        {/* LinkedIn */}
        <li>
          <Link
            href="https://www.linkedin.com/"
            aria-label="LinkedIn profile"
            className="transition-colors hover:text-foreground"
          >
            <Image
              src="/icons/linkedin.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
            />
          </Link>
        </li>

        {/* Instagram */}
        <li>
          <Link
            href="https://www.instagram.com/"
            aria-label="Instagram profile"
            className="transition-colors hover:text-foreground"
          >
            <Image
              src="/icons/instagram.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
}
