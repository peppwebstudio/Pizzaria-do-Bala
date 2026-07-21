import React from "react";
import { motion } from "framer-motion";
import { Tag, ArrowRight } from "lucide-react";
import { PROMOS, whatsappLink } from "../../data/pizzaria";

export default function Promotions() {
  return (
    <section id="promocoes" className="relative py-20 lg:py-28 grain">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ember">
              <Tag className="h-4 w-4" /> Ofertas da semana
            </span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-balance">
              Promoções que dão <span className="text-bala-red">água na boca</span>
            </h2>
          </div>
          <p className="text-flour-dim max-w-sm">
            Aproveite ofertas por tempo limitado e peça já pelo WhatsApp com entrega rápida.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROMOS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-3xl border border-crust-line bg-crust-card p-6 overflow-hidden hover:border-ember/50 transition-colors"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-bala-red/10 blur-2xl group-hover:bg-ember/10 transition-colors" />
              <span className="relative inline-flex items-center gap-1 rounded-full bg-ember px-3 py-1 text-xs font-bold text-crust">
                {p.badge}
              </span>
              <h3 className="relative mt-4 font-display font-bold text-xl">{p.title}</h3>
              <p className="relative mt-2 text-sm text-flour-dim leading-relaxed min-h-[40px]">{p.desc}</p>

              {p.price ? (
                <div className="relative mt-4 flex items-end gap-2">
                  <span className="font-mono-ui font-bold text-2xl text-flour">
                    R$ {p.price.toFixed(2).replace(".", ",")}
                  </span>
                  <span className="font-mono-ui text-sm text-flour-dim line-through mb-0.5">
                    R$ {p.oldPrice.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              ) : (
                <div className="relative mt-4 font-mono-ui font-bold text-xl text-ember">PRIMEIRACOMPRA</div>
              )}

              <a
                href={whatsappLink(`Olá! Quero aproveitar a promoção "${p.title}".`)}
                target="_blank"
                rel="noreferrer"
                className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-flour group-hover:text-ember transition-colors"
              >
                Aproveitar <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}