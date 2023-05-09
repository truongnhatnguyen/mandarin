import React from "react";
import { NavLink } from "react-router-dom";

export function Menu() {
  return (
    <div className="cs-nav_wrap">
      <div className="cs-nav_out">
        <div className="cs-nav_in">
          <div className="cs-nav">
            <ul className="cs-nav_list">
              <li className="menu-item-has-children">
                <NavLink to="index.html">Home</NavLink>
                <ul>
                  <li>
                    <NavLink to="index.html">Home Default</NavLink>
                  </li>
                  <li>
                    <NavLink to="index_2.html">Home Style 2</NavLink>
                  </li>
                  <li>
                    <NavLink to="index_3.html">Home Style 3</NavLink>
                  </li>
                  <li>
                    <NavLink to="index_4.html">Home Style 4</NavLink>
                  </li>
                  <li>
                    <NavLink to="index_5.html">Home Style 5</NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <NavLink to="explore-1.html">Explore</NavLink>
                <ul>
                  <li>
                    <NavLink to="explore-1.html">Explore Style 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="explore-2.html">Explore Style 2</NavLink>
                  </li>
                  <li>
                    <NavLink to="explore-details.html">Explore Details</NavLink>
                  </li>
                  <li>
                    <NavLink to="live-action.html">Live Auction</NavLink>
                  </li>
                  <li>
                    <NavLink to="collection.html">Collection</NavLink>
                  </li>
                  <li>
                    <NavLink to="collection-details.html">
                      Collection Details
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="how-it-works.html">How It Works</NavLink>
              </li>
              <li className="menu-item-has-children">
                <NavLink to="blog.html">Community</NavLink>
                <ul>
                  <li>
                    <NavLink to="blog.html">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="blog-with-sidebar.html">
                      Blog With Sidebar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="blog-details.html">Blog Details</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="activity.html">Activity</NavLink>
              </li>
              <li className="menu-item-has-children cs-mega-menu">
                <NavLink to="#">Pages</NavLink>
                <ul className="cs-mega-wrapper">
                  <li className="menu-item-has-children">
                    <NavLink to="">Column One</NavLink>
                    <ul>
                      <li>
                        <NavLink to="connect-wallet.html">
                          Connect Wallet
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="about.html">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="help-center.html">Help Center</NavLink>
                      </li>
                      <li>
                        <NavLink to="help-center-browser-by-category.html">
                          Help Center Catagory
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="help-details.html">
                          Help Center Details
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="terms-condition.html">
                          Terms &amp; Conditions
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="privacy-policy.html">
                          Privacy Policy
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="faq.html">FAQ</NavLink>
                      </li>
                      <li>
                        <NavLink to="404.html">404</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <NavLink to="">Column Two</NavLink>
                    <ul>
                      <li>
                        <NavLink to="user-profile.html">Edit Profile</NavLink>
                      </li>
                      <li>
                        <NavLink to="user-account-settings.html">
                          Profile Settings
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="user-items.html">My Item</NavLink>
                      </li>
                      <li>
                        <NavLink to="create-items.html">Create Items</NavLink>
                      </li>
                      <li>
                        <NavLink to="user-activity.html">My Activity</NavLink>
                      </li>
                      <li>
                        <NavLink to="user-wallet.html">My Wallet</NavLink>
                      </li>
                      <li>
                        <NavLink to="login.html">Login</NavLink>
                      </li>
                      <li>
                        <NavLink to="register.html">Register</NavLink>
                      </li>
                      <li>
                        <NavLink to="forget-password.html">
                          Forget Password
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="contact.html">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
