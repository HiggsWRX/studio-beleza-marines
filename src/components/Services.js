import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';

import services from '../assets/images/services.png';
import '../styles/services.css';

const Services = () => {
  return (
    <div id="services-wrapper">
      <h1>Serviços</h1>
      <ParallaxBanner
        className="my-class"
        layers={[
          {
            image: services,
            amount: 0.3,
          }
        ]}
      >
      </ParallaxBanner>
      <p className="content-text">Dispomos de vários serviços para fazer com que se sinta sempre no seu
         melhor todos os dias! Com a nossa equipa pode ficar descansado que será
         sempre bem tratado e que o serviço será sempre feito com a maior atenção
         aos pequenos detalhes.
      </p>
      <div id="services-list">
        <ul>
          <li>Manicure</li>
          <li>Pedicure</li>
          <li>Unhas(gel, gelinho, imersão, etc)</li>
          <li>Depilações a cera e a laser</li>
        </ul>
        <ul>
          <li>Estética Facial</li>
          <li>Estética Corporal</li>
          <li>Massagens</li>
          <li>Técnicas de Podologia</li>
        </ul>
      </div>
    </div>
  )
}

export default Services;
