import React from 'react';

import * as LINKS from '../constants/links';
import facebook from '../assets/images/facebook.png';
import facebook2x from '../assets/images/facebook@2x.png';
import facebook3x from '../assets/images/facebook@3x.png';
import '../styles/topinfo.css';

const TopInfo = () => {
  return (
    <div id="top-info">
      <p>Telefone: (+351) 266 70 22 06 <span id="top-info-spacer"/>Horario: Seg. a Sáb. 9h - 13h / 14h - 20h</p>
      <span>
        <a href={ LINKS.FACEBOOK } target="_blank" rel="noopener noreferrer">
          <img
            alt="Facebook"
            title="Facebook"
            src={facebook}
            srcSet={facebook2x + " 2x, " + facebook3x + " 3x"}
          />
        </a>
        Social
      </span>
    </div>
  )
}

export default TopInfo
