import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie — RED 70",
  description: "Découvrez nos 142 réalisations : isolation, plomberie, carrelage, domotique, rénovation complète et plus en Haute-Saône.",
};

export default function GaleriePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <Gallery />
      </div>
      <Footer />
    </main>
  );
}
