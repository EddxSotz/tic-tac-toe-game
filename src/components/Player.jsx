import { useState } from "react";

function Player({ initialPlayerName, symbol, isActive, onNameChange }) {
  const [currentEditState, setEditState] = useState(false);
  const [updatedPlayerName, setPlayerName] = useState(initialPlayerName); 

  const editClickEvent = () => {
    setEditState((updateState) => !updateState);
    onNameChange(symbol, updatedPlayerName);
  };

  const handlePlayerNameChange = (event) => {
    setPlayerName(event.target.value);    
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