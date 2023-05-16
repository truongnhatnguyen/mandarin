import React from "react";
import { NavLink } from "react-router-dom";

export function Card(
  props: React.PropsWithChildren & {
    title: string;
    subTitle: string;
    img: string;
    avatar: string;
    textFooter: string;
  }
) {
  return (
    <div className="cs-card cs-style3 cs-box_shadow cs-white_bg">
      <NavLink
        to="collection-details.html"
        className="cs-card_thumb cs-zoom_effect"
      >
        <img src={props.img} alt="" className="cs-zoom_item" />
      </NavLink>
      <NavLink to="#" className="cs-avatar">
        <img src={props.avatar} alt="Avatar" />
        <span className="cs-avatar_status" />
      </NavLink>
      <div className="cs-card_info">
        <h3 className="cs-card_title">
          <NavLink to="collection-details">{props.title}</NavLink>
        </h3>
        <div className="cs-card_subtitle">
          <i className="far fa-check-circle fa-fw" />
          <span>{props.subTitle}</span>
        </div>

        <div className="cs-catd_footer grid sm:grid-cols-2 grid-cols-1  items-center">
          <div className="cs-left">
            <div className="cs-social_widget-home  justify-content-center">
              <NavLink to="#">
                <i className="fab fa-twitter cursor-pointer" />
              </NavLink>
              <NavLink to="#">
                <i className="fab fa-telegram cursor-pointer" />
              </NavLink>
            </div>
          </div>
          <div className="cs-right">
            <NavLink to="">{props.textFooter}</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
