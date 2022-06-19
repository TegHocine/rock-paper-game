import React from 'react'
import { Link } from 'react-router-dom'

import Rock from '../../assets/icon-rock.svg'
import Paper from '../../assets/icon-paper.svg'
import Scissors from '../../assets/icon-scissors.svg'
import Triangle from '../../assets/bg-triangle.svg'

import './PlayerChoice.scss'

const PlayerChoice = () => {
  return (
    <div className='playerPick'>
      <div
        className='pick-wrapper'
        style={{
          backgroundImage: `url(${Triangle})`
        }}>
        <div className='top'>
          <Link to='rock'>
            <img src={Rock} alt='rock' className='rock pick' />
          </Link>
          <Link to='paper'>
            <img src={Paper} alt='paper' className='paper pick' />
          </Link>
        </div>
        <Link to='scissors'>
          <img src={Scissors} alt='scissors' className='scissors pick' />
        </Link>
      </div>
    </div>
  )
}

export default PlayerChoice
