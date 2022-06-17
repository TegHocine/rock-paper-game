import React, { useState } from 'react'

import SvgRules from '../../assets/image-rules.svg'

import './rules.scss'

const Rules = () => {
  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
      <div className='rules-btn-wrapper'>
        <button className='rules-btn' onClick={openModal}>
          Rules
        </button>
      </div>

      <div className={`rules-bg ${isOpen && 'open'}`} onClick={closeModal}>
        <div className={`rules-wrapper ${isOpen && 'open'}`}>
          <div className='title-wrapper'>
            <h2>Rules</h2>
            <button>x</button>
          </div>
          <div className='rules'>
            <img src={SvgRules} alt='describe rules of the game' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Rules
