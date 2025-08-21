import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";                // CSS must be relative for bundling
import NavBar from "@/components/NavBar"; // alias path OK for JS modules

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "My Personal Website",
  description: "Built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
