import { useEffect, useState } from "react";
import { SlidesPerview } from "src/components/SlidesPerView";
import { SwiperSlide } from "swiper/react";
import { IGame } from "../../../services/game/game.interface";
import { gameService } from "../../../services/game/game.service";
import { CardTopGame } from "./CardTopGame";

export function TopSeller() {
 const [datas, setDatas] = useState<IGame[]>([]);
 useEffect(() => {
  gameService.getTopRelease().then(setDatas);
 }, []);
 return (
  <section>
   <div className="sm:container sm:mx-auto md:container-auto mx-10">
    <h2 className="cs-section_heading cs-style1 text-center">
     Top new game released
    </h2>
    <div className="cs-height_45 cs-height_lg_45" />

    <div className="cs-slider cs-style1 cs-gap-30">
     <div className="cs-slider_container">
      <div className="cs-slider_wrapper">
       <SlidesPerview slidesPerView={3} spaceBetween={40}>
        {datas.map((data, idx) => (
         <SwiperSlide key={data.id}>
          <CardTopGame
           id={data.id}
           img={data.imageHeader}
           title={data.title}
           avatarInfo={data.avatarInfo}
           info={data.info}
           price={data.price}
          ></CardTopGame>
         </SwiperSlide>
        ))}
       </SlidesPerview>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
