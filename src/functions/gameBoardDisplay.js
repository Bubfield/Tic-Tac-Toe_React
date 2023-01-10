
const gameBoardDisplay = (win, draw) => {
  if (win || draw) {
    let gameboard = document.querySelector(".gameboard");
    let win = document.querySelector(".win");
    gameboard.style.display = "none";
    win.style.display = "flex";
  }
};

export { gameBoardDisplay };
