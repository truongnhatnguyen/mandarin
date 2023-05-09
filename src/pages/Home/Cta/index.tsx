import React from "react";
import { NavLink } from "react-router-dom";

export function Cta() {
  return (
    <div>
      <section>
        <div className="sm:container sm:mx-auto mx-5">
          <div className="cs-cta cs-style2 text-center cs-accent_bg">
            <h2 className="cs-cta_title cs-white_color_8">
              Join our biggest NFTs platform
            </h2>
            <div className="cs-cta_subtitle cs-white_color_8">
              Exercitation veniam consequat sunt nostrud amet. It is a long
              <br />
              established fact that a reader
            </div>
            <NavLink
              to="register.html"
              className="cs-btn cs-style1 cs-btn_lg cs-color2"
            >
              <span>Sign Up</span>
            </NavLink>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}
