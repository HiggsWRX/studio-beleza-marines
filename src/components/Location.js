import React from 'react'

import store from '../assets/images/store-front.png';
import '../styles/location.css';

const Location = () => {
  return (
    <div id="location-wrapper">
      <h1>Espaço e Localização</h1>
      <img alt="store front" src={store} />
      <p className="content-text">
        Encontramo-nos situados no bairro dos Álamos, juntos à escola André de
        Resende, ao lado do antigo café ‘Ritinha’. É muito fácil encontrar-nos,
        basta procurar pelos nossos banners decorativos nos pilares do edifício!
      </p>
      <p><u>Obter direções</u></p>
      <h2 className="bye-text">Venha visitar-nos !</h2>
    </div>
  )
}

export default Location
