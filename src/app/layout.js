import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Home – Dexter",
  description: "Personal site of Dexter Akoulouze Bika",
  icons: {
    // multiple formats; ?v=3 forces a fresh fetch
    icon: [
      { url: "/favicon.ico?v=3" },                     // classic
      { url: "/icon.png?v=3", type: "image/png" },     // App Router icon
    ],
    apple: { url: "/icon.png?v=3" },                   // iOS home-screen icon
    // If Safari “pinned tab” ever shows the wrong thing, add this with your own SVG:
    // other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
