import React from "react";
import { handleStartGame } from "../functions/handleStartGame";

const WhatIsNameInputAndStartButton = ({ props }) => {
  const { playerName, setPlayerName, player, setStartGame } = props;

  return (
    <div className="input-div">
      <p className="what-is-name">What is your name?</p>
      <form>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="input-style"
        />
        <button
          onClick={(e) => handleStartGame(e, player, playerName, setStartGame)}
          id="start"
        >
          Start Game
        </button>
      </form>
    </div>
  );
};

export default WhatIsNameInputAndStartButton;
