import { useState } from "react";
import "./App.css";
import FirstPart from "./components/FirstPart";
import SideBar from "./components/SideBar";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  return (
    <>
      <div className="container">
        <SideBar currentpage={currentPage} />
        <div className="sidecontent">
          <FirstPart
            handleNextStep={() => {
              setCurrentPage(currentPage + 1);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
