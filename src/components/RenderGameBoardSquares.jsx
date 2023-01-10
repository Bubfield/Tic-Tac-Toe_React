import React, {useState} from 'react';
import {executePlayerMove, handleClickOnSquare, handleGamePositionClick} from '../functions/handleClickOnSquare';
import {useContext} from 'react';
import {AppContext} from '../state/AppContext';



const GameBoardSquare = ({ props }) => {

  const {index} = props;
  const [text, setText] = useState('');
  const {player} = useContext(AppContext);


  const clickHandler = (e) => {

    const squareID = e.target.id;
    if (executePlayerMove(squareID)) {
      setText(player);
    }
  }

  const divProps = {
    key: index,
    className: "gameboard-square",
    onClick: clickHandler,
    id: index + 1
  };

  return (

    <div {...divProps}>
      {text}
    </div>

  );

}



const RenderGameBoardSquares = ({ props }) => {

  const boardSquares = Array(9).fill(0); // - creates 9 divs for displaying the board...

  return (
    <div className="gameboard">
      {boardSquares.map((item, index) => <GameBoardSquare key={index} index={index} />)}
    </div>
  );
};

export default RenderGameBoardSquares;
