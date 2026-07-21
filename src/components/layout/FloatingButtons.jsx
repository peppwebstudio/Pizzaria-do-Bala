import React from "react";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { cn } from "../../utils/utils";
import { whatsappLink } from "../../data/pizzaria";
import { useCart } from "../../hooks/CartContext";

export default function FloatingButtons() {
  const { count, subtotal, setIsOpen } = useCart();
  return (
    <>
      {/* WhatsApp - bottom right */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-[#1b8a3a] text-white grid place-items-center shadow-lg shadow-[#1b8a3a]/30 hover:scale-105 active:scale-95 transition-transform"
        aria-label="Chamar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 grid place-items-center rounded-full bg-bala-red text-[11px] font-bold text-white border-2 border-crust">
          1
        </span>
      </a>

      {/* Smart cart pill - bottom left */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-5 left-5 z-40 flex items-center gap-3 rounded-full pl-3 pr-5 py-2.5 bg-flour text-crust font-semibold shadow-lg transition-all",
          count > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
        aria-label="Ver carrinho"
      >
        <span className="relative h-9 w-9 rounded-full bg-bala-red text-white grid place-items-center">
          <ShoppingBag className="h-4 w-4" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 grid place-items-center rounded-full bg-crust text-[10px] font-bold text-flour">
              {count}
            </span>
          )}
        </span>
        <span className="text-left leading-tight">
          <span className="block font-mono-ui text-sm font-bold">
            R$ {subtotal.toFixed(2).replace(".", ",")}
          </span>
          <span className="block text-[11px] text-crust/60">~35 min · Ver pedido</span>
        </span>
      </button>
    </>
  );
}