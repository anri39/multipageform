import "./SecondPart.css";
import SecondPartBoxes from "./SecondPartBoxes";
import BillingSwitch from "./BillingSwitch";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import proIcon from "../assets/images/icon-pro.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import BackButton from "./BackButton";
import NextStepButton from "./NextStepButton";
import type { AppFormData } from "../App";

type secondPartProps = {
  handleNextStep: () => void;
  goBack: () => void;
  formData: AppFormData;
  setFormData: React.Dispatch<React.SetStateAction<AppFormData>>;
};

export default function SecondPart({
  handleNextStep,
  goBack,
  formData,
  setFormData,
}: secondPartProps) {
  type Plan = "Arcade" | "Pro" | "Advanced";
  const boxes: { name: Plan; price: string; img: string }[] = formData.isYearly
    ? [
        { name: "Arcade", price: "$90/yr", img: arcadeIcon },
        { name: "Pro", price: "$150/yr", img: proIcon },
        { name: "Advanced", price: "$250/yr", img: advancedIcon },
      ]
    : [
        { name: "Arcade", price: "$9/mo", img: arcadeIcon },
        { name: "Pro", price: "$15/mo", img: proIcon },
        { name: "Advanced", price: "$25/mo", img: advancedIcon },
      ];

  const handleBillingToggle = () => {
    setFormData((prev) => ({
      ...prev,
      isYearly: !prev.isYearly,
    }));
  };

  return (
    <div className="secondpartcontainer">
      <div className="secondpartheader">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </div>
      <div className="boxcontainer">
        {boxes.map((box) => (
          <SecondPartBoxes
            key={box.name}
            icon={box.img}
            boxtitle={box.name}
            boxprice={box.price}
            selected={formData.selectedPlan === box.name}
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                selectedPlan: box.name,
                planPrice: box.price,
              }))
            }
          />
        ))}
      </div>
      <BillingSwitch
        isYearly={formData.isYearly}
        onToggle={handleBillingToggle}
      />
      <div className="buttons">
        <BackButton label="Go Back" onclick={goBack} />
        <NextStepButton onClick={handleNextStep} buttonLabel="Next Step" />
      </div>
    </div>
  );
}
