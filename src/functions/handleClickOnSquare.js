import {useContext} from 'React';

import {AppContext} from '../state/AppContext';

const UpdateSquaresArrayAndMakeMoves = (
  e,
  // player,
  // squaresOccupied,
  // setAIMoveInProgress,
  // AI,
  // setSquaresOccupied
) => {


  const {

    player,
    squaresOccupied,
    setAIMoveInProgress,
    AI,
    setSquaresOccupied

  } = useContext(AppContext);



  //player move is made
  let chosenSquare = e.target.id;
  e.target.textContent = player;
  /*copy of squares array that is up to date and is
  used to help determine the available squares for the AI
  to make its move*/
  let copyOfSquaredOccupiedArray = squaresOccupied.filter(
    (elem) => elem !== chosenSquare
  );
  //squares array is updated
  setSquaresOccupied((prevArr) =>
    prevArr.filter((elem) => elem !== chosenSquare)
  );
  //random index is generated
  let randomNum = Math.floor(Math.random() * copyOfSquaredOccupiedArray.length);
  let randomIndex = copyOfSquaredOccupiedArray[randomNum];

  setTimeout(() => {
    let win = document.querySelector(".win");
    /*makes sure win exists before executing next if statement
    this is to stop error of when pressing the reset button
    immediately after making a move, the AI still
    tries to make a move, causing an error
    because it tries to grab win.style.display, but win
    does not exist*/
    if (win) {
      /*if the Win component's style does not equal flex, this
      means the gameboard is displayed which means the AI can make a move.
      used to stop the AI from making moves if the game is over*/
      if (win.style.display !== "flex") {
        setAIMoveInProgress(false);
        //AI makes its move
        document.getElementById(randomIndex).textContent = AI;
        //copy of squares array and squares array are both updated
        copyOfSquaredOccupiedArray = copyOfSquaredOccupiedArray.filter(
          (elem) => elem !== randomIndex
        );
        setSquaresOccupied(copyOfSquaredOccupiedArray);
      }
    }
  }, 2000);
};

const handleClickOnSquare = (
  e,
  // AIFirstMove,
  // AIMoveInProgress,
  // setAIMoveInProgress,
  // player,
  // squaresOccupied,
  // setSquaresOccupied,
  // AI
) => {


  const {

    AIFirstMove,
    AIMoveInProgress,
    setAIMoveInProgress,
    player,
    squaresOccupied,
    setSquaresOccupied,
    AI

  } = useContext(AppContext);

  /*if AI is X, then it gets to make the first move,
    so this prevents the user from making a move until AI has made it*/
  if (AIFirstMove) {
    return;
  }
  /*if square does not already have text content,
    then the user has made a valid move*/
  let textContent = e.target.textContent;
  if (!textContent) {
    //if AI is not in the process of making a move, then user can make a move
    if (!AIMoveInProgress) {
      setAIMoveInProgress(true);
      UpdateSquaresArrayAndMakeMoves(
        e,
        player,
        squaresOccupied,
        setAIMoveInProgress,
        AI,
        setSquaresOccupied
      );
    }
  }
};


const executePlayerMove = (where) => {

  // - who dun it
  // where did they do it?

  // - look up the current gameboard state
  // - validate the move location:

  const {player} = useContext(AppContext);


  const isValidMove = validateMoveLocation(where);
  if (!isValidMove) {
    // - display a message "can't do that!"
    return false;
  }

  // do the move:
  updateBoard(where);


  // - determine whether the game is won or tied....
  const gameState = appState.gameState;
  if (calcWin()) gameState = 'WIN';
  else if (calcTie()) gameState = 'TIE';

  setGameState(gameState);

  return isValidMove;
}


const validateMoveLocation = (where) => {


  // - return true or false (is a valid location)
  return true;
}

const updateBoard = (where) => {
  // - set the state for adding the new mark on the board...
}


const calcWin = () => {
  // - is any column, row-vert or diag  all X's or O's
  return false;
}

const calcTie = () => {
  // is the board full?
  return true;
}


const handleGamePositionClick = (squareID) => {

  let chosenSquare = squareID;

  // - return true if valid move...
  return executePlayerMove(curPlayer, squareID);

}



export { handleClickOnSquare, handleGamePositionClick, executePlayerMove };



