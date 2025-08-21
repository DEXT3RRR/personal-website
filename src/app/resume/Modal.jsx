"use client";

import { useEffect, useState } from "react";

/**
 * Modal for showing the full PDF.
 * Props:
 *   open: boolean
 *   onClose: () => void
 *   pdfSrc: string  (e.g. "/Dexter's Resume.pdf")
 */
export default function Modal({ open, onClose, pdfSrc }) {
  // Changing this key forces the <iframe> to remount (fixes blank/white viewer on reopen)
  const [viewerKey, setViewerKey] = useState(0);
  useEffect(() => {
    if (open) setViewerKey((k) => k + 1);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-[min(92vw,1000px)] rounded-xl bg-neutral-900 p-4 shadow-2xl ring-1 ring-white/10">
        {/* Icon buttons */}
        <div className="absolute right-3 top-3 flex gap-2">
          {/* Download */}
          <a
            href={pdfSrc}
            download
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 hover:bg-white/10 active:bg-white/15"
            aria-label="Download PDF"
            title="Download PDF"
          >
            {/* download.svg */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/90"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          </a>

          {/* Close */}
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 hover:bg-white/10 active:bg-white/15"
            aria-label="Close"
            title="Close"
          >
            {/* close.svg */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/90"
            >
              <path d="M18 6 6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* PDF viewer */}
        <div className="overflow-hidden rounded-lg bg-white shadow-inner">
          <iframe
            key={viewerKey}
            src={`${pdfSrc}#toolbar=0&view=FitH`} // simple, built-in PDF renderer
            className="block h-[82vh] w-full rounded-lg"
            loading="eager"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
}
