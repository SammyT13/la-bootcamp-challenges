import React, {useState} from "react";
import '../App.css'
import RollDice from "./RollDice";
import dice1 from '../assets/dice1.png'
import dice2 from '../assets/dice2.png'
import dice3 from '../assets/dice3.png'
import dice4 from '../assets/dice4.png'
import dice5 from '../assets/dice5.png'
import dice6 from '../assets/dice6.png'

const PlayersDice = () => {
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
            <div className='main-container'>
                <div className='players'>
                    <div className='player-1'>
                        <h3>Player 1</h3>
                        <img src={player1Dice} alt="dice" id='p1'/>
                    </div>
                    <div className='player-2'>
                        <h3>Player 2</h3>
                        <img src={player2Dice} alt="dice" id='p2'/>
                    </div>
                 </div>
            </div>
            <RollDice handlePlayer1Dice={handlePlayer1Dice} handlePlayer2Dice={handlePlayer2Dice} />
        </>
    )
}

export default PlayersDice