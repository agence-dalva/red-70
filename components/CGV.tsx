"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const articles = [
  {
    title: "Objet du contrat",
    content:
      "Les présentes conditions générales de vente régissent les relations contractuelles entre RED 70 (ci-après « le Prestataire ») et tout client (ci-après « le Client ») souhaitant bénéficier de ses services de rénovation tous corps d'état.",
  },
  {
    title: "Devis et commande",
    content:
      "Tout devis établi par RED 70 est gratuit et sans engagement. Il est valable 30 jours à compter de sa date d'émission. La commande n'est confirmée qu'à réception du devis signé avec la mention « Bon pour accord » et, le cas échéant, du versement de l'acompte convenu.",
  },
  {
    title: "Prix et modalités de paiement",
    content:
      "Les prix sont indiqués en euros toutes taxes comprises (TTC). Un acompte pouvant aller jusqu'à 30% du montant total pourra être demandé à la signature du devis. Le solde est payable à la réception des travaux. En cas de retard de paiement, des pénalités de retard seront appliquées conformément à la loi.",
  },
  {
    title: "Délais d'exécution",
    content:
      "Les délais d'exécution sont indiqués à titre indicatif dans le devis. RED 70 s'engage à respecter les délais convenus, sous réserve de circonstances imprévues (intempéries, retard fournisseur, etc.). Tout retard sera signalé au Client dans les meilleurs délais.",
  },
  {
    title: "Garanties",
    content:
      "RED 70 est couvert par une assurance responsabilité civile professionnelle et une garantie décennale conformément aux articles 1792 et suivants du Code civil. Les travaux réalisés bénéficient de la garantie de parfait achèvement d'un an, de la garantie biennale de deux ans et de la garantie décennale de dix ans.",
  },
  {
    title: "Responsabilité",
    content:
      "RED 70 ne pourra être tenu responsable des dommages causés par une mauvaise utilisation des installations réalisées, par des modifications apportées sans son accord, ou par des vices cachés préexistants aux travaux. La responsabilité est limitée au montant du contrat.",
  },
  {
    title: "Litiges",
    content:
      "En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les parties pourront faire appel à un médiateur de la consommation. À défaut de règlement amiable, le tribunal compétent sera celui du lieu d'exécution des travaux.",
  },
];

export default function CGV() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="cgv" className="relative py-28 bg-[#080808]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-red-500" />
            Mentions légales
            <span className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Conditions générales{" "}
            <span className="text-red-600">de vente</span>
          </h2>
          <p className="text-white/40 text-lg">
            Transparence et clarté dans chacun de nos engagements.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-2xl border border-white/6 bg-[#111] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/3 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-red-600/60 font-black text-sm tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white font-bold text-sm">{article.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/40 shrink-0"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 ml-10 text-white/55 text-sm leading-relaxed border-t border-white/5">
                      <div className="pt-4">{article.content}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
