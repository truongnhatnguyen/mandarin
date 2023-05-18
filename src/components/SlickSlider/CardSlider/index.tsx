import React from "react";
import { NavLink } from "react-router-dom";

export function CardSlider(
  props: React.PropsWithChildren & {
    cardTitle: string;
    cardSubtitle: string;
    img?: string;
  }
) {
  return (
    <div className="cs-slide">
      <NavLink
        to="#"
        className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center"
      >
        <span className="cs-avatar">
          <img
            src="assets/img/avatar/avatar_38.png"
            alt="Avatar"
            className="object-cover"
          />
        </span>
        <div className="cs-card_info">
          <h3 className="cs-card_title">{props.cardTitle}</h3>
          <div className="cs-card_subtitle">{props.cardSubtitle}</div>
        </div>
      </NavLink>
    </div>
  );
}
