import Image from "next/image";

import { CarouselType } from "./types";
import Card from "./Card";

import leftArrow from "../../../../public/Homepage/Carousel/left-carousel-arrow.svg";
import rightArrow from "../../../../public/Homepage/Carousel/right-carousel-arrow.svg";
import Button from "../../Generic/Button";

const researchCenters = [
  { id: 0, title: "Κέντρον Ερεύνης της Αρχαιότητος" },
  { id: 1, title: "Κέντρο Ερεύνης Φυσικής της Ατμόσφαιρας και Κλιματολογίας	" },
  { id: 2, title: "Κέντρον Ερεύνης της Ελληνικής Λαογραφίας" },
  {
    id: 3,
    title: "Κέντρον Ερεύνης Νεοελληνικών Διαλέκτων και Ιδιωμάτων Ι.Λ.Ν.Ε",
  },
];

const editions = [
  {
    id: 0,
    title: "Χρηστικό λεξικότης Νεοελληνικής Γλώσσας",
    edition: 0 as const,
  },
  {
    id: 1,
    title: "Κώδικας Ηθικής και Επαγγελματικής Συμπεριφοράς Υπαλλήλ..",
    edition: 1 as const,
  },
  {
    id: 2,
    title: "Εκδόσεις Κέντρον Ερεύνης της Ελληνικής Λαογραφίας",
    edition: 0 as const,
  },
  {
    id: 3,
    title:
      "Εκδόσεις Κέντρον Ερεύνης Νεοελληνικών Διαλέκτων και Ιδιωμάτων Ι.Λ.Ν.Ε",
    edition: 0 as const,
  },
];

const Carousel = ({ type }: CarouselType) => {
  const researchJSX = researchCenters.map((rc) => (
    <Card key={rc.id} title={rc.title} type="research" />
  ));
  const editionJSX = editions.map((e) => (
    <Card key={e.id} title={e.title} type="edition" edition={e.edition} />
  ));

  return (
    <>
      <div className="w-[60%] relative mt-20 mx-auto flex justify-center gap-4">
        <Image
          className="absolute left-[2%] top-[50%] -translate-y-4"
          src={leftArrow}
          alt="left carousel arrow icon"
        />
        {type === "research" ? researchJSX : editionJSX}
        <Image
          className="absolute right-[2%] top-[50%] -translate-y-4"
          src={rightArrow}
          alt="right carousel arrow icon"
        />
      </div>
      <Button>Περισσότερα</Button>
    </>
  );
};

export default Carousel;
