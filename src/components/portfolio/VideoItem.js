import React from 'react'
import YouTube from 'react-youtube'

const VideoItem = () => {
  const youtubeOptions = {
    height: '360',
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <div className='video-item'>
      <div className='video-text-primary'>Título</div>
      <div className='video-text-secondary'>Subtítulo</div>
      <YouTube
        className='video-item-player'
        opts={youtubeOptions}
        videoId='bYaPdmhOzzU'
      />
    </div>
  )
}

export default VideoItem
