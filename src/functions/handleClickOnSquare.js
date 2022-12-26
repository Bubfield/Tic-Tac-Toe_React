const UpdateSquaresArrayAndMakeMoves = (
  e,
  player,
  squaresOccupied,
  setAIMoveInProgress,
  AI,
  setSquaresOccupied
) => {
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
  AIFirstMove,
  AIMoveInProgress,
  setAIMoveInProgress,
  player,
  squaresOccupied,
  setSquaresOccupied,
  AI
) => {
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

export { handleClickOnSquare };
