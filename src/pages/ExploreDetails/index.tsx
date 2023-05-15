import React, { useEffect, useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Head } from "src/components/Head";
import { CustomSwiper } from "./CustomSwiper";
import { Card } from "src/components/Card";
import { useData } from "src/hooks/useData";
import { log } from "console";

const dataCards = [
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

export function ExploreDetails() {
  const { id } = useParams();
  const { data } = useData({
    path: "assets/exploredetails/datas.json",
    defaultValue: [],
  });
  console.log(data);
  const datas = useMemo(() => {
    return data.filter((item) => item === id);
  }, [id]);

  console.log(datas);

  return (
    <>
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        <Head title="Explore Details"></Head>

        <div className="cs-height_100 cs-height_lg_70" />
        <div className="container-auto">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-4">
            <div className="col-lg-6">
              <CustomSwiper></CustomSwiper>
              <div className="cs-height_25 cs-height_lg_25" />
              <div className="cs-tabs cs-fade_tabs cs-style1">
                <div className="cs-medium">
                  <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                    <li className="active">
                      <NavLink to="#Description">ABOUT THIS GAME</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="cs-height_20 cs-height_lg_20" />
                <div className="cs-tab_content">
                  <div id="Description" className="cs-tab active">
                    <div className="cs-box_shadow cs-general_box_5">
                      Amet lorem minim mollit non deserunt ullamco est sit
                      aliqua dolor do amet sint. Velit officia consequat duis
                      enim velit mollit. Amet lorem minim mollit nonese deserunt
                      ullamco est sit aliqua dolor do amet sint. Velit officia
                      consequat duis enim velit mollit Velit officia else est
                      sit ullamco es duis.
                    </div>
                  </div>
                  {/* .cs-tab */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs-height_0 cs-height_lg_40" />
              <div className="cs-single_product_head">
                <h2>#Digital Art</h2>
                <span className="cs-card_like cs-primary_color cs-box_shadow">
                  <i className="fas fa-heart fa-fw" />
                  2.1K
                </span>
              </div>
              <div className="cs-height_25 cs-height_lg_25" />
              <div className="grid gap-4">
                <div className="rounded-md w-full h-80">
                  <img
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                    alt=""
                    className="rounded-md w-full h-full bg-cover"
                  />
                </div>
                <div className="cs-tab_content">
                  <div id="Description" className="cs-tab active">
                    <div className="cs-white_bg cs-box_shadow cs-general_box_5 text-center">
                      <div>
                        <span className="font-bold ">TiTLE:</span> TENKEN 7
                      </div>
                      <div>
                        <span className="font-bold ">GENRE:</span> ACTION SPORT
                      </div>
                      <div>
                        <span className="font-bold ">DEVELOPER:</span> BAN DAI
                        NAMCO studio inc
                      </div>
                      <div>
                        <span className="font-bold ">PUBLISHER:</span> BAN DAI
                        NAMCO emtaiment
                      </div>
                      <div>
                        <span className="font-bold ">FRANCHISE:</span> FRANCHISE
                      </div>
                      <div>
                        <span className="font-bold ">RELEASE DATE:</span> 2 jun,
                        2017
                      </div>
                    </div>
                  </div>
                  {/* .cs-tab */}
                </div>
              </div>
              <div className="cs-tabs cs-fade_tabs cs-style1">
                <div className="cs-medium">
                  <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                    <li className="active">
                      <NavLink to="#Description">Description</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="cs-height_20 cs-height_lg_20" />
                <div className="cs-tab_content">
                  <div id="Description" className="cs-tab active">
                    <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                      Amet lorem minim mollit non deserunt ullamco est sit
                      aliqua dolor do amet sint. Velit officia consequat duis
                      enim velit mollit. Amet lorem minim mollit nonese deserunt
                      ullamco est sit aliqua dolor do amet sint. Velit officia
                      consequat duis enim velit mollit Velit officia else est
                      sit ullamco es duis.
                    </div>
                  </div>
                  {/* .cs-tab */}
                </div>
              </div>
              <div className="cs-height_25 cs-height_lg_25" />

              <div className="row">
                <div className="col-xl-6">
                  <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                    <div className="cs-social_widget justify-content-center">
                      <NavLink to="#">
                        <i className="fab fa-twitter" />
                      </NavLink>
                      <NavLink to="#">
                        <i className="fab fa-telegram" />
                      </NavLink>
                    </div>
                  </div>
                  <div className="cs-height_30 cs-height_lg_30" />
                </div>
              </div>
              <div className="cs-height_10 cs-height_lg_10" />
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div className="">
                  <NavLink
                    to="#"
                    className="cs-btn cs-style1 cs-btn_lg w-full text-center"
                  >
                    <span>Buy Now</span>
                  </NavLink>
                </div>
                <div className="">
                  <NavLink
                    to="#"
                    className="cs-btn cs-style1 cs-btn_lg w-full text-center bg-white"
                  >
                    <span>Place Bid</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height_95 cs-height_lg_70" />
        <div className="sm:container sm:mx-auto mx-4">
          <h2 className="cs-section_heading cs-style1">Similar Items</h2>
          <div className="cs-height_45 cs-height_lg_45" />
          <div className="cs-grid_5 cs-gap_30">
            {dataCards.map((data, idx) => (
              <Card
                key={idx}
                LuotLike={data.LuotLike}
                img={data.img}
                avatarInfo={data.avatarInfo}
                info={data.info}
                price={data.price}
                title={data.title}
              ></Card>
            ))}
          </div>
        </div>
        <div className="cs-height_100 cs-height_lg_70" />
      </div>
    </>
  );
}
