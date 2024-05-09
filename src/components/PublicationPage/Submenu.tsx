import { SubmenuProps } from "./types";

const Submenu = ({ navList, activeNav, setActiveNav }: SubmenuProps) => {
  return (
    <div className="shrink-0 basis-[160px] sticky top-[5%] h-min flex flex-col gap-2 py-4 bg-backgroundColor">
      {navList.map((navItem) => {
        const isActiveClass =
          navItem.id === activeNav
            ? "border-accentColor text-accentColor font-bold"
            : "border-backgroundColor text-bodyTextColor";

        return (
          <h3
            key={navItem.id}
            className={`ps-2 pe-4 border-l-2 ${isActiveClass}`}
            onClick={() => setActiveNav(navItem.id)}
          >
            {navItem.id === 674 || navItem.id === 675
              ? `${navItem.name} Δημοσιεύματα`
              : navItem.name}
          </h3>
        );
      })}
    </div>
  );
};

export default Submenu;
