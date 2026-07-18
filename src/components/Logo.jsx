import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-1.5 font-sans">
      <span className="text-xl font-black tracking-tight text-primary uppercase sm:text-2xl">
        Pizzaria <span className="text-foreground font-light">do Bala</span>
      </span>
    </div>
  );
}