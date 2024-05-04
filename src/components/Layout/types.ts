import { ReactNode } from "react";

// index.tsx
export interface LayoutType {
  children: ReactNode;
}

// Navbar.tsx
export interface mainMenuResponse {
  code: number;
  lang: string;
  items: mainMenuItems[];
}

export interface mainMenuItems {
  id: number;
  name: string;
  url: string;
  weight: number;
  side_menu?: false;
  submenu?: mainMenuItems[];
}
