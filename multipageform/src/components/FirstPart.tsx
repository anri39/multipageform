import "../components/FirstPart.css";
import NextStepButton from "./NextStepButton";

type FirstPartProps = {
  handleNextStep: () => void;
};

export default function FirstPart({ handleNextStep }: FirstPartProps) {
  return (
    <div className="FirstPart">
      <div className="firstpartHeader">
        <h1>Personal info</h1>
        <p>Please provide your name, email address and phone number.</p>
      </div>
      <div className="inputs">
        <div className="inputrow">
          <p>Name</p>
          <input type="text" placeholder="e.g Stephen King" />
        </div>
        <div className="inputrow">
          <p>Email Address</p>
          <input type="email" placeholder="e.g stephenking@lorem.com" />
        </div>
        <div className="inputrow">
          <p>Phone Number</p>
          <input type="text" placeholder="e.g +1 234 567 890" />
        </div>

        <div className="buttonWrapper">
          <NextStepButton onClick={handleNextStep} buttonLabel="Next Step" />
        </div>
      </div>
    </div>
  );
}
