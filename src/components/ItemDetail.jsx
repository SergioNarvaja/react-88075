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
    <div className="card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {product.stock === 0 && <p>Producto sin stock</p>}
      {!added ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd}/>
      ) : (
        <div>
          <p>Agregaste al carrito ✅</p>
          <a href="/cart">Ir al carrito</a>
        </div>
      )}
    </div>
  );
};
export default ItemDetail;