import "./GameOver.css";
export default function GameOver(props) {
  return (
    <div className="overlay">
      <div className="game-over">
        <h3>-Uh Oh-</h3>
        <h3>Game over</h3>
        <h4>score: {props.score}</h4>
        <p>Click to reset to try again!</p>
        <div className="reset" onClick={props.reset}>
          Reset
        </div>
      </div>
    </div>
  );
}
