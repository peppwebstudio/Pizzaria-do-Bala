import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, ShoppingCart, Pizza as PizzaIcon } from "lucide-react";
import { PIZZAS, IMG, SIZES, CRUSTS, EXTRAS, whatsappLink } from "../../data/pizzaria";
import { useCart } from "../../hooks/CartContext";

function pizzaImg(key) {
  return IMG[key] || IMG.margherita;
}

export default function Ordering() {
  const { addItem } = useCart();
  const [pizzaId, setPizzaId] = useState(PIZZAS[0].id);
  const [size, setSize] = useState("grande");
  const [crust, setCrust] = useState("tradicional");
  const [extras, setExtras] = useState([]);
  const [qty, setQty] = useState(1);

  const pizza = PIZZAS.find((p) => p.id === pizzaId);
  const sizeObj = SIZES.find((s) => s.id === size);
  const crustObj = CRUSTS.find((c) => c.id === crust);

  const unitPrice = useMemo(() => {
    const base = pizza.price * sizeObj.factor;
    const extrasSum = extras.reduce((s, e) => s + (EXTRAS.find((x) => x.id === e)?.price || 0), 0);
    return base + crustObj.price + extrasSum;
  }, [pizza, sizeObj, crustObj, extras]);

  const total = unitPrice * qty;

  const toggleExtra = (id) =>
    setExtras((prev) => (prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]));

  const handleAdd = () => {
    addItem({
      id: pizza.id,
      name: pizza.name,
      size,
      crust,
      extras,
      qty,
      price: unitPrice,
      image: pizzaImg(pizza.image),
    });
    setExtras([]);
    setQty(1);
  };

  return (
    <section id="pedir" className="relative py-20 lg:py-28 grain">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ember">
            <PizzaIcon className="h-4 w-4" /> Monte sua pizza
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-balance">
            Personalize e peça em <span className="text-ember">segundos</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start rounded-[2rem] border border-crust-line bg-crust-card overflow-hidden">
          {/* Visual */}
          <div className="relative aspect-square lg:aspect-auto lg:min-h-[520px] bg-crust">
            <motion.img
              key={pizza.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={pizzaImg(pizza.image)}
              alt={pizza.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-crust-card via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {PIZZAS.slice(0, 6).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPizzaId(p.id)}
                    className={`shrink-0 h-16 w-16 rounded-2xl overflow-hidden border-2 transition ${
                      pizzaId === p.id ? "border-ember scale-105" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={pizzaImg(p.image)} alt={p.name} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="p-6 lg:p-8 space-y-6">
            <div>
              <h3 className="font-display font-bold text-2xl">{pizza.name}</h3>
              <p className="mt-1.5 text-sm text-flour-dim">{pizza.description}</p>
            </div>

            {/* Size */}
            <div>
              <p className="text-xs uppercase tracking-wider text-flour-dim mb-2">Tamanho</p>
              <div className="grid grid-cols-3 gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSize(s.id)}
                    className={`rounded-xl border p-3 text-left transition ${
                      size === s.id ? "border-bala-red bg-bala-red/10" : "border-crust-line hover:border-flour-dim"
                    }`}
                  >
                    <span className="block text-sm font-bold">{s.label}</span>
                    <span className="block text-[11px] text-flour-dim">{s.slices}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Crust */}
            <div>
              <p className="text-xs uppercase tracking-wider text-flour-dim mb-2">Borda</p>
              <div className="flex flex-wrap gap-2">
                {CRUSTS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCrust(c.id)}
                    className={`rounded-full px-4 py-2 text-sm font-medium border transition ${
                      crust === c.id ? "border-ember bg-ember/10 text-flour" : "border-crust-line text-flour-dim hover:text-flour"
                    }`}
                  >
                    {c.label}
                    {c.price > 0 && <span className="ml-1 text-ember">+R${c.price}</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div>
              <p className="text-xs uppercase tracking-wider text-flour-dim mb-2">Adicionais</p>
              <div className="grid grid-cols-2 gap-2">
                {EXTRAS.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => toggleExtra(e.id)}
                    className={`rounded-xl border px-3 py-2.5 text-left transition ${
                      extras.includes(e.id) ? "border-ember bg-ember/10" : "border-crust-line hover:border-flour-dim"
                    }`}
                  >
                    <span className="block text-sm font-medium">{e.label}</span>
                    <span className="text-[11px] text-ember">+R$ {e.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + total */}
            <div className="flex items-center justify-between pt-4 border-t border-crust-line">
              <div className="flex items-center gap-3">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-9 w-9 grid place-items-center rounded-full bg-crust hover:bg-crust-line text-flour">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-6 text-center font-mono-ui font-bold text-lg">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="h-9 w-9 grid place-items-center rounded-full bg-crust hover:bg-crust-line text-flour">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-flour-dim block">Total</span>
                <span className="font-mono-ui font-bold text-2xl text-ember">R$ {total.toFixed(2).replace(".", ",")}</span>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="w-full py-4 rounded-full bg-bala-red text-white font-bold flex items-center justify-center gap-2 hover:bg-bala-red-deep transition-colors glow-red"
            >
              <ShoppingCart className="h-5 w-5" /> Adicionar ao Pedido
            </button>
            <a
              href={whatsappLink(`Olá! Quero pedir: ${qty}x ${pizza.name} (${sizeObj.label}, ${crustObj.label}).`)}
              target="_blank"
              rel="noreferrer"
              className="block text-center text-sm text-flour-dim hover:text-flour transition-colors"
            >
              ou pedir direto pelo WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}