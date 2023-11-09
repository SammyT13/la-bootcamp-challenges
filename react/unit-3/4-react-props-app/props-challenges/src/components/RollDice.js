import React from "react";

const RollDice = (props) => {
    return(
        <>
          <button onClick={() => {
                props.handlePlayer1Dice(); props.handlePlayer2Dice()
            }}>Roll The Dice</button>
        </>
    )
}

export default RollDice