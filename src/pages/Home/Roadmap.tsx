import { useEffect } from "react";

export function Roadmap() {
 useEffect(() => {
  //@ts-ignore
  AOS.init();
 }, []);
 return (
  <div className="container-auto">
   <h2 className="cs-section_heading cs-style1 text-center">Roadmap</h2>
   <div className="cs-height_45 cs-height_lg_45" />
   <img className="hidden md:block" src="/assets/home/roadmap.png" alt="" />
   <div className="md:hidden flex flex-col space-y-4 items-center">
    <img
     data-aos="fade-down"
     className="w-[24rem]"
     src="/assets/roadmap/1.png"
     alt=""
    />
    <img
     data-aos="fade-down"
     className="w-[24rem]"
     src="/assets/roadmap/2.png"
     alt=""
    />
    <img
     data-aos="fade-down"
     className="w-[24rem]"
     src="/assets/roadmap/3.png"
     alt=""
    />
    <img
     data-aos="fade-down"
     className="w-[24rem]"
     src="/assets/roadmap/4.png"
     alt=""
    />
   </div>
  </div>
 );
}
