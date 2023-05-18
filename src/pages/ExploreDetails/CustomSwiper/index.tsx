import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

export function CustomSwiper(
  props: React.PropsWithChildren & {
    imgs: string[];
  }
) {
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
        {props.imgs.map((item, idx) => (
          <SwiperSlide key={idx}>
            {item.endsWith(".webm") ? (
              <video controls poster={item} className="w-full h-full">
                <source
                  src={item}
                  type="video/webm"
                  className="w-full h-full"
                />
              </video>
            ) : (
              <img src={item} alt="" className="w-full h-full object-cover" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        breakpoints={{
          350: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper rounded-md h-44 "
      >
        {props.imgs.map((item, idx) => (
          <SwiperSlide key={idx}>
            {item.endsWith(".webm") ? (
              <video controls poster={item} className="w-full h-full">
                <source
                  src={item}
                  type="video/webm"
                  className="w-full h-full"
                />
              </video>
            ) : (
              <img src={item} alt="" className="w-full h-full object-cover" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
