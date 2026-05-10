"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const B = "/Photos%20ancien%20site/";

const previewItems = [
  { id: 84, title: "Rénovation maison ancienne", src: `${B}IMG_20180601_194141.jpg`, span: "col-span-2 row-span-2" },
  { id: 20, title: "Carrelage salle de bain",    src: `${B}AA.jpg`,                  span: "col-span-2 row-span-2" },
  { id: 39, title: "Réseau plomberie",            src: `${B}Plomberie%201.jpg`,       span: "" },
  { id: 69, title: "Décoration murale",           src: `${B}Sniper.jpg`,              span: "" },
  { id: 45, title: "Portail motorisé",            src: `${B}Motorisation%201.jpg`,    span: "" },
  { id: 48, title: "Dressing sur mesure",         src: `${B}dressing1.jpg`,           span: "" },
];

export default function GalleryPreview() {
  return (
    <section className="relative py-28 bg-[#080808]">
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
            Un aperçu de nos chantiers — isolation, rénovation, carrelage, domotique et bien plus.
          </p>
        </motion.div>

        {/* Preview grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-3 mb-10"
        >
          {previewItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative group rounded-2xl overflow-hidden bg-[#111] cursor-default ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-400 z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-white/35 text-sm">
            142 photos · 10 catégories
          </p>
          <Link
            href="/galerie"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-600/40 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            Voir toute la galerie
            <svg
              className="w-5 h-5 text-red-500 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
