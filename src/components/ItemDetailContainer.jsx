import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products.js";
import ItemDetail from "./ItemDetail.jsx";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const p = await getProductById(id);
        setProduct(p);
      } catch (e) {
        console.error(e);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <div className="loader"></div>
    <p style={{ marginTop: '1rem', color: '#004221' }}>Cargando productos...</p>
  </div>
);
  if (!product) return <p>Producto no encontrado.</p>;
  return <ItemDetail product={product} />;
}
