import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(product, qty);
    setAdded(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <img
        src={product.img}
        alt={product.name}
        style={{ width: 250, borderRadius: 10 }}
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>

      {added ? (
        <a href="/cart">
          <button>Ir al carrito</button>
        </a>
      ) : (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default ItemDetail;