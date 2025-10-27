import { useState } from 'react';
import ItemCount from './ItemCount.jsx';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

export default function ItemDetail({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem({ id: product.id, name: product.name, price: product.price, stock: product.stock }, qty);
    setAdded(true);
  };

  return (
    <div style={{maxWidth:800,margin:'0 auto',textAlign:'center'}}>
      {(product.img || product.image) && <img src={product.img || product.image} alt={product.name} style={{width:300,borderRadius:8}}/>}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      {product.stock===0 && <p>Producto sin stock</p>}
      {!added ? <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} /> : <Link to="/cart"><button>Ir al carrito</button></Link>}
    </div>
  );
}