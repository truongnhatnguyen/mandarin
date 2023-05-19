import { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "src/components/Card";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useData } from "../../../../hooks/useData";
import { DataCards } from "../../NewItem";
import "./Slider.scss";
function getRandomItems(array: Array<DataCards>, n: number) {
  // create a copy of the original array
  let arr = [...array];
  // create an empty array to store the random items
  let result = [];
  // loop n times
  for (let i = 0; i < n; i++) {
    // get a random index from 0 to arr.length - 1
    let index = Math.floor(Math.random() * arr.length);
    // get the item at that index
    let item = arr[index];
    // push the item to the result array
    result.push(item);
    // remove the item from the arr array
    arr.splice(index, 1);
  }
  // return the result array
  return result;
}

export function Slider3d() {
  const { data } = useData<DataCards[]>({
    path: "/assets/explore/datas.json",
    defaultValue: [],
  });
  const datas = useMemo(() => {
    if (data.length)
      return getRandomItems(data, data.length > 10 ? 10 : data.length);
    return [] as DataCards[];
  }, [data]);
  return (
    <Swiper
      effect={"coverflow"}
      initialSlide={2}
      grabCursor={true}
      centeredSlides={true}
      autoplay
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
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      navigation={{ nextEl: ".cs-right_arrow", prevEl: ".cs-left_arrow" }}
      pagination
    >
      {datas.map((data, idx) => (
        <SwiperSlide key={data.id}>
          <div className="slick-slide slick-current slick-active slick-center">
            <Card
              id={data.id}
              img={data.imageHeader}
              avatarInfo={data.avatarInfo}
              info={data.info}
              price={data.price}
              title={data.title}
              size="large"
            ></Card>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
