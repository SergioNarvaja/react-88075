import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../data/products"
import ItemList from "./ItemList"

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const fetchData = categoryId ? getProductsByCategory(categoryId) : getProducts()
    fetchData.then(data => setItems(data))
  }, [categoryId])

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer