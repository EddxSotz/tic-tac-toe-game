const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function GameBoard({onSelectCell, turns}) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard [row][col] = player;
  }

  return (    
      <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (         
        <li key={rowIndex}>          
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex}>                
                <button onClick={() => onSelectCell(rowIndex, cellIndex)}>{cell}</button>                              
              </li>
            ))}
          </ol> 
        </li>              
      ))}
      </ol>    
  );
}

export default GameBoard;