import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Star } from "lucide-react";
import { PIZZAS, BEBIDAS, IMG, SIZES } from "../../data/pizzaria";
import { useCart } from "../../hooks/CartContext";

const CATEGORIES = ["Tradicionais", "Especiais", "Doces", "Bebidas"];
const BADGE_COLOR = {
  "Mais pedida": "bg-bala-red text-white",
  Premium: "bg-ember text-crust",
  "Doce da casa": "bg-[#1b8a3a] text-white",
};

function pizzaImg(key) {
  return IMG[key] || IMG.margherita;
}

function ProductCard({ item, onAdd }) {
  const isDrink = item.category === "Bebidas";
  const price = isDrink ? item.price : item.price * SIZES[1].factor;
  return (
    <div className="group flex flex-col rounded-3xl border border-crust-line bg-crust-card overflow-hidden hover:border-ember/40 transition-colors">
      <div className="relative aspect-square overflow-hidden bg-crust">
        <img
          src={isDrink ? IMG.ingredients : pizzaImg(item.image)}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover group-hover:rotate-6 group-hover:scale-110 transition-transform duration-700"
        />
        {item.badge && (
          <span className={`absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold ${BADGE_COLOR[item.badge] || "bg-crust text-flour"}`}>
            {item.badge === "Mais pedida" && <Star className="h-3 w-3 fill-current" />}
            {item.badge}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-bold text-lg leading-tight">{item.name}</h3>
        <p className="mt-1.5 text-sm text-flour-dim leading-relaxed flex-1">{item.description || "Refrigerante gelado para acompanhar."}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="leading-none">
            <span className="text-[11px] text-flour-dim block">a partir de</span>
            <span className="font-mono-ui font-bold text-xl text-ember">
              R$ {price.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <button
            onClick={() => onAdd(item)}
            className="inline-flex items-center gap-1.5 rounded-full bg-bala-red px-4 py-2.5 text-sm font-semibold text-white hover:bg-bala-red-deep transition-colors"
          >
            <Plus className="h-4 w-4" /> Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [cat, setCat] = useState("Tradicionais");
  const { addItem } = useCart();

  const items =
    cat === "Bebidas" ? BEBIDAS : PIZZAS.filter((p) => p.category === cat);

  const quickAdd = (item) => {
    if (item.category === "Bebidas") {
      addItem({ ...item, size: "grande", crust: "tradicional", extras: [], qty: 1, price: item.price, image: IMG.ingredients });
    } else {
      addItem({
        ...item,
        size: "grande",
        crust: "tradicional",
        extras: [],
        qty: 1,
        price: item.price * SIZES[1].factor,
        image: pizzaImg(item.image),
      });
    }
  };

  return (
    <section id="cardapio" className="relative py-20 lg:py-28 bg-crust-soft grain">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ember">
            🍕 Nosso Cardápio
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-balance">
            Escolha o seu sabor favorito
          </h2>
          <p className="mt-4 text-flour-dim">
            Massa artesanal, ingredientes frescos e aquele toque de forno que só a Pizzaria do Bala tem.
          </p>
        </div>

        {/* Sticky category bar */}
        <div className="sticky top-[68px] z-30 -mx-5 px-5 py-3 mb-10 bg-crust-soft/90 backdrop-blur-xl border-y border-crust-line">
          <div className="flex gap-2 overflow-x-auto no-scrollbar justify-start sm:justify-center">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  cat === c
                    ? "bg-flour text-crust"
                    : "bg-crust-card text-flour-dim hover:text-flour border border-crust-line"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((item) => (
              <ProductCard key={item.id} item={item} onAdd={quickAdd} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}