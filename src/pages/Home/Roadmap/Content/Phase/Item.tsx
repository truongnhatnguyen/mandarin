import { useEffect } from "react";
import { StatusEnum, StatusImage } from "../../StatusImage";

export function PhaseItem(props: {
 color: string;
 status: StatusEnum;
 title: string;
 desc: string;
}) {
 useEffect(() => {
  //@ts-ignore
  AOS.init();
 });
 return (
  <div
   className="py-1 pl-3 pr-1 flex space-x-4 rounded w-fit hover:translate-x-4 duration-700"
   data-aos="fade-left"
   data-aos-duration="3000"
   data-aos-delay="500"
   style={{ backgroundColor: props.color }}
  >
   <div className="flex items-center">
    <StatusImage status={props.status} size="xl" />
   </div>
   <div className="pr-12 rounded py-1 px-3 bg-[#678e9d]">
    <p className="text-sm text-white">{props.title}</p>
    <p className="text-2xs text-neutral-200">{props.desc}</p>
   </div>
  </div>
 );
}
