import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 16,
            width: 200,
            textAlign: "center",
          }}
        >
          <img
            src={p.img}
            alt={p.name}
            style={{ width: "100%", borderRadius: 8 }}
          />
          <h4>{p.name}</h4>
          <p>${p.price}</p>
          <Link to={`/item/${p.id}`}>
            <button>Ver detalle</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;