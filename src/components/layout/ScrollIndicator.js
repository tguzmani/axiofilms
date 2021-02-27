import React from 'react'

const ScrollIndicator = () => {
  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop

    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const progress = `${(scrollPx / winHeightPx) * 100}%`

    setScrolled(progress)
  }

  const [scrolled, setScrolled] = React.useState(0)

  React.useEffect(() => {
    window.addEventListener('scroll', scrollProgress)
  }, [])

  const progressContainerStyle = {
    background: '#220045',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    height: '5px',
    position: 'fixed',
    top: '80px',
    left: 0,
    width: '100vw',
    zIndex: 99,
  }

  const progressBarStyle = {
    height: '5px',
    background: '#efb810',
    width: scrolled,
  }

  return (
    <div className='scroll-indicator-container' style={progressContainerStyle}>
      <div className='scroll-indicator-bar' style={progressBarStyle}></div>
    </div>
  )
}

export default ScrollIndicator
