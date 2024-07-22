import React from 'react';
import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');

  function handlePlayerChange() {
    setCurrentPlayer((prevPlayer) => prevPlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialPlayerName='Player 1' symbol='X' isActive={currentPlayer==='X'}/> 
          <Player initialPlayerName='Player 2' symbol='O' isActive={currentPlayer==='O'}/>        
        </ol>
        <GameBoard onSelectCell={handlePlayerChange} activePlayerSymbol={currentPlayer}/>
        <p>Game Board</p>
      </div>
    </main>
  );
}

export default App;
