import React from "react";
import { Form } from "./Form";
import { Head } from "src/components/Head";

export function Contact() {
  return (
    <>
      <div className="cs-height_90 cs-height_lg_80"></div>
      {/* Start Page Head */}
      <Head title="Contact" />
      {/* End Page Head */}
      <div className="cs-height_100 cs-height_lg_70" />
      <div className="sm:container sm:mx-auto mx-5">
        <div className="flex flex-row">
          <div className="lg:col-span-8 mx-auto">
            <div className="cs-contact_card_wrap">
              <div className="cs-contact_card items-center">
                <div className="cs-contact_info text-center ">
                  <div className="cs-contact_icon ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      {" "}
                      <path
                        d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z"
                        fill="url(#paint0_linear_1448_14685)"
                      />{" "}
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
                  <h3 className="cs-contact_title">Telegram</h3>
                  <p className="cs-contact_text">@Mandarinpowered</p>
                </div>
                <div className="cs-contact_info text-center">
                  <div className="cs-contact_icon">
                    <svg
                      width={36}
                      height={34}
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
                  <p className="cs-contact_text">
                    mandarinpowered.io@gmail.com
                  </p>
                </div>
                <div className="cs-contact_info text-center">
                  <div className="cs-contact_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="31"
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      {" "}
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
                      <path
                        fill="url(#paint0_linear_1448_14689)"
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      />{" "}
                    </svg>
                  </div>
                  <h3 className="cs-contact_title">Twitter</h3>
                  <p className="cs-contact_text">@Mandarinpowered</p>
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
              <Form />
            </div>
          </div>
        </div>
      </div>
      <div className="cs-height_100 cs-height_lg_70" />
    </>
  );
}
