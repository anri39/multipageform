import { useState } from "react";
import "./App.css";
import FirstPart from "./components/FirstPart";
import SideBar from "./components/SideBar";
import SecondPart from "./components/SecondPart";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  return (
    <>
      <div className="container">
        <SideBar currentpage={currentPage} />
        <div className="sidecontent">
          {currentPage === 0 && (
            <FirstPart
              handleNextStep={() => {
                setCurrentPage((prev) => (prev === 3 ? prev : prev + 1));
              }}
            />
          )}
          {currentPage === 1 && (
            <SecondPart
              handleNextPart={() => {
                setCurrentPage((prev) => (prev === 3 ? prev : prev + 1));
              }}
              goBack={() => {
                setCurrentPage((prev) => (prev === 3 ? prev : prev - 1));
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
