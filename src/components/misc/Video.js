import React from 'react'
import YouTube from 'react-youtube'

const Video = ({ size }) => {
  const youtubeOptions = {
    height: size || '1080',
    playerVars: {
      autoplay: 1,
    },
  }

  return <YouTube id='video' opts={youtubeOptions} videoId='bYaPdmhOzzU' />
}

export default Video
