import Image from "next/image";

import fb from "../../../public/Layout/Footer/fb-social.svg";
import ig from "../../../public/Layout/Footer/ig-social.svg";
import yt from "../../../public/Layout/Footer/yt-social.svg";
import espa from "../../../public/Layout/Footer/espa.png";
import logo from "../../../public/Layout/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-wrap justify-center gap-y-8 p-8 bg-primary text-white sm:flex-row-reverse sm:flex-nowrap sm:gap-40">
        <div className="basis-1/2 sm:basis-auto">
          <h3 className="font-bold">ΧΡΗΣΙΜΕΣ ΠΛΗΡΟΦΟΡΙΕΣ</h3>
          <ul className="text-quaternaryFontSize">
            <li className="text-accentColor">Ευρετήριο Προσώπων</li>
            <li>Πρόσβαση</li>
            <li>Δικαιώματα</li>
            <li>Δελτία Τύπου</li>
            <li>Προκηρύξεις</li>
          </ul>
        </div>
        <div className="basis-1/2 sm:basis-auto">
          <h3 className="font-bold">ΕΠΙΚΟΙΝΩΝΙΑ</h3>
          <address className="not-italic text-quaternaryFontSize">
            Πανεπιστημίου 28, 106 79 Αθήνα <br /> Τ: 210 3634700
            <br /> F: 210 3634806
            <br />
            E-mail: info@academyofathens.gr
          </address>
        </div>
        <div className=" flex flex-col items-center">
          <Image className="" src={logo} alt="footer logo" width={276} />
          <div className="flex justify-center gap-4 mt-4">
            <Image src={fb} alt="fb social icons" />
            <Image src={ig} alt="ig social icons" />
            <Image src={yt} alt="yt social icons" />
          </div>
        </div>
      </div>
      <div className="py-3">
        <Image className="mx-auto" src={espa} alt="ESPA logo" width={255} />
      </div>
      <div className="py-4 text-center bg-primaryDark text-white">
        © 2023 Dotsoft. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
