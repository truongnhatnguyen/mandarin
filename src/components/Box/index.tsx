import React from "react";

export function Box(
 props: React.PropsWithChildren & {
  title: string;
  subTitle: string;
  img: string;
 }
) {
 return (
  <div className="cs-iconbox cs-style1 cs-white_bg  h-full flex flex-col space-y-4">
   <div className="flex justify-center">
    <img src={props.img} className="h-20" alt="" />
   </div>
   <h2 className="text-xl ">{props.title}</h2>
   <div className="">{props.subTitle}</div>
  </div>
 );
}
