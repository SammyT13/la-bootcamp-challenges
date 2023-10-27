import React, { useState } from "react";
import '../App.css'

const Box =() => {
    const arr = ['blue', 'red', 'green', 'yellow', 'orange', 'purple']
    const [color, setColor] = useState(arr[Math.floor(Math.random() * arr.length)])

    const colorChange = () => {
        const colors =['blue', 'red', 'green', 'yellow', 'orange', 'purple']

        const randomColor = Math.floor(Math.random() * colors.length)

        setColor(colors[randomColor])
    }

    return (
        <>
            <h2 style={{color: color}}>Color Box</h2>
            <button className="square" onClick={colorChange} style={{backgroundColor: color}}></button>
        </>
    )
}

export default Box 