
function GameOver({ winner, onRestart }) {

  return (
    <>
    <div id="game-over">
      <h2>Game Over</h2>
      {winner ?
        (<p>{winner} has won!</p>) : (        
        <p>It's a draw!</p>
        )
      }
      <button onClick={onRestart}>Restart</button>
    </div>    
    </>
  );
}
export default GameOver;