import React from 'react'

import '../styles/footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-content">
        <div>Logo</div>
        <p>Contactos
          <br /> +351 96 715 08 89
          <br /> +351 92 721 91 14
          <br /> +351 266 70 22 06
        </p>
        <p>Morada
          <br /> Av. Alm. Gago Coutinho 54
          <br /> Álamos, Évora
          <br /><br />
          Email
          <br /> geral@studiobelezamarines.com</p>
        <p>Siga-nos nas<br />redes sociais<br /> social links</p>
      </div>
      <div id="copyright">Studio de Beleza Marinês Oliveira © {new Date().getFullYear()}  -  made with ♥ by Hiago Oliveira</div>
    </div>
  )
}

export default Footer
