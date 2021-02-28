import React from 'react'
import VideoFilter from '../portfolio/VideoFilter'
import VideoGrid from './../portfolio/VideoGrid'

const Portfolio = () => {
  return (
    <>
      <div className='pt-nav'>
        <h1>Nuestros proyectos</h1>
      </div>
      <VideoFilter />
      <VideoGrid />
    </>
  )
}

export default Portfolio
