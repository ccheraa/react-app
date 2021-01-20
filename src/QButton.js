import './QButton.css';

export function QButton({ text, second }) {
  return (
    <div className="QButton">
      <div className="title">{text}</div>
      <div className="subtitle">{second}</div>
    </div>
  );
}

export default QButton;
