import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Card } from "src/components/Card";
import { Head } from "src/components/Head";
import { MenuFilter } from "src/components/MenuFilter";
import { useData } from "src/hooks/useData";
import { DataCards } from "../Home/NewItem";

const labelFilters = [
  "All Game",
  "Sport",
  "Simulation",
  "Strategy",
  "Role-Playing",
  "Action",
  "Survival",
];

export function Explore() {
  const { data: dataCards } = useData<DataCards[]>({
    path: "/assets/explore/datas.json",
    defaultValue: [] as DataCards[],
  });

  const { search } = useLocation();
  const category = new URLSearchParams(search).get("category");

  useEffect(() => {
    setTmpDatas(dataCards);
  }, [dataCards]);
  useEffect(() => {
    if (category) {
      handleFilterClick(category);
    } else {
      setActiveFilter(labelFilters[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const [activeFilter, setActiveFilter] = useState(category || labelFilters[0]);
  const [tmpDatas, setTmpDatas] = useState<DataCards[]>(dataCards);
  const [page, setPage] = useState(1);
  const [productsToShow, setProductsToShow] = useState<DataCards[]>([]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "All Game") {
      return setTmpDatas(dataCards);
    } else {
      const newArr = dataCards.filter((item) => item.category === filter);
      setTmpDatas(newArr as any);
    }
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    setProductsToShow(tmpDatas.slice(0, page * 10));
  }, [tmpDatas]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = event.target.value;

    let sortedData = [...tmpDatas];

    if (sortValue === "7") {
      sortedData = sortData(sortedData, 7);
    } else if (sortValue === "30") {
      sortedData = sortData(sortedData, 30);
    }

    setProductsToShow(sortedData);
    // const sortValue = parseInt(event.target.value, 10);

    // let sortedData = [...tmpDatas];

    // if (sortValue === 7) {
    //   sortedData = sortedData
    //     .filter((obj) => {
    //       const today = new Date();
    //       const last7Days = new Date();
    //       last7Days.setDate(today.getDate() - 7);
    //       return new Date(obj.releaseDate) >= last7Days;
    //     })
    //     .sort(
    //       (a, b) =>
    //         new Date(b.releaseDate).getTime() -
    //         new Date(a.releaseDate).getTime()
    //     );
    // } else if (sortValue === 30) {
    //   sortedData = sortedData
    //     .filter((obj) => {
    //       const today = new Date();
    //       const last30Days = new Date();
    //       last30Days.setDate(today.getDate() - 30);
    //       return new Date(obj.releaseDate) >= last30Days;
    //     })
    //     .sort(
    //       (a, b) =>
    //         new Date(b.releaseDate).getTime() -
    //         new Date(a.releaseDate).getTime()
    //     );
    // }

    // setProductsToShow(sortedData);
  };

  const sortData = (data: DataCards[], days: number = 0): DataCards[] => {
    const today = new Date();
    const startDate = new Date();
    startDate.setDate(today.getDate() - days);

    const filteredData = data.filter((item) => {
      const releaseDate = new Date(item.releaseDate);
      return releaseDate >= startDate && releaseDate <= today;
    });
    console.log("filteredDataf", filteredData);

    return filteredData.sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );
  };

  return (
    <>
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        <Head title="Explore"></Head>
        <div className="cs-height_100 cs-height_lg_70" />
        <div className="container mx-auto">
          <div className="cs-isotop_filter cs-style1 cs-center">
            <MenuFilter
              activeFilter={activeFilter}
              lstLabels={labelFilters}
              onFilterClick={handleFilterClick}
            ></MenuFilter>
          </div>
          <div className="cs-height_30 cs-height_lg_30" />
          <div className="cs-filter_head">
            <div className="cs-filter_head_right ">
              <div className="cs-form_field_wrap cs-select_arrow">
                <select
                  className="cs-form_field cs-field_sm"
                  onChange={handleSortChange}
                >
                  <option value={"all"}>All time</option>
                  <option value={7}>Last 7 days</option>
                  <option value={10}>Last 30 days</option>
                </select>
              </div>
            </div>
          </div>
          <div className="cs-height_30 cs-height_lg_30" />
          <div className="cs-grid_5 cs-gap_30">
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
          <div className="cs-height_40 cs-height_lg_40" />
          <div className="text-center">
            {productsToShow.length < tmpDatas.length && (
              <NavLink
                to="#"
                className="cs-btn cs-style1 cs-btn_lg"
                onClick={handleLoadMore}
              >
                <span>Load More</span>
              </NavLink>
            )}
          </div>
        </div>
        <div className="cs-height_100 cs-height_lg_70" />
      </div>
    </>
  );
}
