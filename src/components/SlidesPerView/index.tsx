import React from "react";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";

export function SlidesPerview(
  props: React.PropsWithChildren & {
    slidesPerView: number;
    spaceBetween: number;
  }
) {
  return (
    <>
      <Swiper
        slidesPerView={props.slidesPerView}
        breakpoints={{
          350: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: {
            slidesPerView: props.slidesPerView,
            spaceBetween: props.spaceBetween,
          },
        }}
        spaceBetween={props.spaceBetween}
        pagination={{
          clickable: true,
        }}
        autoplay
        modules={[Autoplay]}
        className="mySwiper"
      >
        {props.children}
      </Swiper>
    </>
  );
}
