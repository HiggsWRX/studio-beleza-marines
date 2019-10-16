import React from 'react'
import { Link } from 'react-scroll';

import nav_logo from '../assets/images/nav_logo.png';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div id="nav-wrapper">
        <img id="nav-logo" alt="logo" src={nav_logo} />
        <ul id="nav-items">
          <li>
            <Link
              to="landing-wrapper"
              activeClass="active"
              smooth
              spy
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="services-wrapper"
              activeClass="active"
              smooth
              spy
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              to="products-wrapper"
              activeClass="active"
              smooth
              spy
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link
              to="team-wrapper"
              activeClass="active"
              smooth
              spy
            >
              Equipa
            </Link>
          </li>
          <li>
            <Link
              to="location-wrapper"
              activeClass="active"
              smooth
              spy
            >
              Localização
            </Link>
          </li>
          <li>
            <Link
              to="footer"
              activeClass="active"
              smooth
              spy
            >
              Contactos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
