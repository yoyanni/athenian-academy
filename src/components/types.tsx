// Used in DataProvider, PublicationPage and Layout 
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
  side_menu?: boolean;
  submenu?: mainMenuItems[];
}