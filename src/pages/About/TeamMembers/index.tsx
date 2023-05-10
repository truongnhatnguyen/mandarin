import React from "react";
import { Team } from "./Team";

const datas = [
  {
    memberName: "Eric K. McGhee",
    memberDesignation: "CEO &amp; Co-founder",
    img: "assets/about/member.png",
  },
  {
    memberName: "Eric K. McGhee",
    memberDesignation: "CEO &amp; Co-founder",
    img: "assets/about/member.png",
  },
  {
    memberName: "Eric K. McGhee",
    memberDesignation: "CEO &amp; Co-founder",
    img: "assets/about/member.png",
  },
  {
    memberName: "Eric K. McGhee",
    memberDesignation: "CEO &amp; Co-founder",
    img: "assets/about/member.png",
  },
  {
    memberName: "Eric K. McGhee",
    memberDesignation: "CEO &amp; Co-founder",
    img: "assets/about/member.png",
  },
  {
    memberName: "Eric K. McGhee",
    memberDesignation: "CEO &amp; Co-founder",
    img: "assets/about/member.png",
  },
  {
    memberName: "Eric K. McGhee",
    memberDesignation: "CEO &amp; Co-founder",
    img: "assets/about/member.png",
  },
  {
    memberName: "Eric K. McGhee",
    memberDesignation: "CEO &amp; Co-founder",
    img: "assets/about/member.png",
  },
  {
    memberName: "Eric K. McGhee",
    memberDesignation: "CEO &amp; Co-founder",
    img: "assets/about/member.png",
  },
  {
    memberName: "Eric K. McGhee",
    memberDesignation: "CEO &amp; Co-founder",
    img: "assets/about/member.png",
  },
];

export function TeamMembers() {
  return (
    <div className="container-auto">
      <h2 className="cs-section_heading cs-style1 text-center">
        Meet Our Team
      </h2>
      <div className="cs-height_45 cs-height_lg_45" />
      <div className="cs-grid_5 cs-gap_30">
        {datas.map((data, idx) => (
          <Team
            key={idx}
            memberName={data.memberName}
            memberDesignation={data.memberDesignation}
            img={data.img}
          />
        ))}
      </div>
    </div>
  );
}
