import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
});

  const addItem = (item, qty = 1) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.id === item.id
            ? { ...p, qty: Math.min(p.stock || 9999, p.qty + qty) }
            : p
        );
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);
  const updateQty = (id, qty) =>
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));

  const cartTotal = () => cart.reduce((acc, p) => acc + p.price * p.qty, 0);
  const cartCount = () => cart.reduce((acc, p) => acc + p.qty, 0);

  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  return (
    <CartContext.Provider
      value={{cart, addItem, removeItem, clearCart, updateQty, cartTotal, cartCount }}>
          {children}
    </CartContext.Provider>
  );
};
