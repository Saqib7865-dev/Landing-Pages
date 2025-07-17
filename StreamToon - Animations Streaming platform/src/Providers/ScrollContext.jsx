import React, { createContext, useContext, useState } from "react";

const scrollContext = createContext(0);

const ScrollContextProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  return (
    <scrollContext.Provider value={{ scrollY, setScrollY }}>
      {children}
    </scrollContext.Provider>
  );
};

const useScrollContext = () => useContext(scrollContext);
export { ScrollContextProvider, useScrollContext };
