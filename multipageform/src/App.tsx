import { useState } from "react";
import "./App.css";
import FirstPart from "./components/FirstPart";
import SideBar from "./components/SideBar";
import SecondPart from "./components/SecondPart";
import Thirdpart from "./components/ThirdPart";
import SummaryParts from "./components/SummaryPart";

export type AppFormData = {
  name: string;
  email: string;
  phone: string;
  selectedPlan: "Arcade" | "Advanced" | "Pro";
  planPrice: string;
  isYearly: boolean;
  addons: {
    extraStorage: { selected: boolean; price: string };
    customProfile: { selected: boolean; price: string };
    notifications: { selected: boolean; price: string };
  };
};

function App() {
  const [formData, setFormData] = useState<AppFormData>({
    name: "",
    email: "",
    phone: "",
    selectedPlan: "Arcade",
    planPrice: "",
    isYearly: false,
    addons: {
      extraStorage: { selected: false, price: "" },
      customProfile: { selected: false, price: "" },
      notifications: { selected: false, price: "" },
    },
  });

  const [currentPage, setCurrentPage] = useState<number>(0);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, 3));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const setPage = () => {
    setCurrentPage(1);
  };
  return (
    <>
      <div className="container">
        <SideBar currentpage={currentPage} />
        <div className="sidecontent">
          {currentPage === 0 && (
            <FirstPart
              handleNextStep={nextPage}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {currentPage === 1 && (
            <SecondPart
              handleNextStep={nextPage}
              goBack={prevPage}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {currentPage === 2 && (
            <Thirdpart
              handleNextStep={nextPage}
              goBack={prevPage}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {currentPage === 3 && (
            <SummaryParts
              handlenext={nextPage}
              goback={prevPage}
              formData={formData}
              setpage={setPage}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
