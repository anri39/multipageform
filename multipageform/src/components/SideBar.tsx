import "./SideBar.css";
import sideBarBackgroundDesktop from "../assets/images/bg-sidebar-desktop.svg";
import Steps from "./Steps";

type SideBarProps = {
  currentpage: number;
};

export default function SideBar({ currentpage }: SideBarProps) {
  const steps = [
    { number: 1, label: "Your Info" },
    { number: 2, label: "Select Plan" },
    { number: 3, label: "Add-Ons" },
    { number: 4, label: "Summary" },
  ];
  return (
    <>
      <div className="sidebarcontainer">
        <img src={sideBarBackgroundDesktop} alt={sideBarBackgroundDesktop} />
        <div className="steps">
          {steps.map((step) => (
            <Steps
              number={step.number}
              label={step.label}
              key={step.number}
              active={currentpage === step.number - 1}
            />
          ))}
        </div>
      </div>
    </>
  );
}
