import { SlidesPerview } from "src/components/SlidesPerView";
import { SwiperSlide } from "swiper/react";
import { Card } from "./Card";
import { useData } from "src/hooks/useData";

interface DataEntity {
  title: string;
  subTitle: string;
  img: string;
  avatar: string;
  textFooter: string;
  instagram: string;
  twitter: string;
  urlInfo: string;
}

export function Collections() {
  const { data: datas } = useData<DataEntity[]>({
    path: "/assets/home/topDevelopers/data.json",
    defaultValue: [],
  });
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
                    <SwiperSlide key={data.title}>
                      <Card
                        img={data.img}
                        subTitle={data.subTitle}
                        title={data.title}
                        textFooter={data.textFooter}
                        avatar={data.avatar}
                        twitter={data.twitter}
                        instagram={data.instagram}
                        urlInfo={data.urlInfo}
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
