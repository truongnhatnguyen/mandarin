import React from "react";
import { NavLink } from "react-router-dom";

export function CardCategory(
  props: React.PropsWithChildren & {
    title: string;
    img: string;
    subTitle: string;
  }
) {
  return (
    <div className="cs-slide">
      <NavLink
        to="#"
        className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center"
      >
        <span className="cs-avatar">
          <img src={props.img} alt="Avatar" />
        </span>
        <div className="cs-card_info">
          <h3 className="cs-card_title">{props.title}</h3>
          <div className="cs-card_subtitle">{props.subTitle}</div>
        </div>
      </NavLink>
    </div>
  );
}
