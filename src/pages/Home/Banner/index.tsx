import { NavLink } from "react-router-dom";
import { Card } from "src/components/Card";

const dataCards = [
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar1.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar4.png",
    avatarInfo: "assets/exploredetails/avatar-similar3.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar3.png",
    avatarInfo: "assets/exploredetails/avatar-similar2.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar2.png",
    avatarInfo: "assets/exploredetails/avatar-similar1.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar1.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
  },
];

export function Banner() {
  function handleNext() {}
  function handlePre() {}
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
                The most profitable Place to Collect , Buy and Sell Game Market
              </h1>
              <div className="cs-hero_subtitle cs-medium cs-white_color">
                Security and secret game for gaming, entertainment, metaverse
                and data <br />
                management time capsules.
              </div>
              <div className="cs-hero_btns">
                <NavLink
                  to="/presale"
                  className="cs-hero_btn cs-style1 cs-color3"
                >
                  <span>Buy Presale</span>
                </NavLink>
                <NavLink
                  to="create-items.html"
                  className="cs-hero_btn cs-style1 cs-color1"
                >
                  <span>White Paper</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="cs-hero_in_right ">
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
                <div className="cs-slider_wrapper slick-initialized slick-slider slick-dotted">
                  <div className="slick-list draggable !p-0">
                    <div
                      className="slick-track flex"
                      style={{
                        opacity: 1,
                        width: 3888,
                        transform: `!translate3d(-${
                          true ? "1215px" : ""
                        }, 0, 0)`,
                      }}
                    >
                      {dataCards.map((data, idx) => (
                        <div
                          className={`${
                            idx === 1
                              ? " slick-slide slick-current slick-active slick-center"
                              : "slick-slide slick-cloned "
                          }`}
                          aria-hidden="true"
                          id=""
                          data-slick-index={-idx + 1}
                          style={{ width: 243 }}
                        >
                          <div>
                            <div className="cs-slide !w-full !inline-block">
                              <Card
                                key={idx}
                                LuotLike={data.LuotLike}
                                img={data.img}
                                avatarInfo={data.avatarInfo}
                                info={data.info}
                                price={data.price}
                                title={data.title}
                              ></Card>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* .cs-slider_container */}
              <div className="cs-slider_arrows cs-style1 cs-center cs-hidden_mobile">
                <div
                  className="cs-left_arrow cs-center cs-box_shadow slick-arrow"
                  onClick={handleNext}
                >
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
                <div
                  className="cs-right_arrow cs-center cs-box_shadow slick-arrow"
                  onClick={handlePre}
                >
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
