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

  if (orderId)
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h3>Gracias por tu compra 💚</h3>
      <p>Tu ID de orden es: <strong>{orderId}</strong></p>
      <p>Te estaremos contactando por WhatsApp para coordinar tu masaje 😉</p>
    </div>
  );
};
export default CheckoutForm;