import { Dot } from "../../../../../shared/components/Dot";
import { StatusEnum } from "../../StatusImage";
import { PhaseItem } from "./Item";
export interface PhaseEntity {
 title: string;
 desc: string;
 items: [{ status: StatusEnum; desc: string; title: string; color: string }];
}
export function Phase(props: { value: PhaseEntity }) {
 const { title, desc, items } = props.value;
 return (
  <div className="ml-8 md:ml-0 py-8 flex flex-col md:flex-row md:space-x-12">
   <div className="relative md:sticky top-[24%] flex flex-col flex-1 w-full md:text-right h-fit">
    <p className="text-3xl font-medium">{title}</p>
    <p className="text-sm ">{desc}</p>
    <Dot className="-left-10 md:left-auto md:-right-8 top-1/2 -translate-y-1/2" />
   </div>
   <div className="pt-8 flex flex-col flex-1 w-full space-y-2">
    {items.map((item) => (
     <PhaseItem
      key={item.title}
      title={item.title}
      desc={item.desc}
      color={item.color}
      status={item.status}
     />
    ))}
   </div>
  </div>
 );
}
