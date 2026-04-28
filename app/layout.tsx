import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "RED 70 — La solution du sol au plafond",
  description:
    "Entreprise de rénovation tous corps d'état en Haute-Saône. Isolation, plomberie, domotique, revêtement, cloisons et bien plus encore.",
  keywords: "rénovation, isolation, plomberie, domotique, Haute-Saône, RED 70",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={geist.variable}>
      <body className="bg-[#080808] text-white antialiased font-[family-name:var(--font-geist)]">
        {children}
      </body>
    </html>
  );
}
