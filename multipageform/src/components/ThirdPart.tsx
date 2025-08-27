import AddonsBox from "./AddonsBox";
import BackButton from "./BackButton";
import NextStepButton from "./NextStepButton";
import "./Thirdpart.css";

type thirdpartprops = {
  handleNextStep: () => void;
  goBack: () => void;
};

export default function Thirdpart({ handleNextStep, goBack }: thirdpartprops) {
  const addons = [
    {
      boxheader: "Online service",
      boxdescription: "Access to multiplayer games",
      price: "+$1/mo",
    },
    {
      boxheader: "Larger storage",
      boxdescription: "Extra 1TB of cloud save",
      price: "+$2/mo",
    },
    {
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
