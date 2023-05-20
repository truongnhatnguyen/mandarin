import { useData } from "src/hooks/useData";
import { Team } from "./Team";

interface MemberEntity {
  memberName: string;
  memberDesignation: string;
  img: string;
}

export function TeamMembers() {
  const { data: datas } = useData<MemberEntity[]>({
    path: "/assets/about/data.json",
    defaultValue: [],
  });
  return (
    <div className="container-auto">
      <h2 className="cs-section_heading cs-style1 text-center">
        Meet Our Team
      </h2>
      <div className="cs-height_45 cs-height_lg_45" />
      <div className="cs-grid_4 cs-gap_30">
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
