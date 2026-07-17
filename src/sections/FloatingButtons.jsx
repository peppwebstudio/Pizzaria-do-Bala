import React, { useState, useEffect } from "react";
import { Menu as MenuIcon, X, ShoppingBag } from "lucide-react";

// PWS Standard: Utilizamos caminhos relativos para garantir que o Vite 
// encontre os arquivos na nossa nova estrutura de pastas
import { cn } from "../lib/utils";
import Logo from "../components/Logo";
import { whatsappLink } from "../data/pizzaria";
import { useCart } from "../context/CartContext";

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
  
  // Tratamento de segurança PWS: previne tela branca se o Context não estiver envelopando o App
  const { count = 0, setIsOpen = () => {} } = useCart() || {};

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
          // PWS Standard: Utilizamos bg-background com opacidade e blur
          ? "bg-background/90 backdrop-blur-xl border-b border-border py-2.5 shadow-sm"
          : "bg-transparent py-4"
      )}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="shrink-0 transition-opacity hover:opacity-80" aria-label="Início">
          <Logo />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                // PWS Standard: text-muted-foreground para inativo, text-foreground para hover
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group py-1"
              >
                {l.label}
                {/* Linha animada usando a cor Primária do tema */}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          {/* Botão do Carrinho */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative h-11 w-11 rounded-full border border-border bg-card hover:border-primary transition-colors grid place-items-center"
            aria-label="Abrir carrinho"
          >
            <ShoppingBag className="h-5 w-5 text-foreground" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 grid place-items-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground shadow-sm">
                {count}
              </span>
            )}
          </button>

          {/* CTA Principal */}
          <a
            href={whatsappLink ? whatsappLink() : "#"}
            target="_blank"
            rel="noreferrer"
            // PWS Standard: bg-primary, text-primary-foreground (Escalonável para qualquer cliente)
            className="hidden sm:inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            Pedir Agora
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-11 w-11 grid place-items-center rounded-full border border-border text-foreground bg-card hover:bg-accent/10 transition-colors"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-xl",
          open ? "max-h-[500px] border-t border-border shadow-lg" : "max-h-0"
        )}
      >
        <ul className="px-5 py-4 space-y-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/60 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <a
              href={whatsappLink ? whatsappLink() : "#"}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md"
            >
              Pedir Agora
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
