import React from 'react'

const Button = ({ variant, children }) => {
  return (
    <button className={`btn ${variant && `btn-${variant}`}`}>{children}</button>
  )
}

export default Button
