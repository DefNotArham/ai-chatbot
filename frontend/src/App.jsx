import { useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("sessionId")) {
      localStorage.setItem("sessionId", crypto.randomUUID());
    }

    console.log(localStorage.getItem("sessionId"));
  }, []);

  return (
    <div className="bg-background min-h-screen text-white px-8 py-5 ">
      <div className="border border-gray-600 rounded-2xl overflow-hidden h-[94vh] flex justify-between">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
