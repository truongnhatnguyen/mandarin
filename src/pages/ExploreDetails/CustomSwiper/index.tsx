import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

export function CustomSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  return (
    <>
      <Swiper
        style={{}}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-md mb-4 w-full h-96"
      >
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide1.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide2.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide3.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide1.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide2.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide3.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide1.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide2.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide3.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide1.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper rounded-md"
      >
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide1.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide2.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide3.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide1.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide2.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide3.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide1.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide2.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide3.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/exploredetails/SwiperSlide1.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
