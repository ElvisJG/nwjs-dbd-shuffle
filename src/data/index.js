import React, { createContext, useContext } from "react";
import data from "./data.json";

export const Data = createContext();
export const DataProvider = ({ children }) => {
  return <Data.Provider value={data}>{children}</Data.Provider>;
};
export const useData = () => useContext(Data);
