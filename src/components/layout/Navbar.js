import React from 'react'

import { Link } from 'react-router-dom'

import Logo from '../../img/shield.png'

const Navbar = () => {
  return (
    <nav>
      <Link to='#'>Inicio</Link>

      <Link to='#'>Portafolio</Link>

      <Link to='#'>
        <img id='logo' src={Logo} />
      </Link>

      <Link to='#'>Nosotros</Link>

      <Link to='#'>Noticias</Link>
    </nav>
  )
}

export default Navbar
