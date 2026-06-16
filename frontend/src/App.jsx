import { useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Box from "./components/Box";

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("sessionId")) {
      localStorage.setItem("sessionId", crypto.randomUUID());
    }
  }, []);

  return (
    <div className="bg-background min-h-screen text-white px-8 py-5 ">
      <Box>
        <Sidebar />
        <Chat />
      </Box>
    </div>
  );
};

export default App;
