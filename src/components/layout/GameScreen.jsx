import './GameScreen.css'
import React from 'react'
import Board from './Board'

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares =current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),      
      xIsNext: !this.state.xIsNext,
    });
  }

  render(){
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? 
      'Go to Step ' + move :
      'Go to Begin';
      return (
        <li>
          <button 
            className = 'square' 
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });
    let status;
    if(winner) {
      status = 'Winner is Player ' + winner;
    } else {
      status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return(
        <div className='GameScreen'>
        <div className='Title'>
          {this.props.title}
        </div>
        <div className='Board'>
          <Board 
            squares ={current.squares}
            onClick ={(i) => this.handleClick(i)}
          />
        </div>
        <div className='Status'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
export default GameScreen

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] 
        && squares[a] === squares[b] 
        && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}