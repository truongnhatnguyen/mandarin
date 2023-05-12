import React from "react";
import Slider from "react-slick";
import { Card } from "src/components/Card";
const dataCards = [
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar4.png",
    avatarInfo: "assets/exploredetails/avatar-similar3.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar3.png",
    avatarInfo: "assets/exploredetails/avatar-similar2.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
  },
  {
    LuotLike: "1.2K",
    img: "assets/exploredetails/similar2.png",
    avatarInfo: "assets/exploredetails/avatar-similar1.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
  },
];
function SlickInit() {
  const settings = {
    autoplay: true,
    dots: true,
    centerPadding: "0",
    speed: 300,
    infinite: true,
    autoplaySpeed: 3000,
    centerMode: true,
    fade: true,
    slidesToShow: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="cs-slider">
      <Slider {...settings}>
        {dataCards.map((data, idx) => (
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
      </Slider>
    </div>
  );
}

export default SlickInit;
