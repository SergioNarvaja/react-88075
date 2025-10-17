import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import CartWidget from "./CartWidget.jsx";
import "./NavBar.css";

export default function NavBar() {
  const { cartCount } = useCart();

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h1>SerZen Store</h1>
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category/aromaterapia">Productos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>

      <div className="navbar-cart">
        <Link to="/cart" className="cart-link">
          <CartWidget />
          <span className="cart-badge">{cartCount()}</span>
        </Link>
      </div>
    </header>
  );
}