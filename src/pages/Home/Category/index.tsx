import React from "react";
import { SlidesPerview } from "../../../components/SlidesPerView";
import { SwiperSlide } from "swiper/react";
import { CardCategory } from "./CardCategory";

const datas = [
  { img: "assets/home/category.png", title: "Action", subTitle: "View Game" },
  { img: "assets/home/category1.png", title: "Action", subTitle: "View Game" },
  { img: "assets/home/category2.png", title: "Action", subTitle: "View Game" },
  { img: "assets/home/category3.png", title: "Action", subTitle: "View Game" },
  { img: "assets/home/category4.png", title: "Action", subTitle: "View Game" },
  { img: "assets/home/category.png", title: "Action", subTitle: "View Game" },
  { img: "assets/home/category1.png", title: "Action", subTitle: "View Game" },
  { img: "assets/home/category2.png", title: "Action", subTitle: "View Game" },
  { img: "assets/home/category3.png", title: "Action", subTitle: "View Game" },
  { img: "assets/home/category4.png", title: "Action", subTitle: "View Game" },
];

export function Catagory() {
  return (
    <section>
      <div className="sm:container sm:mx-auto mx-5">
        <h2 className="cs-section_heading cs-style1 text-center">
          Explore By Catagory
        </h2>
        <div className="cs-height_45 cs-height_lg_45" />
        <div className="cs-slider cs-style1 cs-gap-30">
          <div
            className="cs-slider_container"
            data-autoplay={0}
            data-loop={1}
            data-speed={600}
            data-center={0}
            data-slides-per-view="responsive"
            data-xs-slides={2}
            data-sm-slides={3}
            data-md-slides={4}
            data-lg-slides={5}
            data-add-slides={6}
          >
            <div className="cs-slider_wrapper">
              <SlidesPerview slidesPerView={5} spaceBetween={20}>
                {datas.map((data, idx) => (
                  <SwiperSlide>
                    <CardCategory
                      key={idx}
                      img={data.img}
                      title={data.title}
                      subTitle={data.subTitle}
                    ></CardCategory>
                  </SwiperSlide>
                ))}
              </SlidesPerview>
            </div>
          </div>
          {/* .cs-slider_container */}
          <div className="cs-height_10 cs-height_lg_10" />
          <div className="cs-pagination cs-style1" />
        </div>
        {/* .cs-slider */}
      </div>
    </section>
  );
}
