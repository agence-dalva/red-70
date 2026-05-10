"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
      </svg>
    ),
    label: "Téléphone",
    value: "06 02 37 16 62",
    href: "tel:0602371662",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "Red-70@live.fr",
    href: "mailto:Red-70@live.fr",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Zone d'intervention",
    value: "Haute-Saône (70) et alentours",
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Disponibilité",
    value: "Lun–Sam 8h–19h",
    href: null,
  },
];

const inputClass =
  "w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-red-500/50 focus:bg-white/8 focus:shadow-[0_0_0_3px_rgba(220,38,38,0.1)] transition-all duration-300";

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setSubmitting(true);
    // Simulated send — replace with your API route (Resend, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#060606] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/2 rounded-full blur-[100px]" />
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
            Contact
            <span className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Votre projet commence{" "}
            <span className="text-red-600">ici</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Devis gratuit et sans engagement sous 48h. Parlez-nous de votre projet, nous vous répondons rapidement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Info cards */}
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="group flex items-start gap-4 p-5 rounded-2xl bg-[#111] border border-white/6 hover:border-red-600/25 hover:bg-[#151515] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-400 shrink-0 group-hover:bg-red-600/20 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{info.label}</div>
                      <div className="text-white font-semibold text-sm">{info.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#111] border border-white/6">
                    <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-400 shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{info.label}</div>
                      <div className="text-white font-semibold text-sm">{info.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Certification badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-red-600/10 to-transparent border border-red-600/20"
            >
              <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-400 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Artisan qualifié certifié</div>
                <div className="text-white/45 text-xs mt-0.5">Tous travaux garantis — assurance décennale</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="relative p-8 rounded-2xl bg-[#111] border border-white/6 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center flex flex-col items-center gap-5"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                      <svg className="w-9 h-9 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-black text-2xl mb-2">Message envoyé !</h3>
                      <p className="text-white/50">Nous vous répondrons dans les plus brefs délais, généralement sous 24–48h.</p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                      className="px-6 py-2.5 rounded-xl bg-white/8 hover:bg-white/12 text-white text-sm font-medium transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Nom *</label>
                        <input
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jean Dupont"
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Téléphone</label>
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="06 12 34 56 78"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Email *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jean@exemple.fr"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Votre message *</label>
                      <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet de rénovation (type de travaux, surface, délai souhaité…)"
                        className={`${inputClass} resize-none`}
                        required
                      />
                    </div>

                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm flex items-center gap-2"
                      >
                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {error}
                      </motion.p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group w-full py-4 bg-red-600 hover:bg-red-500 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl text-white font-bold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(220,38,38,0.4)] flex items-center justify-center gap-3 overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      {submitting ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          Envoyer ma demande de devis
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-white/25 text-xs text-center">
                      Devis gratuit et sans engagement — Réponse sous 48h
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
