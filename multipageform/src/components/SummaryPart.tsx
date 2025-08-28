import BackButton from "./BackButton";
import NextStepButton from "./NextStepButton";
import SummaryBox from "./SummaryBox";
import "./SummaryPart.css";

import type { AppFormData } from "../App";

type summaryprops = {
  handlenext: () => void;
  goback: () => void;
  formData: AppFormData;
  setpage: () => void;
};

export default function SummaryParts({
  handlenext,
  goback,
  formData,
  setpage,
}: summaryprops) {
  return (
    <div className="summarypartscontainer ">
      <div className="summaryheader">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      <SummaryBox formData={formData} setPage={setpage} />

      <div className="summarybuttons" style={{ marginTop: "6rem" }}>
        <BackButton onclick={goback} label="Go Back" />
        <NextStepButton onClick={handlenext} buttonLabel="Finalize" />
      </div>
    </div>
  );
}
