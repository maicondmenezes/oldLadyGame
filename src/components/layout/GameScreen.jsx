import './GameScreen.css'
import React from 'react'

export default props =>
  <div className='GameScreen'>
    <div className='Board'>
      {props.children}
    </div>
    <div className='Status'>
      {props.status}
    </div>
  </div>