import { Box } from "src/components/Box";

const dataBox = [
 {
  img: "/assets/howItWork/icon-box.png",
  title: "Improved Security",
  subTitle: "Cryptocurrencies are secured by blockchain technology, which pr",
 },
 {
  img: "/assets/howItWork/icon-box.png",
  title: "Faster Transactions",
  subTitle: "Cryptocurrency transactions are generally faster than tradition",
 },
 {
  img: "/assets/howItWork/icon-box.png",
  title: "Global Reach",
  subTitle: "Increase sales and revenue, as the project can tap into new mar",
 },
 {
  img: "/assets/howItWork/icon-box.png",
  title: "Non-stop development",
  subTitle: "Suitable for most users and players needs. Always keep up to d",
 },
];

export function IconBoxes() {
 return (
  <section>
   <div className="container-auto sm:mx-auto mx-5">
    <h2 className="cs-section_heading cs-style1 text-center">
     Competitive Advantages
    </h2>
    <div className="cs-height_45 cs-height_lg_45" />
    <div className="grid sm:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
     {dataBox.map((item, idx) => (
      <Box
       key={idx}
       img={item.img}
       title={item.title}
       subTitle={item.subTitle}
      ></Box>
     ))}
    </div>
   </div>
  </section>
 );
}
