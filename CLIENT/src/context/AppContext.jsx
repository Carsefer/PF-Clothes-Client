import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  //Home filters states
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [demographic, setDemographic] = useState("");
  const [color, setColor] = useState("");
  const [name, setName] = useState("");

  const context = {
    setPrice,
    setSize,
    setDemographic,
    setColor,
    setName,
    price,
    size,
    demographic,
    color,
    name,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
