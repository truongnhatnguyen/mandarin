import React, { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Card } from "src/components/Card";
import { Head } from "src/components/Head";
import { useData } from "src/hooks/useData";
import { ENV } from "../../environment";
import { DataCards } from "../Home/NewItem";
import { CustomSwiper } from "./CustomSwiper";

const dataCards = [
 {
  LuotLike: "1.2K",
  img: "/assets/exploredetails/similar4.png",
  avatarInfo: "/assets/exploredetails/avatar-similar3.png",
  info: "austin R.",
  price: "0.29 --DR",
  title: "Kawaii-bubble-tea",
  id: "sport-1",
 },
 {
  LuotLike: "1.2K",
  img: "/assets/exploredetails/similar3.png",
  avatarInfo: "/assets/exploredetails/avatar-similar2.png",
  info: "austin R.",
  price: "0.29 --DR",
  title: "Kawaii-bubble-tea",
  id: "sport-1",
 },
 {
  LuotLike: "1.2K",
  img: "/assets/exploredetails/similar2.png",
  avatarInfo: "/assets/exploredetails/avatar-similar1.png",
  info: "austin R.",
  price: "0.29 --DR",
  title: "Kawaii-bubble-tea",
  id: "sport-1",
 },
 {
  LuotLike: "1.2K",
  img: "/assets/exploredetails/similar1.png",
  avatarInfo: "/assets/exploredetails/avatar-similar.png",
  info: "austin R.",
  price: "0.29 --DR",
  title: "Kawaii-bubble-tea",
  id: "sport-1",
 },
 {
  LuotLike: "1.2K",
  img: "/assets/exploredetails/similar.png",
  avatarInfo: "/assets/exploredetails/avatar-similar.png",
  info: "austin R.",
  price: "0.29 --DR",
  title: "Kawaii-bubble-tea",
  id: "sport-1",
 },
];

export function ExploreDetails() {
 const { id } = useParams();
 const { data } = useData<DataCards[]>({
  path: "/assets/explore/datas.json",
  defaultValue: [] as DataCards[],
 });

 const value = useMemo(() => {
  return data.find((item) => item.id === id);
 }, [data, id]);

 if (!value) {
  return <h1>Not found</h1>;
 }
 function handleBuyNow() {
  toast.success("Comming soon!");
 }
 function handlePlaceBid() {
  toast.success("Comming soon!");
 }

 return (
  <>
   <div>
    <div className="cs-height_90 cs-height_lg_80" />
    <Head title="Explore Details"></Head>

    <div className="cs-height_100 cs-height_lg_70" />
    <div className="container-auto">
     <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-4">
      <div className="col-lg-6">
       <CustomSwiper imgs={value.images}></CustomSwiper>
       {/* <div className="cs-height_10 cs-height_lg_25" /> */}
       <div className="cs-tabs cs-fade_tabs cs-style1">
        <div className="cs-medium">
         <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
          <li className="active">
           <NavLink to="#">ABOUT THIS GAME</NavLink>
          </li>
         </ul>
        </div>
        <div className="cs-height_20 cs-height_lg_20" />
        <div className="cs-tab_content">
         <div id="Description" className="cs-tab active">
          <div className="cs-box_shadow cs-general_box_5 text-justify leading-6 tracking-tighter">
           {value.about.split(".").map((item, index) => (
            <React.Fragment key={index}>
             {item.trim()}
             <br />
            </React.Fragment>
           ))}
          </div>
         </div>
        </div>
       </div>
      </div>
      <div className="col-lg-6">
       <div className="cs-height_0 cs-height_lg_40" />
       <div className="cs-single_product_head">
        <h2>{value.title}</h2>
       </div>
       <div className="cs-height_25 cs-height_lg_25" />
       <div className="grid gap-4">
        <div className="rounded-md w-full h-80">
         <img
          src={value.imageHeader}
          alt=""
          className="rounded-md w-full h-full bg-cover"
         />
        </div>
        <div className="cs-tab_content">
         <div id="Description" className="cs-tab active">
          <div className="cs-white_bg cs-box_shadow cs-general_box_5 text-center">
           <div>
            <span className="font-bold ">TITLE:</span> {value.title}
           </div>
           <div>
            <span className="font-bold ">GENRE:</span> {value.genre}
           </div>
           <div>
            <span className="font-bold ">DEVELOPER:</span> {value.developer}
            NAMCO studio inc
           </div>
           <div>
            <span className="font-bold ">PUBLISHER:</span> {value.puslisher}
            NAMCO emtaiment
           </div>
           <div>
            <span className="font-bold ">FRANCHISE:</span> {value.franchise}
           </div>
           <div>
            <span className="font-bold ">RELEASE DATE:</span>{" "}
            {value.releaseDate}
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
           <NavLink to="#">Description</NavLink>
          </li>
         </ul>
        </div>
        <div className="cs-height_20 cs-height_lg_20" />
        <div className="cs-tab_content">
         <div id="Description" className="cs-tab active">
          <div className="cs-white_bg cs-box_shadow cs-general_box_5">
           {value.description}
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
           <NavLink to={ENV.twitter}>
            <i className="fab fa-twitter" />
           </NavLink>
           <NavLink to={ENV.telegram}>
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
          onClick={handleBuyNow}
         >
          <span>Buy Now</span>
         </NavLink>
        </div>
        <div className="">
         <NavLink
          to="#"
          className="cs-btn cs-style1 cs-btn_lg w-full text-center bg-white"
          onClick={handlePlaceBid}
         >
          <span>Place Bid</span>
         </NavLink>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="cs-height_95 cs-height_lg_70" />
    <div className="container-auto sm:mx-auto mx-4">
     <h2 className="cs-section_heading cs-style1">Similar Items</h2>
     <div className="cs-height_45 cs-height_lg_45" />
     <div className="cs-grid_5 cs-gap_30">
      {dataCards.map((data, idx) => (
       <Card
        key={idx}
        id={data.id}
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
