import "./SummaryBox.css";
import type { AppFormData } from "../App";

type SummaryBoxProps = {
  formData: AppFormData;
  setPage: () => void;
};

export default function SummaryBox({ formData, setPage }: SummaryBoxProps) {
  const addonNames: Record<string, string> = {
    extraStorage: "Online service",
    customProfile: "Larger storage",
    notifications: "Custom profile",
  };

  const planPriceNumber = parseInt(formData.planPrice.replace(/\D/g, "")) || 0;

  const addonsTotal = Object.values(formData.addons)
    .filter((a) => a.selected)
    .reduce((sum, a) => sum + parseInt(a.price.replace(/\D/g, "")), 0);

  const total = planPriceNumber + addonsTotal;

  return (
    <>
      <div className="summaryboxcontainer">
        <div className="title-row">
          <div className="plan">
            <h1>{`${formData.selectedPlan} ${
              formData.isYearly ? "(Yearly)" : "(Monthly)"
            }`}</h1>
            <button
              className="change-button"
              type="button"
              style={{ fontSize: "17px" }}
              onClick={setPage}
            >
              Change
            </button>
          </div>
          <p className="plan-price">{formData.planPrice}</p>
        </div>
        <div className="divider" />

        {Object.entries(formData.addons).map(([key, addon]) =>
          addon.selected ? (
            <div className="addon-row" key={key}>
              <p>{addonNames[key]}</p>
              <p className="addon-price">{addon.price}</p>
            </div>
          ) : null
        )}
      </div>
      <div className="total-row">
        <p>Total ({formData.isYearly ? "per year" : "per month"})</p>
        <p className="total-price">
          ${total}/{formData.isYearly ? "yr" : "mo"}
        </p>
      </div>
    </>
  );
}
