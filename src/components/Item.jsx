import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item