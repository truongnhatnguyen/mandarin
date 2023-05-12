import React, { useState } from "react";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
// const style={
//     .swiper-details {
//         position: absolute;
//         bottom: 0;
//         left: 0;
//         width: 100%;
//         height: 50%;
//         background-color: rgba(255, 255, 255, 0.9);
//         padding: 20px;
//         transform: scale(0.8);
//         opacity: 0;
//         transition: all 0.5s ease;
//       }

//       .swiper-details.show {
//         transform: scale(1);
//         opacity: 1;
//       }
// }

export function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const params = {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    onSlideChange: (swiper: any) => {
      setActiveIndex(swiper.realIndex);
    },
  };

  return (
    <div className="swiper-container">
      {/* <Swiper {...params}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      <div className="swiper-details">
        <h2>Slide {activeIndex + 1}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
          velit sapien, vel congue libero ultricies id. Proin pharetra.
        </p>
      </div> */}
    </div>
  );
}
