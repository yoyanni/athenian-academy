import Image from "next/image";
import Link from "next/link";

import { SectionType } from "./types";

const classes = {
  section: "text-bodyTextColor text-quaternaryFontSize text-start",
  span: "mt-2 text-accentColor",
  h2: "mt-2 text-start text-secondaryFontSize font-bold",
  time: "mt-1 text-bodyTextOpacityColor",
  body: "mt-4",
  link: "mt-2 text-accentColor",
};

const Section = ({
  img,
  about,
  title,
  date,
  body,
  isPrimary = false,
}: SectionType) => {
  if (isPrimary) {
    return (
      <section className={`sm:w-[400px] flex flex-col ${classes.section}`}>
        <Image className="w-full sm:w-[400px]" src={img.src} alt={img.alt} />
        <span className={classes.span}>{about}</span>
        <h2 className={classes.h2}>{title}</h2>
        <time className={classes.time}>{date}</time>
        <p className={classes.body}>{body}</p>
        <Link className={classes.link} href="">
          Διαβάστε περισσότερα
        </Link>
      </section>
    );
  } else {
    return (
      <section
        className={`gap-4 flex flex-col sm:flex-row sm:w-[600px] sm:h-[180px] ${classes.section}`}
      >
        <Image
          className="w-full h-[300px] sm:w-[225px] sm:h-auto object-cover"
          src={img.src}
          alt={img.alt}
        />
        <div>
          <span className={classes.span}>{about}</span>
          <h2 className={classes.h2}>{title}</h2>
          <time className={`block ${classes.time}`}>{date}</time>
        </div>
      </section>
    );
  }
};

export default Section;
