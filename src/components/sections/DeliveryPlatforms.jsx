import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, UtensilsCrossed, TreePalm, QrCode } from "lucide-react";
import { Instagram as IgIcon } from "../ui/BrandIcons";
import { BRAND, whatsappLink } from "../../data/pizzaria";

const PLATFORMS = [
  { name: "WhatsApp", desc: "Pedido assistido com atendimento rápido.", icon: MessageCircle, href: whatsappLink(), color: "bg-[#1b8a3a]" },
  { name: "iFood", desc: "Peça pelo app com rastreamento em tempo real.", icon: UtensilsCrossed, href: BRAND.ifood, color: "bg-[#EA1D2C]" },
  { name: "Linktree", desc: "Todos os nossos canais em um só lugar.", icon: TreePalm, href: BRAND.linktree, color: "bg-[#43E660] text-crust" },
  { name: "Instagram", desc: "Novidades, promoções e bastidores.", icon: IgIcon, href: BRAND.instagram, color: "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" },
  { name: "Cardápio Digital", desc: "Veja o cardápio completo e monte seu pedido.", icon: QrCode, href: "#cardapio", color: "bg-ember text-crust" },
];

export default function DeliveryPlatforms() {
  return (
    <section className="relative py-20 lg:py-28 grain">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ember">
            🚚 Peça como preferir
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-balance">
            Escolha seu canal favorito
          </h2>
          <p className="mt-4 text-flour-dim">Estamos onde você estiver. É só escolher e pedir.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target={p.href.startsWith("#") ? undefined : "_blank"}
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex items-center gap-4 rounded-3xl border border-crust-line bg-crust-card p-6 hover:border-ember/40 hover:-translate-y-1 transition-all"
            >
              <div className={`h-14 w-14 rounded-2xl grid place-items-center shrink-0 ${p.color}`}>
                <p.icon className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg group-hover:text-ember transition-colors">{p.name}</h3>
                <p className="text-sm text-flour-dim leading-snug">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}