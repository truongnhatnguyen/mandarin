import { Link } from "src/shared/components/Link";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="cs-footer cs-style1">
      <div className="cs-footer_bg" />
      <div className="cs-height_100 cs-height_lg_60" />
      <div className="sm:container sm:mx-auto mx-5">
        <div className="flex flex-row flex-wrap">
          <div className="basis-8/12">
            <div className="flex flex-row flex-wrap">
              <div className="sm:basis-3/12 basis-full">
                <NavLink to="">
                  <img src="assets/home/logo.png" alt="" />
                </NavLink>
              </div>
              <div className="sm:basis-3/12 basis-full">
                <div className="cs-footer_widget">
                  <h2 className="cs-widget_title">Marketplace</h2>
                  <ul className="cs-widget_nav">
                    <li>
                      <Link to="explore-1.html">All NFTs</Link>
                    </li>
                    <li>
                      <Link to="explore-2.html">Popular Art</Link>
                    </li>
                    <li>
                      <Link to="explore-1.html">Digital Art</Link>
                    </li>
                    <li>
                      <Link to="explore-1.html">Trending</Link>
                    </li>
                    <li>
                      <Link to="explore-details.html">Explore Details</Link>
                    </li>
                    <li>
                      <Link to="live-action.html">Live Action</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .col */}
              <div className="sm:basis-3/12 basis-full">
                <div className="cs-footer_widget">
                  <h2 className="cs-widget_title">Account</h2>
                  <ul className="cs-widget_nav">
                    <li>
                      <Link to="user-profile.html">Profile</Link>
                    </li>
                    <li>
                      <Link to="user-items.html">My Collection</Link>
                    </li>
                    <li>
                      <Link to="create-items.html">Create &amp; Upload</Link>
                    </li>
                    <li>
                      <Link to="user-account-settings.html">
                        Account Setting
                      </Link>
                    </li>
                    <li>
                      <Link to="/connect-wallet">Connect wallet</Link>
                    </li>
                    <li>
                      <Link to="explore-1.html">Wishlist</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .col */}
              <div className="sm:basis-3/12 basis-full">
                <div className="cs-footer_widget">
                  <h2 className="cs-widget_title">Company</h2>
                  <ul className="cs-widget_nav">
                    <li>
                      <Link to="blog.html">Recent News</Link>
                    </li>
                    <li>
                      <Link to="how-it-works.html">How it Works</Link>
                    </li>
                    <li>
                      <Link to="about.html">About Us</Link>
                    </li>
                    <li>
                      <Link to="contact.html">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="faq.html">Help Center &amp; FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .col */}
            </div>
          </div>
          <div className="sm:basis-4/12 basis-full">
            <div className="cs-footer_widget">
              <h2 className="cs-widget_title">Subscribe to our newsletter.</h2>
              <form className="cs-footer_newsletter">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="cs-newsletter_input"
                />
                <button className="cs-newsletter_btn">
                  <svg
                    width={25}
                    height={16}
                    viewBox="0 0 25 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.7014 9.03523C25.0919 8.64471 25.0919 8.01154 24.7014 7.62102L18.3374 1.25706C17.9469 0.866533 17.3137 0.866533 16.9232 1.25706C16.5327 1.64758 16.5327 2.28075 16.9232 2.67127L22.5801 8.32812L16.9232 13.985C16.5327 14.3755 16.5327 15.0087 16.9232 15.3992C17.3137 15.7897 17.9469 15.7897 18.3374 15.3992L24.7014 9.03523ZM0.806641 9.32812H23.9943V7.32812H0.806641V9.32812Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </form>
              <div className="cs-footer_social_btns">
                <Link to="#">
                  <i className="fab fa-telegram fa-fw" />
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter fa-fw" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs-height_60 cs-height_lg_20" />
      <div className="cs-footer_bottom">
        <div className="container mx-auto">
          <div className="cs-footer_separetor" />
          <div className="cs-footer_bottom_in">
            <div className="cs-copyright">
              Copyright 2022. Created by Mandarin.
            </div>
            <ul className="cs-footer_menu">
              <li>
                <NavLink to="privacy">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="term">Term &amp; Condition</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
