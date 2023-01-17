import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

function NavBar(){ 

return(    
<nav className="navbar navbar-expand-lg navbar-light" id="navegador">
<div className="container">
    <a className="navbar-brand" href="index.html">
        <img src="assets/imagenes/logoTienda.webp" alt= "Logo de Proyaax consultora"/>
    </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link" href="index.html">INICIO</a> 
      <a className="nav-link">MAPAS</a> 
      <a className="nav-link">EXALTADOS</a> 
      <a className="nav-link">CRAFTING</a>
      <a className="nav-link">OTROS</a>
    </div>
    <CartWidget/>
  </div>
</div>
</nav>)
}

export default NavBar;