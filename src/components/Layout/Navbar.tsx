import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { mainMenuResponse } from "../types";

import greekFlag from "../../../public/Layout/Navbar/greek-flag.png";
import burger from "../../../public/Layout/Navbar/burger.svg";
import cross from "../../../public/Layout/Navbar/cross.svg";
import downArrow from "../../../public/Layout/Navbar/down-arrow.svg";
import search from "../../../public/Layout/Navbar/search-icon.svg";
import logo from "../../../public/Layout/logo.png";

const Navbar = () => {
  const [data, setData] = useState<mainMenuResponse>();
  const [activeItem, setActiveItem] = useState(0);
  const [isMenuActive, setisMenuActive] = useState(true);

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
    setisMenuActive(window.innerWidth > 640 ? true : false);
  }, []);

  return (
    <header>
      <div className="h-[100px] flex justify-center items-center bg-primaryDark">
        <Image
          className="ms-auto translate-x-[20px] sm:ms-0 sm:translate-x-0 "
          src={logo}
          alt="search"
          width={264}
        />
        <Image
          className="ms-auto me-4 sm:hidden"
          src={isMenuActive ? cross : burger}
          alt="search"
          width={40}
          onClick={() => setisMenuActive(!isMenuActive)}
        />
      </div>

      <nav
        className={`${
          isMenuActive ? "" : "hidden "
        }flex flex-col justify-center items-center sm:gap-4 bg-primary text-navTextColor sm:h-[80px] sm:flex-row`}
      >
        {data && (
          <>
            <ul className="w-full sm:w-auto flex flex-col justify-center sm:flex-row sm:gap-8">
              {data.items.map((i) => {
                const linkClasses =
                  activeItem === i.id
                    ? "bg-white text-primary"
                    : "hover:bg-footerIconBackground";
                return (
                  <li
                    key={i.id}
                    className="text-center"
                    onClick={() => setActiveItem(i.id)}
                  >
                    <Link
                      href={i.url}
                      onClick={() => setisMenuActive(false)}
                      className={`block py-4 border-b sm:border-0 sm:p-2 sm:rounded-full  ${linkClasses}`}
                    >
                      {i.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="w-full sm:w-auto flex flex-row justify-center items-center gap-4 py-4">
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
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
