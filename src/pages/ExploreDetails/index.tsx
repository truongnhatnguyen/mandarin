/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Head } from "src/components/Head";
import { useData } from "src/hooks/useData";
import { ENV } from "../../environment";
import { Link } from "../../shared/components/Link";
import { DataCards } from "../Home/NewItem";
import { CustomSwiper } from "./CustomSwiper";
import { SimilarItems } from "./SimilarItem";

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
     <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4">
      <div>
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
          <div className="cs-box_shadow cs-general_box_5 text-left leading-6 tracking-tighter">
           {value.about.split("\n").map((item, index) => (
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
      <div>
       <div className="cs-height_0 cs-height_lg_40" />
       <div className="cs-single_product_head">
        <h2>{value.title}</h2>
       </div>
       <div className="cs-height_25 cs-height_lg_25" />
       <div className="grid gap-4">
        <div className="rounded-md w-full max-h-80">
         <img
          src={value.imageHeader}
          alt=""
          className="rounded-md w-full h-full bg-cover object-cover"
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

       <div className=" grid xl:grid-cols-2 grid-cols-1 gap-5">
        <div>
         <div className="cs-white_bg cs-box_shadow cs-general_box_5">
          <div className="cs-social_widget  sm:justify-start justify-center">
           <div className="py-4 px-4">
            Current Bid : <span className="font-bold">{value.price}</span>
           </div>
          </div>
         </div>
        </div>
        <div>
         <div className="cs-white_bg cs-box_shadow cs-general_box_5 items-center flex justify-center h-full">
          <div className="flex space-x-4 h-full items-center ">
           <div className="flex">
            <Link
             to={ENV.twitter}
             className={
              "h-[30px] w-[30px] flex items-center justify-center rounded-full bg-white text-black relative mx-2"
             }
            >
             <i className="fab fa-twitter fa-fw" />
            </Link>
            <Link
             to={ENV.telegram}
             className={
              "h-[30px] w-[30px] flex items-center justify-center rounded-full bg-white text-black relative mx-2"
             }
            >
             <i className="fab fa-telegram fa-fw" />
            </Link>
           </div>
          </div>
         </div>
        </div>
        <div className="cs-height_30 cs-height_lg_30" />
       </div>
       <div className="cs-height_10 cs-height_lg_10" />
       <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="">
         <button
          className="cs-btn cs-style1 cs-btn_lg w-full text-center"
          onClick={handleBuyNow}
         >
          <span>Buy Now</span>
         </button>
        </div>
        <div className="">
         <button
          className="cs-btn cs-style1 cs-btn_lg w-full text-center !bg-white !text-black hover:!text-white"
          onClick={handlePlaceBid}
         >
          <span>Place Bid</span>
         </button>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="cs-height_95 cs-height_lg_70" />
    <SimilarItems categoryId={value.category} />
    <div className="cs-height_100 cs-height_lg_70" />
   </div>
  </>
 );
}
