import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Image from '../../components/images/Image'

import Rock from '../../assets/icon-rock.svg'
import Paper from '../../assets/icon-paper.svg'
import Scissors from '../../assets/icon-scissors.svg'

import './House.scss'

const House = ({ setScore }) => {
  const picks = ['paper', 'rock', 'scissors']
  const icons = {
    rock: Rock,
    paper: Paper,
    scissors: Scissors
  }

  const navigate = useNavigate()
  const [housePick, SetHousePick] = useState('')
  const [result, setResult] = useState(null)
  const [counter, setCounter] = useState(3)

  const playerPick = useParams().pick

  const getResult = () => {
    if (playerPick !== housePick) {
      if (
        (playerPick === 'rock' && housePick === 'scissors') ||
        (playerPick === 'paper' && housePick === 'rock') ||
        (playerPick === 'scissors' && housePick === 'paper')
      ) {
        setResult('you win')
        setScore((prev) => prev + 1)
        return
      }
      if (
        (playerPick === 'rock' && housePick === 'paper') ||
        (playerPick === 'paper' && housePick === 'scissors') ||
        (playerPick === 'scissors' && housePick === 'rock')
      ) {
        setResult('you lose')
        return
      }
    }
    setResult('draw')
    return
  }

  useEffect(() => {
    if (!picks.includes(playerPick)) return navigate('/')
    SetHousePick(picks[Math.floor(Math.random() * 3)])
    //eslint-disable-next-line
  }, [housePick])

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => setCounter((prev) => prev - 1), 1000)
        : getResult()
    return () => {
      clearInterval(timer)
    }
    //eslint-disable-next-line
  }, [counter, housePick])

  return (
    <div className='house'>
      <div className='house-container'>
        <div className='picked-container'>
          <div className='youpicked'>
            <h3>YOU PICKED</h3>
            <Image
              to={'/'}
              className={playerPick}
              img={icons[playerPick]}
              result={result === 'you win' ? 'win' : ''}
            />
          </div>

          <div className='housepick'>
            <h3>HOUSE PICKED</h3>
            {result ? (
              <Image
                to={'/'}
                className={housePick}
                img={icons[housePick]}
                result={result === 'you lose' ? 'win' : ''}
              />
            ) : (
              <>
                <div className='counter'>{counter}</div>
              </>
            )}
          </div>
        </div>
        {result && (
          <div className='result'>
            <h3>{result}</h3>
            <button onClick={() => navigate('/')}> Play Again </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default House
