import React from "react";
import { NavLink } from "react-router-dom";

export function Contact() {
  return (
    <>
      <div className="cs-height_90 cs-height_lg_80"></div>
      {/* Start Page Head */}
      <section
        className="cs-page_head cs-bg"
        data-src="assets/img/page_head_bg.svg"
      >
        <div className="container-auto">
          <div className="text-center">
            <h1 className="cs-page_title">Contact</h1>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to="index.html">Home</NavLink>
              </li>
              <li className="breadcrumb-item active">Library</li>
            </ol>
          </div>
        </div>
      </section>
      {/* End Page Head */}
      <div className="cs-height_100 cs-height_lg_70" />
      <div className="container-auto">
        <div className="flex flex-row">
          <div className="lg:col-span-8 mx-auto">
            <div className="cs-contact_card_wrap">
              <div className="cs-contact_card">
                <div className="cs-contact_info text-center ">
                  <div className="cs-contact_icon ">
                    <svg
                      width={39}
                      height={39}
                      viewBox="0 0 39 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1448_14685)">
                        <path
                          d="M16.7113 22.6393C20.4669 26.4044 24.8179 29.9986 26.5422 28.2759C29.0074 25.8059 30.5274 23.6637 35.9646 28.0305C41.4018 32.3974 37.2249 35.3107 34.8373 37.6984C32.0823 40.4534 21.8128 37.8424 11.6573 27.6917C1.50177 17.5409 -1.10439 7.26986 1.65061 4.51169C4.04461 2.12878 6.95002 -2.04172 11.3169 3.38594C15.6837 8.81361 13.5383 10.3368 11.0746 12.8004C9.35194 14.5326 12.9461 18.882 16.7113 22.6393Z"
                          fill="url(#paint0_linear_1448_14685)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1448_14685"
                          x1="38.6309"
                          y1="0.724609"
                          x2="-6.93527"
                          y2="23.7985"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#FC466B" />
                          <stop offset={1} stopColor="#3F5EFB" />
                        </linearGradient>
                        <clipPath id="clip0_1448_14685">
                          <rect
                            width={38}
                            height={38}
                            fill="white"
                            transform="matrix(-1 0 0 1 38.623 0.726074)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="cs-contact_title">Phone</h3>
                  <p className="cs-contact_text">+7 (903) 679-96-15</p>
                </div>
                <div className="cs-contact_info text-center">
                  <div className="cs-contact_icon">
                    <svg
                      width={40}
                      height={39}
                      viewBox="0 0 40 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.8288 14.9442V29.2259C35.8288 30.9676 34.4038 32.3926 32.6621 32.3926H7.32878C5.58711 32.3926 4.16211 30.9676 4.16211 29.2259V10.2259C4.16211 8.48424 5.58711 7.05924 7.32878 7.05924H23.3204C23.2254 7.56591 23.1621 8.10424 23.1621 8.64258C23.1621 10.9859 24.1913 13.0601 25.8063 14.5167L19.9954 18.1426L7.32878 10.2259V13.3926L19.9954 21.3092L28.3871 16.0526C29.2421 16.3692 30.1288 16.5592 31.0788 16.5592C32.8679 16.5592 34.4988 15.9417 35.8288 14.9442ZM26.3288 8.64258C26.3288 11.2709 28.4504 13.3926 31.0788 13.3926C33.7071 13.3926 35.8288 11.2709 35.8288 8.64258C35.8288 6.01424 33.7071 3.89258 31.0788 3.89258C28.4504 3.89258 26.3288 6.01424 26.3288 8.64258Z"
                        fill="url(#paint0_linear_1448_14689)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1448_14689"
                          x1="4.16211"
                          y1="3.89258"
                          x2="40.3952"
                          y2="24.2752"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#FC466B" />
                          <stop offset={1} stopColor="#3F5EFB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="cs-contact_title">Email</h3>
                  <p className="cs-contact_text">kenzi.law@example.com</p>
                </div>
                <div className="cs-contact_info text-center">
                  <div className="cs-contact_icon">
                    <svg
                      width={41}
                      height={39}
                      viewBox="0 0 41 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.5552 0.543945C29.1928 0.543945 36.1943 7.54547 36.1943 16.1831C36.1943 22.7916 31.5507 29.9937 22.3837 37.8662C21.874 38.304 21.2241 38.5445 20.5522 38.5439C19.8802 38.5434 19.2307 38.3017 18.7218 37.863L18.1155 37.3368C9.35433 29.6697 4.91602 22.6441 4.91602 16.1831C4.91602 7.54547 11.9175 0.543945 20.5552 0.543945ZM20.5552 10.168C18.9599 10.168 17.4299 10.8018 16.3019 11.9298C15.1738 13.0578 14.5401 14.5878 14.5401 16.1831C14.5401 17.7784 15.1738 19.3083 16.3019 20.4364C17.4299 21.5644 18.9599 22.1982 20.5552 22.1982C22.1505 22.1982 23.6804 21.5644 24.8085 20.4364C25.9365 19.3083 26.5702 17.7784 26.5702 16.1831C26.5702 14.5878 25.9365 13.0578 24.8085 11.9298C23.6804 10.8018 22.1505 10.168 20.5552 10.168Z"
                        fill="url(#paint0_linear_1448_14701)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1448_14701"
                          x1="4.91602"
                          y1="0.543945"
                          x2="45.0587"
                          y2="17.2727"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#FC466B" />
                          <stop offset={1} stopColor="#3F5EFB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="cs-contact_title">Location</h3>
                  <p className="cs-contact_text">2118 Thornridge Cir, 35624</p>
                </div>
              </div>
            </div>
            <div className="cs-height_50 cs-height_lg_50" />
            <div className="cs-contact_box">
              <div className="cs-section_heading cs-style4">
                <h2 className="cs-section_title">Drop Us Your Message</h2>
                <p className="cs-section_subtitle">
                  Freely contact with us anytime. We're available here for you.
                </p>
              </div>
              <div className="cs-height_45 cs-height_lg_45" />
              <form className="cs-contact_form">
                <div className="">
                  <div>
                    <div className="cs-form_field_wrap">
                      <input
                        type="text"
                        className="cs-form_field"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>
                  <div>
                    <div className="cs-form_field_wrap">
                      <input
                        type="text"
                        className="cs-form_field"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>
                  <div>
                    <div className="cs-form_field_wrap">
                      <input
                        type="text"
                        className="cs-form_field"
                        placeholder="Wright Subject"
                      />
                    </div>
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>
                  <div>
                    <div className="cs-form_field_wrap">
                      <textarea
                        cols={30}
                        rows={5}
                        placeholder="Message..."
                        className="cs-form_field"
                        defaultValue={""}
                      />
                    </div>
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>
                  <div>
                    <button className="cs-btn cs-style1 cs-btn_lg">
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="cs-height_100 cs-height_lg_70" />
    </>
  );
}
