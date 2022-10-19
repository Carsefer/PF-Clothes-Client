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
  const [page, setPage] = useState(0);

  const context = {
    setPrice,
    setSize,
    setDemographic,
    setColor,
    setName,
    setPage,
    price,
    size,
    demographic,
    color,
    name,
    page,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
