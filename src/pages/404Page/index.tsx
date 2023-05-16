import React from "react";
import { NavLink } from "react-router-dom";

export function Page404() {
  return (
    <div>
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        <div className="cs-bg" data-src="assets/img/page_head_bg.svg">
          <div className="cs-height_100 cs-height_lg_70" />
          <div className="container-auto">
            <div className="cs-error_card text-center">
              <div className="cs-error_img">
                <img src="assets/img/404.svg" alt={"404"} />
              </div>
              <div className="cs-height_70 cs-height_lg_40" />
              <NavLink to="/" className="cs-btn cs-style1 cs-btn_lg">
                <span>Back To Home</span>
              </NavLink>
            </div>
          </div>
          <div className="cs-height_100 cs-height_lg_70" />
        </div>
      </div>
    </div>
  );
}
