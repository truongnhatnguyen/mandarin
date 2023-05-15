import React, { useState } from "react";
import { Card } from "src/components/Card";
import { MenuFilter } from "src/components/MenuFilter";
const labelFilters = [
  "All Game",
  "Sport",
  "Simulation",
  "Strategy",
  "Role-Playing",
  "Action",
  "Survival",
];

const dataCards = [
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar4.png",
    avatarInfo: "assets/exploredetails/avatar-similar3.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
    id: "sport-1",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar3.png",
    avatarInfo: "assets/exploredetails/avatar-similar2.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
    id: "sport-2",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar2.png",
    avatarInfo: "assets/exploredetails/avatar-similar1.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
    id: "sport-3",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar1.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
    id: "sport-4",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
    id: "sport-5",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar4.png",
    avatarInfo: "assets/exploredetails/avatar-similar3.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Simulation",
    id: "simulation-1",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar3.png",
    avatarInfo: "assets/exploredetails/avatar-similar2.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Simulation",
    id: "simulation-2",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar2.png",
    avatarInfo: "assets/exploredetails/avatar-similar1.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Simulation",
    id: "simulation-3",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar1.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Simulation",
    id: "simulation-4",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Simulation",
    id: "simulation-5",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar4.png",
    avatarInfo: "assets/exploredetails/avatar-similar3.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Strategy",
    id: "strategy-1",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar3.png",
    avatarInfo: "assets/exploredetails/avatar-similar2.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Strategy",
    id: "strategy-2",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar2.png",
    avatarInfo: "assets/exploredetails/avatar-similar1.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Strategy",
    id: "strategy-3",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar1.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Strategy",
    id: "strategy-4",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Strategy",
    id: "strategy-5",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar1.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Action",
    id: "action-1",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Action",
    id: "action-2",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar1.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Role-Playing",
    id: "rolePlaying-1",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Role-Playing",
    id: "rolePlaying-2",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Role-Playing",
    id: "rolePlaying-3",
  },

  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Survival",
    id: "survival-1",
  },
];

interface DataCards {
  LuotLike: string;
  img: string;
  avatarInfo: string;
  info: string;
  price: string;
  title: string;
  category: string;
  id: string;
}

export function NewItem() {
  const [activeFilter, setActiveFilter] = useState(labelFilters[0]);
  const [tmpDatas, setTmpDatas] = useState<DataCards[]>(dataCards);
  // const [page, setPage] = useState(1);

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

  // const productsToShow = tmpDatas.slice(0, page * 10);
  return (
    <section>
      <div className="sm:container sm:mx-auto mx-5 mt-10 sm:mt-0">
        <div className="cs-section_heading cs-style2">
          <div className="cs-section_left sm:block hidden">
            <h2 className="cs-section_title">New Items</h2>
          </div>
        </div>
        <MenuFilter
          activeFilter={activeFilter}
          lstLabels={labelFilters}
          onFilterClick={handleFilterClick}
        ></MenuFilter>
        <div className="cs-height_45 cs-height_lg_45" />
        <div className="cs-grid_5 cs-gap_30">
          {tmpDatas.map((data, idx) => (
            <Card
              key={idx}
              id={data.id}
              LuotLike={data.LuotLike}
              img={data.img}
              avatarInfo={data.avatarInfo}
              info={data.info}
              price={data.price}
              title={data.title}
            ></Card>
          ))}
        </div>
      </div>
    </section>
  );
}
