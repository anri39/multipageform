import "../components/FirstPart.css";
import NextStepButton from "./NextStepButton";

type FirstPart = {
  handleNextStep: () => void;
};

export default function FirstPart({ handleNextStep }: FirstPart) {
  return (
    <div className="FirstPart">
      <div className="firstpartHeader">
        <h1>Personal info</h1>
        <p>Please provide your name, email adress and phone number.</p>
      </div>
      <div className="inputs">
        <div className="name inputrow">
          <p>Name</p>
          <input type="text" placeholder="e.g Stephen King" />
        </div>
        <div className="email inputrow">
          <p>Email Adress</p>
          <input type="email" placeholder="e.g stephenking@lorem.com" />
        </div>
        <div className="phone inputrow">
          <p>Phone Number</p>
          <input type="text" placeholder="e.g +1 234 567 890" />
        </div>
      </div>
      <NextStepButton onClick={handleNextStep} />
    </div>
  );
}
