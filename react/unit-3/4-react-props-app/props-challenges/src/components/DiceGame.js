import React, { useState } from "react";
import '../App.css'
import RollDice from "./RollDice";
import dice1 from '../assets/dice1.png'
import dice2 from '../assets/dice2.png'
import dice3 from '../assets/dice3.png'
import dice4 from '../assets/dice4.png'
import dice5 from '../assets/dice5.png'
import dice6 from '../assets/dice6.png'

const DiceGame = () => {
    const dice = [dice1, dice2, dice3, dice4, dice5, dice6]

    const [player1Dice, setPlayer1Dice] = useState(dice1)
    const [player2Dice, setPlayer2Dice] = useState(dice1)
    const [player1DiceNum, setPlayer1DiceNum] = useState(0)
    const [player2DiceNum, setPlayer2DiceNum] = useState(0)
    let p1Dice = 0
    let p2Dice = 0
    let winner = ''

    const handlePlayer1Dice = () => {
        const p1Dice = Math.floor(Math.random() * dice.length)
        setPlayer1Dice(dice[p1Dice])
        setPlayer1DiceNum(p1Dice + 1)
    }

    const handlePlayer2Dice = () => {
        const p2Dice = Math.floor(Math.random() * dice.length)
        setPlayer2Dice(dice[p2Dice])
        setPlayer2DiceNum(p2Dice + 1)
    }

    p1Dice = player1DiceNum
    p2Dice = player2DiceNum

    const determineWinner = (p1, p2) => {
        winner = p1 > p2 ? winner = 'Player 1 Wins!' : p1 < p2 ? winner = 'Player 2 Wins!' : winner = 'Both Winners!'
        return winner
    }

    determineWinner(p1Dice, p2Dice)

    return (
        <>
            <div id="results">
                <h3> Press To Play </h3> {p1Dice !== 0 && p2Dice !== 0 && <h3>Winner: {determineWinner(p1Dice, p2Dice)}</h3>}
            </div>
            <div className='main-container'>
                <div className='players'>
                    <div className='player-1'>
                        <h3>Player 1</h3>
                        <img src={player1Dice} alt="dice" id='p1' />
                    </div>
                    <div className='player-2'>
                        <h3>Player 2</h3>
                        <img src={player2Dice} alt="dice" id='p2' />
                    </div>
                </div>
            </div>
            <RollDice handlePlayer1Dice={handlePlayer1Dice} handlePlayer2Dice={handlePlayer2Dice} />
        </>
    )
}

export default DiceGame