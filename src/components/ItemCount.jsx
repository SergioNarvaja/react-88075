import { useState } from "react";

const ItemCount = ({ stock = 1, initial = 1, onAdd }) => {
  const [qty, setQty] = useState(initial);

  const inc = () => setQty(q => Math.min(stock, q + 1));
  const dec = () => setQty(q => Math.max(1, q - 1));

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button onClick={dec} disabled={qty <= 1}>-</button>
      <span>{qty}</span>
      <button onClick={inc} disabled={qty >= stock}>+</button>
      <button onClick={() => onAdd(qty)} disabled={stock === 0} style={{ marginLeft: 12 }}>
        Agregar
      </button>
    </div>
  );
};

export default ItemCount;