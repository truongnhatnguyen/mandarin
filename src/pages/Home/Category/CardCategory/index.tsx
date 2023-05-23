import React from "react";
import { Link } from "../../../../shared/components/Link";

export function CardCategory(
 props: React.PropsWithChildren & {
  title: string;
  img: string;
  subTitle: string;
 }
) {
 return (
  <div className="cs-slide">
   <Link
    to={`/explore?category=${props.title}`}
    className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center"
   >
    <span className="cs-avatar">
     <img src={props.img} alt="Avatar" />
    </span>
    <div className="cs-card_info">
     <h3 className="cs-card_title">{props.title}</h3>
     <div className="cs-card_subtitle">{props.subTitle}</div>
    </div>
   </Link>
  </div>
 );
}
