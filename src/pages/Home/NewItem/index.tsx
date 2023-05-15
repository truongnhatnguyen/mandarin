import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar3.png",
    avatarInfo: "assets/exploredetails/avatar-similar2.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar2.png",
    avatarInfo: "assets/exploredetails/avatar-similar1.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar1.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar4.png",
    avatarInfo: "assets/exploredetails/avatar-similar3.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Simulation",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar3.png",
    avatarInfo: "assets/exploredetails/avatar-similar2.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Simulation",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar2.png",
    avatarInfo: "assets/exploredetails/avatar-similar1.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Simulation",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar1.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Simulation",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Simulation",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar4.png",
    avatarInfo: "assets/exploredetails/avatar-similar3.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Strategy",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar3.png",
    avatarInfo: "assets/exploredetails/avatar-similar2.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Strategy",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar2.png",
    avatarInfo: "assets/exploredetails/avatar-similar1.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Strategy",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar1.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Strategy",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Strategy",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar4.png",
    avatarInfo: "assets/exploredetails/avatar-similar3.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar3.png",
    avatarInfo: "assets/exploredetails/avatar-similar2.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar2.png",
    avatarInfo: "assets/exploredetails/avatar-similar1.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar1.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Action",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Action",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar1.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Role-Playing",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Role-Playing",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Role-Playing",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar1.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Survival",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar.png",
    avatarInfo: "assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    category: "Sport",
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
      <div className="sm:container sm:mx-auto mx-5">
        <div className="cs-section_heading cs-style2">
          <div className="cs-section_left">
            <h2 className="cs-section_title">New Items</h2>
          </div>
          <div className="cs-section_right">
            <NavLink to="/explore" className="cs-btn cs-style1">
              <span>Explore More</span>
            </NavLink>
          </div>
        </div>
        {/* <div className="cs-isotop_filter cs-style1 cs-type1 cs-center">
          <ul className="cs-mp0 cs-center">
            <li className={activeFilter === "*" ? "active" : ""}>
              <NavLink
                to="#"
                data-filter="*"
                onClick={() => handleFilterClick("*")}
              >
                <span>All NFT</span>
              </NavLink>
            </li>
            <li className={activeFilter === ".fashion" ? "active" : ""}>
              <NavLink
                to="#"
                data-filter=".fashion"
                onClick={() => handleFilterClick(".fashion")}
              >
                <span>Fashion</span>
              </NavLink>
            </li>
            <li className={activeFilter === ".music" ? "active" : ""}>
              <NavLink
                to="#"
                data-filter=".music"
                onClick={() => handleFilterClick(".music")}
              >
                <span>Music</span>
              </NavLink>
            </li>
            <li className={activeFilter === ".video" ? "active" : ""}>
              <NavLink
                to="#"
                data-filter=".video"
                onClick={() => handleFilterClick(".video")}
              >
                <span>Video</span>
              </NavLink>
            </li>
            <li className={activeFilter === ".games" ? "active" : ""}>
              <NavLink
                to="#"
                data-filter=".games"
                onClick={() => handleFilterClick(".games")}
              >
                <span>Games</span>
              </NavLink>
            </li>
          </ul>
        </div> */}
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
