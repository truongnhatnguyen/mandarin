import React from "react";
import { NavLink } from "react-router-dom";

export function CardTopGame(
  props: React.PropsWithChildren & {
    info: string;
    avatarInfo: string;
    price: string;
    img: string;
    title: string;
  }
) {
  return (
    // <div className="cs-card cs-style4 cs-box_shadow cs-white_bg grid grid-cols-2 gap-4">
    //   <div>
    //     <NavLink to="#" className="cs-card_thumb cs-zoom_effect">
    //       <img src={props.img} alt="" className="cs-zoom_item" />
    //     </NavLink>
    //     <NavLink to="#" className="cs-avatar cs-white_bg">
    //       <img src={props.avatarInfo} alt="Avatar" />
    //       <span>{props.info}</span>
    //     </NavLink>
    //   </div>
    //   <div className="cs-card_info w-full">
    //     <h3 className="cs-card_title">
    //       <NavLink to="#">{props.title}</NavLink>
    //     </h3>
    //     <div className="cs-card_price">
    //       Current Bid: <b className="cs-primary_color">{props.price}</b>
    //     </div>
    //     <hr />
    //     <div className="grid grid-cols-2 gap-4 mt-5">
    //       <span className="cs-card_btn_2" data-modal="#bid_1">
    //         <span>Buy Now</span>
    //       </span>
    //       <span className="cs-card_btn_place" data-modal="#history_1">
    //         <span>Place Bid</span>
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div className="cs-card cs-style4 cs-box_shadow cs-white_bg grid grid-cols-2 gap-4 rounded-md">
      <div className="">
        <div className="h-28">
          <img src={props.img} alt="" className="cs-zoom_item w-full h-full" />
        </div>

        <div className="absolute bottom-1">
          <NavLink to="#" className="cs-avatar cs-white_bg ">
            <img src={props.avatarInfo} alt="Avatar" />
            <span>{props.info}</span>
          </NavLink>
        </div>
      </div>
      <div className="">
        <h3 className="cs-card_title !mt-0">
          <NavLink to="#">{props.title}</NavLink>
        </h3>
        <div className="cs-card_price">
          Current Bid: <b className="cs-primary_color">{props.price}</b>
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-4 mt-5 text-center">
          <span className="cs-card_btn_2" data-modal="#bid_1">
            <span>Buy Now</span>
          </span>
          <span className="cs-card_btn_place" data-modal="#history_1">
            <span>Place Bid</span>
          </span>
        </div>
      </div>
    </div>
  );
}
