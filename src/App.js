import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PlayerChoice from './routes/playerChoice/PlayerChoice'
import House from './routes/house/House'

import Header from './components/header/Header'
import Rules from './components/rules/Rules'
import './App.scss'

function App() {
  const [score, setScore] = useState(0)
  return (
    <div className='App'>
      <Header score={score} />
      <BrowserRouter>
        <Routes>
          <Route index element={<PlayerChoice />} />
          <Route path=':pick' element={<House setScore={setScore} />} />
          <Route path='*' element={<PlayerChoice />} />
        </Routes>
      </BrowserRouter>
      <Rules />
    </div>
  )
}

export default App
