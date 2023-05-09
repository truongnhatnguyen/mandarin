import React from "react";
import { NavLink } from "react-router-dom";

export function NewItem() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="cs-section_heading cs-style2">
          <div className="cs-section_left">
            <h2 className="cs-section_title">New Items</h2>
          </div>
          <div className="cs-section_right">
            <NavLink to="explore-1.html" className="cs-btn cs-style1">
              <span>Explore More</span>
            </NavLink>
          </div>
        </div>
        <div className="cs-isotop_filter cs-style1 cs-type1 cs-center">
          <ul className="cs-mp0 cs-center">
            <li className="active">
              <NavLink to="#" data-filter="*">
                <span>All NFT</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" data-filter=".fashion">
                <span>Fashion</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" data-filter=".music">
                <span>Music</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" data-filter=".video">
                <span>Video</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" data-filter=".games">
                <span>Games</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="cs-height_45 cs-height_lg_45" />
        <div className="cs-isotop cs-style1 cs-isotop_col_5 cs-has_gutter_30">
          <div className="cs-grid_sizer" />
          <div className="cs-isotop_item fashion">
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                2.1K
              </span>
              <NavLink
                to="explore-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/explore/1.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img src="assets/img/avatar/avatar_12.png" alt="Avatar" />
                  <span>Johny E.</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="explore-details.html">Art work #2134</NavLink>
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
          </div>
          {/* .cs-isotop_item */}
          <div className="cs-isotop_item music">
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                3.3K
              </span>
              <NavLink
                to="explore-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/explore/2.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img src="assets/img/avatar/avatar_13.png" alt="Avatar" />
                  <span>debit alex</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="explore-details.html">
                    Cool octopus traveling
                  </NavLink>
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
          </div>
          {/* .cs-isotop_item */}
          <div className="cs-isotop_item fashion">
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                3.1K
              </span>
              <NavLink
                to="explore-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/explore/3.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img src="assets/img/avatar/avatar_12.png" alt="Avatar" />
                  <span>robert Alex</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="explore-details.html">
                    Octopus eating icecrem
                  </NavLink>
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
          </div>
          {/* .cs-isotop_item */}
          <div className="cs-isotop_item video">
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                2.1K
              </span>
              <NavLink
                to="explore-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/explore/4.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img src="assets/img/avatar/avatar_12.png" alt="Avatar" />
                  <span>johny e.</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="explore-details.html">Panda with fish</NavLink>
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
          </div>
          {/* .cs-isotop_item */}
          <div className="cs-isotop_item games">
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                1.2K
              </span>
              <NavLink
                to="explore-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/explore/5.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img src="assets/img/avatar/avatar_13.png" alt="Avatar" />
                  <span>austin R.</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="explore-details.html">Kawaii-bubble-tea</NavLink>
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
          {/* .cs-isotop_item */}
          <div className="cs-isotop_item fashion">
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                1.1k
              </span>
              <NavLink
                to="explore-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/explore/6.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img src="assets/img/avatar/avatar_12.png" alt="Avatar" />
                  <span>robert</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="explore-details.html">
                    Cute monsters hallo
                  </NavLink>
                </h3>
                <div className="cs-card_price">
                  Current Bid: <b className="cs-primary_color">0.19 ETH 7/13</b>
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
          {/* .cs-isotop_item */}
          <div className="cs-isotop_item music">
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                2.2k
              </span>
              <NavLink
                to="explore-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/explore/7.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img src="assets/img/avatar/avatar_13.png" alt="Avatar" />
                  <span>debit alex</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="explore-details.html">
                    Cat-mascot-character
                  </NavLink>
                </h3>
                <div className="cs-card_price">
                  Current Bid:{" "}
                  <b className="cs-primary_color">0.28 ETH 21/91</b>
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
          {/* .cs-isotop_item */}
          <div className="cs-isotop_item games">
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                1.4k
              </span>
              <NavLink
                to="explore-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/explore/8.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img src="assets/img/avatar/avatar_12.png" alt="Avatar" />
                  <span>debit alex</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="explore-details.html">
                    Small kid with orange
                  </NavLink>
                </h3>
                <div className="cs-card_price">
                  Current Bid:{" "}
                  <b className="cs-primary_color">0.17 ETH 14/23</b>
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
          {/* .cs-isotop_item */}
          <div className="cs-isotop_item music">
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                1.9k
              </span>
              <NavLink
                to="explore-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/explore/9.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img src="assets/img/avatar/avatar_13.png" alt="Avatar" />
                  <span>austin r.</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="explore-details.html">
                    Digital Cat Illustration
                  </NavLink>
                </h3>
                <div className="cs-card_price">
                  Current Bid:{" "}
                  <b className="cs-primary_color">0.09 ETH 10/91</b>
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
          {/* .cs-isotop_item */}
          <div className="cs-isotop_item games">
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw" />
                9.3k
              </span>
              <NavLink
                to="explore-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/explore/10.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <div className="cs-card_info">
                <NavLink to="#" className="cs-avatar cs-white_bg">
                  <img src="assets/img/avatar/avatar_12.png" alt="Avatar" />
                  <span>gallant j.</span>
                </NavLink>
                <h3 className="cs-card_title">
                  <NavLink to="explore-details.html">
                    Fictional character
                  </NavLink>
                </h3>
                <div className="cs-card_price">
                  Current Bid:{" "}
                  <b className="cs-primary_color">0.06 ETH 11/109</b>
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
          {/* .cs-isotop_item */}
        </div>
      </div>
    </section>
  );
}
