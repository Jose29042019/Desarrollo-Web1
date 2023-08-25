import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="contenedor-header">
        <nav>
          <div className="logo"> <a href="#">PLANTAS DE HOGAR</a></div>
          <ul>
            <li><a href="#tienda">Tienda</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Consejos</a></li>
            <li><a href="#post">Sobre nosotros</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
