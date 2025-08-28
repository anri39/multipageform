import "../components/FirstPart.css";
import NextStepButton from "./NextStepButton";
import type { AppFormData } from "../App";

type FirstPartProps = {
  handleNextStep: () => void;
  formData: AppFormData;
  setFormData: React.Dispatch<React.SetStateAction<AppFormData>>;
};

export default function FirstPart({
  handleNextStep,
  formData,
  setFormData,
}: FirstPartProps) {
  return (
    <div className="FirstPart">
      <div className="firstpartHeader">
        <h1>Personal info</h1>
        <p>Please provide your name, email address and phone number.</p>
      </div>
      <div className="inputs">
        <div className="inputrow">
          <p>Name</p>
          <input
            type="text"
            placeholder="e.g Stephen King"
            value={formData.name}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
          />
        </div>
        <div className="inputrow">
          <p>Email Address</p>
          <input
            type="email"
            placeholder="e.g stephenking@lorem.com"
            value={formData.email}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
          />
        </div>
        <div className="inputrow">
          <p>Phone Number</p>
          <input
            type="text"
            placeholder="e.g +1 234 567 890"
            value={formData.phone}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                phone: e.target.value,
              }));
            }}
          />
        </div>

        <div className="buttonWrapper">
          <NextStepButton onClick={handleNextStep} buttonLabel="Next Step" />
        </div>
      </div>
    </div>
  );
}
