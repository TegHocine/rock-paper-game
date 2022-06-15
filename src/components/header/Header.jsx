import React from 'react'

import Logo from '../../assets/logo.svg'

import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__title'>
        <img src={Logo} alt='rock paper logo' />
      </div>
      <div className='header__score'>
        <div className='title'>Score</div>
        <div className='number'>12</div>
      </div>
    </div>
  )
}

export default Header
