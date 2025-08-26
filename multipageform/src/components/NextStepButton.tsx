import "./NextStepButton.css";

type buttonProps = {
  onClick: () => void;
};

export default function NextStepButton({ onClick }: buttonProps) {
  return (
    <button className="next-step-btn" onClick={onClick}>
      Next Step
    </button>
  );
}
