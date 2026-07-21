import React from "react";
import { motion } from "framer-motion";
import { IMG, BRAND, whatsappLink } from "../../data/pizzaria";
import { ItalianFlag } from "../ui/Logo";

export default function About() {
  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-crust-soft grain overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-crust-line">
              <img src={IMG.about} alt="Pizzaiolo preparando massa artesanal" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-crust/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:right-6 rounded-2xl bg-bala-red px-6 py-4 shadow-xl">
              <p className="font-display font-extrabold text-3xl text-white leading-none">+12k</p>
              <p className="text-xs text-white/80 mt-1">pizzas assadas</p>
            </div>
            <div className="absolute -top-4 -left-2 sm:left-6 rounded-2xl bg-crust-card border border-crust-line px-4 py-3 flex items-center gap-2">
              <ItalianFlag className="h-5 w-8" />
              <span className="text-xs font-semibold">Receita italiana</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ember">
              🍕 Nossa história
            </span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-balance">
              A pizza do Bala nasceu de um sonho simples
            </h2>
            <div className="mt-6 space-y-4 text-flour-dim leading-relaxed">
              <p>
                Em <span className="text-flour font-semibold">{BRAND.since}</span>, o Bala resolveu transformar a paixão por pizza
                em algo maior: uma pizzaria de bairro onde cada cliente é tratado como família. Começou pequeno,
                com um forno, uma receita de massa artesanal e a convicção de que comida boa não precisa ser cara.
              </p>
              <p>
                Hoje, a <span className="text-flour font-semibold">{BRAND.name}</span> é referência na região —
                conhecida pela massa de fermentação natural, pelos ingredientes sempre frescos e por aquele
                atendimento que faz a gente voltar. Cada pizza que sai do forno carrega o cuidado de quem cozinha
                de verdade.
              </p>
              <p>
                Mais do que vender pizza, a gente cria momentos. Da terça em dobro ao domingo em família,
                estamos aqui pra fazer o seu dia mais gostoso.
              </p>
            </div>

            <a
              href={whatsappLink("Olá! Vim conhecer a Pizzaria do Bala e gostaria de fazer um pedido.")}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-bala-red px-6 py-3.5 text-sm font-bold text-white hover:bg-bala-red-deep transition-colors"
            >
              🍕 Quero provar a do Bala
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}