/*set Player to be what they choose(X or O)
  and set AI to be the opposite of that choice*/
const handlePlayer = (e, setPlayer, setAI) => {
  let text = e.target.textContent;
  setPlayer(text);
  if (text === "X") {
    setAI("O");
  } else if (text === "O") {
    setAI("X");
  }
};

export { handlePlayer };
