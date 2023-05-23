import { useState } from "react";
import { Link } from "../shared/components/Link";

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
        openMenu ? "!h-60 !duration-500 !transition-all !py-3" : "h-0"
       }`}
      >
       {lstMenus.map((item, idx) => (
        <li key={idx}>
         <Link to={item.path}>{item.label}</Link>
        </li>
       ))}
      </ul>
      <span
       className={`cs-munu_toggle ${openMenu ? "cs-toggle_active" : ""} `}
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
