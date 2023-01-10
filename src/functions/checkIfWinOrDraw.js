function checkIfWinOrDraw(
  // player,
  // setWinner,
  // playerName,
  // squaresOccupied,
  // setDraw,
  // setWin
  AppState
) {





  const {
    player,
    setWinner,
    playerName,
    squaresOccupied,
    setDraw,
    setWin
  } = AppState;


  function isWinOrDraw(num1, num2, num3) {
    /*if squares are all occupied by the player or AI,
    and these squares are all equal to each other, this is a win*/
    if (num1 && num2 && num3 && num1 === num2 && num1 === num3) {
      if (num1 === player) {
        setWinner(playerName);
      } else {
        setWinner("The Computer");
      }
      return true;
    } else {
      return false;
    }
  }

  let one = document.getElementById("1").textContent;
  let two = document.getElementById("2").textContent;
  let three = document.getElementById("3").textContent;
  let four = document.getElementById("4").textContent;
  let five = document.getElementById("5").textContent;
  let six = document.getElementById("6").textContent;
  let seven = document.getElementById("7").textContent;
  let eight = document.getElementById("8").textContent;
  let nine = document.getElementById("9").textContent;

  /*if all squares are occupied and isWinOrDraw returns false
  for all winning square combinations then this is a draw*/
  if (
    !squaresOccupied[0] &&
    !isWinOrDraw(one, two, three) &&
    !isWinOrDraw(four, five, six) &&
    !isWinOrDraw(seven, eight, nine) &&
    !isWinOrDraw(one, four, seven) &&
    !isWinOrDraw(two, five, eight) &&
    !isWinOrDraw(three, six, nine) &&
    !isWinOrDraw(one, five, nine) &&
    !isWinOrDraw(three, five, seven)
  ) {
    setDraw(true);
    /*if isWinOrDraw returns true for any combination
    of winning squares then this is a win*/
  } else if (
    isWinOrDraw(one, two, three) ||
    isWinOrDraw(four, five, six) ||
    isWinOrDraw(seven, eight, nine) ||
    isWinOrDraw(one, four, seven) ||
    isWinOrDraw(two, five, eight) ||
    isWinOrDraw(three, six, nine) ||
    isWinOrDraw(one, five, nine) ||
    isWinOrDraw(three, five, seven)
  ) {
    setWin(true);
  }
}

export { checkIfWinOrDraw };
