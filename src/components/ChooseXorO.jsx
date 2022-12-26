import React from "react";
import { handlePlayer } from "../functions/handlePlayer";

const ChooseXorO = ({ props }) => {
  const { setPlayer, setAI } = props;
  return (
    <div className="player-choice">
      <span id="x" onClick={(e) => handlePlayer(e, setPlayer, setAI)}>
        X
      </span>{" "}
      or{" "}
      <span id="o" onClick={(e) => handlePlayer(e, setPlayer, setAI)}>
        O
      </span>
      ?
    </div>
  );
};

export default ChooseXorO;
