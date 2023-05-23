import { useData } from "../../../hooks/useData";

interface IData {
 img: string;
 title: string;
 subTitle: string;
}
export function BoxIcon() {
 const { data: dataBox } = useData<IData[]>({
  path: "/assets/about/databox.json",
  defaultValue: [],
 });
 return (
  <div className="container-auto">
   <h2 className="cs-section_heading cs-style1 text-center">
    Good development goals in a short timme
   </h2>
   <div className="cs-height_45 cs-height_lg_45" />
   <div className="cs-grid_5 cs-gap_30 ">
    {dataBox.map((item, idx) => (
     <Box
      key={item.title}
      img={item.img}
      title={item.title}
      subTitle={item.subTitle}
     />
    ))}
   </div>
  </div>
 );
}

export function Box(
 props: React.PropsWithChildren & {
  title: string;
  subTitle: string;
  img: string;
 }
) {
 return (
  <div className="cs-iconbox cs-style1 cs-white_bg  h-full">
   <div className="flex justify-center">
    <img src={props.img} className="h-12 mb-4" alt="" />
   </div>
   <h2 className="text-3xl font-bold">{props.title}</h2>
   <div className="text-xl">{props.subTitle}</div>
  </div>
 );
}
