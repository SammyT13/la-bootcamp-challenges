import React from 'react'
import './App.css'
import DiceGame from './components/DiceGame'
import DiceGameWinner from './components/DiceGameWinner'


const App = () => {
  return (
    <>
      <h1>Dice Game</h1>
      <br />
      <br />
      <DiceGame />
      <DiceGameWinner />
    </>
  )
}

export default App
