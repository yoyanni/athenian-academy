import Image from "next/image";

import Article from "@/components/Generic/Article";
import Carousel from "./Carousel";
import AlsoSee from "./AlsoSee";
import News from "./News";

import bannerOne from "../../../public/Homepage/banner-one.jpeg";
import hero from "../../../public/Homepage/hero-image.jpeg";

const articles = [
  {
    id: 0,
    title: "Καλώς ήρθατε στη δικτυακή πύλη της Ακαδημίας Αθηνών",
    body: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία ομαλή κατανομή γραμμάτων.",
  },
  {
    id: 1,
    title: "Ερευνητικά Κέντρα",
    body: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία ομαλή κατανομή γραμμάτων.",
  },
  {
    id: 2,
    title: "Τα Νέα μας",
  },
  {
    id: 3,
    title: "Δείτε επίσης",
  },
  {
    id: 4,
    title: "Εκδόσεις",
    body: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία ομαλή κατανομή γραμμάτων.",
  },
];

const HomePage = () => {
  return (
    <main className="grow flex flex-col justify-center items-center">
      <Image className="h-[300px] object-cover" src={hero} alt="Hero image" />
      <Article title={articles[0].title} body={articles[0].body}>
        <Image
          className="px-4 mt-20 sm:w-[60%] sm:mx-auto"
          src={bannerOne}
          alt="Banner one"
        />
      </Article>
      <Article
        title={articles[1].title}
        body={articles[1].body}
        isElevated
        hasAccent
      >
        <Carousel type="research" />
      </Article>
      <Article title={articles[2].title} hasAccent>
        <News />
      </Article>
      <Article title={articles[3].title} hasAccent>
        <AlsoSee />
      </Article>
      <Article
        title={articles[4].title}
        body={articles[4].body}
        hasAccent
        isElevated
      >
        <Carousel type="edition" />
      </Article>
    </main>
  );
};

export default HomePage;
