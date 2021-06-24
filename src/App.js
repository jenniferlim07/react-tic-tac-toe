import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null)


  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const changeSquares = (id) => {

    // ES6 way to clone an array
    const newSquares = [...squares];

    newSquares.forEach((board) => {
      board.forEach((square) => {
        // console.log('square '+ square)
        if (square.id === id) {
          square.value = player;
          if (player === PLAYER_1) {
            setPlayer(PLAYER_2);
          } else {
            setPlayer(PLAYER_1);
          };
        };
      });
    });

    setSquares(newSquares);
    // console.log('end test '+ squares)
    console.log('*** '+ checkForWinner())
    setWinner(checkForWinner())
  }


  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

    for (let i = 0; i < 3; i++) {
      if (squares[i][0].value !== null) {
        if (squares[i][0].value === squares[i][1].value && squares[i][0].value === squares[i][2].value) {
            console.log('i 0 ' + squares[i][0].value)
            return squares[i][0].value;
        }
      }
      if (squares[0][i].value === squares[1][i].value && squares[0][i].value === squares[2][i].value) {
        console.log('0 i ' + squares[0][i].value)  
        return squares[0][i].value;
      } 

    }

    if (squares[0][0].value === squares[1][1].value && squares[0][0].value === squares[2][2].value) {
      console.log('0 0 ' + squares[0][0].value)
      return squares[0][0].value;
    } else if (squares[0][2].value === squares[1][1].value && squares[0][2].value === squares[2][0].value) {
      console.log('0 2 ' + squares[0][2].value)
      return squares[0][2].value;
    }
    console.log('null')
    return 'null';
  }

  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setPlayer(PLAYER_1);
    setWinner(null);
  }

  let winnerName = (winner === null ? `Current Player: ${player}` : `The winner is Player ${winner}`)
  // const winnerName = () => {
  //   if (winner == 'X') {
  //     return `Player ${PLAYER_1}`
  //   } else if (winner == 'O') {
  //     return `Player ${PLAYER_2}`
  //   } else if (!winner) {
  //     return '';
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        {/* <h2>The winner is ...{winnerName} -- Fill in for wave 3 </h2> */}
        <h2> {winnerName} </h2>
        <button onClick = {() => resetGame()}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={changeSquares}/>
      </main>
    </div>
  );
}

export default App;
