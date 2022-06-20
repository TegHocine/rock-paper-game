import React from 'react'
import { Link } from 'react-router-dom'

import './Image.scss'
const Image = ({ img, to, className = '' }) => {
  return (
    <Link to={to}>
      <img src={img} alt={to} className={`pick ${className}`} />
    </Link>
  )
}

export default Image
