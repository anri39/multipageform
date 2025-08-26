import "./NextStepButton.css";

type buttonProps = {
  onClick: () => void;
  buttonLabel: string;
};

export default function NextStepButton({ onClick, buttonLabel }: buttonProps) {
  return (
    <button className="next-step-btn" onClick={onClick}>
      {buttonLabel}
    </button>
  );
}
