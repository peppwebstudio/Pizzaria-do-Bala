import React from "react";
import { ExternalLink } from "lucide-react";
import { Instagram as IgIcon } from "../ui/BrandIcons";
import { INSTAGRAM_PHOTOS, BRAND } from "../../data/pizzaria";

export default function Instagram() {
  const photos = [...INSTAGRAM_PHOTOS, ...INSTAGRAM_PHOTOS];
  return (
    <section className="relative py-20 lg:py-28 bg-crust-soft grain overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ember">
          <IgIcon className="h-4 w-4" /> @pizzariadobala
        </span>
        <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-balance">
          Siga a Pizzaria do Bala no Instagram
        </h2>
        <p className="mt-4 text-flour-dim">Fique por dentro das novidades, promoções e bastidores do forno.</p>
      </div>

      <div className="relative">
        <div className="flex gap-4 marquee-track w-max">
          {photos.map((src, i) => (
            <div key={i} className="relative h-72 w-72 shrink-0 rounded-3xl overflow-hidden group">
              <img src={src} alt={`Foto ${i + 1}`} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-crust/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center">
                <IgIcon className="h-8 w-8 text-white" />
              </div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-crust-soft to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-crust-soft to-transparent" />
      </div>

      <div className="text-center mt-12">
        <a
          href={BRAND.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-7 py-4 text-base font-bold text-white hover:opacity-90 transition"
        >
          <IgIcon className="h-5 w-5" /> Ver Instagram <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}