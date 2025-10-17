import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { cartCount } = useCart();

  return (
    <Link
      to="/cart"
      style={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
      }}
    >
      <ShoppingCart size={24} />
      {cartCount() > 0 && (
        <span
          style={{
            marginLeft: "6px",
            fontWeight: "bold",
          }}
        >
          {cartCount()}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;