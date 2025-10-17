import React from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext.jsx";

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    marginBottom: "2rem",
    color: "#004221",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "#f8f8f8",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  cardHover: {
    transform: "scale(1.03)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  price: {
    fontWeight: "bold",
    color: "#422100",
  },
  button: {
    marginTop: "0.5rem",
    backgroundColor: "#004221",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default function Productos() {
  const { addItem } = useCart();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Nuestros productos</h2>

      <div style={styles.grid}>
        {products.map((p) => (
          <div
            key={p.id}
            style={styles.card}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, styles.cardHover)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, styles.card)
            }
          >
            <img src={p.image} alt={p.name} style={styles.image} />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p style={styles.price}>${p.price.toLocaleString("es-AR")}</p>
            <button style={styles.button} onClick={() => addItem(p, 1)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}