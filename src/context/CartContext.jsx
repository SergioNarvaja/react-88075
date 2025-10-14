import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [{id, name, price, qty, stock}]

  const addItem = (item, qty) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) {
        return prev.map(p => p.id === item.id ? { ...p, qty: Math.min(p.stock, p.qty + qty) } : p);
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeItem = (id) => setCart(prev => prev.filter(p => p.id !== id));
  const clearCart = () => setCart([]);
  const updateQty = (id, qty) => setCart(prev => prev.map(p => p.id === id ? { ...p, qty } : p));
  const cartTotal = () => cart.reduce((acc, p) => acc + p.price * p.qty, 0);
  const cartCount = () => cart.reduce((acc, p) => acc + p.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, updateQty, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};