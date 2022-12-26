import React from "react";
import { useEffect } from "react";
import WinOrDraw from "./WinOrDraw";
import { checkIfWinOrDraw } from "../functions/checkIfWinOrDraw";
import { gameBoardDisplay } from "../functions/gameBoardDisplay";
import RenderGameBoardSquares from "./RenderGameBoardSquares";
import { DoesAIMakeFirstMove } from "../functions/DoesAIMakeFirstMove";

const Gameboard = ({ props }) => {
  const {
    setSquaresOccupied,
    player,
    setWin,
    squaresOccupied,
    win,
    playerName,
    AI,
    winner,
    setWinner,
    draw,
    setDraw,
    AIMoveInProgress,
    setAIMoveInProgress,
    AIFirstMove,
    setAIFirstMove,
  } = props;

  useEffect(() => {
    /*if AI is X && no squares are occupied, 
    this means we are on the first move, 
    and that the AI gets to make the first move*/
    DoesAIMakeFirstMove(
      AI,
      squaresOccupied,
      setAIFirstMove,
      setSquaresOccupied
    );

    /*function that runs every time a move is made,
    which determines if there is a win or draw present
    based on the squares occupied and their text content*/
    checkIfWinOrDraw(
      player,
      setWinner,
      playerName,
      squaresOccupied,
      setDraw,
      setWin
    );

    //hide gameboard and show winner or draw if there is a win or draw
    gameBoardDisplay(win, draw);
  }, [
    squaresOccupied,
    win,
    player,
    playerName,
    setWin,
    setWinner,
    setDraw,
    setSquaresOccupied,
    draw,
    AI,
    setAIFirstMove,
  ]);

  return (
    <>
      <RenderGameBoardSquares
        props={{
          AIFirstMove,
          AIMoveInProgress,
          setAIMoveInProgress,
          player,
          squaresOccupied,
          setSquaresOccupied,
          AI,
        }}
      />
      <WinOrDraw props={{ winner, draw }} />
    </>
  );
};

export default Gameboard;
