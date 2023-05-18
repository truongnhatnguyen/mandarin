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
                  <div className="cs-header_icon_btn cs-center cs-mobile_search_toggle">
                    <svg
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 18L13.875 14.375"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

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
