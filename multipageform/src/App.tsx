import { useState } from "react";
import "./App.css";
import FirstPart from "./components/FirstPart";
import SideBar from "./components/SideBar";
import SecondPart from "./components/SecondPart";
import Thirdpart from "./components/ThirdPart";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, 3));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  return (
    <>
      <div className="container">
        <SideBar currentpage={currentPage} />
        <div className="sidecontent">
          {currentPage === 0 && <FirstPart handleNextStep={nextPage} />}
          {currentPage === 1 && (
            <SecondPart handleNextStep={nextPage} goBack={prevPage} />
          )}
          {currentPage === 2 && (
            <Thirdpart handleNextStep={nextPage} goBack={prevPage} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
