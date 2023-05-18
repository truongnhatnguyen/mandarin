import { SlidesPerview } from "src/components/SlidesPerView";
import { SwiperSlide } from "swiper/react";
import { Card } from "./Card";

const datas = [
  {
    img: "assets/home/top-developer.png",
    title: "Audioglyphs",
    subTitle: "Guarranted Authentic",
    avatar: "assets/home/avatar-top-developer.png",
  },
  {
    img: "assets/home/top-developer.png",
    title: "Audioglyphs",
    subTitle: "Guarranted Authentic",
    avatar: "assets/home/avatar-top-developer.png",
  },
  {
    img: "assets/home/top-developer.png",
    title: "Audioglyphs",
    subTitle: "Guarranted Authentic",
    avatar: "assets/home/avatar-top-developer.png",
  },
  {
    img: "assets/home/top-developer.png",
    title: "Audioglyphs",
    subTitle: "Guarranted Authentic",
    avatar: "assets/home/avatar-top-developer.png",
  },
  {
    img: "assets/home/top-developer.png",
    title: "Audioglyphs",
    subTitle: "Guarranted Authentic",
    avatar: "assets/home/avatar-top-developer.png",
  },
  {
    img: "assets/home/top-developer.png",
    title: "Audioglyphs",
    subTitle: "Guarranted Authentic",
    avatar: "assets/home/avatar-top-developer.png",
  },
  {
    img: "assets/home/top-developer.png",
    title: "Audioglyphs",
    subTitle: "Guarranted Authentic",
    avatar: "assets/home/avatar-top-developer.png",
  },
  {
    img: "assets/home/top-developer.png",
    title: "Audioglyphs",
    subTitle: "Guarranted Authentic",
    avatar: "assets/home/avatar-top-developer.png",
  },
  {
    img: "assets/home/top-developer.png",
    title: "Audioglyphs",
    subTitle: "Guarranted Authentic",
    avatar: "assets/home/avatar-top-developer.png",
  },
  {
    img: "assets/home/top-developer.png",
    title: "Audioglyphs",
    subTitle: "Guarranted Authentic",
    avatar: "assets/home/avatar-top-developer.png",
  },
];

export function Collections() {
  return (
    <div>
      <section>
        <div className="sm:container sm:mx-auto md:container-auto mx-10">
          <div className="cs-section_heading cs-style1 text-center">
            <h2 className="cs-section_title">Top Developers</h2>
          </div>
          <div className="cs-height_45 cs-height_lg_45" />
          <div className="cs-slider cs-style1 cs-gap-30">
            <div className="cs-slider_container">
              <div className="cs-slider_wrapper">
                <SlidesPerview slidesPerView={5} spaceBetween={20}>
                  {datas.map((data, idx) => (
                    <SwiperSlide>
                      <Card
                        img={data.img}
                        subTitle={data.subTitle}
                        title={data.title}
                        textFooter="valvesoftwware.com"
                        avatar={data.avatar}
                      />
                    </SwiperSlide>
                  ))}
                </SlidesPerview>
              </div>
            </div>
            {/* .cs-slider_container */}
            <div className="cs-height_10 cs-height_lg_10" />
            <div className="cs-pagination cs-style1" />
          </div>
        </div>
      </section>
    </div>
  );
}
