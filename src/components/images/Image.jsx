import React from 'react'
import { Link } from 'react-router-dom'

import './Image.scss'
const Image = ({ img, to, className = '', result }) => {
  return (
    <Link to={to}>
      <img src={img} alt={to} className={`pick ${className} ${result}`} />
    </Link>
  )
}

export default Image
