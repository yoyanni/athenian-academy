import { createContext, useContext, useEffect, useState } from "react";

import { DataContextProps, DataProviderProps } from "./types";
import { mainMenuResponse } from "../types";

const DataContext = createContext<DataContextProps | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<mainMenuResponse>({
    code: 0,
    lang: "",
    items: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://academyofathens-latest-cms.dotsoft.gr/api/el/menu/main"
        );
        const data: mainMenuResponse = await res.json();
        setData(data);
      } catch (e) {
        console.error("Error fetching: ", e);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
