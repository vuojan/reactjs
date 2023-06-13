import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

function NavBar(){ 

return(    
<nav className="navbar navbar-expand-lg navbar-light" id="navegador">
<div className="container">
    <Link className="navbar-brand" to="/">
        <img src="/assets/imagenes/logoTienda.webp" alt= ""/>
    </Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-link" to="/">HOLIS</Link> 
      <Link className="nav-link" to="/category/Mapas">MAPAS</Link> 
      <Link className="nav-link" to="/category/Exaltados">EXALTADOS</Link> 
      <Link className="nav-link" to="/category/Crafting">CRAFTING</Link>
      <Link className="nav-link" to="/category/Otros">OTROS</Link>
    </div>
    <CartWidget/>
  </div>
</div>
</nav>)
}

export default NavBar;