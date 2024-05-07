import Image from "next/image";

import { ContentProps } from "./types";

import arrow from "../../../public/PublicationPage/accordion-arrow.svg";

const Content = ({ pubDetailsList, activePub, setActivePub }: ContentProps) => {
  const contentJSX = pubDetailsList.map((pb) => {
    if (!pb) return;
    const imgClasses =
      pb.id === activePub ? "w-auto me-4 rotate-90" : "w-auto me-4";
    return (
      <section
        key={pb.id}
        className="text-primary"
        onClick={
          activePub === pb.id
            ? () => setActivePub(0)
            : () => setActivePub(pb.id)
        }
      >
        <div className="flex justify-between mt-4 py-4 border-b border-primaryBorderColor ">
          <h4 className="basis-2/3">{pb.title}</h4>
          <Image
            className={imgClasses}
            src={arrow}
            alt="Accordion arrow icon"
          />
        </div>
        {/* Depending on data source, pb.body would have to be sanitised to make sure to avoid potential XSS attacks */}
        {/* Since data source is owned by us then sanitisation is not necessary for now */}
        {/* P.S. Obviously the more layers of security you have the better */}
        {activePub === pb.id && (
          <div
            className="px-2 pt-4 bg-backgroundColor"
            dangerouslySetInnerHTML={{ __html: pb.body }}
          ></div>
        )}
      </section>
    );
  });

  return <div className="basis-full">{contentJSX}</div>;
};

export default Content;
