import React from 'react';
import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handlePlayerChange(rowIndex, cellIndex) {
    setCurrentPlayer((prevPlayer) => prevPlayer === 'X' ? 'O' : 'X');
    setGameTurns((previousTurns) => {
      let currentPlayer = 'X';
      if (previousTurns.length > 0 && previousTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
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
        <GameBoard onSelectCell={handlePlayerChange} turns={gameTurns}/>
        <p>Game Board</p>
      </div>
      <Log />
    </main>
  );
}

export default App;
