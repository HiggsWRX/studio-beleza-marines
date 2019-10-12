import React from 'react'

import nav_logo from '../assets/images/nav_logo.png';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div id="nav-wrapper">
        <img id="nav-logo" alt="logo" src={nav_logo} />
        <ul id="nav-items">
          <li>Home</li>
          <li>Serviços</li>
          <li>Produtos</li>
          <li>Equipa</li>
          <li>Localização</li>
          <li>Contactos</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
