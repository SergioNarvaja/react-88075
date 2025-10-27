import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function CartWidget() {
  const { cartCount } = useCart();
  return (
    <Link to="/cart" style={{display:'flex',alignItems:'center',textDecoration:'none',color:'inherit',cursor:'pointer'}}>
      <span role="img" aria-label="cart">🛒</span>
      <span style={{marginLeft:8}}>{cartCount()}</span>
    </Link>
  );
}