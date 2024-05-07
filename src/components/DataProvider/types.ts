import { Dispatch, ReactNode, SetStateAction } from "react";
import { mainMenuResponse } from "../types";

export interface DataContextProps {
  data: mainMenuResponse;
  setData: Dispatch<SetStateAction<mainMenuResponse>>;
}

export interface DataProviderProps {
  children: ReactNode;
}
