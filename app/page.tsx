import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Services from "@/components/Services";
import GalleryPreview from "@/components/GalleryPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Values />
      <Services />
      <GalleryPreview />
      <Contact />
      <Footer />
    </main>
  );
}
