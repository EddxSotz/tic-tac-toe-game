import React from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players">
          <Player initialPlayerName='Player 1' symbol='X'/> 
          <Player initialPlayerName='Player 2' symbol='O'/>        
        </ol>
        <GameBoard />
        <p>Game Board</p>
      </div>
    </main>
  );
}

export default App;
