import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts } from "../services/products.js";
import ItemList from "./ItemList.jsx";

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = categoryId ? await getProducts(categoryId) : await getProducts();
        setItems(data);
      } catch (e) {
        console.error(e);
        setItems([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;
  if (items.length === 0) return (
    <div>
      <p>No hay productos disponibles en esta categoría.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );

  return (
    <div>
      {greeting && <h2>{greeting}</h2>}
      <ItemList products={items} />
    </div>
  );
}