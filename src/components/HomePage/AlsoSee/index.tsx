import Image from "next/image";

import Button from "../../Generic/Button";

import banner from "../../../../public/Homepage/AlsoSee/alsosee-banner.jpeg";
import zero from "../../../../public/Homepage/AlsoSee/alsosee-zero.png";
import one from "../../../../public/Homepage/AlsoSee/alsosee-one.jpeg";
import two from "../../../../public/Homepage/AlsoSee/alsosee-two.jpeg";

const places = [
  {
    id: 0,
    title: "Ακαδημία Αθηνών",
    buttonText: "Πλοηγηθείτε",
    img: { src: zero, alt: "Ακαδημία Αθηνών image" },
  },
  {
    id: 1,
    title: "Αποθετήριο Ακαδημίας",
    buttonText: "Εξερευνήστε",
    img: { src: one, alt: "Αποθετήριο Ακαδημίας image" },
  },
  {
    id: 2,
    title: "Κεντρική Βιβλιοθήκη",
    buttonText: "Πλοηγηθείτε",
    img: { src: two, alt: "Κεντρική Βιβλιοθήκη image" },
  },
];

const AlsoSee = () => {
  return (
    <div className="mx-auto mt-12 sm:w-[60%]">
      <div className="flex flex-col gap-8 px-4 sm:flex-row sm:justify-center">
        {places.map((p) => (
          <div
            key={p.id}
            className="relative grow h-[400px] flex justify-center items-center"
          >
            <Image
              className="object-cover"
              src={p.img.src}
              alt={p.img.alt}
              fill
            />
            <div className="absolute w-full h-full bg-primaryOpacity"></div>
            <div className="absolute w-min">
              <span className="text-primaryFontSize text-white">{p.title}</span>
              <Button isWhite>{p.buttonText}</Button>
            </div>
          </div>
        ))}
      </div>
      <Image className="px-4 mt-20" src={banner} alt="Also see banner" />
    </div>
  );
};

export default AlsoSee;
