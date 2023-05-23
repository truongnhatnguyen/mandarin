import { Box } from "src/components/Box";
import { useData } from "../../../hooks/useData";

interface IData {
 img: string;
 title: string;
 subTitle: string;
}

export function IconBoxes() {
 const { data } = useData<IData[]>({
  path: "/assets/home/CompetitiveAdvantages.json",
  defaultValue: [],
 });
 return (
  <section>
   <div className="sm:container sm:mx-auto md:container-auto mx-10">
    <h2 className="cs-section_heading cs-style1 text-center">
     Competitive Advantages
    </h2>
    <div className="cs-height_45 cs-height_lg_45" />
    <div className="grid sm:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
     {data.map((item, idx) => (
      <Box
       key={item.title}
       img={item.img}
       title={item.title}
       subTitle={item.subTitle}
      ></Box>
     ))}
    </div>
   </div>
  </section>
 );
}
