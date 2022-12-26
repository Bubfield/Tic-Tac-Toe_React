import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Note from "./components/Note";
import RestartButton from "./components/RestartButton";
import WhatIsNameInputAndStartButton from "./components/WhatIsNameInputAndStartButton";
import ChooseXorO from "./components/ChooseXorO";
import TicTacToe from "./components/TicTacToe";

function App() {
  const [player, setPlayer] = useState("");
  const [startGame, setStartGame] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [squaresOccupied, setSquaresOccupied] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);
  const [win, setWin] = useState(false);
  const [AI, setAI] = useState("");
  const [winner, setWinner] = useState("");
  const [AIMoveInProgress, setAIMoveInProgress] = useState(false);
  const [draw, setDraw] = useState(false);
  const [AIFirstMove, setAIFirstMove] = useState(false);

  //reset all state variables
  const handleRestart = () => {
    setPlayer("");
    setStartGame(false);
    setPlayerName("");
    setSquaresOccupied(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    setWin(false);
    setAI("");
    setAIMoveInProgress(false);
    setDraw(false);
    setWinner("");
    setAIFirstMove(false);
  };

  return (
    <div className="App">
      <TicTacToe />
      {!player ? <ChooseXorO props={{ setPlayer, setAI }} /> : ""}
      {!startGame ? (
        <WhatIsNameInputAndStartButton
          props={{ playerName, setPlayerName, player, setStartGame }}
        />
      ) : (
        <Gameboard
          props={{
            player,
            setSquaresOccupied,
            setWin,
            squaresOccupied,
            win,
            playerName,
            AI,
            winner,
            setWinner,
            AIMoveInProgress,
            setAIMoveInProgress,
            draw,
            setDraw,
            AIFirstMove,
            setAIFirstMove,
          }}
        />
      )}
      <RestartButton handleRestart={handleRestart} />
      <Note />
    </div>
  );
}

export default App;
