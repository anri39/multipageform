import "./AddonsBox.css";
import type { addonKey } from "./ThirdPart";

type AddonsBoxProps = {
  boxheader: string;
  boxdescription: string;
  price: string;
  selected: boolean;
  addonKey: addonKey;
  onSelect: (key: addonKey) => void;
};

export default function AddonsBox({
  boxheader,
  boxdescription,
  price,
  selected,
  onSelect,
  addonKey,
}: AddonsBoxProps) {
  return (
    <div
      className={`addonscontainer ${selected ? "selected" : ""}`}
      onClick={() => {
        onSelect(addonKey);
      }}
    >
      <input type="checkbox" checked={selected} readOnly />
      <div className="addontext ">
        <h1>{boxheader}</h1>
        <p>{boxdescription}</p>
      </div>
      <p className="price">{price}</p>
    </div>
  );
}
