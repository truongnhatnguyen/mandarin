import { Team } from "./Team";

const datas = [
  {
    memberName: "Hammond Syd Chadwick",
    memberDesignation: "CEO & Co-founder",
    img: "/assets/about/member.png",
  },
  {
    memberName: "Johann",
    memberDesignation: "Co-founder",
    img: "/assets/about/member-1.png",
  },
  {
    memberName: "Tim Crawford",
    memberDesignation: "Marketing Manager",
    img: "/assets/about/member-2.png",
  },
  {
    memberName: "Tevin Farley Conner",
    memberDesignation: "Community Manager",
    img: "/assets/about/member-3.png",
  },
  {
    memberName: "Abraham",
    memberDesignation: "Product Manager",
    img: "/assets/about/member-4.png",
  },
  {
    memberName: "Ollie Otis",
    memberDesignation: "Data Analyst",
    img: "/assets/about/member-5.png",
  },
  {
    memberName: "Mason Lewis",
    memberDesignation: "Blockchain Developer",
    img: "/assets/about/member-6.png",
  },
  {
    memberName: "Jacob Williams",
    memberDesignation: "Software Engineer",
    img: "/assets/about/member-7.png",
  },
  {
    memberName: "Eric K. McGhee",
    memberDesignation: "CEO Co-founder",
    img: "/assets/about/member-8.png",
  },
  {
    memberName: "Eric K. McGhee",
    memberDesignation: "CEO Co-founder",
    img: "/assets/about/member-9.png",
  },
];

export function TeamMembers() {
  return (
    <div className="container-auto sm:mx-auto mx-5">
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
