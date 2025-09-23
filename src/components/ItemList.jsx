import Item from "./Item"

const ItemList = ({ items }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
      {items.map(prod => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  )
}

export default ItemList