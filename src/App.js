import { useState } from "react";
import Gameboard from "./components/Gameboard";

function App() {
  const [player, setPlayer] = useState("");
  const [startGame, setStartGame] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [squaresOccupied, setSquaresOccupied] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
  ]);
  const [win, setWin] = useState(false);
  const [AI, setAI] = useState("");
  const [winner, setWinner] = useState("");
  const [test, setTest] = useState(false);
  const [draw, setDraw] = useState(false);
  const [AIFirstMove, setAIFirstMove] = useState(false);

  const handlePlayer = (e) => {
    let text = e.target.textContent;
    setPlayer(text);
    if (text === "X") {
      setAI("O");
    } else if (text === "O") {
      setAI("X");
    }
  };

  const handleStartGame = (e) => {
    e.preventDefault();
    if (player && playerName) {
      setStartGame(true);
    }
  };

  const handleRestart = () => {
    setPlayer("");
    setStartGame(false);
    setPlayerName("");
    setSquaresOccupied(["0", "1", "2", "3", "4", "5", "6", "7", "8"]);
    setWin(false);
    setAI("");
    setTest(false);
    setDraw(false);
    setWinner("");
    setAIFirstMove(false);
  };

  return (
    <div className="App">
      <h1 className="header">Tic Tac Toe!</h1>
      {!player ? (
        <div className="player-choice">
          <span id="x" onClick={handlePlayer}>
            X
          </span>{" "}
          or{" "}
          <span id="o" onClick={handlePlayer}>
            O
          </span>
          ?
        </div>
      ) : (
        ""
      )}
      {!startGame ? (
        <div className="input-div">
          <p className="what-is-name">What is your name?</p>
          <form>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="input-style"
            />
            <button onClick={handleStartGame} id="start">
              Start Game
            </button>
          </form>
        </div>
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
            test,
            setTest,
            draw,
            setDraw,
            AIFirstMove,
            setAIFirstMove,
          }}
        />
      )}
      <div>
        <button id="restart" type="button" onClick={handleRestart}>
          Restart Game
        </button>
      </div>
      <div className="first-move-div">
        <h1 className="first-move">
          Note: X makes the first move. You must select X or O, and put in your
          name before you can start the game.
        </h1>
      </div>
    </div>
  );
}

export default App;
