import { useState } from "react";
import "./AddonsBox.css";

type AddonsBoxProps = {
  boxheader: string;
  boxdescription: string;
  price: string;
};

export default function AddonsBox({
  boxheader,
  boxdescription,
  price,
}: AddonsBoxProps) {
  const [check, setChecked] = useState<boolean>(false);
  return (
    <div className={`addonscontainer ${check ? "selected" : ""}`}>
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <div className="addontext ">
        <h1>{boxheader}</h1>
        <p>{boxdescription}</p>
      </div>
      <p className="price">{price}</p>
    </div>
  );
}
