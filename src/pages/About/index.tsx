import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import { Head } from "src/components/Head";
import { BoxIcon } from "./BoxIcon";
import { CTA } from "./CTA";
import { SecitonVideo } from "./SectionVideo";
import { TeamMembers } from "./TeamMembers";

export function About() {
  return (
    <>
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        {/* Start Page Head */}
        <Head title="About Us"></Head>
        {/* End Page Head */}
        <div className="cs-height_100 cs-height_lg_70" />
        {/* Start CTA */}
        <CTA
          CtaSubtitle="Our mission is to bring a whole new environment with Blockchain
          technology. Connecting players to the blockchain system with the
          most popular and diverse games. Change the perception of the
          community towards Web3 and gamers."
          btnName="Let’s Start"
          CtaTitle="On a mission to environmental
          sustainability with Blockchain"
          textLeft
          href="/explore"
        ></CTA>
        {/* End CTA */}
        <div className="cs-height_95 cs-height_lg_70" />
        {/* Start Video Section */}
        <SecitonVideo />
        {/* End Video Seciton */}
        <div className="cs-height_95 cs-height_lg_70" />
        {/* Start Icon Box */}
        <BoxIcon />
        {/* End Icon Box */}
        <div className="cs-height_70 cs-height_lg_40" />
        {/* Start CTA */}
        <CTA
          CtaSubtitle="Buy your favorite game at Mandarin with BNB tokens, experience the
          fastest buying and selling system ever. Fast transactions, simpler
          token payments, no intermediary transactions."
          btnName="Connect Wallet"
          CtaTitle="Play, Sell Well and Collect your
          Best Games with us Very Fast"
          textLeft={false}
          href="/connect-wallet"
        />
        {/* End CTA */}
        <div className="cs-height_95 cs-height_lg_70" />
        {/* Start Team members */}
        <TeamMembers />
        {/* End Team members */}
        <div className="cs-height_100 cs-height_lg_70" />
        {/* Start CTA */}
        <div className="container-auto">
          <div className="cs-cta cs-style2 text-center cs-accent_bg">
            <h2 className="cs-cta_title cs-white_color_8">Buy Pre-sale Now</h2>
            <div className="cs-cta_subtitle cs-white_color_8">
              To receive our valuable members-only offers
            </div>
            <NavLink
              to="register.html"
              className="cs-btn cs-style1 cs-btn_lg cs-color2"
            >
              <span>Buy Presale</span>
            </NavLink>
          </div>
        </div>
        {/* End CTA */}
        <div className="cs-height_100 cs-height_lg_70" />
        {/* Start Logo Carousel */}
        <Marquee>
          <div className="cs-moving_carousel_1 flex">
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/1.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/2.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/3.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/4.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/5.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/6.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/7.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
          </div>
        </Marquee>
        <div className="cs-height_30 cs-height_lg_30" />
        <Marquee>
          <div className="cs-moving_carousel_2 flex">
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/5.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/9.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/10.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/11.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/12.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/13.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
            <div className="cs-single_moving_item">
              <div className="cs-partner">
                <div className="cs-partner_in cs-center cs-white_bg">
                  <img src="assets/img/partners/14.svg" alt="Partner logo" />
                </div>
              </div>
            </div>
          </div>
        </Marquee>
        <div className="cs-height_100 cs-height_lg_70" />
        {/* End Logo Carousel */}
      </div>
    </>
  );
}
