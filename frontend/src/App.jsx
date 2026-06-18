import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Chatroom from "./pages/Chatroom";

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("sessionId")) {
      localStorage.setItem("sessionId", crypto.randomUUID());
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chatroom/:chatroomId" element={<Chatroom />} />
    </Routes>
  );
};

export default App;
