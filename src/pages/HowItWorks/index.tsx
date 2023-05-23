import { Head } from "src/components/Head";
import { useData } from "src/hooks/useData";
import { Box } from "../../components/Box";
import { Link } from "../../shared/components/Link";
import { Accordians } from "./Accordians";

interface DataBoxIcon {
 img: string;
 title: string;
 subTitle: string;
}

export function HowItWorks() {
 const { data: datas } = useData({
  path: "/assets/howItWork/data.json",
  defaultValue: [],
 });
 const { data: gettingStarted } = useData({
  path: "/assets/howItWork/gettingstarted.json",
  defaultValue: [],
 });

 const { data: dataBoxIcon } = useData<DataBoxIcon[]>({
  path: "/assets/howItWork/dataBoxIcon.json",
  defaultValue: [],
 });

 return (
  <>
   <div>
    <div className="cs-height_90 cs-height_lg_80" />
    {/* Start Page Head */}
    <Head title="How It Works"></Head>
    {/* End Page Head */}

    {/* Start Icon Boxes */}
    <div className="container-auto">
     <div className="cs-height_95 cs-height_lg_70" />
     <h2 className="cs-section_heading cs-style1 text-center">
      More Access to Blockchain through Games
     </h2>
     <div className="cs-height_45 cs-height_lg_45" />

     <div className="grid sm:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {dataBoxIcon.map((item, idx) => (
       <Box
        key={item.title}
        img={item.img}
        title={item.title}
        subTitle={item.subTitle}
       ></Box>
      ))}
     </div>
    </div>
    {/* End Icon Boxes */}
    <div className="cs-height_60 cs-height_lg_40" />

    <div>
     <div className="container-auto ">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
       <div className="">
        <div className="cs-faq">
         <div className="cs-section_heading cs-style3">
          <h2 className="cs-section_title">Getting Started</h2>
          <div className="cs-section_seperator" />
         </div>
         <div className="cs-height_30 cs-height_lg_30" />
         <div className="cs-accordians">
          <Accordians datas={gettingStarted}></Accordians>
          {/* .cs-accordian */}
         </div>
         {/* .cs-accordians */}
        </div>
        <div className="cs-height_0 cs-height_lg_30" />
       </div>
       <div className="">
        <div className="cs-faq">
         <div className="cs-section_heading cs-style3">
          <h2 className="cs-section_title">Safety, Security, and Policies</h2>
          <div className="cs-section_seperator" />
         </div>
         <div className="cs-height_30 cs-height_lg_30" />
         <div className="cs-accordians">
          <Accordians datas={datas}></Accordians>
         </div>
         {/* .cs-accordians */}
        </div>
       </div>
      </div>
     </div>
     <div className="cs-height_90 cs-height_lg_70" />
     {/* Start CTA */}
     <div className="container-auto ">
      <div className="cs-cta cs-style2 text-center cs-white_bg">
       <h2 className="cs-cta_title">Can't find your desire answer?</h2>
       <div className="cs-cta_subtitle">
        Exercitation veniam consequat sunt nostrud amet. It is a long <br />
        established fact that a reader
       </div>
       <Link to={"/contact"} className="cs-btn cs-style1 cs-btn_lg">
        <span>Contact Us</span>
       </Link>
      </div>
     </div>
     {/* End CTA */}
    </div>
   </div>
   <div className="cs-height_100 cs-height_lg_70"></div>
  </>
 );
}
