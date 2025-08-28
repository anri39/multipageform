import AddonsBox from "./AddonsBox";
import BackButton from "./BackButton";
import NextStepButton from "./NextStepButton";
import "./Thirdpart.css";
import type { AppFormData } from "../App";

type thirdpartprops = {
  handleNextStep: () => void;
  goBack: () => void;
  formData: AppFormData;
  setFormData: React.Dispatch<React.SetStateAction<AppFormData>>;
};
export type addonKey = "extraStorage" | "customProfile" | "notifications";

export default function Thirdpart({
  handleNextStep,
  goBack,
  formData,
  setFormData,
}: thirdpartprops) {
  const handleSelect = (key: addonKey, price: string) => {
    setFormData((prev) => ({
      ...prev,
      addons: {
        ...prev.addons,
        [key]: {
          selected: !prev.addons[key].selected,
          price,
        },
      },
    }));
  };

  const addons: {
    boxheader: string;
    boxdescription: string;
    price: string;
    key: addonKey;
  }[] = [
    {
      key: "extraStorage",
      boxheader: "Online service",
      boxdescription: "Access to multiplayer games",
      price: "+$1/mo",
    },
    {
      key: "customProfile",
      boxheader: "Larger storage",
      boxdescription: "Extra 1TB of cloud save",
      price: "+$2/mo",
    },
    {
      key: "notifications",
      boxheader: "Costumizable profile",
      boxdescription: "Custom theme on your profile",
      price: "+$3/mo",
    },
  ];

  return (
    <div className="thirdpartcontainer">
      <div className="thirdpartheader">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="thirdpartboxes">
        {addons.map((addon) => (
          <AddonsBox
            boxheader={addon.boxheader}
            boxdescription={addon.boxdescription}
            price={addon.price}
            onSelect={(key) => {
              handleSelect(key, addon.price);
            }}
            addonKey={addon.key}
            selected={formData.addons[addon.key].selected}
          />
        ))}
      </div>
      <div className="thirdpartbuttons">
        <BackButton label="Go Back" onclick={goBack} />
        <NextStepButton onClick={handleNextStep} buttonLabel="Next Step" />
      </div>
    </div>
  );
}
