import React from "react";
import products from "../data/products";

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

const Productos = () => {
  return (
    <div className="productos-container">
      {products.map((p) => (
        <div key={p.id} className="producto-card">
          <img src={p.image} alt={p.name} className="producto-img" />
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p className="precio">${p.price.toLocaleString("es-AR")}</p>
          <button>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Productos;