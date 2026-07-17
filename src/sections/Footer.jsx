import React from "react";
import {
  MessageCircle,
  Instagram,
  TreePalm,
  ExternalLink,
  MapPin,
} from "lucide-react";

import Logo, { ItalianFlag } from "../Logo";
import { BRAND, whatsappLink } from "../../data/pizzaria";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Promoções", href: "#promocoes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

const SOCIAL = [
  { label: "WhatsApp", icon: MessageCircle, href: whatsappLink() },
  { label: "Instagram", icon: Instagram, href: BRAND.instagram },
  { label: "Linktree", icon: TreePalm, href: BRAND.linktree },
  { label: "iFood", icon: ExternalLink, href: BRAND.ifood },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-crust-line bg-crust-soft grain">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />

            <p className="mt-5 text-sm text-flour-dim leading-relaxed max-w-xs">
              Massa artesanal, ingredientes frescos e o sabor de verdade que
              conquistou o bairro desde {BRAND.since}.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <ItalianFlag className="h-4 w-6" />
              <span className="text-xs text-flour-dim font-mono-ui">
                Feito com paixão · São Paulo
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-flour">
              Navegação
            </h4>

            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-flour-dim hover:text-flour transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-flour">
              Peça pelo
            </h4>

            <ul className="mt-4 space-y-2.5">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-flour-dim hover:text-flour transition-colors"
                  >
                    <s.icon className="h-4 w-4 text-balared" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-flour">
              Onde estamos
            </h4>

            <p className="mt-4 text-sm text-flour-dim leading-relaxed flex items-start gap-2">
              <MapPin className="h-4 w-4 text-balared mt-0.5 shrink-0" />
              {BRAND.address}
            </p>

            <p className="mt-3 text-sm text-flour-dim">
              {BRAND.phoneDisplay}
            </p>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1b8a3a] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              <MessageCircle className="h-4 w-4" />
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-crust-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-flour-dim">
            © {new Date().getFullYear()} {BRAND.name}. Todos os direitos
            reservados.
          </p>

          <p className="text-xs text-flour-dim font-mono-ui">
            DESDE {BRAND.since} · CNPJ 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}