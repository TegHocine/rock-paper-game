import React from 'react'

import Image from '../../components/images/Image'

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
          <Image to={'rock'} img={Rock} className='rock' />
          <Image to={'paper'} img={Paper} className='paper' />
        </div>
        <Image to={'scissors'} img={Scissors} className='scissors' />
      </div>
    </div>
  )
}

export default PlayerChoice
