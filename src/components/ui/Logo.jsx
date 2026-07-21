import React from "react";
import { cn } from "../../utils/utils";

export default function Logo({ className, variant = "dark", showEst = true }) {
  const textColor = variant === "dark" ? "text-flour" : "text-crust";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <PizzaMark className="h-9 w-9 shrink-0" />
      <div className="leading-none">
        <div className={cn("font-display font-extrabold tracking-[0.18em] text-[15px]", textColor)}>
          PIZZARIA
        </div>
        <div className={cn("font-display font-extrabold tracking-[0.18em] text-[15px]", textColor)}>
          DO BALA
        </div>
      </div>
      {showEst && (
        <div className="hidden sm:flex items-center gap-2 pl-3 ml-1 border-l border-crust-line">
          <span className={cn("text-[10px] tracking-[0.25em] uppercase", variant === "dark" ? "text-flour-dim" : "text-crust/60")}>Desde</span>
          <span className={cn("font-mono-ui text-[10px] font-semibold", variant === "dark" ? "text-flour-dim" : "text-crust/60")}>2022</span>
        </div>
      )}
    </div>
  );
}

export function PizzaMark({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 30a18 18 0 1 1 36 0c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2Z"
        stroke="currentColor"
        strokeWidth="2.4"
        className="text-flour"
      />
      <circle cx="19" cy="22" r="3.4" className="fill-bala-red" />
      <circle cx="29" cy="19" r="2.6" className="fill-ember" />
      <circle cx="24" cy="27" r="2.8" className="fill-ember" />
      <circle cx="32" cy="25" r="2.2" className="fill-flour" />
    </svg>
  );
}

export function ItalianFlag({ className }) {
  return (
    <span className={cn("inline-flex overflow-hidden rounded-sm border border-crust-line", className)}>
      <span className="block h-full w-1/3 bg-[#cc0000]" />
      <span className="block h-full w-1/3 bg-white" />
      <span className="block h-full w-1/3 bg-[#008000]" />
    </span>
  );
}