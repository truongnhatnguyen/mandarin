import { Banner } from "./Banner";
import { Carousel } from "./Carousel";
import { Catagory } from "./Category";
import { Collections } from "./Collections";
import { Cta } from "./Cta";
import { IconBoxes } from "./IconBoxes";
import { NewItem } from "./NewItem";
import { Roadmap } from "./Roadmap";
import { Tokenomic } from "./Tokenomic";
import { TopSeller } from "./TopSeller";

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
   <Tokenomic />
   <div className="cs-height_95 cs-height_lg_70"></div>
   <Catagory />
   <div className="cs-height_95 cs-height_lg_70"></div>
   <Collections />
   <div className="cs-height_100 cs-height_lg_70"></div>
   <Carousel />
   <div className="cs-height_100 cs-height_lg_70"></div>
   <Roadmap />
   <div className="cs-height_100 cs-height_lg_70"></div>
   <IconBoxes />
   <div className="cs-height_70 cs-height_lg_40"></div>
   <Cta />
   <div className="cs-height_70 cs-height_lg_40"></div>
  </>
 );
};
