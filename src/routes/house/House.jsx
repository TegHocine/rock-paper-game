import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Image from '../../components/images/Image'

import Rock from '../../assets/icon-rock.svg'
import Paper from '../../assets/icon-paper.svg'
import Scissors from '../../assets/icon-scissors.svg'

import './House.scss'

const House = () => {
  const picks = ['paper', 'rock', 'scissors']
  const icons = {
    rock: Rock,
    paper: Paper,
    scissors: Scissors
  }

  const navigate = useNavigate()
  const [housePick, SetHousePick] = useState('')

  const playerPick = useParams().pick

  useEffect(() => {
    if (!picks.includes(playerPick)) return navigate('/')
    SetHousePick(picks[Math.floor(Math.random() * 3)])
    //eslint-disable-next-line
  }, [])

  return (
    <div className='house'>
      Player Pick: {playerPick}
      House Pick: {housePick}
      <div className='house-container'>
        <div className='picked-container'>
          <div className='youpicked'>
            <h3>YOU PICKED</h3>
            <Image
              to={playerPick}
              className={playerPick}
              img={icons[playerPick]}
            />
          </div>

          <div className='housepick'>
            <h3>HOUSE PICKED</h3>
            <Image
              to={housePick}
              className={housePick}
              img={icons[housePick]}
            />
          </div>
        </div>

        <div className='result'>
          <h3>you lose</h3>
          <button onClick={() => navigate('/')}> Play Again </button>
        </div>
      </div>
    </div>
  )
}

export default House
