import { useState } from 'react';
import ItemCount from './ItemCount.jsx';
import { useCart } from '../context/CartContext.jsx';

export default function ItemDetail({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(product, qty);
    setAdded(true);
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
      <img
        src={product.img || product.image || ''}
        alt={product.name}
        style={{ width: 300, borderRadius: 8 }}
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3 style={{ color: '#422100' }}>${product.price}</h3>

      {product.stock === 0 && <p style={{ color: 'red' }}>Producto sin stock</p>}

      {!added ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <a href="/cart">
          <button
            style={{
              background: 'var(--green)',
              color: '#fff',
              border: 0,
              padding: '0.5rem 1rem',
              borderRadius: 6,
              marginTop: 10
            }}
          >
            Ir al carrito
          </button>
        </a>
      )}
    </div>
  );
}