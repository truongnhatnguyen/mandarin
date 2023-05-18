import React from "react";

import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card } from "src/components/Card";
import { EffectCoverflow, Navigation, Pagination } from "swiper";

interface DataCards {
  LuotLike: string;
  img: string;
  avatarInfo: string;
  info: string;
  price: string;
  title: string;
  category: string;
  id: string;
}

export function Slider3d(
  props: React.PropsWithChildren & {
    dataCards: DataCards[];
  }
) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={2}
      breakpoints={{
        350: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: {
          slidesPerView: 2,
        },
      }}
      spaceBetween={70}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3.5,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      navigation={{ nextEl: ".cs-left_arrow", prevEl: ".cs-right_arrow" }}
    >
      {props.dataCards.map((data, idx) => (
        <SwiperSlide>
          <div className="slick-slide slick-current slick-active slick-center">
            <Card
              id={data.id}
              key={idx}
              img={data.img}
              avatarInfo={data.avatarInfo}
              info={data.info}
              price={data.price}
              title={data.title}
            ></Card>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
