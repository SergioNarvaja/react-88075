import Item from './Item.jsx';

export default function ItemList({ products }) {
  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:16,justifyContent:'center',marginTop:20}}>
      {products.map(p => <Item key={p.id} product={p} />)}
    </div>
  );
}