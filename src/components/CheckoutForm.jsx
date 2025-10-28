import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/orders";
import { Link } from "react-router-dom";

export default function CheckoutForm() {
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

  if (orderId) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>🧘‍♂️ ¡Gracias por tu compra, {name || "cliente zen"}!</h2>
        <p>Tu pedido se ha generado correctamente.</p>
        <p>
          <strong>ID de pedido:</strong> {orderId}
        </p>
        <p style={{ marginTop: "1rem", color: "#004221" }}>
          Recordá: la calma también se entrega a domicilio 🌿
        </p>
        <Link to="/">
          <button
            style={{
              marginTop: "1rem",
              background: "var(--green)",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: 6,
            }}
          >
            Volver al inicio
          </button>
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h2>Finalizar compra</h2>
      <input
        type="text"
        placeholder="Nombre completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Teléfono o WhatsApp"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          background: "var(--green)",
          color: "#fff",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: 6,
        }}
      >
        {loading ? "Procesando..." : "Confirmar pedido"}
      </button>
    </form>
  );
}