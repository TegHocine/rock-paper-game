import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PlayerChoice from './routes/playerChoice/PlayerChoice'
import House from './routes/house/House'

import Header from './components/header/Header'
import Rules from './components/rules/Rules'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<PlayerChoice />} />
          <Route path=':id' element={<House />} />
          <Route path='*' element={<PlayerChoice />} />
        </Routes>
      </BrowserRouter>
      <Rules />
    </div>
  )
}

export default App
