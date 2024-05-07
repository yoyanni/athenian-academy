import { useState } from "react";

import Button from "../../Generic/Button";
import Section from "./Section";

import newsThree from "../../../../public/Homepage/News/news-three.jpeg";
import newsZero from "../../../../public/Homepage/News/news-zero.jpeg";
import newsOne from "../../../../public/Homepage/News/news-one.jpeg";
import newsTwo from "../../../../public/Homepage/News/news-two.png";

const sections = [
  {
    id: 0,
    img: { src: newsZero, alt: "News Image no. 1" },
    about: "Κέντρον Ερεύνης της Ελληνικής Λαογραφίας",
    title:
      "Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου της 28ης Οκτωβρίου 1940, Πέμπτη 26 Οκτωβρίου 2023 και ώρα 19.00",
    date: "23 Οκτωβρίου 2023",
    body: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem ...",
  },
  {
    id: 1,
    img: { src: newsOne, alt: "News Image no. 2" },
    about: "Κέντρον Ερεύνης της Ελληνικής Λαογραφίας",
    title:
      "Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου της 28ης Οκτωβρίου 1940..",
    date: "23 Οκτωβρίου 2023",
    body: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem ...",
  },
  {
    id: 2,
    img: { src: newsTwo, alt: "News Image no. 3" },
    about: "Κέντρον Ερεύνης της Ελληνικής Φιλοσοφίας",
    title: "Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου",
    date: "23 Οκτωβρίου 2023",
    body: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem ...",
  },
  {
    id: 3,
    img: { src: newsThree, alt: "News Image no. 4" },
    about: "Ακαδημία Αθηνών",
    title:
      "Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου της 28ης Οκτωβρίου 1940..",
    date: "23 Οκτωβρίου 2023",
    body: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem ...",
  },
];
const newsCategory = ["Εκδηλώσεις", "Διαλέξεις", "Ανακοινώσεις"];
const secondarySections = sections.slice(1);
const primarySection = sections[0];

const News = () => {
  const [activeItem, setActiveItem] = useState("Διαλέξεις");
  return (
    <div>
      <ul className="w-min flex mx-auto mt-10 border border-borderColor rounded-full bg-backgroundColor text-primaryDark font-bold">
        {newsCategory.map((nc) => (
          <li
            key={nc}
            onClick={() => setActiveItem(nc)}
            className={`px-8 py-2 rounded-full${
              activeItem === nc
                ? " bg-accentColor text-white"
                : " hover:text-accentColor"
            } cursor-pointer`}
          >
            <h3>{nc}</h3>
          </li>
        ))}
      </ul>
      <div className="w-[60%] mx-auto mt-10 flex justify-center gap-12">
        <Section
          img={primarySection.img}
          about={primarySection.about}
          title={primarySection.title}
          date={primarySection.date}
          body={primarySection.body}
          isPrimary
        />
        <div className="flex flex-col justify-between">
          {secondarySections.map((s) => (
            <Section
              key={s.id}
              img={s.img}
              about={s.about}
              title={s.title}
              date={s.date}
            />
          ))}
        </div>
      </div>
      <Button>Περισσότερα</Button>
    </div>
  );
};

export default News;
