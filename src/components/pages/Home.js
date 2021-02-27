import React from 'react'
import YouTube from 'react-youtube'

import Services from '../home/Services'
import BuyingProcess from '../home/BuyingProcess'
import Testimonials from '../home/Testimonials'

const Home = () => {
  const youtubeOptions = {
    height: '1080',
    playerVars: {
      autoplay: 1,
    },
  }
  return (
    <>
      <YouTube id='video' opts={youtubeOptions} videoId='bYaPdmhOzzU' />
      <Services />
      <BuyingProcess />
      <Testimonials />
    </>
  )
}

export default Home
