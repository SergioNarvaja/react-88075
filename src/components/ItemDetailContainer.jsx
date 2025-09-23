import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../data/products"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getProductById(id).then(data => setProduct(data))
  }, [id])

  return (
    <div style={{ padding: "1rem" }}>
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
  )
}

export default ItemDetailContainer