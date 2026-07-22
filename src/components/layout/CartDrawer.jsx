import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, Zap, CreditCard, Wallet, MessageCircle } from "lucide-react";
import { useCart } from "../../hooks/CartContext";
import { PAYMENTS, whatsappLink, SIZES, CRUSTS, EXTRAS } from "../../data/pizzaria";

const PAY_ICON = { Zap, CreditCard, Wallet };
const DELIVERY = 7.9;

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQty, removeItem, subtotal, clear } = useCart();
  const [payment, setPayment] = useState("pix");
  const [sent, setSent] = useState(false);

  const total = subtotal + (items.length ? DELIVERY : 0);

  const buildMessage = () => {
    const lines = items.map((i) => {
      const size = SIZES.find((s) => s.id === i.size)?.label || "";
      const crust = CRUSTS.find((c) => c.id === i.crust)?.label || "";
      const extras = (i.extras || [])
        .map((e) => EXTRAS.find((x) => x.id === e)?.label)
        .filter(Boolean)
        .join(", ");
      return `• ${i.qty}x ${i.name} (${size}, ${crust}${extras ? `, extras: ${extras}` : ""}) — R$ ${(i.price * i.qty).toFixed(2).replace(".", ",")}`;
    });
    const pay = PAYMENTS.find((p) => p.id === payment)?.label;
    return [
      `Olá, ${"Pizzaria do Bala"}! 🍕 Quero finalizar meu pedido:`,
      "",
      ...lines,
      "",
      `Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}`,
      `Entrega: R$ ${DELIVERY.toFixed(2).replace(".", ",")}`,
      `*Total: R$ ${total.toFixed(2).replace(".", ",")}*`,
      `Pagamento: ${pay}`,
    ].join("\n");
  };

  const checkout = () => {
    window.open(whatsappLink(buildMessage()), "_blank");
    setSent(true);
    setTimeout(() => {
      clear();
      setSent(false);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-crust-soft grain flex flex-col border-l border-crust-line"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-crust-line">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-bala-red" />
                <h3 className="font-display font-bold text-lg">Seu Pedido</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="h-9 w-9 grid place-items-center rounded-full hover:bg-crust-card text-flour-dim"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 grid place-items-center px-8 text-center">
                <div>
                  <div className="mx-auto h-20 w-20 rounded-full bg-crust-card grid place-items-center mb-4">
                    <ShoppingBag className="h-8 w-8 text-flour-dim" />
                  </div>
                  <p className="font-display font-bold text-lg">Seu carrinho está vazio</p>
                  <p className="text-sm text-flour-dim mt-2">
                    Que tal uma Margherita ou uma Calabresa para começar?
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-5 rounded-full bg-bala-red px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Ver cardápio
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                  {items.map((i) => (
                    <div key={i.key} className="flex gap-3 rounded-2xl bg-crust-card p-3 border border-crust-line">
                      <img src={i.image} alt={i.name} className="h-16 w-16 rounded-xl object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm leading-tight">{i.name}</p>
                        <p className="text-[11px] text-flour-dim mt-0.5">
                          {SIZES.find((s) => s.id === i.size)?.label} · {CRUSTS.find((c) => c.id === i.crust)?.label}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => updateQty(i.key, -1)}
                              className="h-7 w-7 grid place-items-center rounded-full bg-crust hover:bg-crust-line text-flour"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-5 text-center text-sm font-mono-ui font-bold">{i.qty}</span>
                            <button
                              onClick={() => updateQty(i.key, 1)}
                              className="h-7 w-7 grid place-items-center rounded-full bg-crust hover:bg-crust-line text-flour"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <span className="font-mono-ui font-bold text-sm text-ember">
                            R$ {(i.price * i.qty).toFixed(2).replace(".", ",")}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(i.key)}
                        className="self-start text-flour-dim hover:text-bala-red transition-colors"
                        aria-label="Remover"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-crust-line px-5 py-4 space-y-4 bg-crust">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-flour-dim mb-2">Forma de pagamento</p>
                    <div className="grid grid-cols-3 gap-2">
                      {PAYMENTS.map((p) => {
                        const Icon = PAY_ICON[p.icon];
                        return (
                          <button
                            key={p.id}
                            onClick={() => setPayment(p.id)}
                            className={`rounded-xl border p-2.5 text-center transition ${
                              payment === p.id
                                ? "border-bala-red bg-bala-red/10"
                                : "border-crust-line bg-crust-card hover:border-flour-dim"
                            }`}
                          >
                            <Icon className={`h-5 w-5 mx-auto ${payment === p.id ? "text-bala-red" : "text-flour-dim"}`} />
                            <p className="text-xs font-semibold mt-1">{p.label}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between text-flour-dim">
                      <span>Subtotal</span>
                      <span className="font-mono-ui">R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                    </div>
                    <div className="flex justify-between text-flour-dim">
                      <span>Entrega</span>
                      <span className="font-mono-ui">R$ {DELIVERY.toFixed(2).replace(".", ",")}</span>
                    </div>
                    <div className="flex justify-between pt-1.5 border-t border-crust-line">
                      <span className="font-display font-bold">Total</span>
                      <span className="font-mono-ui font-bold text-lg text-ember">
                        R$ {total.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={checkout}
                    disabled={sent}
                    className="w-full py-3.5 rounded-full bg-[#1b8a3a] text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {sent ? "Enviado! ✓" : "Finalizar pelo WhatsApp"}
                  </button>
                  <p className="text-center text-[11px] text-flour-dim">
                    ⚡ Pagamento via PIX tem aprovação imediata
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}