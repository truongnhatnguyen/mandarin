import React from "react";
import { Box } from "src/components/Box";

const dataBox = [
 {
  img: "/assets/about/icon-game.png",
  title: "99K+",
  subTitle: "Games",
 },
 {
  img: "/assets/about/icon-transactions.png",
  title: "5M+",
  subTitle: "transactions",
 },
 {
  img: "/assets/about/icon-valuation.png",
  title: "85%",
  subTitle: "valuation ",
 },
 {
  img: "/assets/about/icon-total.png",
  title: "500M+",
  subTitle: "Total Volume ",
 },
 {
  img: "/assets/about/icon-daily.png",
  title: "70K+",
  subTitle: "daily transactions",
 },
];

export function BoxIcon(
 props: React.PropsWithChildren & {
  heading?: string;
 }
) {
 return (
  <div className="container-auto">
   <h2 className="cs-section_heading cs-style1 text-center">
    Good development goals in a short timme
   </h2>
   <div className="cs-height_45 cs-height_lg_45" />
   <div className="cs-grid_5 cs-gap_30 ">
    {dataBox.map((item, idx) => (
     <Box img={item.img} title={item.title} subTitle={item.subTitle} />
    ))}
   </div>
  </div>
 );
}
