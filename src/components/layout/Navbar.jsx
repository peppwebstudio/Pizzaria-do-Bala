import React, { useState, useEffect } from "react";
import { Menu as MenuIcon, X, ShoppingBag } from "lucide-react";
import { cn } from "../../utils/utils";
import Logo from "../ui/Logo";
import { whatsappLink } from "../../data/pizzaria";
import { useCart } from "../../hooks/CartContext";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Promoções", href: "#promocoes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-crust/90 backdrop-blur-xl border-b border-crust-line py-2.5"
          : "bg-transparent py-4"
      )}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="shrink-0" aria-label="Pizzaria do Bala - início">
          <Logo />
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-flour-dim hover:text-flour transition-colors relative group py-1"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-bala-red transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsOpen(true)}
            className="relative h-11 w-11 rounded-full border border-crust-line bg-crust-card hover:border-bala-red transition-colors grid place-items-center"
            aria-label="Abrir carrinho"
          >
            <ShoppingBag className="h-5 w-5 text-flour" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 grid place-items-center rounded-full bg-bala-red text-[11px] font-bold text-white">
                {count}
              </span>
            )}
          </button>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex h-11 items-center gap-2 rounded-full bg-bala-red px-5 text-sm font-semibold text-white hover:bg-bala-red-deep transition-colors glow-red"
          >
            Pedir Agora
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-11 w-11 grid place-items-center rounded-full border border-crust-line text-flour"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-crust/95 backdrop-blur-xl",
          open ? "max-h-96 border-t border-crust-line" : "max-h-0"
        )}
      >
        <ul className="px-5 py-4 space-y-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-flour-dim hover:text-flour border-b border-crust-line/60"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full bg-bala-red px-5 py-3 text-sm font-semibold text-white"
            >
              Pedir Agora
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}