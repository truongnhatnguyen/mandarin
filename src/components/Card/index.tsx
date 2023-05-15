import React from "react";
import { NavLink } from "react-router-dom";

export function Card(
  props: React.PropsWithChildren & {
    LuotLike: string;
    info: string;
    avatarInfo: string;
    price: string;
    img: string;
    title: string;
    id?: string;
  }
) {
  return (
    <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
      <span className="cs-card_like cs-primary_color">
        <i className="fas fa-heart fa-fw" />
        {props.LuotLike}
      </span>
      <NavLink
        to={`/explore-details/${props.id}`}
        className="cs-card_thumb cs-zoom_effect"
      >
        <img src={props.img} alt="" className="cs-zoom_item" />
      </NavLink>
      <div className="cs-card_info">
        <NavLink to="#" className="cs-avatar cs-white_bg">
          <img src={props.avatarInfo} alt="Avatar" />
          <span>{props.info}</span>
        </NavLink>
        <h3 className="cs-card_title">
          <NavLink to="#">{props.title}</NavLink>
        </h3>
        <div className="cs-card_price">
          Current Bid: <b className="cs-primary_color">{props.price}</b>
        </div>
        <hr />
        <div className="cs-card_footer">
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
