import React from 'react'
import Button from '../layout/Button'

const VideoFilter = () => {
  return (
    <div className='container'>
      <h2 className='center'>Filtrar por categoría</h2>
      <div className='video-categories row'>
        {[1, 2, 3, 4, 5, 6].map(number => (
          <div className='category-button'>
            <Button variant='primary'>Categoría {number}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoFilter
