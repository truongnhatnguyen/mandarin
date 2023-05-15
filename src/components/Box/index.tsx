import React from "react";

export function Box(
  props: React.PropsWithChildren & {
    title: string;
    subTitle: string;
    img: string;
  }
) {
  return (
    <div className="">
      <div className="cs-iconbox cs-style1 cs-white_bg">
        <div className="cs-iconbox_icon">
          <img src={props.img} className="inline" alt="" />
        </div>
        <h2 className="cs-iconbox_title">{props.title}</h2>
        <div className="cs-iconbox_subtitle">{props.subTitle}</div>
      </div>
      <div className="cs-height_30 cs-height_lg_30" />
    </div>
  );
}
