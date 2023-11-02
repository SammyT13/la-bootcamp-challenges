import React from 'react'
import Box from './components/Box'
import './App.css'


const App = () => {
  return(
    <>
      <h1>Color Box App</h1>
      <div className='container'>
        <main>
          <div className='box-1'>
            <Box /> 
          </div>
          <div className='box-2'>
            <Box />
          </div>
          <div className='box-3'>
            <Box />
          </div> 
        </main>
      </div>
    </>
  )
}

export default App;
