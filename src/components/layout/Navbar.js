import React from 'react'

import { Link } from 'react-router-dom'

import Logo from '../../img/shield.png'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Inicio</Link>

      <Link to='/portafolio'>Portafolio</Link>

      <Link to='/'>
        <img id='logo' src={Logo} />
      </Link>

      <Link to='/nosotros'>Nosotros</Link>

      <Link to='/noticias'>Noticias</Link>
    </nav>
  )
}

export default Navbar
