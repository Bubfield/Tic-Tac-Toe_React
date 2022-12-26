function DoesAIMakeFirstMove(
  AI,
  squaresOccupied,
  setAIFirstMove,
  setSquaresOccupied
) {
  if (AI === "X" && !!squaresOccupied[8]) {
    setAIFirstMove(true);
    setTimeout(() => {
      const inputDiv = document.querySelector(".input-div");
      /*if user hits reset button while AI is making first move, 
      stop AI from making move*/
      if (!inputDiv) {
        let randomID = String(Math.ceil((Math.random() + 0.01) * 9));
        document.getElementById(randomID).textContent = AI;
        setSquaresOccupied((prevArr) =>
          prevArr.filter((elem) => elem !== randomID)
        );
        setAIFirstMove(false);
      }
    }, 2000);
  }
}

export { DoesAIMakeFirstMove };
