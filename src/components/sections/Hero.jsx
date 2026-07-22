import React from "react";
import { motion } from "framer-motion";
import { Flame, Truck, CreditCard, Pizza } from "lucide-react";
import { IMG, whatsappLink } from "../../data/pizzaria";

const BADGES = [
  { icon: Flame, label: "Ingredientes frescos" },
  { icon: Truck, label: "Delivery rápido" },
  { icon: CreditCard, label: "Pagamento online" },
  { icon: Pizza, label: "Massa artesanal" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden grain">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={IMG.hero} alt="Pizza artesanal saindo do forno" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-crust via-crust/85 to-crust/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-crust via-transparent to-crust/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-28 pb-28 sm:pb-32 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5 text-xs font-semibold text-ember"
          >
            <span className="h-2 w-2 rounded-full bg-ember animate-pulse" />
            Aberto agora · Entrega em ~35 min
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance"
          >
            A melhor pizza da região, feita com <span className="text-ember">sabor de verdade</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-flour-dim leading-relaxed max-w-xl"
          >
            Ingredientes selecionados, massa artesanal e entrega rápida para você aproveitar sem sair de casa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#cardapio"
              className="inline-flex items-center gap-2 rounded-full bg-bala-red px-7 py-4 text-base font-bold text-white hover:bg-bala-red-deep transition-colors glow-red"
            >
              🍕 Fazer Pedido
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-crust-line bg-crust-card/60 backdrop-blur px-7 py-4 text-base font-semibold text-flour hover:border-ember transition-colors"
            >
              📲 Chamar no WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl"
          >
            {BADGES.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-flour-dim">
                <b.icon className="h-4 w-4 text-ember shrink-0" />
                <span className="leading-tight">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-flour-dim">
        <span className="text-[10px] uppercase tracking-[0.3em]">Role para explorar</span>
        <span className="h-10 w-6 rounded-full border border-crust-line flex justify-center pt-1.5">
          <span className="h-2 w-1 rounded-full bg-ember animate-bounce" />
        </span>
      </div>
    </section>
  );
}