import React from 'react'

import Logo from '../../img/shield.png'

const FooterList = ({ header }) => (
  <div className='footer-list'>
    <h3 className='mb-3'>{header}</h3>
    <ul>
      {[1, 2, 3, 4, 5].map(number => (
        <li className='footer-item'>Item {number}</li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  return (
    <div id='footer' className='bg-black'>
      <div className='container'>
        <div className='footer-items'>
          <FooterList header='Contacto'></FooterList>
          <FooterList header='Usuario'></FooterList>
          <FooterList header='Servicio'></FooterList>

          <img id='footer-logo' src={Logo} />
        </div>
      </div>
    </div>
  )
}

export default Footer
