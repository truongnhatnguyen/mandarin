import React from "react";
import { NavLink } from "react-router-dom";

export function Cta() {
  return (
    <div>
      <section>
        <div className="sm:container sm:mx-auto mx-5">
          <div className="cs-cta cs-style2 text-center cs-accent_bg">
            <h2 className="cs-cta_title cs-white_color_8">Buy Pre-sale Now</h2>
            <div className="cs-cta_subtitle cs-white_color_8">
              To receive our valuable members-only offers
            </div>
            <NavLink
              to="/presale"
              className="cs-btn cs-style1 cs-btn_lg cs-color2"
            >
              <span>Buy Presale</span>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
