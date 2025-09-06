import { ShoppingCart } from "lucide-react"; 
const CartWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      <ShoppingCart />
      <span style={{ marginLeft: "5px" }}>3</span> 
    </div>
  );
};

export default CartWidget;