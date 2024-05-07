import { Dispatch, SetStateAction } from "react";
import { mainMenuItems } from "../types";

// index.tsx
export interface PublicationResponse {
  code: number;
  count: number;
  nodes: Publication[];
}

interface Publication {
  id: number;
  title: string;
  lang: string;
  alias: string;
  author: string;
  image: Image[];
  file: File[];
  body: string;
  created: number;
}

interface Image {
  url: string;
  alt: string;
}

interface File {
  url: string;
}

// Submenu.tsx
export interface SubmenuProps {
  navList: mainMenuItems[];
  activeNav: number;
  setActiveNav: Dispatch<SetStateAction<number>>;
}

// Content.tsx
export interface ContentProps {
  pubDetailsList: (Pub | undefined)[];
  activePub: number;
  setActivePub: Dispatch<SetStateAction<number>>;
}

// Used in index.tsx and within ContentProps which is used in Content.tsx
export interface Pub {
  id: number;
  title: string;
  body: string;
}