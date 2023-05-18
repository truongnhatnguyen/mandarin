// import { NavLink } from "../../shared/components/NavLink";
import { NavLink } from "react-router-dom";
import { Menu } from "../Menu";
export const Header = () => {
  return (
    <header className="cs-site_header cs-style1 cs-sticky-header cs-white_bg">
      <div className="cs-main_header">
        <div className="container-fluid">
          <div className="cs-main_header_in">
            <div className="cs-main_header_left">
              <NavLink className="cs-site_branding" to="/">
                <img src="assets/home/logo.png" alt="Logo" />
              </NavLink>
            </div>
            <div className="cs-main_header_right">
              <Menu />
              <div className="cs-header_btns_wrap">
                <div className="cs-header_btns">
                  <NavLink to="connect-wallet" className="cs-btn cs-style1">
                    <span>Connect Wallet</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
