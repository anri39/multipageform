import "./goBackButton.css";
type goBackbuttonProps = {
  label: string;
  onclick: () => void;
};

export default function BackButton({ label, onclick }: goBackbuttonProps) {
  return (
    <div className="backButtonContainer" onClick={onclick}>
      {label}
    </div>
  );
}
