import { NavLink } from "react-router-dom";

export function Banner() {
  return (
    <section
      className="cs-hero cs-style4 cs-bg cs-center"
      data-src="assets/img/hero_bg4.jpeg"
    >
      <div className="container-fluid">
        <div className="cs-hero_in">
          <div className="cs-hero_in_left">
            <div className="cs-hero_text">
              <h1 className="cs-hero_title cs-white_color">
                The Best Beneficial Place to Collect , Buy and Sell NFT
                Marketplace
              </h1>
              <div className="cs-hero_subtitle cs-medium cs-white_color">
                Secure and secret NFTs for gaming, entertainment, metaverse and
                data <br />
                management time capsules.
              </div>
              <div className="cs-hero_btns">
                <NavLink
                  to="explore-1.html"
                  className="cs-hero_btn cs-style1 cs-color3"
                >
                  <span>Explore</span>
                </NavLink>
                <NavLink
                  to="create-items.html"
                  className="cs-hero_btn cs-style1 cs-color1"
                >
                  <span>Create</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="cs-hero_in_right">
            <div className="cs-slider cs-style1">
              <div
                className="cs-slider_container"
                data-autoplay={0}
                data-loop={1}
                data-speed={600}
                data-center={1}
                data-slides-per-view="responsive"
                data-xs-slides={1}
                data-sm-slides={3}
                data-md-slides={3}
                data-lg-slides={3}
                data-add-slides={3}
              >
                <div className="cs-slider_wrapper">
                  <div className="cs-slide">
                    <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                      <span className="cs-card_like cs-primary_color">
                        <i className="fas fa-heart fa-fw" />
                        2.1K
                      </span>
                      <NavLink to="#" className="cs-card_thumb cs-zoom_effect">
                        <img
                          src="assets/img/general/general_23.jpeg"
                          alt=""
                          className="cs-zoom_item"
                        />
                      </NavLink>
                      <div className="cs-card_info">
                        <NavLink to="#" className="cs-avatar cs-white_bg">
                          <img
                            src="assets/img/avatar/avatar_12.png"
                            alt="Avatar"
                          />
                          <span>Johny E.</span>
                        </NavLink>
                        <h3 className="cs-card_title">
                          <NavLink to="#">Beautiful shiba artwork</NavLink>
                        </h3>
                        <div className="cs-card_price">
                          Current Bid:{" "}
                          <b className="cs-primary_color">0.29 ETH 7/21</b>
                        </div>
                        <hr />
                        <div className="cs-card_footer">
                          <span
                            className="cs-card_btn_1"
                            data-modal="#history_1"
                          >
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
                  {/* .cs-slide */}
                  <div className="cs-slide">
                    <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                      <span className="cs-card_like cs-primary_color">
                        <i className="fas fa-heart fa-fw" />
                        3.3K
                      </span>
                      <NavLink to="#" className="cs-card_thumb cs-zoom_effect">
                        <img
                          src="assets/img/general/general_24.jpeg"
                          alt=""
                          className="cs-zoom_item"
                        />
                      </NavLink>
                      <div className="cs-card_info">
                        <NavLink to="#" className="cs-avatar cs-white_bg">
                          <img
                            src="assets/img/avatar/avatar_13.png"
                            alt="Avatar"
                          />
                          <span>Johny E.</span>
                        </NavLink>
                        <h3 className="cs-card_title">
                          <NavLink to="#">Cool octopus traveling</NavLink>
                        </h3>
                        <div className="cs-card_price">
                          Current Bid:{" "}
                          <b className="cs-primary_color">0.63 ETH 7/21</b>
                        </div>
                        <hr />
                        <div className="cs-card_footer">
                          <span
                            className="cs-card_btn_1"
                            data-modal="#history_1"
                          >
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
                  {/* .cs-slide */}
                  <div className="cs-slide">
                    <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                      <span className="cs-card_like cs-primary_color">
                        <i className="fas fa-heart fa-fw" />
                        5.3K
                      </span>
                      <NavLink to="#" className="cs-card_thumb cs-zoom_effect">
                        <img
                          src="assets/img/general/general_25.jpeg"
                          alt=""
                          className="cs-zoom_item"
                        />
                      </NavLink>
                      <div className="cs-card_info">
                        <NavLink to="#" className="cs-avatar cs-white_bg">
                          <img
                            src="assets/img/avatar/avatar_14.png"
                            alt="Avatar"
                          />
                          <span>Johny E.</span>
                        </NavLink>
                        <h3 className="cs-card_title">
                          <NavLink to="#">Diamond animals</NavLink>
                        </h3>
                        <div className="cs-card_price">
                          Current Bid:{" "}
                          <b className="cs-primary_color">0.27 ETH 7/21</b>
                        </div>
                        <hr />
                        <div className="cs-card_footer">
                          <span
                            className="cs-card_btn_1"
                            data-modal="#history_1"
                          >
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
                  {/* .cs-slide */}
                  <div className="cs-slide">
                    <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                      <span className="cs-card_like cs-primary_color">
                        <i className="fas fa-heart fa-fw" />
                        2.1K
                      </span>
                      <NavLink to="#" className="cs-card_thumb cs-zoom_effect">
                        <img
                          src="assets/img/general/general_23.jpeg"
                          alt=""
                          className="cs-zoom_item"
                        />
                      </NavLink>
                      <div className="cs-card_info">
                        <NavLink to="#" className="cs-avatar cs-white_bg">
                          <img
                            src="assets/img/avatar/avatar_12.png"
                            alt="Avatar"
                          />
                          <span>Johny E.</span>
                        </NavLink>
                        <h3 className="cs-card_title">
                          <NavLink to="#">Beautiful shiba artwork</NavLink>
                        </h3>
                        <div className="cs-card_price">
                          Current Bid:{" "}
                          <b className="cs-primary_color">0.29 ETH 7/21</b>
                        </div>
                        <hr />
                        <div className="cs-card_footer">
                          <span
                            className="cs-card_btn_1"
                            data-modal="#history_1"
                          >
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
                  {/* .cs-slide */}
                  <div className="cs-slide">
                    <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                      <span className="cs-card_like cs-primary_color">
                        <i className="fas fa-heart fa-fw" />
                        3.3K
                      </span>
                      <NavLink to="#" className="cs-card_thumb cs-zoom_effect">
                        <img
                          src="assets/img/general/general_24.jpeg"
                          alt=""
                          className="cs-zoom_item"
                        />
                      </NavLink>
                      <div className="cs-card_info">
                        <NavLink to="#" className="cs-avatar cs-white_bg">
                          <img
                            src="assets/img/avatar/avatar_13.png"
                            alt="Avatar"
                          />
                          <span>Johny E.</span>
                        </NavLink>
                        <h3 className="cs-card_title">
                          <NavLink to="#">Cool octopus traveling</NavLink>
                        </h3>
                        <div className="cs-card_price">
                          Current Bid:{" "}
                          <b className="cs-primary_color">0.63 ETH 7/21</b>
                        </div>
                        <hr />
                        <div className="cs-card_footer">
                          <span
                            className="cs-card_btn_1"
                            data-modal="#history_1"
                          >
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
                  {/* .cs-slide */}
                  <div className="cs-slide">
                    <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                      <span className="cs-card_like cs-primary_color">
                        <i className="fas fa-heart fa-fw" />
                        5.3K
                      </span>
                      <NavLink to="#" className="cs-card_thumb cs-zoom_effect">
                        <img
                          src="assets/img/general/general_25.jpeg"
                          alt=""
                          className="cs-zoom_item"
                        />
                      </NavLink>
                      <div className="cs-card_info">
                        <NavLink to="#" className="cs-avatar cs-white_bg">
                          <img
                            src="assets/img/avatar/avatar_14.png"
                            alt="Avatar"
                          />
                          <span>Johny E.</span>
                        </NavLink>
                        <h3 className="cs-card_title">
                          <NavLink to="#">Diamond animals</NavLink>
                        </h3>
                        <div className="cs-card_price">
                          Current Bid:{" "}
                          <b className="cs-primary_color">0.27 ETH 7/21</b>
                        </div>
                        <hr />
                        <div className="cs-card_footer">
                          <span
                            className="cs-card_btn_1"
                            data-modal="#history_1"
                          >
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
                  {/* .cs-slide */}
                </div>
              </div>
              {/* .cs-slider_container */}
              <div className="cs-slider_arrows cs-style1 cs-center cs-hidden_mobile">
                <div className="cs-left_arrow cs-center cs-box_shadow">
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
                <div className="cs-right_arrow cs-center cs-box_shadow">
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
