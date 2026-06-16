import React from "react";

const DefaultBg = ({ children }) => {
  return (
    <div className="bg-background min-h-screen text-white px-8 py-5">
      {children}
    </div>
  );
};

export default DefaultBg;
