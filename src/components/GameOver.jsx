
function GameOver({ winner }) {

  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner ?
        (<p>{winner} has won!</p>) : (
        <p>It's a draw!</p>
        )
      }
      <button>Restart</button>
    </div>
  );
}
export default GameOver;