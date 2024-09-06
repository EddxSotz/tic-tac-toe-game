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

const initialPlayers = { X: 'Player 1', O: 'Player 2'};

function deriveActivePlayer(turns) {
  let currentPlayer = 'X';
  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    const aVal = gameBoard[a.row][a.column];
    const bVal = gameBoard[b.row][b.column];
    const cVal = gameBoard[c.row][c.column];

    if (aVal && aVal === bVal && aVal === cVal) {
      winner = players[aVal];
      console.log('winner is:' + winner);
    }
  }
  return winner;  
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map( array => [...array])];
  for (const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard [row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(initialPlayers);
    
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);  
  let isDraw = gameTurns.length === 9 && !winner;

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

  function restartGame() {    
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerSymbol, playerName) {    
    setPlayers((previousPlayers) => {      
      return {...previousPlayers, [playerSymbol]: playerName};
    });    
  }

  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialPlayerName={initialPlayers.X} symbol='X' isActive={currentPlayer==='X'} onNameChange={handlePlayerNameChange}/> 
          <Player initialPlayerName={initialPlayers.O} symbol='O' isActive={currentPlayer==='O'} onNameChange={handlePlayerNameChange} />        
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} onRestart={restartGame}/>}
        <GameBoard onSelectCell={handlePlayerChange} board={gameBoard}/>
        <p>Game Board</p>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
