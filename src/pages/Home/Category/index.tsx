import React from "react";
import { NavLink } from "react-router-dom";
import { SlickSlider } from "src/components/SlickSlider";

export function Catagory() {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="cs-section_heading cs-style1 text-center">
          Explore By Catagory
        </h2>
        <div className="cs-height_45 cs-height_lg_45" />
        <div className="cs-slider cs-style1 cs-gap-30">
          <div
            className="cs-slider_container"
            data-autoplay={0}
            data-loop={1}
            data-speed={600}
            data-center={0}
            data-slides-per-view="responsive"
            data-xs-slides={2}
            data-sm-slides={3}
            data-md-slides={4}
            data-lg-slides={5}
            data-add-slides={6}
          >
            <div className="cs-slider_wrapper">
              <SlickSlider>
                <div className="cs-slide">
                  <NavLink
                    to="#"
                    className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center"
                  >
                    <span className="cs-avatar">
                      <img src="assets/img/avatar/avatar_38.png" alt="Avatar" />
                    </span>
                    <div className="cs-card_info">
                      <h3 className="cs-card_title">Art</h3>
                      <div className="cs-card_subtitle">
                        Exercitation veniam
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* .cs-slide */}
                <div className="cs-slide">
                  <NavLink
                    to="#"
                    className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center"
                  >
                    <span className="cs-avatar">
                      <img src="assets/img/avatar/avatar_39.png" alt="Avatar" />
                    </span>
                    <div className="cs-card_info">
                      <h3 className="cs-card_title">Music</h3>
                      <div className="cs-card_subtitle">
                        Exercitation veniam
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* .cs-slide */}
                <div className="cs-slide">
                  <NavLink
                    to="#"
                    className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center"
                  >
                    <span className="cs-avatar">
                      <img src="assets/img/avatar/avatar_40.png" alt="Avatar" />
                    </span>
                    <div className="cs-card_info">
                      <h3 className="cs-card_title">Video</h3>
                      <div className="cs-card_subtitle">
                        Exercitation veniam
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* .cs-slide */}
                <div className="cs-slide">
                  <NavLink
                    to="#"
                    className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center"
                  >
                    <span className="cs-avatar">
                      <img src="assets/img/avatar/avatar_41.png" alt="Avatar" />
                    </span>
                    <div className="cs-card_info">
                      <h3 className="cs-card_title">Fashion</h3>
                      <div className="cs-card_subtitle">
                        Exercitation veniam
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* .cs-slide */}
                <div className="cs-slide">
                  <NavLink
                    to="#"
                    className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center"
                  >
                    <span className="cs-avatar">
                      <img src="assets/img/avatar/avatar_42.png" alt="Avatar" />
                    </span>
                    <div className="cs-card_info">
                      <h3 className="cs-card_title">Sports</h3>
                      <div className="cs-card_subtitle">
                        Exercitation veniam
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* .cs-slide */}
                <div className="cs-slide">
                  <NavLink
                    to="#"
                    className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center"
                  >
                    <span className="cs-avatar">
                      <img src="assets/img/avatar/avatar_43.png" alt="Avatar" />
                    </span>
                    <div className="cs-card_info">
                      <h3 className="cs-card_title">Collectibles</h3>
                      <div className="cs-card_subtitle">
                        Exercitation veniam
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* .cs-slide */}
                <div className="cs-slide">
                  <NavLink
                    to="#"
                    className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center"
                  >
                    <span className="cs-avatar">
                      <img src="assets/img/avatar/avatar_38.png" alt="Avatar" />
                    </span>
                    <div className="cs-card_info">
                      <h3 className="cs-card_title">Art</h3>
                      <div className="cs-card_subtitle">
                        Exercitation veniam
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* .cs-slide */}
                <div className="cs-slide">
                  <NavLink
                    to="#"
                    className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center"
                  >
                    <span className="cs-avatar">
                      <img src="assets/img/avatar/avatar_40.png" alt="Avatar" />
                    </span>
                    <div className="cs-card_info">
                      <h3 className="cs-card_title">Video</h3>
                      <div className="cs-card_subtitle">
                        Exercitation veniam
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* .cs-slide */}
              </SlickSlider>
            </div>
          </div>
          {/* .cs-slider_container */}
          <div className="cs-height_10 cs-height_lg_10" />
          <div className="cs-pagination cs-style1" />
        </div>
        {/* .cs-slider */}
      </div>
    </section>
  );
}
