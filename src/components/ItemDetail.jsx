const ItemDetail = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "2rem", borderRadius: "8px" }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail