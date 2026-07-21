import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { REVIEWS } from "../../data/pizzaria";

export default function Reviews() {
  return (
    <section id="avaliacoes" className="relative py-20 lg:py-28 grain">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ember">
            ⭐ Quem prova, volta
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-balance">
            O que dizem nossos clientes
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-crust-line bg-crust-card px-5 py-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-ember text-ember" />
              ))}
            </div>
            <span className="font-mono-ui font-bold">4.9</span>
            <span className="text-sm text-flour-dim">· +1.200 avaliações</span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative rounded-3xl border border-crust-line bg-crust-card p-7"
            >
              <Quote className="h-8 w-8 text-bala-red/30 absolute top-5 right-5" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-ember text-ember" />
                ))}
              </div>
              <p className="mt-4 text-sm text-flour leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-bala-red to-ember grid place-items-center font-bold text-white text-sm">
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-flour-dim">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}