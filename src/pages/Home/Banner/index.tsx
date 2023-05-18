import { NavLink } from "react-router-dom";
import { Slider3d } from "./Slider3d";

export function Banner() {
 return (
  <section
   className="cs-hero cs-style4 cs-bg cs-center"
   data-src="assets/img/hero_bg4.jpeg"
  >
   <div className="container-auto">
    <div className="cs-hero_in">
     <div className="cs-hero_in_left">
      <div className="cs-hero_text">
       <h1 className="cs-hero_title cs-white_color">
        The most profitable Place to Collect , Buy and Sell Game Market
       </h1>
       <div className="cs-hero_subtitle cs-medium cs-white_color">
        Security and secret game for gaming, entertainment, metaverse and data{" "}
        <br />
        management time capsules.
       </div>
       <div className="flex flex-col md:flex-row gap-4">
        <NavLink
         to="/presale"
         className="cs-hero_btn cs-style1 cs-color3 w-full"
        >
         <span>Buy Presale</span>
        </NavLink>
        <NavLink to="#" className="cs-hero_btn cs-style1 cs-color1 w-full">
         <span>White Paper</span>
        </NavLink>
       </div>
      </div>
     </div>
     <div className="cs-hero_in_right ">
      <div className="cs-slider cs-style1">
       <Slider3d />
       <div className="cs-slider_arrows cs-style1 cs-center cs-hidden_mobile">
        <div className="cs-left_arrow cs-center cs-box_shadow slick-arrow">
         <svg
          width={14}
          height={15}
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path
           d="M13.0269 7.55957H0.817552"
           stroke="currentColor"
           strokeWidth="1.16474"
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
           d="M6.92188 1.45508L0.817222 7.55973L6.92188 13.6644"
           stroke="currentColor"
           strokeWidth="1.16474"
           strokeLinecap="round"
           strokeLinejoin="round"
          />
         </svg>
        </div>
        <div className="cs-right_arrow cs-center cs-box_shadow slick-arrow">
         <svg
          width={14}
          height={15}
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path
           d="M0.816895 7.55957H13.0262"
           stroke="currentColor"
           strokeWidth="1.16474"
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
           d="M6.92188 1.45508L13.0265 7.55973L6.92188 13.6644"
           stroke="currentColor"
           strokeWidth="1.16474"
           strokeLinecap="round"
           strokeLinejoin="round"
          />
         </svg>
        </div>
       </div>
       <div className="cs-pagination cs-style1 cs-hidden" />
      </div>
      {/* .cs-slider */}
     </div>
    </div>
   </div>
  </section>
 );
}
