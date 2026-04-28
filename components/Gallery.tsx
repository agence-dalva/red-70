"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  src: string;
  span?: string;
};

const categories = ["Tout", "Isolation", "Revêtement", "Plomberie", "Domotique", "PMR", "Collectivités"];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Isolation des combles perdus",
    category: "Isolation",
    src: "https://picsum.photos/seed/combles1/1200/900",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Carrelage salle de bain",
    category: "Revêtement",
    src: "https://picsum.photos/seed/carrelage1/800/600",
  },
  {
    id: 3,
    title: "Parquet massif salon",
    category: "Revêtement",
    src: "https://picsum.photos/seed/parquet1/800/600",
  },
  {
    id: 4,
    title: "Installation sanitaire",
    category: "Plomberie",
    src: "https://picsum.photos/seed/sanitaire1/1200/600",
    span: "col-span-2",
  },
  {
    id: 5,
    title: "Volets et éclairage connectés",
    category: "Domotique",
    src: "https://picsum.photos/seed/domotique1/800/600",
  },
  {
    id: 6,
    title: "Salle de bain PMR",
    category: "PMR",
    src: "https://picsum.photos/seed/pmr1/800/1200",
    span: "row-span-2",
  },
  {
    id: 7,
    title: "Faux plafond bureau",
    category: "Collectivités",
    src: "https://picsum.photos/seed/bureau1/800/600",
  },
  {
    id: 8,
    title: "Isolation murs extérieurs",
    category: "Isolation",
    src: "https://picsum.photos/seed/isolation2/800/600",
  },
  {
    id: 9,
    title: "Carrelage cuisine moderne",
    category: "Revêtement",
    src: "https://picsum.photos/seed/cuisine1/800/600",
  },
  {
    id: 10,
    title: "Réseau plomberie neuf",
    category: "Plomberie",
    src: "https://picsum.photos/seed/plomberie2/800/600",
  },
  {
    id: 11,
    title: "Smart Home complet",
    category: "Domotique",
    src: "https://picsum.photos/seed/smarthome1/800/600",
  },
  {
    id: 12,
    title: "Salle polyvalente",
    category: "Collectivités",
    src: "https://picsum.photos/seed/salle1/1200/600",
    span: "col-span-2",
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Tout");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeFilter === "Tout"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeFilter);

  const currentIndex = selectedItem
    ? filtered.findIndex((i) => i.id === selectedItem.id)
    : -1;

  const goNext = useCallback(() => {
    if (currentIndex < filtered.length - 1)
      setSelectedItem(filtered[currentIndex + 1]);
  }, [currentIndex, filtered]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) setSelectedItem(filtered[currentIndex - 1]);
  }, [currentIndex, filtered]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") setSelectedItem(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedItem, goNext, goPrev]);

  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedItem]);

  return (
    <section id="galerie" className="relative py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-red-500" />
            Nos réalisations
            <span className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            La qualité qui{" "}
            <span className="text-red-600">se voit</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Parcourez nos chantiers réalisés et laissez-vous inspirer pour votre prochain projet.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.35)]"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/8"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                onClick={() => setSelectedItem(item)}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden bg-[#111] ${item.span ?? ""}`}
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Permanent subtle gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

                {/* Hover dark overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 z-20" />

                {/* Info — always visible at bottom, more prominent on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-30 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-red-400 text-[10px] font-semibold uppercase tracking-wider mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.category}
                  </div>
                  <div className="text-white font-bold text-sm leading-tight drop-shadow-lg">
                    {item.title}
                  </div>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 scale-0 group-hover:scale-100">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-[#111]">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1024px"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="mt-5 flex items-center justify-between px-1">
                <div>
                  <div className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    {selectedItem.category}
                  </div>
                  <h3 className="text-white font-bold text-xl">{selectedItem.title}</h3>
                </div>
                <div className="text-white/30 text-sm tabular-nums">
                  {currentIndex + 1} / {filtered.length}
                </div>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-white/8 hover:bg-white/18 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Prev */}
              {currentIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-0 top-[45%] -translate-x-14 -translate-y-1/2 w-10 h-10 rounded-full bg-white/8 hover:bg-white/18 flex items-center justify-center text-white/60 hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Next */}
              {currentIndex < filtered.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-0 top-[45%] translate-x-14 -translate-y-1/2 w-10 h-10 rounded-full bg-white/8 hover:bg-white/18 flex items-center justify-center text-white/60 hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
