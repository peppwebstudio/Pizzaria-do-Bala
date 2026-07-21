import React from "react";
import { motion } from "framer-motion";
import { Pizza, Leaf, Flame, Truck, Heart, BadgeDollarSign } from "lucide-react";

const ITEMS = [
  { icon: Pizza, title: "Massa artesanal", desc: "Fermentação natural e preparo manual, do jeito que tem que ser." },
  { icon: Leaf, title: "Ingredientes frescos", desc: "Mussarela de verdade, tomates selecionados e manjericão do dia." },
  { icon: Flame, title: "Forno de alta temperatura", desc: "Pizza pronta em minutos, com aquela borda crocante e dourada." },
  { icon: Truck, title: "Entrega rápida", desc: "Tempo médio de 35 minutos, quentinha até a sua porta." },
  { icon: Heart, title: "Atendimento de qualidade", desc: "Tratamos cada cliente como vizinho. Você é da família." },
  { icon: BadgeDollarSign, title: "Custo-benefício", desc: "Qualidade premium com preço justo de pizzaria de bairro." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 lg:py-28 bg-crust-soft grain">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ember">
            ❤️ Por que a do Bala?
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-balance">
            Feita com paixão, servida com orgulho
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-3xl border border-crust-line bg-crust-card p-7 hover:border-ember/40 transition-colors"
            >
              <div className="h-12 w-12 rounded-2xl bg-bala-red/10 grid place-items-center group-hover:bg-bala-red transition-colors">
                <item.icon className="h-6 w-6 text-bala-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="mt-5 font-display font-bold text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-flour-dim leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}