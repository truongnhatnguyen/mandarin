import { CardSlider } from "src/components/SlickSlider/CardSlider";
import { Banner } from "./Banner";
import { Catagory } from "./Category";
import { Collections } from "./Collections";
import { NewItem } from "./NewItem";
import { TopSeller } from "./TopSeller";
import { Carousel } from "./Carousel";
import { IconBoxes } from "./IconBoxes";
import { Cta } from "./Cta";

export const HomePage = () => {
  return (
    <>
      <div className="cs-height_90 cs-height_lg_80"></div>
      <Banner />
      <div className="cs-height_95 cs-height_lg_70"></div>
      <TopSeller />
      <div className="cs-height_70 cs-height_lg_40"></div>
      <NewItem />
      <div className="cs-height_95 cs-height_lg_70"></div>
      <Catagory />
      <div className="cs-height_95 cs-height_lg_70"></div>
      <Collections />
      <div className="cs-height_100 cs-height_lg_70"></div>
      <Carousel />
      <div className="cs-height_100 cs-height_lg_70"></div>
      <IconBoxes />
      <div className="cs-height_70 cs-height_lg_40"></div>
      <Cta />
    </>
  );
};
