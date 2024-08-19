import { useState } from "react";

export function Player({ name, symbol, isActive, onPlayerNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleEditClick() {
    if (isEditing) onPlayerNameChange(symbol, playerName);
    setIsEditing((prevEditing) => !prevEditing);
  }

  function handlePlayerNameChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameBlock;
  if (isEditing) {
    playerNameBlock = (
      <input
        type="text"
        value={playerName}
        onChange={handlePlayerNameChange}
        required
      />
    );
  } else {
    playerNameBlock = <span className="player-name">{playerName}</span>;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">{playerNameBlock}</span>
      <span className="player-score">{symbol} </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
