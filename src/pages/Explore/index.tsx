import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "src/components/Card";
import { Head } from "src/components/Head";
import { MenuFilter } from "src/components/MenuFilter";
import { useGame } from "../../services/game.hook";
import { IGame } from "../../services/game/game.interface";

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
  const { data: dataCards } = useGame();

  const { search } = useLocation();
  const category = new URLSearchParams(search).get("category");

  const [activeFilter, setActiveFilter] = useState(category || labelFilters[0]);
  const [tmpDatas, setTmpDatas] = useState<IGame[]>(dataCards);
  const [page, setPage] = useState(1);
  const [productsToShow, setProductsToShow] = useState<IGame[]>([]);

  useEffect(() => {
    setTmpDatas(dataCards);
  }, [dataCards]);

  useEffect(() => {
    if (category) {
      handleFilterClick(category);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

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
  }, [tmpDatas, page]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = event.target.value;

    let sortedData = [...tmpDatas];

    if (sortValue === "7") {
      sortedData = sortData(sortedData, 7);
    } else if (sortValue === "30") {
      sortedData = sortData(sortedData, 30);
    }

    setProductsToShow(sortedData);
  };

  const sortData = (data: IGame[], days: number = 0): IGame[] => {
    const today = new Date();
    const startDate = new Date();
    startDate.setDate(today.getDate() - days);

    const filteredData = data.filter((item) => {
      const releaseDate = new Date(item.releaseDate);
      return releaseDate >= startDate && releaseDate <= today;
    });

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
                key={data.id + "_" + idx}
                id={data.id}
                img={data.imageHeader}
                avatarInfo={data.avatarInfo}
                info={data.info}
                price={data.price}
                title={data.title}
              ></Card>
            ))}
          </div>
          {productsToShow.length === 0 && (
            <div className="text-center">No games</div>
          )}
          <div className="cs-height_40 cs-height_lg_40" />
          <div className="text-center">
            {productsToShow.length > 0 &&
              productsToShow.length < tmpDatas.length && (
                <button className="cs-btn cs-style1" onClick={handleLoadMore}>
                  <span> Load more</span>
                </button>
              )}
          </div>
        </div>
        <div className="cs-height_100 cs-height_lg_70" />
      </div>
    </>
  );
}
