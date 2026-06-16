const Box = ({ children }) => {
  return (
    <div className="border border-gray-600 rounded-2xl overflow-hidden h-[94vh] flex justify-between">
      {children}
    </div>
  );
};

export default Box;
