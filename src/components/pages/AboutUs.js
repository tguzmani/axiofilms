import React from 'react'

import AboutUsPicture from '../../img/about-us.jpg'
import Video from './../misc/Video'

const AboutUs = () => {
  return (
    <div>
      <div className='pt-nav'>
        <h1>Nosotros</h1>
      </div>

      <div className='bg-primary'>
        <Video size={'640 '} />
      </div>

      <div id='about-us' className='container-big'>
        <div id='about-us-text'>
          <h1>Nosotros</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            sunt at dolorum, necessitatibus minima a voluptate hic accusantium
            vel velit ducimus? Ratione ipsa minima tenetur numquam quia
            incidunt! Dicta tenetur.
          </p>
        </div>

        <div id='about-us-picture'>
          <img src={AboutUsPicture} />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
