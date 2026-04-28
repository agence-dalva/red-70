"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Gain de temps",
    desc: "Un interlocuteur unique pour tous vos travaux. Fini la coordination de multiples artisans — RED 70 gère tout de A à Z.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Polyvalence",
    desc: "Du sol au plafond, toutes les rénovations sont couvertes : isolation, plomberie, revêtement, domotique et bien d'autres.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Engagements professionnels",
    desc: "Respect des budgets et des délais, matériaux de qualité, transparence totale. Votre satisfaction est notre priorité absolue.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Centré client",
    desc: "Consultation personnalisée, solutions sur mesure adaptées à votre budget et vos envies. Vous êtes au cœur de chaque décision.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Values() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 bg-[#080808]">
      {/* Subtle separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-red-600/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-red-500" />
            Pourquoi nous choisir
            <span className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Une approche complète,<br />
            <span className="text-red-600">une seule adresse</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Nous simplifions vos travaux en prenant en charge l&apos;ensemble des corps de métier pour une rénovation sans stress.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative p-7 rounded-2xl bg-[#111] border border-white/6 hover:border-red-600/30 transition-all duration-300 overflow-hidden"
            >
              {/* Red glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-transparent to-transparent group-hover:from-red-600/6 transition-all duration-500 rounded-2xl" />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500 mb-5 group-hover:bg-red-600/20 group-hover:border-red-600/40 transition-all duration-300">
                {v.icon}
              </div>

              <h3 className="relative text-white font-bold text-lg mb-3 leading-tight">{v.title}</h3>
              <p className="relative text-white/50 text-sm leading-relaxed">{v.desc}</p>

              {/* Number accent */}
              <div className="absolute top-5 right-5 text-white/5 font-black text-5xl leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
