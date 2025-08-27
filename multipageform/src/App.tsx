import { useState } from "react";
import FirstPart from "./components/FirstPart";
import SecondPart from "./components/SecondPart";
import ThirdPart from "./components/ThirdPart";

type FormData = {
  name: string;
  email: string;
  addons: {
    extraStorage: boolean;
    customProfile: boolean;
    notifications: boolean;
  };
};

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    addons: {
      extraStorage: false,
      customProfile: false,
      notifications: false,
    },
  });

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, 3));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  return (
    <div className="container">
      {currentPage === 0 && <FirstPart handleNextStep={nextPage} />}
      {currentPage === 1 && (
        <SecondPart handleNextStep={nextPage} goBack={prevPage} />
      )}
      {currentPage === 2 && (
        <ThirdPart handleNextStep={nextPage} goBack={prevPage} />
      )}
    </div>
  );
}

export default App;
