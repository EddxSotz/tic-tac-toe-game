import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function GameBoard({onSelectCell, activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleUpdateGameBoard(rowIndex, cellIndex) {
    setGameBoard((prevGameBoard) => {
      const updateGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];          
      updateGameBoard[rowIndex][cellIndex] = activePlayerSymbol;      
      return updateGameBoard;   
    }); 
    onSelectCell();   
  }
    

  return (    
      <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (         
        <li key={rowIndex}>          
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex}>                
                <button onClick={() => handleUpdateGameBoard(rowIndex,cellIndex)}>{cell}</button>                              
              </li>
            ))}
          </ol> 
        </li>              
      ))}
      </ol>    
  );
}

export default GameBoard;