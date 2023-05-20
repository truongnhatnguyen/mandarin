import { useMemo } from "react";
import { SwiperSlide } from "swiper/react";
import { Card } from "../../components/Card";
import { SlidesPerview } from "../../components/SlidesPerView";
import { useData } from "../../hooks/useData";
import { DataCards } from "../Home/NewItem";

export function SimilarItems(props: { categoryId: string }) {
  const { data } = useData<DataCards[]>({
    path: "/assets/explore/datas.json",
    defaultValue: [],
  });
  const datas = useMemo(() => {
    if (data.length) {
      const _datas = data.filter((f) => f.category === props.categoryId);
      if (_datas.length > 10) {
        _datas.splice(0, 10);
      }
      return _datas;
    }
    return [];
  }, [data, props.categoryId]);
  return (
    <div className="container-auto">
      <h2 className="cs-section_heading cs-style1">Similar Items</h2>
      <div className="cs-height_45 cs-height_lg_45" />
      {/* <div className="cs-grid_5 cs-gap_30"> */}
      <SlidesPerview slidesPerView={5} spaceBetween={20}>
        {datas.map((data, idx) => (
          <SwiperSlide key={data.id}>
            <Card
              id={data.id}
              img={data.imageHeader}
              avatarInfo={data.avatarInfo}
              info={data.info}
              price={data.price}
              title={data.title}
            ></Card>
          </SwiperSlide>
        ))}
      </SlidesPerview>
      {/* </div> */}
    </div>
  );
}
