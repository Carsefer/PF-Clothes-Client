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
  const [orderBy, setOrderBy] = useState("ASC");
  const [sortBy, setSortBy] = useState("name");
  const [filterBySize, setFilterBySize] = useState("");
  const [filterByColor, setFilterByColor] = useState("");

  const context = {
    //Home
    setPrice,
    setSize,
    setDemographic,
    setColor,
    setName,
    setPage,
    setOrderBy,
    setSortBy,
    price,
    size,
    demographic,
    color,
    name,
    page,
    orderBy,
    sortBy,

    //ProductDetail
    setFilterBySize,
    setFilterByColor,
    filterBySize,
    filterByColor,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
