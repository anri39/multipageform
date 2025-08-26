import "./Steps.css";

type StepsProps = {
  number: number;
  label: string;
  active: boolean;
};

export default function Steps({ number, label, active }: StepsProps) {
  return (
    <div className={`step ${active ? "active" : ""}`}>
      <div className="step-number">{number}</div>
      <div className="step-labels">
        <p className="step-label-title">Step {number}</p>
        <p className="step-label-text">{label}</p>
      </div>
    </div>
  );
}
