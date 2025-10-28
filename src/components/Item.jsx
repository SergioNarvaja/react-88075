import { Link } from 'react-router-dom';

export default function Item({ product }) {
  const imgSrc = product.img || product.image || null;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12, width: 220, textAlign: 'center' }}>
      {imgSrc && (
        <img
          src={imgSrc}
          alt={product.name}
          style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }}
        />
      )}
      <h4>{product.name}</h4>
      <p style={{ color: '#422100', fontWeight: 700 }}>${product.price}</p>
      <Link to={`/item/${product.id}`}>
        <button
          style={{
            background: 'var(--green)',
            color: '#fff',
            border: 0,
            padding: '0.5rem 1rem',
            borderRadius: 6,
          }}
        >
          Ver Producto
        </button>
      </Link>
    </div>
  );
}
