import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./page/HomePage";

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("sessionId")) {
      localStorage.setItem("sessionId", crypto.randomUUID());
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
