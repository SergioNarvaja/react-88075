import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/orders";

const CheckoutForm = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const order = {
      buyer: { name, phone },
      items: cart,
      total: cartTotal(),
    };
    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error(err);
      alert("Error creando la orden");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) return <div>Gracias por tu compra. Tu id de orden es: <strong>{orderId}</strong></div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre" required />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Teléfono" required />
      <button type="submit" disabled={loading || cart.length === 0}>{loading ? "Procesando..." : "Confirmar compra"}</button>
    </form>
  );
};
export default CheckoutForm;