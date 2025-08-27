import "./SummaryBox.css";

type SummaryBox = {};

export default function SummaryBox() {
  return (
    <>
      <div className="summaryboxcontainer">
        <div className="title-row">
          <div className="plan">
            <h1>Arcade (Monthly)</h1>
            <button className="change-button" type="button">Change</button>
          </div>
          <p className="plan-price">$9/mo</p>
        </div>
        <div className="divider" />
        <div className="addon-row">
          <p>Online service</p>
          <p className="addon-price">+$1/mo</p>
        </div>
        <div className="addon-row">
          <p>Larger storage</p>
          <p className="addon-price">+$2/mo</p>
        </div>
      </div>
      <div className="total-row">
        <p>Total (per month)</p>
        <p className="total-price">+$12/mo</p>
      </div>
    </>
  );
}
