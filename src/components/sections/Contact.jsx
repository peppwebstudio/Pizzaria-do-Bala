import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { BRAND, whatsappLink } from "../../data/pizzaria";

export default function Contact() {
  return (
    <section id="contato" className="relative py-20 lg:py-28 grain">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ember">
            📍 Onde nos encontrar
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-balance">
            Bora pedir? Estamos pertinho
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-crust-line bg-crust-card p-8 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-bala-red/10 grid place-items-center shrink-0">
                <MapPin className="h-5 w-5 text-bala-red" />
              </div>
              <div>
                <h3 className="font-display font-bold">Endereço</h3>
                <p className="text-sm text-flour-dim mt-1">{BRAND.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-bala-red/10 grid place-items-center shrink-0">
                <Clock className="h-5 w-5 text-bala-red" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold">Horário de funcionamento</h3>
                <ul className="mt-1.5 space-y-1 text-sm">
                  {BRAND.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 text-flour-dim">
                      <span>{h.day}</span>
                      <span className="font-mono-ui">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-bala-red/10 grid place-items-center shrink-0">
                <Phone className="h-5 w-5 text-bala-red" />
              </div>
              <div>
                <h3 className="font-display font-bold">Telefone</h3>
                <p className="text-sm text-flour-dim mt-1">{BRAND.phoneDisplay}</p>
              </div>
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-full bg-[#1b8a3a] px-6 py-4 text-base font-bold text-white hover:opacity-90 transition"
            >
              <MessageCircle className="h-5 w-5" /> Pedir pelo WhatsApp
            </a>
          </motion.div>

          {/* Mapa do Google Funcional */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2rem] overflow-hidden border border-crust-line min-h-[340px] bg-crust-card"
          >
            <iframe
              title="Localização da Pizzaria"
              src={BRAND.mapEmbedUrl}
              className="absolute inset-0 h-full w-full grayscale-[0.4] opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}