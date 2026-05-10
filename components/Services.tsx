"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
      </svg>
    ),
    title: "Isolation",
    desc: "Thermique et acoustique — combles, murs, sols. Réduisez vos factures énergétiques durablement.",
    color: "from-orange-600/10",
    galleryCategory: "Isolation",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Cloisons & plafonds",
    desc: "Cloisons sèches, faux plafonds, contre-cloisons. Optimisez et transformez vos espaces.",
    color: "from-blue-600/10",
    galleryCategory: "Cloisonnement et plafond",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Revêtement",
    desc: "Carrelage, parquet, lino, peinture, faïence. Des sols et murs qui font la différence.",
    color: "from-amber-600/10",
    galleryCategory: "Revêtement sol et mur",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Plomberie",
    desc: "Installation, rénovation et dépannage. Salle de bain, cuisine, chauffe-eau, robinetterie.",
    color: "from-cyan-600/10",
    galleryCategory: "Plomberie",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: "Domotique",
    desc: "Maison connectée, volets automatisés, éclairage intelligent, alarme et vidéosurveillance.",
    color: "from-violet-600/10",
    galleryCategory: "Domotique",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Montage & pose",
    desc: "Meubles, mobilier de cuisine, dressing, escalier, garde-corps. Montage et installation sur mesure.",
    color: "from-green-600/10",
    galleryCategory: "Montage et pose",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Accessibilité PMR",
    desc: "Aménagements pour personnes à mobilité réduite : rampes, barres d'appui, douche de plain-pied.",
    color: "from-teal-600/10",
    galleryCategory: "Accessibilité PMR",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Divers",
    desc: "Petits travaux, réparations, finitions, aménagements extérieurs. Aucun chantier n'est trop petit.",
    color: "from-pink-600/10",
    galleryCategory: "Divers",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Rénovation complète",
    desc: "Prise en charge totale de votre projet de rénovation, du gros œuvre aux finitions.",
    color: "from-red-600/10",
    galleryCategory: "Rénovation complète",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Collectivités",
    desc: "Bâtiments publics, locaux professionnels, immeubles collectifs. Référence et expérience.",
    color: "from-indigo-600/10",
    galleryCategory: "Collectivités et ERP",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-[#060606]">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-red-600/4 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-red-500" />
            Nos prestations
            <span className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            10 domaines d&apos;expertise,{" "}
            <span className="text-red-600">1 seul artisan</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Nous intervenons sur tous les corps de métier du bâtiment pour vous offrir une rénovation clé en main.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.galleryCategory ? "/galerie" : undefined}
              onClick={service.galleryCategory ? () => {
                sessionStorage.setItem("galleryFilter", service.galleryCategory!);
              } : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`group relative p-6 rounded-2xl bg-[#111] border border-white/6 hover:border-red-600/25 transition-all duration-300 overflow-hidden flex flex-col ${service.galleryCategory ? "cursor-pointer" : "cursor-default"}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              <div className="relative z-10 flex-1">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-red-400 mb-4 group-hover:bg-red-600/15 group-hover:border-red-600/30 group-hover:text-red-300 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-2 leading-tight">{service.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{service.desc}</p>
              </div>
              {service.galleryCategory && (
                <div className="relative z-10 mt-4 flex items-center gap-1.5 text-red-500/0 group-hover:text-red-400 text-xs font-semibold transition-all duration-300 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  Voir les réalisations
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </motion.a>
          ))}

          {/* CTA card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.32, duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group relative p-6 rounded-2xl bg-red-600 hover:bg-red-500 border border-red-500 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/50 to-red-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2">Votre projet</h3>
              <p className="text-white/80 text-sm leading-relaxed">Parlez-nous de votre projet et obtenez un devis gratuit et sans engagement.</p>
            </div>
            <div className="relative z-10 mt-4 flex items-center gap-2 text-white font-semibold text-sm">
              Nous contacter
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
