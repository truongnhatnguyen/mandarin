import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const lstMenus = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Explore",
    path: "explore",
    // children: [{ label: "", path: "" }],
  },
  {
    label: "How it works",
    path: "how-it-works",
  },

  {
    label: "About Us",
    path: "about",
  },
  {
    label: "Contact",
    path: "contact",
  },
];

export function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  // const [openSubMenu, setOpenSubMenu] = useState(false);
  function handleOpenMenu() {
    setOpenMenu((val) => !val);
  }
  // function handleOpenSubMenu() {
  //   setOpenSubMenu((val) => !val);
  // }
  return (
    <div className="cs-nav_wrap">
      <div className="cs-nav_out">
        <div className="cs-nav_in">
          <div className="cs-nav">
            <ul
              className={`cs-nav_list ${
                openMenu ? "!block duration-500 " : "hidden"
              }`}
            >
              {lstMenus.map((item, idx) => (
                <li
                  key={idx}
                  // className={`${
                  //   item.children?.length ? "menu-item-has-children" : ""
                  // }`}
                >
                  <NavLink to={item.path}>{item.label}</NavLink>
                  {/* {item.children?.map((chill, idx) => (
                    <>
                      <ul
                        key={idx}
                        className={`${openSubMenu ? "!block" : "hidden"}`}
                      >
                        <li>
                          <NavLink to={chill.path}>{chill.label}</NavLink>
                        </li>
                      </ul>
                      <span
                        className={`cs-munu_dropdown_toggle ${
                          openSubMenu ? "active" : ""
                        }`}
                        onClick={handleOpenSubMenu}
                      ></span>
                    </>
                  ))} */}
                </li>
              ))}
            </ul>
            <span
              className={`cs-munu_toggle ${
                openMenu ? "cs-toggle_active" : ""
              } `}
              onClick={handleOpenMenu}
            >
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
