import React from "react";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../utils/utils";
import { BRAND, whatsappLink } from "../../data/pizzaria";
import { useCart } from "../../hooks/CartContext";

export default function FloatingButtons() {
  const { count, subtotal, setIsOpen } = useCart();
  
  return (
    <>
      {/* Container para botões do canto inferior direito */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 items-center">
        
        {/* iFood */}
        <motion.a
          href={BRAND.ifood}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EA1D2C] text-white shadow-lg shadow-[#EA1D2C]/30 transition-colors hover:bg-[#c91825]"
          aria-label="Pedir no iFood"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            <path d="M7.5 13.5c1.5 2 4.5 2 6 0" />
            <path d="M9 9h.01" />
            <path d="M15 9h.01" />
          </svg>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-colors hover:bg-green-600"
          aria-label="Falar no WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </motion.a>
      </div>

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