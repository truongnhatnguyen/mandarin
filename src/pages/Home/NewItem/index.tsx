import { useEffect, useState } from "react";
import { Card } from "src/components/Card";
import { MenuFilter } from "src/components/MenuFilter";
import { useData } from "src/hooks/useData";
import { IGame } from "../../../services/game/game.interface";

const labelFilters = [
 "All Game",
 "Sport",
 "Simulation",
 "Strategy",
 "Role-Playing",
 "Action",
 "Survival",
];

export function NewItem() {
 const { data: dataCards } = useData<IGame[]>({
  path: "/assets/explore/datas.json",
  defaultValue: [] as IGame[],
 });

 const [activeFilter, setActiveFilter] = useState(labelFilters[0]);
 const [tmpDatas, setTmpDatas] = useState<IGame[]>(dataCards);
 const [page, setPage] = useState(1);

 const handleFilterClick = (filter: string) => {
  setActiveFilter(filter);
  if (filter === "All Game") {
   return setTmpDatas(dataCards);
  } else {
   const newArr = dataCards.filter((item) => item.category === filter);
   setTmpDatas(newArr as any);
  }
 };

 // const handleLoadMore = () => {
 //   setPage((prevPage) => prevPage + 1);
 // };

 const sorted = [...tmpDatas].sort((a, b) => {
  const dataA = new Date(a.releaseDate).getTime();
  const dataB = new Date(b.releaseDate).getTime();
  return dataB - dataA;
 });

 useEffect(() => {
  setTmpDatas(dataCards);
 }, [dataCards]);

 const productsToShow = sorted.slice(0, page * 10);
 return (
  <section>
   <div className="sm:container sm:mx-auto mx-10 md:container-auto mt-10 sm:mt-0">
    <div className="cs-section_heading cs-style2">
     <div className="cs-section_left sm:block md:hidden lg:block xl:block hidden">
      <h2 className="cs-section_title">New Items</h2>
     </div>
    </div>
    <MenuFilter
     activeFilter={activeFilter}
     lstLabels={labelFilters}
     onFilterClick={handleFilterClick}
    ></MenuFilter>
    <div className="cs-height_45 cs-height_lg_45" />
    <div className="cs-isotop cs-style1 cs-isotop_col_5 cs-has_gutter_30">
     <div className="cs-grid_sizer"></div>
     <div className="cs-grid_5 cs-gap_30 transform transition duration-300 ease-in-out">
      {productsToShow.map((data, idx) => (
       <Card
        key={idx}
        id={data.id}
        img={data.imageHeader}
        avatarInfo={data.avatarInfo}
        info={data.info}
        price={data.price}
        title={data.title}
       ></Card>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}
