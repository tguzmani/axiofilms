import React from 'react'
import VideoItem from './VideoItem'

const VideoGrid = () => {
  return (
    <div className='container'>
      <div className='row'>
        <VideoItem />
        <VideoItem />
      </div>

      <div className='row'>
        <VideoItem />
        <VideoItem />
      </div>
    </div>
  )
}

export default VideoGrid
