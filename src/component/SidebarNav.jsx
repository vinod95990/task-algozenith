import React, { useMemo, useState } from "react";

const menuItems = [
  { src: "/icons/view-grid.svg", label: "Dashboard", id: 1 },
  { src: "/icons/light-bulb.svg", label: "Learn", id: 2 },
  { src: "/icons/user-group.svg", label: "Forums", id: 3 },
  {
    src: "/icons/clip-board.svg",
    label: "Upskill",
    id: 4,
  },
  { src: "/icons/chart-bar-dark.svg", label: "Contest", id: 5 },
  { src: "/icons/star.svg", label: "Leaderboard", id: 6 },
];

const SidebarNav = () => {
  const [activeTab, setActiveTab] = useState(menuItems[3]);

  return (
    <nav>
      <ul className="hidden sm:flex items-start justify-center w-36 lg:w-52 gap-3 pr-6 lg:gap-4 flex-col">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`flex w-full items-center justify-start gap-3 lg:gap-5 cursor-pointer transition-all p-1 sm:p-3 ${
              item.id == activeTab.id ? "bg-active  rounded-lg " : ""
            }`}
          >
            <img
              src={item.src}
              width={20}
              height={20}
              className={`w-3 h-3 lg:w-5 lg:h-5 ${
                item.active ? "text-blue-600 " : "text-gray-500"
              }`}
            ></img>
            <p
              className={`text-sm lg:text-lg  ${
                item.id == activeTab.id
                  ? "font-bold text-secondary "
                  : "font-normal"
              } ${item.id == 1 ? "text-secondary" : ""}`}
            >
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
