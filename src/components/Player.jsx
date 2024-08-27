import { useState } from "react";

function Player({ initialPlayerName, symbol, isActive, onNameChange }) {
  const [currentEditState, setEditState] = useState(false);
  const [updatedPlayerName, setPlayerName] = useState(initialPlayerName);

  const editClickEvent = () => {
    setEditState((updateState) => !updateState);
  };

  const handlePlayerNameChange = (event) => {
    setPlayerName(event.target.value);
    currentEditState && onNameChange(symbol, updatedPlayerName);
  };

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!currentEditState ? (
          <>
            <span className="player-name">{updatedPlayerName}</span>
            <span id="player-symbol">{symbol}</span>
          </>
        ) : (
          <>
            <input type="text" required value={updatedPlayerName} onChange={handlePlayerNameChange}/>
          </>
        )}
      </span>
      <button onClick={editClickEvent}>
        {currentEditState ? "Save" : "Edit"}
      </button>
    </li>
  );
}

export default Player;