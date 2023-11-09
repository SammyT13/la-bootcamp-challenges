import React, {useState} from 'react'
import './App.css'
import RollDice from './components/RollDice'
import dice1 from './assets/dice1.png'
import dice2 from './assets/dice2.png'
import dice3 from './assets/dice3.png'
import dice4 from './assets/dice4.png'
import dice5 from './assets/dice5.png'
import dice6 from './assets/dice6.png'


const App = () => {
  const dice = [dice1, dice2, dice3, dice4, dice5, dice6]

  const [player1Dice, setPlayer1Dice] = useState(dice1)
  const [player2Dice, setPlayer2Dice] = useState(dice1)

  const handlePlayer1Dice = () => {
    const randomDice = Math.floor(Math.random() * dice.length)
    setPlayer1Dice(dice[randomDice])
  }

  const handlePlayer2Dice = () => {
    const randomDice = Math.floor(Math.random() * dice.length)
    setPlayer2Dice(dice[randomDice])
  }

  return(
    <>
      <h1>Dice Game</h1>
        <div className='main-container'>
          <div className='players'>
            <div className='player-1'>
              <h3>Player 1</h3>
              <img src={player1Dice} alt="dice" />
            </div>
            <div className='player-2'>
              <img src={player2Dice} alt="dice" />
            </div>
          </div>
        </div>
      <br />
      <RollDice handlePlayer1Dice={handlePlayer1Dice} handlePlayer2Dice={handlePlayer2Dice}/>
    </>
  )
}

export default App
