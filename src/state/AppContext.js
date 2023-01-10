import React, {useState} from 'react';






const createAppState = () => {

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
  const [AI, setAI] = useState(""); // - AI Player.... (X or O);

  const [winner, setWinner] = useState("");
  const [AIMoveInProgress, setAIMoveInProgress] = useState(false);
  const [draw, setDraw] = useState(false);
  const [AIFirstMove, setAIFirstMove] = useState(false);

  return {

    player, setPlayer,
    startGame, setStartGame,
    playerName, setPlayerName,
  }
}


const AppState = createAppState();


export const AppContext = React.createContext(AppState)
