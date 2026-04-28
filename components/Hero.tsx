"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "10+", label: "Ans d'expérience" },
  { value: "500+", label: "Chantiers réalisés" },
  { value: "100%", label: "Satisfaction client" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Radial red glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/8 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-800/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#080808] to-transparent" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating orbs */}
      {[
        { w: 320, h: 320, x: "8%", y: "20%", delay: 0, dur: 6 },
        { w: 180, h: 180, x: "80%", y: "15%", delay: 1, dur: 7 },
        { w: 240, h: 240, x: "65%", y: "60%", delay: 2, dur: 8 },
        { w: 120, h: 120, x: "25%", y: "70%", delay: 0.5, dur: 5 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.w,
            height: orb.h,
            left: orb.x,
            top: orb.y,
            background:
              i % 2 === 0
                ? "radial-gradient(circle, rgba(220,38,38,0.06), transparent 70%)"
                : "radial-gradient(circle, rgba(255,255,255,0.02), transparent 70%)",
          }}
          animate={{ y: [0, -24, 0], scale: [1, 1.04, 1] }}
          transition={{
            duration: orb.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-28 pb-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/25 text-red-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          Artisan qualifié — Haute-Saône (70)
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(5rem,14vw,10rem)] font-black text-white leading-none tracking-tight mb-3"
        >
          RED
          <span className="text-red-600 drop-shadow-[0_0_60px_rgba(220,38,38,0.5)] ml-5">
            70
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(1.2rem,3vw,2rem)] font-light text-white/55 mb-3 tracking-wide"
        >
          La solution du{" "}
          <span className="text-white font-semibold italic">sol au plafond</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="text-base md:text-lg text-white/35 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Rénovation tous corps d'état — isolation, plomberie, revêtement, domotique, PMR et collectivités
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(220,38,38,0.45)] overflow-hidden"
          >
            <span className="relative z-10">Demander un devis gratuit</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
          <a
            href="#galerie"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold text-base rounded-xl border border-white/10 hover:border-white/25 transition-all duration-300 hover:scale-105"
          >
            Voir nos réalisations
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-md mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-1 tabular-nums">
                {stat.value}
              </div>
              <div className="text-[10px] text-white/35 uppercase tracking-widest leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="text-[10px] text-white/25 uppercase tracking-[0.2em]">Défiler</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
        />
      </motion.div>
    </section>
  );
}
