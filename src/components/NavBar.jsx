"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Top navigation links.
 * Order matters: Home · Resume · About · Projects · Blog
 */
const links = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

/**
 * NavBar
 *
 * - Renders a pill-shaped menu centered at the top of the screen.
 * - Highlights the active route.
 * - Removes the "MySite" left label (per your request).
 *
 * Tailwind notes:
 * bg-foreground/10   → faint translucent backdrop “pill”
 * hover:bg-foreground/20 → brighten on hover
 * data-active styles → we’ll use a data attribute to style the current page
 */
export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center">
      {/* Menu container */}
      <nav
        className="
          flex items-center gap-1 rounded-full px-4 py-1
          bg-foreground/10 backdrop-blur
        "
      >
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              data-active={isActive ? "true" : undefined}
              className={`
                px-3 py-1 rounded-full text-sm transition-colors
                text-foreground/80 hover:text-foreground hover:bg-foreground/20
                data-[active=true]:bg-foreground data-[active=true]:text-background
                font-medium
              `}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
