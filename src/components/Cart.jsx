import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, updateQty, cartTotal } = useCart();

  if (cart.length === 0) return <div>Carrito vacío. <Link to="/">Seguir comprando</Link></div>;

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.qty}
            <button onClick={() => updateQty(item.id, item.qty - 1)} disabled={item.qty <= 1}>-</button>
            <button onClick={() => updateQty(item.id, item.qty + 1)} disabled={item.qty >= item.stock}>+</button>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${cartTotal()}</h3>
      <Link to="/checkout"><button>Checkout</button></Link>
    </div>
  );
};
export default Cart;