import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { mainMenuResponse } from "../types";

import greekFlag from "../../../public/Layout/Navbar/greek-flag.png";
import downArrow from "../../../public/Layout/Navbar/down-arrow.svg";
import search from "../../../public/Layout/Navbar/search-icon.svg";
import logo from "../../../public/Layout/logo.png";

const Navbar = () => {
  const [data, setData] = useState<mainMenuResponse>();
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://academyofathens-latest-cms.dotsoft.gr/api/el/menu/main"
        );
        const data: mainMenuResponse = await res.json();
        setData(data);
      } catch (e) {
        console.error("Error fetching: ", e);
      }
    };
    fetchData();
  }, []);

  return (
    <header>
      <div className="h-[100px] flex justify-center items-center bg-primaryDark">
        <Image src={logo} alt="search" width={264} />
      </div>
      <nav className="h-[80px] flex justify-center items-center gap-4 bg-primary text-navTextColor">
        {data && (
          <>
            <ul className="flex justify-center gap-8">
              {data.items.map((i) => {
                const linkClasses =
                  activeItem === i.id
                    ? "bg-white text-primary"
                    : "hover:bg-footerIconBackground";
                return (
                  <li key={i.id} onClick={() => setActiveItem(i.id)}>
                    <Link
                      href={i.url}
                      className={`p-2 rounded-full ${linkClasses}`}
                    >
                      {i.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button>
              <Image src={search} alt="search-bar icon" />
            </button>
            <div className="flex gap-1">
              <Image
                className="w-6 h-6 object-cover object-left"
                src={greekFlag}
                alt="search"
              />
              <span>ΕΛ</span>
              <Image src={downArrow} alt="dropdown icon arrow" />
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
