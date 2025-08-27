import BackButton from "./BackButton";
import NextStepButton from "./NextStepButton";
import SummaryBox from "./SummaryBox";
import "./SummaryPart.css";

type summaryprops = {
  handlenext: () => void;
  goback: () => void;
};

export default function SummaryParts({ handlenext, goback }: summaryprops) {
  return (
    <div className="summarypartscontainer ">
      <div className="summaryheader">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      <SummaryBox />

      <div className="summarybuttons" style={{ marginTop: "6rem" }}>
        <BackButton onclick={goback} label="Go Back" />
        <NextStepButton onClick={handlenext} buttonLabel="Finalize" />
      </div>
    </div>
  );
}
