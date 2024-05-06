import Image from "next/image";

import Article from "@/components/Generic/Article";

import bannerOne from "../../../public/Homepage/banner-one.jpeg";
import hero from "../../../public/Homepage/hero-image.jpeg";

const articles = [
  {
    id: 0,
    title: "Καλώς ήρθατε στη δικτυακή πύλη της Ακαδημίας Αθηνών",
    body: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία ομαλή κατανομή γραμμάτων.",
  },
];

const HomePage = () => {
  return (
    <main className="grow flex flex-col justify-center items-center">
      <Image src={hero} alt="Hero image" />
      <Article title={articles[0].title} body={articles[0].body}>
        <Image
          className="w-[60%] mt-20 mx-auto"
          src={bannerOne}
          alt="Banner one"
        />
      </Article>
    </main>
  );
};

export default HomePage;
