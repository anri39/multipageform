import "./BillingSwitch.css";

type BillingSwitchProps = {
  isYearly: boolean;
  onToggle: () => void;
};

export default function BillingSwitch({ isYearly, onToggle }: BillingSwitchProps) {
  return (
    <div className="billing-switch-container">
      <span className={`billing-label ${!isYearly ? 'active' : ''}`}>Monthly</span>
      <div className="switch-toggle" onClick={onToggle}>
        <div className={`switch-slider ${isYearly ? 'yearly' : 'monthly'}`}></div>
      </div>
      <span className={`billing-label ${isYearly ? 'active' : ''}`}>Yearly</span>
    </div>
  );
}
