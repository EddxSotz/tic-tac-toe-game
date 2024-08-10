
function Log ({turns}) {
  return (
    <ol id='log'>
      {turns.map((turn, index) => (
        <li key={index}>
          {`Player ${turn.player} selected square ${turn.square.row}, ${turn.square.col}`}
        </li>
      ))}
    </ol>
  )
}

export default Log;