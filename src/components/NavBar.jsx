import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: "#004221",
      color: "white",
      width: "100%",         
      boxSizing: "border-box" 
    }}>

      <h1 style={{ fontWeight: "bold" }}>SerZen Store</h1>
      
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0 }}>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Productos</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;