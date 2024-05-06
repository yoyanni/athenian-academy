import { ReactNode } from "react";

export interface ArticleType {
  children: ReactNode;
  title: string;
  body?: string;
  hasAccent?: boolean;
  isElevated?: boolean;
}
