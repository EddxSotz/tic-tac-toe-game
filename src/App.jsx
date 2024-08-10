import React from 'react';
import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';
import { WINNING_COMBINATIONS } from './assets/constants.jsx';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(turns) {
  let currentPlayer = 'X';
  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {  
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);
  let gameBoard = initialGameBoard;
  let winner = null;

  for (const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard [row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    const aVal = gameBoard[a.row][a.column];
    const bVal = gameBoard[b.row][b.column];
    const cVal = gameBoard[c.row][c.column];

    if (aVal && aVal === bVal && aVal === cVal) {
      winner = aVal;      
    }
  }

  const isDraw = gameTurns.length === 9 && !winner;
  
  function handlePlayerChange(rowIndex, cellIndex) {
    setGameTurns((previousTurns) => {
      const currentPlayer = deriveActivePlayer(previousTurns);    
      const updatedTurns = [
        {square: {row:rowIndex, col:cellIndex}, player:currentPlayer}, ...previousTurns
      ];
      return updatedTurns;
    }
  );
  }

  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialPlayerName='Player 1' symbol='X' isActive={currentPlayer==='X'}/> 
          <Player initialPlayerName='Player 2' symbol='O' isActive={currentPlayer==='O'}/>        
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} />}
        <GameBoard onSelectCell={handlePlayerChange} board={gameBoard}/>
        <p>Game Board</p>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
