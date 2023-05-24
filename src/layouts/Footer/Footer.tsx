/* eslint-disable jsx-a11y/anchor-is-valid */
import { faEnvelope, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ENV } from "src/environment";
import { ButtonColorEnum } from "src/shared/components/Button";

import { Link } from "../../shared/components/Link";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => {
    return Boolean(
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    );
  };

  const isValidEmail = useMemo(() => {
    if (!email) {
      return false;
    }
    return validateEmail(email);
  }, [email]);

  const handleClickSignUp = (event: any) => {
    event.preventDefault();
    if (isValidEmail) {
      toast.success(ENV.getUpdateMessage, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <footer className="cs-footer cs-style1">
      <div className="cs-footer_bg" />
      <div className="cs-height_100 cs-height_lg_60" />
      <div className="sm:container-auto sm:mx-auto mx-10">
        <div className="flex flex-row flex-wrap">
          <div className="basis-8/12">
            <div className="flex flex-row flex-wrap">
              <div className="sm:basis-3/12 basis-full sm:mb-0 mb-10">
                <NavLink to="/">
                  <img
                    src="/assets/home/logo.png"
                    alt=""
                    className="object-cover"
                  />
                </NavLink>
              </div>
              <div className="sm:basis-3/12 basis-full">
                <div className="cs-footer_widget">
                  <h2 className="cs-widget_title">Category</h2>
                  <ul className="cs-widget_nav">
                    <li>
                      <NavLink to="explore?category=Sport">Sport</NavLink>
                    </li>
                    <li>
                      <NavLink to="explore?category=Simulation">
                        Simulation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="explore?category=Survival">Survival</NavLink>
                    </li>
                    <li>
                      <NavLink to="explore?category=Role-playing">
                        Role-playing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="explore?category=Strategy">Strategy</NavLink>
                    </li>
                    <li>
                      <NavLink to="explore?category=Action">Action</NavLink>
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
                      <NavLink to="/presale">Buy Presale</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                      <Link to={ENV.whitePaper}>Documents</Link>
                    </li>
                    <li>
                      <NavLink to="/connect-wallet">Connect wallet</NavLink>
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
                      <NavLink to="/how-it-works">How it Works</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .col */}
            </div>
          </div>
          <div className="sm:basis-4/12 basis-full">
            <div className="cs-footer_widget">
              <h2 className="cs-widget_title">Subscribe us.</h2>
              <label htmlFor="" className="text-xs text-gray-500 mb-2">
                Subscribe us now to get the latest news and updates
              </label>
              <form className="relative">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="py-5 pl-5 pr-14 w-full text-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute top-1/2 right-14 -translate-y-1/2">
                  {Boolean(email.length) && !isValidEmail && (
                    <FontAwesomeIcon
                      className="animate-pulse text-orange-600 text-xl"
                      icon={faWarning}
                    />
                  )}
                </div>
                <button
                  className="cs-newsletter_btn cursor-pointer absolute top-5 right-5"
                  color={ButtonColorEnum.Primary}
                  onClick={handleClickSignUp}
                  disabled={!isValidEmail}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-xl cursor-pointer text-gray-400"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="cs-height_60 cs-height_lg_20" />
      <div className="cs-footer_bottom">
        <div className="sm:container sm:mx-auto mx-10">
          <div className="cs-footer_separetor" />
          <div className="cs-footer_bottom_in sm:justify-between justify-center">
            <div className="cs-copyright">
              Copyright {new Date().getFullYear()} Created by Mandarin.
            </div>
            <ul className="cs-footer_menu items-center sm:!flex-row flex-col">
              <div className="flex">
                <Link
                  to={ENV.twitter}
                  className={
                    "h-[30px] w-[30px] flex items-center justify-center rounded-full bg-white text-black relative m-2"
                  }
                >
                  <i className="fab fa-twitter fa-fw" />
                </Link>
                <Link
                  to={ENV.telegram}
                  className={
                    "h-[30px] w-[30px] flex items-center justify-center rounded-full bg-white text-black relative m-2"
                  }
                >
                  <i className="fab fa-telegram fa-fw" />
                </Link>
              </div>
              <li className="sm:ml-4 ml-0">
                <NavLink to="privacy">Privacy Policy</NavLink>
              </li>
              <li className="sm:ml-4 ml-0">
                <NavLink to="term">Term &amp; Condition</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
