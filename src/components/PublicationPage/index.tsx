import { useEffect, useState } from "react";

import { Pub, PublicationResponse } from "./types";
import { useData } from "../DataProvider";
import Submenu from "./Submenu";
import Content from "./Content";

const initialState = {
  code: 0,
  count: 0,
  nodes: [],
};

const PublicationPage = () => {
  const [pubRes, setPubRes] = useState<PublicationResponse>(initialState);
  const [activeNav, setActiveNav] = useState(674);
  const [activePub, setActivePub] = useState(0);
  const { data } = useData();
  const navList = data.items.find((i) => i.id === 653)?.submenu;
  const pubs = pubRes.nodes;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://academyofathens-latest-cms.dotsoft.gr/api/el/publications"
        );
        const data: PublicationResponse = await res.json();
        setPubRes(data);
      } catch (e) {
        console.error("Error fetching: ", e);
      }
    };
    fetchData();
  }, []);

  // I do not like how the undefined type lingers within these lines of code
  const activeNavItem = navList?.find((navItem) => navItem.id === activeNav);
  const pubDetailsList = activeNavItem?.submenu?.map((p) => {
    const pub = pubs.find((pb) => pb.alias === p.url);
    if (pub) {
      const publication: Pub = {
        id: pub.id,
        title: pub.title,
        body: pub.body,
      };
      return publication;
    }
  });

  return (
    <main className="grow my-12">
      <h1 className="w-fit mx-auto text-titleFontSize text-primary font-bold">
        {activeNav === 676
          ? "Το Βιβλιοπωλείο "
          : activeNav === 674
          ? "Έντυπα Δημοσιεύματα "
          : "Ηλεκτρονικά Δημοσιεύματα "}
        της Ακαδημίας Αθηνών
      </h1>
      <div className="w-[60%] mx-auto mt-4 flex gap-8">
        {navList && (
          <Submenu
            navList={navList}
            activeNav={activeNav}
            setActiveNav={setActiveNav}
          />
        )}
        {pubRes.code !== 0 && pubDetailsList ? (
          <Content
            pubDetailsList={pubDetailsList}
            activePub={activePub}
            setActivePub={setActivePub}
          />
        ) : (
          <h1 className="mx-auto mt-16">Please wait...</h1>
        )}
      </div>
    </main>
  );
};

export default PublicationPage;
