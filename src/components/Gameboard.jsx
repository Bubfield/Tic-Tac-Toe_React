import React from "react";
import { useLayoutEffect, useRef } from "react";
import Win from "./Win";

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
    test,
    setTest,
    AIFirstMove,
    setAIFirstMove,
  } = props;

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    function ultimate(num1, num2, num3) {
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

    let zero = document.getElementById("0").textContent;
    let one = document.getElementById("1").textContent;
    let two = document.getElementById("2").textContent;
    let three = document.getElementById("3").textContent;
    let four = document.getElementById("4").textContent;
    let five = document.getElementById("5").textContent;
    let six = document.getElementById("6").textContent;
    let seven = document.getElementById("7").textContent;
    let eight = document.getElementById("8").textContent;

    if (AI === "X" && !!squaresOccupied[8]) {
      setAIFirstMove(true);
      setTimeout(() => {
        let randomID = String(Math.floor(Math.random() * 9));
        document.getElementById(randomID).textContent = AI;
        setSquaresOccupied((prevArr) =>
          prevArr.filter((elem) => elem !== randomID)
        );
        setAIFirstMove(false);
      }, 2000);
    }

    if (
      !squaresOccupied[0] &&
      !ultimate(zero, one, two) &&
      !ultimate(three, four, five) &&
      !ultimate(six, seven, eight) &&
      !ultimate(zero, three, six) &&
      !ultimate(one, four, seven) &&
      !ultimate(two, five, eight) &&
      !ultimate(zero, four, eight) &&
      !ultimate(two, four, six)
    ) {
      setDraw(true);
    } else if (
      ultimate(zero, one, two) ||
      ultimate(three, four, five) ||
      ultimate(six, seven, eight) ||
      ultimate(zero, three, six) ||
      ultimate(one, four, seven) ||
      ultimate(two, five, eight) ||
      ultimate(zero, four, eight) ||
      ultimate(two, four, six)
    ) {
      setWin(true);
    }

    const render = () => {
      if (win || draw) {
        let gameboard = document.querySelector(".gameboard");
        let win = document.querySelector(".win");
        gameboard.style.display = "none";
        win.style.display = "flex";
      }
    };

    render();
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

  let fakeArray2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

  const handleClick = (e) => {
    if (AIFirstMove) {
      return;
    }
    let textContent = e.target.textContent;
    if (!textContent) {
      if (!test) {
        setTest(true);
        let text = e.target.id;
        e.target.textContent = player;
        let uhArr = squaresOccupied.filter((elem) => elem !== text);
        setSquaresOccupied((prevArr) =>
          prevArr.filter((elem) => elem !== text)
        );
        let randomNum = Math.floor(Math.random() * uhArr.length);
        let randomIndex = uhArr[randomNum];

        setTimeout(() => {
          let win = document.querySelector(".win");
          if (win.style.display !== "flex") {
            setTest(false);
            document.getElementById(randomIndex).textContent = AI;
            uhArr = uhArr.filter((elem) => elem !== randomIndex);
            setSquaresOccupied(uhArr);
          } else {
            return;
          }
        }, 2000);
      } else {
        return;
      }
    } else {
      return;
    }
  };

  return (
    <>
      <div className="gameboard">
        {fakeArray2.map((item) => (
          <div
            key={item}
            className="gameboard-square"
            onClick={handleClick}
            id={item}
          ></div>
        ))}
      </div>
      <Win winner={winner} draw={draw} />
    </>
  );
};

export default Gameboard;
