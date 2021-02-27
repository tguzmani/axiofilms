import React from 'react'

import Fade from 'react-reveal/Fade'

import Button from '../layout/Button'

const Service = ({ above }) => (
  <div className={`service ${above && 'ty-5'}`}>
    <div className='bg-primary service-circle'>Servicio</div>
    <div className='service-text'>Servicio</div>
  </div>
)

const Services = () => {
  return (
    <div className='container'>
      <h1>Nuestros servicios</h1>
      <div id='services'>
        <Service />
        <Service above />
        <Service above />
        <Service />
      </div>

      <div className='center'>
        <Button variant='primary'>Cotiza tu proyecto</Button>
      </div>
    </div>
  )
}

export default Services
