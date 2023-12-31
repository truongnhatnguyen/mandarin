import React from "react";
import { toast } from "react-toastify";
import { Link } from "../../shared/components/Link";

export function Card(
 props: React.PropsWithChildren & {
  info: string;
  avatarInfo: string;
  price: string;
  img: string;
  title: string;
  id?: string;
  size?: "large";
 }
) {
 function handleBuyNow() {
  toast.success("Comming soon!");
 }
 function handlePlaceBid() {
  toast.success("Comming soon!");
 }
 return (
  <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
   <Link
    to={`/explore-details/${props.id}`}
    className="cs-card_thumb cs-zoom_effect"
   >
    <img
     src={props.img}
     alt=""
     className={`cs-zoom_item object-cover ${
      props.size === "large" ? "h-60" : "h-40"
     }`}
    />
   </Link>
   <div className="cs-card_info">
    <div className="cs-avatar cs-white_bg">
     <img src={props.avatarInfo} alt="Avatar" className="object-cover" />
     <span>{props.info}</span>
    </div>
    <h3 className="cs-card_title ">{props.title}</h3>
    <div className="cs-card_price">
     Current Bid: <b className="cs-primary_color">{props.price}</b>
    </div>
    <hr />
    <div className="cs-card_footer">
     <span onClick={handleBuyNow} className="cs-card_btn_2" data-modal="#bid_1">
      <span>Buy Now</span>
     </span>
     <span
      onClick={handlePlaceBid}
      className="cs-card_btn_place"
      data-modal="#history_1"
     >
      <span>Place Bid</span>
     </span>
    </div>
   </div>
  </div>
 );
}
