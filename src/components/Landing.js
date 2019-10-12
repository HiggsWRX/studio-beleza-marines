import React from 'react'

import banner from '../assets/images/banner.png';
import '../styles/landing.css';

const Landing = () => {
  return (
    <div id="landing-wrapper">
      <img id="banner" alt="banner" src={banner} />
    </div>
  )
}

export default Landing
