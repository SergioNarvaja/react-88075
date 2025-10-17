import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../services/products.js";
import ItemList from "./ItemList.jsx";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = categoryId
          ? await getProductsByCategory(categoryId)
          : await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  if (products.length === 0)
    return (
      <div>
        <p>No hay productos disponibles en esta categoría.</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        {categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}
      </h2>
      <ItemList products={products} />
    </div>
  );
}