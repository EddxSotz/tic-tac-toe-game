const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function GameBoard() {
  return (    
      <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (         
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex}>
                <button>{cell}</button>
              </li>
            ))}
          </ol> 
        </li>              
      ))}
      </ol>    
  );
}

export default GameBoard;