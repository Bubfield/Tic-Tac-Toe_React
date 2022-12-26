/*if player has chosen X or O, and has filled
   in their name, then you can start the game*/
const handleStartGame = (e, player, playerName, setStartGame) => {
  e.preventDefault();
  if (player && playerName) {
    setStartGame(true);
  }
};

export { handleStartGame };
