import React from "react";
import { NavLink } from "react-router-dom";

export function Collections() {
  return (
    <div>
      <section>
        <div className="container mx-auto">
          <div className="cs-section_heading cs-style2">
            <div className="cs-section_left">
              <h2 className="cs-section_title">Top Collection</h2>
            </div>
            <div className="cs-section_right">
              <NavLink to="collection.html" className="cs-btn cs-style1">
                <span>Explore More</span>
              </NavLink>
            </div>
          </div>
          <div className="cs-height_45 cs-height_lg_45" />
          <div className="cs-grid_5 cs-gap_30">
            <div className="cs-card cs-style3 cs-box_shadow cs-white_bg">
              <NavLink
                to="collection-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/general/general_7.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <NavLink to="#" className="cs-avatar">
                <img src="assets/img/avatar/avatar_7.png" alt="Avatar" />
                <span className="cs-avatar_status" />
              </NavLink>
              <div className="cs-card_info">
                <h3 className="cs-card_title">
                  <NavLink to="collection-details.html">Audioglyphs</NavLink>
                </h3>
                <div className="cs-card_subtitle">
                  <i className="far fa-check-circle fa-fw" />
                  <span>Guarranted Authentic</span>
                </div>
                <div className="cs-catd_meta">
                  <NavLink to="#" className="cs-catd_meta_item">
                    <i className="fas fa-list-ul fa-fw" />
                    <span>120 Items</span>
                  </NavLink>
                  <NavLink to="#" className="cs-catd_meta_item">
                    <i className="far fa-eye fa-fw" />
                    <span>1K Views</span>
                  </NavLink>
                </div>
                <div className="cs-catd_footer">
                  <div className="cs-left">
                    <h4>Volume</h4>
                    <p>22.9k</p>
                  </div>
                  <div className="cs-left">
                    <h4>Floor Price</h4>
                    <p>4.2 ETH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-card cs-style3 cs-box_shadow cs-white_bg">
              <NavLink
                to="collection-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/general/general_8.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <NavLink to="#" className="cs-avatar">
                <img src="assets/img/avatar/avatar_8.png" alt="Avatar" />
              </NavLink>
              <div className="cs-card_info">
                <h3 className="cs-card_title">
                  <NavLink to="collection-details.html">HenryArtisan</NavLink>
                </h3>
                <div className="cs-card_subtitle">
                  <i className="far fa-check-circle fa-fw" />
                  <span>Guarranted Authentic</span>
                </div>
                <div className="cs-catd_meta">
                  <NavLink to="#" className="cs-catd_meta_item">
                    <i className="fas fa-list-ul fa-fw" />
                    <span>234 Items</span>
                  </NavLink>
                  <NavLink to="#" className="cs-catd_meta_item">
                    <i className="far fa-eye fa-fw" />
                    <span>2.1K Views</span>
                  </NavLink>
                </div>
                <div className="cs-catd_footer">
                  <div className="cs-left">
                    <h4>Volume</h4>
                    <p>87.9k</p>
                  </div>
                  <div className="cs-left">
                    <h4>Floor Price</h4>
                    <p>6.7 ETH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-card cs-style3 cs-box_shadow cs-white_bg">
              <NavLink
                to="collection-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/general/general_9.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <NavLink to="#" className="cs-avatar">
                <img src="assets/img/avatar/avatar_9.png" alt="Avatar" />
                <span className="cs-avatar_status" />
              </NavLink>
              <div className="cs-card_info">
                <h3 className="cs-card_title">
                  <NavLink to="collection-details.html">CryptoCrystal</NavLink>
                </h3>
                <div className="cs-card_subtitle">
                  <i className="far fa-check-circle fa-fw" />
                  <span>Guarranted Authentic</span>
                </div>
                <div className="cs-catd_meta">
                  <NavLink to="#" className="cs-catd_meta_item">
                    <i className="fas fa-list-ul fa-fw" />
                    <span>560 Items</span>
                  </NavLink>
                  <NavLink to="#" className="cs-catd_meta_item">
                    <i className="far fa-eye fa-fw" />
                    <span>3.1K Views</span>
                  </NavLink>
                </div>
                <div className="cs-catd_footer">
                  <div className="cs-left">
                    <h4>Volume</h4>
                    <p>99.9k</p>
                  </div>
                  <div className="cs-left">
                    <h4>Floor Price</h4>
                    <p>4.8 ETH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-card cs-style3 cs-box_shadow cs-white_bg">
              <NavLink
                to="collection-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/general/general_10.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <NavLink to="#" className="cs-avatar">
                <img src="assets/img/avatar/avatar_10.png" alt="Avatar" />
              </NavLink>
              <div className="cs-card_info">
                <h3 className="cs-card_title">
                  <NavLink to="collection-details.html">CryptoArte</NavLink>
                </h3>
                <div className="cs-card_subtitle">
                  <i className="far fa-check-circle fa-fw" />
                  <span>Guarranted Authentic</span>
                </div>
                <div className="cs-catd_meta">
                  <NavLink to="#" className="cs-catd_meta_item">
                    <i className="fas fa-list-ul fa-fw" />
                    <span>345 Items</span>
                  </NavLink>
                  <NavLink to="#" className="cs-catd_meta_item">
                    <i className="far fa-eye fa-fw" />
                    <span>2.1K Views</span>
                  </NavLink>
                </div>
                <div className="cs-catd_footer">
                  <div className="cs-left">
                    <h4>Volume</h4>
                    <p>19.8k</p>
                  </div>
                  <div className="cs-left">
                    <h4>Floor Price</h4>
                    <p>3.5 ETH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-card cs-style3 cs-box_shadow cs-white_bg">
              <NavLink
                to="collection-details.html"
                className="cs-card_thumb cs-zoom_effect"
              >
                <img
                  src="assets/img/general/general_11.jpeg"
                  alt=""
                  className="cs-zoom_item"
                />
              </NavLink>
              <NavLink to="#" className="cs-avatar">
                <img src="assets/img/avatar/avatar_11.png" alt="Avatar" />
              </NavLink>
              <div className="cs-card_info">
                <h3 className="cs-card_title">
                  <NavLink to="collection-details.html">CyberKongz</NavLink>
                </h3>
                <div className="cs-card_subtitle">
                  <i className="far fa-check-circle fa-fw" />
                  <span>Guarranted Authentic</span>
                </div>
                <div className="cs-catd_meta">
                  <NavLink to="#" className="cs-catd_meta_item">
                    <i className="fas fa-list-ul fa-fw" />
                    <span>140 Items</span>
                  </NavLink>
                  <NavLink to="#" className="cs-catd_meta_item">
                    <i className="far fa-eye fa-fw" />
                    <span>2.1K Views</span>
                  </NavLink>
                </div>
                <div className="cs-catd_footer">
                  <div className="cs-left">
                    <h4>Volume</h4>
                    <p>12.9k</p>
                  </div>
                  <div className="cs-left">
                    <h4>Floor Price</h4>
                    <p>2.8 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}
