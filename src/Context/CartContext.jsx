import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

// PWS Standard: Constante isolada. 
// Mude isso a cada novo cliente para evitar conflitos de cache no navegador!
const STORAGE_KEY = "pws_pizzaria_bala_cart";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // Inicialização segura do LocalStorage
  const [items, setItems] = useState(() => {
    try {
      const localData = localStorage.getItem(STORAGE_KEY);
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("PWS Cart Error: Erro ao ler o localStorage. Retornando carrinho vazio.", error);
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  // Sincronização automática com o LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("PWS Cart Error: Erro ao salvar no localStorage.", error);
    }
  }, [items]);

  const addItem = useCallback((item) => {
    setItems((prev) => {
      // PWS Standard: Geração de chave flexível (escalável para qualquer nicho de food service)
      const itemVariations = item.size || item.crust ? `${item.size}-${item.crust}` : 'default';
      const extrasHash = item.extras?.length ? JSON.stringify(item.extras) : 'no-extras';
      
      // Gera uma chave única pra sabermos se já existe no carrinho para somar a quantidade
      const key = item.key || `${item.id}-${itemVariations}-${extrasHash}`;
      
      const idx = prev.findIndex((i) => i.key === key);
      
      if (idx >= 0) {
        // Já existe: apenas aumenta a quantidade
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + (item.qty || 1) };
        return next;
      }
      
      // Não existe: adiciona como novo item
      return [...prev, { ...item, key, qty: item.qty || 1 }];
    });
    
    // Abre o carrinho lateral automaticamente quando algo é adicionado (Foco em Conversão)
    setIsOpen(true);
  }, []);

  const updateQty = (key, delta) => {
    setItems((prev) =>
      prev.map((i) =>
        i.key === key ? { ...i, qty: Math.max(1, i.qty + delta) } : i
      )
    );
  };

  const removeItem = (key) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  };

  const clear = () => setItems([]);

  // Cálculos derivados
  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <CartContext.Provider
      value={{ 
        items, 
        count, 
        subtotal, 
        addItem, 
        updateQty, 
        removeItem, 
        clear, 
        isOpen, 
        setIsOpen 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook customizado com proteção PWS
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("PWS Error: useCart deve ser usado dentro de um CartProvider.");
  }
  return context;
};