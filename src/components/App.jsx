import './App.css'
import './Square.css'
import React from 'react'
import GameScreen from './layout/GameScreen'
import Board from './layout/Board'

export default props => (
  <div className = 'App'>
    <GameScreen 
      title = 'Jogo da Velha'
      status = 'Em construção'
    >
      <Board />
    </GameScreen>
  </div>
)
