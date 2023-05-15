import React from "react";
import { NavLink } from "react-router-dom";
import { Head } from "src/components/Head";
import { Accordians } from "./Accordians";
import { Box } from "src/components/Box";
const datas = [
  {
    title: "How do I get started in NFT?",
    content:
      "Step 1: Decide on the concept.Step 2: Decide on the platform Step Connect and build community.Step 4: Create your art. Step 5: Mint and share.The final step: Selling your NFT.",
  },
  {
    title: "How do I get started in NFT?",
    content:
      "Step 1: Decide on the concept.Step 2: Decide on the platform Step Connect and build community.Step 4: Create your art. Step 5: Mint and share.The final step: Selling your NFT.",
  },
  {
    title: "How do I get started in NFT?",
    content:
      "Step 1: Decide on the concept.Step 2: Decide on the platform Step Connect and build community.Step 4: Create your art. Step 5: Mint and share.The final step: Selling your NFT.",
  },
  {
    title: "How do I get started in NFT?",
    content:
      "Step 1: Decide on the concept.Step 2: Decide on the platform Step Connect and build community.Step 4: Create your art. Step 5: Mint and share.The final step: Selling your NFT.",
  },
  {
    title: "How do I get started in NFT?",
    content:
      "Step 1: Decide on the concept.Step 2: Decide on the platform Step Connect and build community.Step 4: Create your art. Step 5: Mint and share.The final step: Selling your NFT.",
  },
  {
    title: "How do I get started in NFT?",
    content:
      "Step 1: Decide on the concept.Step 2: Decide on the platform Step Connect and build community.Step 4: Create your art. Step 5: Mint and share.The final step: Selling your NFT.",
  },
];

const dataBoxIcon = [
  {
    img: "/assets/howItWork/icon-box.png",
    title: "Token Payments",
    subTitle: "We allow users to pay with BNB. this will involve integrating a",
  },
  {
    img: "/assets/howItWork/icon-box.png",
    title: "Token Rewards",
    subTitle: "We incentivize customers to use DRI tokens by providing rewards",
  },
  {
    img: "/assets/howItWork/icon-box.png",
    title: "Token Staking",
    subTitle: "The project can incentivize customers to hold and stake DRI tok",
  },
  {
    img: "/assets/howItWork/icon-box.png",
    title: "Token Burn",
    subTitle: "We will implement a token burning mechanism to reduce the suppl",
  },
];

export function HowItWorks() {
  return (
    <>
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        {/* Start Page Head */}
        <Head title="How It Works"></Head>
        {/* End Page Head */}

        {/* Start Icon Boxes */}
        <div className="sm:container sm:mx-auto mx-4">
          <div className="cs-height_95 cs-height_lg_70" />
          <h2 className="cs-section_heading cs-style1 text-center">
            More Access to Blockchain through Games
          </h2>
          <div className="cs-height_45 cs-height_lg_45" />

          <div className="grid sm:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {dataBoxIcon.map((item, idx) => (
              <Box
                key={idx}
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
          <div className="sm:container sm:mx-auto mx-4">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
              <div className="">
                <div className="cs-faq">
                  <div className="cs-section_heading cs-style3">
                    <h2 className="cs-section_title">Getting Started</h2>
                    <div className="cs-section_seperator" />
                  </div>
                  <div className="cs-height_30 cs-height_lg_30" />
                  <div className="cs-accordians">
                    <Accordians datas={datas}></Accordians>
                    {/* .cs-accordian */}
                  </div>
                  {/* .cs-accordians */}
                </div>
                <div className="cs-height_0 cs-height_lg_30" />
              </div>
              <div className="">
                <div className="cs-faq">
                  <div className="cs-section_heading cs-style3">
                    <h2 className="cs-section_title">
                      Safety, Security, and Policies
                    </h2>
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
          <div className="sm:container sm:mx-auto mx-4">
            <div className="cs-cta cs-style2 text-center cs-white_bg">
              <h2 className="cs-cta_title">Can't find your desire answer?</h2>
              <div className="cs-cta_subtitle">
                Exercitation veniam consequat sunt nostrud amet. It is a long{" "}
                <br />
                established fact that a reader
              </div>
              <NavLink to={""} className="cs-btn cs-style1 cs-btn_lg">
                <span>Contact Us</span>
              </NavLink>
            </div>
          </div>
          {/* End CTA */}
        </div>
      </div>
      <div className="cs-height_100 cs-height_lg_70"></div>
    </>
  );
}
