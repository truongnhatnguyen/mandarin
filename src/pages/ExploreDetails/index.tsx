import React from "react";
import { NavLink } from "react-router-dom";
import { Head } from "src/components/Head";
import { CustomSwiper } from "./CustomSwiper";

export function ExploreDetails() {
  return (
    <>
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        <Head title="Explore Details"></Head>

        <div className="cs-height_100 cs-height_lg_70" />
        <div className="container-auto">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-4">
            <div className="col-lg-6">
              <CustomSwiper></CustomSwiper>
              <div className="cs-height_25 cs-height_lg_25" />
              <div className="cs-tabs cs-fade_tabs cs-style1">
                <div className="cs-medium">
                  <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                    <li className="active">
                      <NavLink to="#Description">ABOUT THIS GAME</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="cs-height_20 cs-height_lg_20" />
                <div className="cs-tab_content">
                  <div id="Description" className="cs-tab active">
                    <div className="cs-box_shadow cs-general_box_5">
                      Amet lorem minim mollit non deserunt ullamco est sit
                      aliqua dolor do amet sint. Velit officia consequat duis
                      enim velit mollit. Amet lorem minim mollit nonese deserunt
                      ullamco est sit aliqua dolor do amet sint. Velit officia
                      consequat duis enim velit mollit Velit officia else est
                      sit ullamco es duis.
                    </div>
                  </div>
                  {/* .cs-tab */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs-height_0 cs-height_lg_40" />
              <div className="cs-single_product_head">
                <h2>#Digital Art</h2>
                <span className="cs-card_like cs-primary_color cs-box_shadow">
                  <i className="fas fa-heart fa-fw" />
                  2.1K
                </span>
              </div>
              <div className="cs-height_25 cs-height_lg_25" />
              <div className="grid gap-4">
                <div className=" rounded-md w-full h-80">
                  <img
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                    alt=""
                    className="rounded-md w-full h-full bg-cover"
                  />
                </div>
                <div className="cs-tab_content">
                  <div id="Description" className="cs-tab active">
                    <div className="cs-white_bg cs-box_shadow cs-general_box_5 text-center">
                      <div>
                        <span className="font-bold ">TiTLE:</span> TENKEN 7
                      </div>
                      <div>
                        <span className="font-bold ">GENRE:</span> ACTION SPORT
                      </div>
                      <div>
                        <span className="font-bold ">DEVELOPER:</span> BAN DAI
                        NAMCO studio inc
                      </div>
                      <div>
                        <span className="font-bold ">PUBLISHER:</span> BAN DAI
                        NAMCO emtaiment
                      </div>
                      <div>
                        <span className="font-bold ">FRANCHISE:</span> FRANCHISE
                      </div>
                      <div>
                        <span className="font-bold ">RELEASE DATE:</span> 2 jun,
                        2017
                      </div>
                    </div>
                  </div>
                  {/* .cs-tab */}
                </div>
              </div>
              <div className="cs-tabs cs-fade_tabs cs-style1">
                <div className="cs-medium">
                  <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                    <li className="active">
                      <NavLink to="#Description">Description</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="cs-height_20 cs-height_lg_20" />
                <div className="cs-tab_content">
                  <div id="Description" className="cs-tab active">
                    <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                      Amet lorem minim mollit non deserunt ullamco est sit
                      aliqua dolor do amet sint. Velit officia consequat duis
                      enim velit mollit. Amet lorem minim mollit nonese deserunt
                      ullamco est sit aliqua dolor do amet sint. Velit officia
                      consequat duis enim velit mollit Velit officia else est
                      sit ullamco es duis.
                    </div>
                  </div>
                  {/* .cs-tab */}
                </div>
              </div>
              <div className="cs-height_25 cs-height_lg_25" />

              <div className="row">
                <div className="col-xl-6">
                  <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                    <div className="cs-social_widget justify-content-center">
                      <NavLink to="#">
                        <i className="fab fa-facebook-f" />
                      </NavLink>
                      <NavLink to="#">
                        <i className="fab fa-twitter" />
                      </NavLink>
                      <NavLink to="#">
                        <i className="fab fa-linkedin-in" />
                      </NavLink>
                      <NavLink to="#">
                        <i className="fab fa-instagram" />
                      </NavLink>
                      <NavLink to="#">
                        <i className="fab fa-youtube" />
                      </NavLink>
                    </div>
                  </div>
                  <div className="cs-height_30 cs-height_lg_30" />
                </div>
              </div>
              <div className="cs-height_10 cs-height_lg_10" />
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div className="">
                  <NavLink
                    to="#"
                    className="cs-btn cs-style1 cs-btn_lg w-full text-center"
                  >
                    <span>Buy Now</span>
                  </NavLink>
                </div>
                <div className="">
                  <NavLink
                    to="#"
                    className="cs-btn cs-style1 cs-btn_lg w-full text-center"
                  >
                    <span>Place Bid</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height_95 cs-height_lg_70" />
        <div className="sm:container sm:mx-auto mx-4">
          <h2 className="cs-section_heading cs-style1">Similar Items</h2>
          <div className="cs-height_45 cs-height_lg_45" />
          <div className="cs-grid_5 cs-gap_30">
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                2.1K
              </span>
              <NavLink to="#" className="cs-card_thumb cs-zoom_effect">
                <img
                  src="assets/exploredetails/similar.png"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img
                    src="assets/exploredetails/avatar-similar.png"
                    alt="Avatar"
                  />
                  <span>Johny E.</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="#">Art work #2134</NavLink>
                </h3>
                <div className="cs-card_price">
                  Current Bid: <b className="cs-primary_color">0.29 ETH 7/21</b>
                </div>
                <hr />
                <div className="cs-card_footer">
                  <span className="cs-card_btn_1" data-modal="#history_1">
                    <i className="fas fa-redo fa-fw" />
                    View History
                  </span>
                  <span className="cs-card_btn_2" data-modal="#bid_1">
                    <span>Place Bid</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                3.3K
              </span>
              <NavLink to="#" className="cs-card_thumb cs-zoom_effect">
                <img
                  src="assets/exploredetails/similar1.png"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img
                    src="assets/exploredetails/avatar-similar.png"
                    alt="Avatar"
                  />
                  <span>debit alex</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="#">Cool octopus traveling</NavLink>
                </h3>
                <div className="cs-card_price">
                  Current Bid: <b className="cs-primary_color">0.24 ETH 4/17</b>
                </div>
                <hr />
                <div className="cs-card_footer">
                  <span className="cs-card_btn_1" data-modal="#history_1">
                    <i className="fas fa-redo fa-fw" />
                    View History
                  </span>
                  <span className="cs-card_btn_2" data-modal="#bid_1">
                    <span>Place Bid</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                3.1K
              </span>
              <NavLink to="#" className="cs-card_thumb cs-zoom_effect">
                <img
                  src="assets/exploredetails/similar2.png"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img
                    src="assets/exploredetails/avatar-similar1.png"
                    alt="Avatar"
                  />
                  <span>robert Alex</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="#">Octopus eating icecrem</NavLink>
                </h3>
                <div className="cs-card_price">
                  Current Bid: <b className="cs-primary_color">0.09 ETH 1/9</b>
                </div>
                <hr />
                <div className="cs-card_footer">
                  <span className="cs-card_btn_1" data-modal="#history_1">
                    <i className="fas fa-redo fa-fw" />
                    View History
                  </span>
                  <span className="cs-card_btn_2" data-modal="#bid_1">
                    <span>Place Bid</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                2.1K
              </span>
              <NavLink to="#" className="cs-card_thumb cs-zoom_effect">
                <img
                  src="assets/exploredetails/similar3.png"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img
                    src="assets/exploredetails/avatar-similar2.png"
                    alt="Avatar"
                  />
                  <span>johny e.</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="#">Panda with fish</NavLink>
                </h3>
                <div className="cs-card_price">
                  Current Bid: <b className="cs-primary_color">0.19 ETH 5/11</b>
                </div>
                <hr />
                <div className="cs-card_footer">
                  <span className="cs-card_btn_1" data-modal="#history_1">
                    <i className="fas fa-redo fa-fw" />
                    View History
                  </span>
                  <span className="cs-card_btn_2" data-modal="#bid_1">
                    <span>Place Bid</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                1.2K
              </span>
              <NavLink to="#" className="cs-card_thumb cs-zoom_effect">
                <img
                  src="assets/exploredetails/similar4.png"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img
                    src="assets/exploredetails/avatar-similar3.png"
                    alt="Avatar"
                  />
                  <span>austin R.</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="#">Kawaii-bubble-tea</NavLink>
                </h3>
                <div className="cs-card_price">
                  Current Bid:{" "}
                  <b className="cs-primary_color">0.29 ETH 11/19</b>
                </div>
                <hr />
                <div className="cs-card_footer">
                  <span className="cs-card_btn_1" data-modal="#history_1">
                    <i className="fas fa-redo fa-fw" />
                    View History
                  </span>
                  <span className="cs-card_btn_2" data-modal="#bid_1">
                    <span>Place Bid</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height_100 cs-height_lg_70" />
      </div>
    </>
  );
}
