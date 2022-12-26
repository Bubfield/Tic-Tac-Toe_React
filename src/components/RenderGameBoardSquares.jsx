import React from "react";
import { handleClickOnSquare } from "../functions/handleClickOnSquare";

const RenderGameBoardSquares = ({ props }) => {
  const {
    AIFirstMove,
    AIMoveInProgress,
    setAIMoveInProgress,
    player,
    squaresOccupied,
    setSquaresOccupied,
    AI,
  } = props;
  return (
    <div className="gameboard">
      {Array(9)
        .fill(0)
        .map((item, index) => (
          <div
            key={index}
            className="gameboard-square"
            onClick={(e) =>
              handleClickOnSquare(
                e,
                AIFirstMove,
                AIMoveInProgress,
                setAIMoveInProgress,
                player,
                squaresOccupied,
                setSquaresOccupied,
                AI
              )
            }
            id={index + 1}
          ></div>
        ))}
    </div>
  );
};

export default RenderGameBoardSquares;
