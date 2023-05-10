import React from "react";

export function Team(
  props: React.PropsWithChildren & {
    memberName: string;
    memberDesignation: string;
    img: string;
  }
) {
  return (
    <div className="cs-team cs-style1 cs-white_bg cs-box_shadow text-center">
      <div className="cs-team_img">
        <img src={props.img} alt="" />
      </div>
      <h2 className="cs-member_name">{props.memberName}</h2>
      <div className="cs-member_designation">{props.memberDesignation}</div>
    </div>
  );
}
