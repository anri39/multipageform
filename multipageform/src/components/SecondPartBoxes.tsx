import "./SecondPartBoxes.css";

type SecondPartBoxesProps = {
  icon: string;
  boxtitle: string;
  boxprice: string;
  selected: boolean;
  onClick: () => void;
};

export default function SecondPartBoxes({
  icon,
  boxtitle,
  boxprice,
  selected,
  onClick,
}: SecondPartBoxesProps) {
  return (
    <div
      className={`boxcontainers ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img src={icon} alt="" />
      <div className="infocontainer">
        <h1>{boxtitle}</h1>
        <p>{boxprice}</p>
      </div>
    </div>
  );
}
