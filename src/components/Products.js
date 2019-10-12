import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';

import products from '../assets/images/products.png';
import '../styles/products.css';

const Products = () => {
  return (
    <div id="products-wrapper">
      <h1>Produtos</h1>
      <ParallaxBanner
        className="parallax-background"
        layers={[
          {
            image: products,
            amount: 0.3,
          }
        ]}
      >
      </ParallaxBanner>
      <p className="content-text">No nosso studio poderá também adquirir variados
        produtos para continuar os seus tratamentos de beleza no conforto da sua
        casa. Ao comprar no nosso espaço pode ter a certeza que estará a comprar
        produtos de qualidade, sempre!
      </p>
      <div id="products-list">
        <ul>
          <li>Kits de Tratamento completo</li>
          <li>Cremes para cara</li>
          <li>Cremes para mãos e pés</li>
        </ul>
        <ul>
          <li>Cremes revitalizantes</li>
          <li>Cremes anti-celulite</li>
        </ul>
      </div>
    </div>
  )
}

export default Products;
