import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/colorCard";
import timeout from "./utils/utils";
function App() {
  const colorList = ["red", "blue", "yellow", "green"];
  const initPlay = {
    isDisplay: false,
    displayPattern: [],
    score: 0,
    isUserPlay: false,
    userPattern: [],
  };
  const [isOn, setIsOn] = useState(false);
  const [play, setPlay] = useState(initPlay);
  const [flashColor, setFlashColor] = useState("");
  // USER CLICKS START
  function startHandle() {
    setIsOn(true);
  }
  // play.isOn changed. Change isDisplay.
  useEffect(() => {
    if (isOn) {
      setPlay({ ...initPlay, isDisplay: true });
    }
  }, [isOn]);

  // isDisplay is true. Add a color to display pattern.
  useEffect(() => {
    if (isOn && play.isDisplay) {
      let newColor = colorList[Math.floor(Math.random() * 4)];
      const copyColors = [...play.displayPattern];
      copyColors.push(newColor);
      setPlay({ ...play, displayPattern: copyColors });
    }
  }, [isOn, play.isDisplay]);

  // display all colors from pattern
  useEffect(() => {
    if (isOn && play.isDisplay && play.displayPattern.length) {
      displayColors();
    }
  }, [isOn, play.isDisplay, play.displayPattern.length]);

  async function displayColors() {
    await timeout(0.5);
    for (let i = 0; i < play.displayPattern.length; i++) {
      setFlashColor(play.displayPattern[i]);
      await timeout(0.5);
      setFlashColor("");
      await timeout(0.5);

      if (i === play.displayPattern.length - 1) {
        const copyColors = [...play.displayPattern];
        setPlay({
          ...play,
          isDisplay: false,
          isUserPlay: true,
          userPattern: copyColors.reverse(),
        });
      }
    }
  }

  async function cardClickHandle(color) {
    if (!play.isDisplay && play.isUserPlay) {
      const copyUserPattern = [...play.userPattern];
      const lastColor = copyUserPattern.pop();
      setFlashColor(color);

      if (color === lastColor) {
        if (copyUserPattern.length) {
          setPlay({ ...play, userPattern: copyUserPattern });
        } else {
          await timeout(0.5);
          setPlay({
            ...play,
            isDisplay: true,
            isUserPlay: false,
            score: play.displayPattern.length,
            userPattern: [],
          });
        }
      } else {
        await timeout(0.5);
        setPlay({ ...initPlay, score: play.displayPattern.length });
      }
      await timeout(0.5);
      setFlashColor("");
    }
  }

  return (
    <div className="app">
      <div className="card-wrapper">
        {colorList &&
          colorList.map((v, i) => (
            <Cards
              key={v}
              onClick={() => {
                cardClickHandle(v);
              }}
              flash={flashColor === v}
              color={v}
            />
          ))}
      </div>

      {!isOn && !play.score && (
        <button className="start-button" onClick={startHandle}>
          Start
        </button>
      )}
      {isOn && (play.isDisplay || play.isUserPlay) && (
        <div className="score">{play.score}</div>
      )}
    </div>
  );
}

export default App;
