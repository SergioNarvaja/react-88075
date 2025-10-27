import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';
import './navbar.css';

export default function NavBar(){
  return (
    <header className="navbar">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <h1 style={{margin:0}}>SerZen Store</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category/aromaterapia">Productos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
      <div>
        <CartWidget />
      </div>
    </header>
  );
}