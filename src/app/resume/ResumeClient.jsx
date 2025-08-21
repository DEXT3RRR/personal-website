"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

export default function ResumeClient() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Page section; tweak pt-* to move the card up/down */}
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:pt-1">
        {/* Card / thumbnail */}
        <div
          className="
            relative mx-auto w-full max-w-[720px]
            rounded-2xl border border-white/10 bg-white/5
            shadow-lg ring-1 ring-white/20
          "
        >
          {/* the thumbnail */}
          <Image
            src="/resume-thumb.jpg"
            alt="Resume thumbnail"
            width={1400}
            height={1980}
            className="rounded-2xl object-cover select-none"
            priority
          />

          {/* expand button (top-right) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="
              absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center
              rounded-md border border-black/10 bg-white/90 text-black
              hover:bg-white active:bg-white/95
              shadow-sm
            "
            aria-label="Enlarge"
            title="Enlarge"
          >
            {/* arrow-box.svg (inline so it’s always crisp) */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 3h6v6" />
              <path d="M9 21H3v-6" />
              <path d="M21 3 14 10" />
              <path d="M3 21 10 14" />
            </svg>
          </button>
        </div>
      </section>

      {/* Modal with PDF */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        pdfSrc={"/resume.pdf"}
      />
    </>
  );
}
