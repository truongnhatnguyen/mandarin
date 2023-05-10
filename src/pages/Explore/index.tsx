import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "src/components/Card";
import { Head } from "src/components/Head";

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

export function Explore() {
  return (
    <>
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        {/* Start Page Head */}
        <Head title="Explore"></Head>
        {/* End Page Head */}
        <div className="cs-height_100 cs-height_lg_70" />
        <div className="cs-isotop_filter cs-style1 cs-type1 cs-center">
          <ul className="cs-mp0 cs-center">
            <li className="active">
              <NavLink to="#" data-filter="*">
                <span>All Game</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" data-filter=".fashion">
                <span>Sport</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" data-filter=".music">
                <span>Simulation</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" data-filter=".video">
                <span>Avanture</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" data-filter=".games">
                <span>Action</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="cs-height_20 cs-height_lg_40"></div>
        <div className="sm:container sm:mx-auto mx-4">
          <div className="cs-sidebar_frame cs-style1">
            <div className="cs-sidebar_frame_right">
              <div className="cs-filter_head">
                <div className="cs-filter_head_left">
                  <span className="cs-search_result cs-medium cs-ternary_color">
                    29064886 Results
                  </span>
                  <div className="cs-form_field_wrap">
                    <input
                      type="text"
                      className="cs-form_field cs-field_sm"
                      placeholder="In Auction"
                    />
                  </div>
                  <NavLink to="#" className="cs-clear_btn">
                    Clear All
                  </NavLink>
                </div>
                <div className="cs-filter_head_right">
                  <div className="cs-form_field_wrap cs-select_arrow">
                    <select className="cs-form_field cs-field_sm">
                      <option value={11}>Sort By</option>
                      <option value={22}>Last 7 days</option>
                      <option value={33}>Last 30 days</option>
                      <option value={44}>All time</option>
                    </select>
                  </div>
                  <div className="cs-form_field_wrap cs-select_arrow">
                    <select className="cs-form_field cs-field_sm">
                      <option value={1}>Likes</option>
                      <option value={2}>Most popular</option>
                      <option value={3}>By price</option>
                      <option value={4}>By published</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="cs-height_30 cs-height_lg_30" />
              <div className="grid sm:grid-cols-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 ">
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
              <div className="cs-height_10 cs-height_lg_10" />
              <div className="text-center">
                <NavLink to="#" className="cs-btn cs-style1 cs-btn_lg">
                  <span>Load More</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height_100 cs-height_lg_70" />
      </div>
    </>
  );
}
