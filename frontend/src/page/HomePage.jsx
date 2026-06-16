import React from "react";

import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Box from "../components/Box";
import DefaultBg from "../components/DefaultBg";

const HomePage = () => {
  return (
    <DefaultBg>
      <Box>
        <Sidebar />
        <Chat />
      </Box>
    </DefaultBg>
  );
};

export default HomePage;
