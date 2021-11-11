import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HighScores from "./components/HighScores";
import "bootstrap/dist/css/bootstrap.min.css";
// import Popup component
import Popup from "./components/popup";
// import arrow icons
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import Cards from "./components/Cards";
import { timeout } from "./utils/utils";
import { allSounds } from "./utils/utils";
import GameOver from "./components/GameOver";
function App() {
  const colorList = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  const initPlay = {
    isDisplay: false,
    displayPattern: [],
    score: 0,
    isUserPlay: false,
    userPattern: [],
  };
  const [isOn, setIsOn] = useState(false);
  const [game, setGame] = useState(initPlay);
  const [flashColor, setFlashColor] = useState("");
  // popup instruction state
  const [buttonPopup, setButtonPopup] = useState(false);
  // hover state
  const [hover, setHover] = useState(false);
  // USER CLICKS START
  function startHandle() {
    setIsOn(true);
  }
  // Toggle hover function for How to Play button
  const onHover = () => {
    setHover(!hover);
  };
  const [isGameOver, setIsGameOver] = useState(false);

  function restartGame() {
    setIsGameOver(false);
    setGame(initPlay);
    setIsOn(false);
  }
  // play.isOn changed. Change isDisplay.
  useEffect(() => {
    if (isOn) {
      setGame({ ...initPlay, isDisplay: true });
    }
    // eslint-disable-next-line
  }, [isOn]);

  // isDisplay is true. Add a color to display pattern.
  useEffect(() => {
    if (isOn && game.isDisplay) {
      let newColor = colorList[Math.floor(Math.random() * 8)];
      const copyColors = [...game.displayPattern];
      copyColors.push(newColor);
      setGame({ ...game, displayPattern: copyColors });
    }
    // eslint-disable-next-line
  }, [isOn, game.isDisplay]);

  // display all colors from pattern
  useEffect(() => {
    if (isOn && game.isDisplay && game.displayPattern.length) {
      displayColors();
    }
    // eslint-disable-next-line
  }, [isOn, game.isDisplay, game.displayPattern.length]);

  async function displayColors() {
    await timeout(0.3);
    for (let i = 0; i < game.displayPattern.length; i++) {
      setFlashColor(game.displayPattern[i]);
      playSound(game.displayPattern[i]);
      await timeout(0.3);
      setFlashColor("");
      await timeout(0.5);

      if (i === game.displayPattern.length - 1) {
        const copyColors = [...game.displayPattern];
        setGame({
          ...game,
          isDisplay: false,
          isUserPlay: true,
          userPattern: copyColors.reverse(),
        });
      }
    }
  }
  // perform a check for the users pattern
  //
  async function cardClickHandle(color) {
    if (!game.isDisplay && game.isUserPlay) {
      const copyUserPattern = [...game.userPattern];
      const lastColor = copyUserPattern.pop();
      setFlashColor(color);
      playSound(color);
      if (color === lastColor) {
        if (copyUserPattern.length) {
          setGame({ ...game, userPattern: copyUserPattern });
        } else {
          await timeout(0.5);
          setGame({
            ...game,
            isDisplay: true,
            isUserPlay: false,
            score: game.displayPattern.length,
            userPattern: [],
          });
        }
      } else {
        await timeout(0.5);
        setGame({
          ...initPlay,
          score: game.displayPattern.length,
        });
        setIsGameOver(true);
      }
      await timeout(0.1);
      setFlashColor("");
    }
  }
  function playSound(color) {
    let idx = colorList.indexOf(color);
    allSounds[idx].play();
  }
  return (
    <div>
      <Navigation />
      <Header />
      {/* How to Play button */}
      <div className="btn-wrapper">
        <button
          className="popup-btn"
          onClick={() => setButtonPopup(true)}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          How to Play {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}
        </button>
      </div>
      <div className="body">
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
          {!isOn && !game.score && (
            <div className="black-btn" onClick={startHandle}>
              Start
            </div>
          )}
          {isOn && (game.isDisplay || game.isUserPlay) && (
            <div className="black-btn">{game.score}</div>
          )}
        </div>
      </div>
      {/* Popup component triggers when How to Play button is clicked */}
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 className="popup-title">How to Play</h3>
        <p className="game-object">
          Object of the game: <br/>
          <em>
            Repeat the ever-increasing color and sound pattern <br /> chosen by
            the whale.
          </em>
        </p>
        <ol className="game-instructions">
          <li>Press any key to start</li>
          <li>
            The whale will light up the first color button and play a sound.
            Repeat the pattern by pressing the same color button.
          </li>
          <li>
            The whale will duplicate the first color and add one. Repeat these
            two colors by pressing the corresponding color buttons.
          </li>
          <li>
            Keep playing for as long as you can repeat the sequence correctly.
          </li>
          <li>
            If you fail to repeat the sequence correctly the whale will moan and
            the game ends.
          </li>
        </ol>
      </Popup>
      <HighScores />
      <Footer />
      {isGameOver && <GameOver score={game.score} reset={restartGame} />}
    </div>
  );
}

export default App;
