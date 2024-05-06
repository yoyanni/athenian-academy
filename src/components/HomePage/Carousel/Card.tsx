import Image from "next/image";

import researchCenter from "../../../../public/Homepage/Carousel/research-center.svg";
import editionZero from "../../../../public/Homepage/Carousel/edition-zero.png";
import editionOne from "../../../../public/Homepage/Carousel/edition-one.png";
import { CardType } from "./types";

const CarouselCard = ({ title, type, edition }: CardType) => {
  let imgSrc, imgAlt;
  if (type === "research") {
    imgSrc = researchCenter;
    imgAlt = "Research Center icon";
  } else {
    if (edition === 0) {
      imgSrc = editionZero;
      imgAlt = "Edition image no. 1";
    } else {
      imgSrc = editionOne;
      imgAlt = "Edition image no. 2";
    }
  }
  return (
    <div className="w-[250px] p-2 flex flex-col items-center bg-white shadow-card">
      <Image
        className={type === "research" ? "mt-8" : "h-[200px] bg-contain"}
        src={imgSrc}
        alt={imgAlt}
      />
      <h3 className="mt-8 text-primary font-bold">{title}</h3>
    </div>
  );
};

export default CarouselCard;
