import { StaticImageData } from "next/image";

export interface SectionType {
  img: {
    src: StaticImageData;
    alt: string;
  };
  about: string;
  title: string;
  date: string;
  body?: string;
  isPrimary?: boolean;
}
