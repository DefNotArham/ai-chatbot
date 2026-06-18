import React from "react";

import Sidebar from "../components/Sidebar";
import NewChat from "../components/NewChat";
import Box from "../components/Box";
import DefaultBg from "../components/DefaultBg";

const HomePage = () => {
  return (
    <DefaultBg>
      <Box>
        <Sidebar />
        <NewChat />
      </Box>
    </DefaultBg>
  );
};

export default HomePage;
