import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config.js";
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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const q = collection(db, "products");
        const snap = await getDocs(q);
        setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) {
        console.error(e);
        setProducts([]);
      }
    })();
  }, []);

  if (!products.length) return <div><h2>Nuestros productos</h2><p>No hay productos cargados aún.</p></div>;

  return (
    <div>
      <h2>Nuestros productos</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
        {products.map(p => (
          <article key={p.id} style={{ border: "1px solid #ddd", padding: 12 }}>
            <img src={p.image || p.img} alt={p.name} style={{ width: "100%", height: 140, objectFit: "cover" }} />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p><strong>${p.price}</strong></p>
            <button onClick={() => addItem({ id: p.id, name: p.name, price: p.price, stock: p.stock }, 1)}>Agregar</button>
          </article>
        ))}
      </div>
    </div>
  );
}