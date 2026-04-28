import type { Metadata } from "next";
import Link from "next/link";
import CGV from "@/components/CGV";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — RED 70",
  description: "Consultez les conditions générales de vente de RED 70, entreprise de rénovation en Haute-Saône.",
};

export default function CGVPage() {
  return (
    <main className="bg-[#080808] min-h-screen">
      {/* Header minimal */}
      <div className="border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-black text-white group-hover:scale-110 transition-transform">
              R
            </div>
            <span className="font-black text-white tracking-widest text-sm">RED 70</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au site
          </Link>
        </div>
      </div>

      <CGV />
      <Footer />
    </main>
  );
}
