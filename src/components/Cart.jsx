import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, updateQty, cartTotal } = useCart();

  if (cart.length === 0)
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h3>🛒 Carrito vacío</h3>
        <Link to="/" style={{ color: "#007bff", textDecoration: "none" }}>
          Seguir comprando
        </Link>
      </div>
    );

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            <strong>{item.name || item.title}</strong> - ${item.price} x {item.qty}
            <div style={{ display: "inline-flex", gap: "5px", marginLeft: "10px" }}>
              <button
                onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                disabled={item.qty <= 1}
              >
                -
              </button>
              <button
                onClick={() => updateQty(item.id, Math.min(item.stock, item.qty + 1))}
                disabled={item.qty >= item.stock}
              >
                +
              </button>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${cartTotal()}</h3>
      <Link to="/checkout">
        <button>Ir al Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;