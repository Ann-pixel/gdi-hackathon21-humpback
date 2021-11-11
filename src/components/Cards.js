import "./Cards.css";
export default function Cards(props) {
  return (
    <div
      onClick={props.onClick}
      className={`color-card ${props.color} ${props.flash ? "flash" : ""}`}
    ></div>
  );
}
