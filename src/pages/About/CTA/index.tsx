import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

export function CTA(
 props: React.PropsWithChildren & {
  CtaTitle: string;
  CtaSubtitle: string;
  btnName: string;
  textLeft: boolean;
  href?: string;
 }
) {
<<<<<<< HEAD
  return (
    <>
      {props.textLeft ? (
        <div className="sm:container sm:mx-auto mx-5">
          <div className="cs-cta cs-style1 cs-type1 cs-bg">
            <div className="cs-cta_right">
              <h2 className="cs-cta_title">{props.CtaTitle}</h2>
              <div className="cs-cta_subtitle">{props.CtaSubtitle}</div>
              <NavLink to="/explore" className="cs-btn cs-style1 cs-btn_lg">
                <span>{props.btnName}</span>
              </NavLink>
            </div>
            <div className="cs-cta_img text-center">
              <img src="assets/img/general/cta2.svg" alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="sm:container sm:mx-auto mx-5">
          <div className="cs-cta cs-style1 cs-bg">
            <div className="cs-cta_img">
              <img src="assets/img/general/cta.svg" alt="" />
            </div>
            <div className="cs-cta_right">
              <h2 className="cs-cta_title">{props.CtaTitle}</h2>
              <div className="cs-cta_subtitle">{props.CtaSubtitle}</div>
              <NavLink
                to="/connect-wallet"
                className="cs-btn cs-style1 cs-btn_lg"
              >
                <span>{props.btnName}</span>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
=======
 const href = useMemo(() => {
  return props.href || "";
 }, [props.href]);
 return (
  <>
   {props.textLeft ? (
    <div className="container-auto">
     <div className="cs-cta cs-style1 cs-type1 cs-bg">
      <div className="cs-cta_right">
       <h2 className="cs-cta_title">{props.CtaTitle}</h2>
       <div className="cs-cta_subtitle">{props.CtaSubtitle}</div>
       <NavLink to={href} className="cs-btn cs-style1 cs-btn_lg">
        <span>{props.btnName}</span>
       </NavLink>
      </div>
      <div className="cs-cta_img text-center">
       <img src="assets/img/general/cta2.svg" alt="" />
      </div>
     </div>
    </div>
   ) : (
    <div className="container-auto">
     <div className="cs-cta cs-style1 cs-bg">
      <div className="cs-cta_img">
       <img src="assets/img/general/cta.svg" alt="" />
      </div>
      <div className="cs-cta_right">
       <h2 className="cs-cta_title">{props.CtaTitle}</h2>
       <div className="cs-cta_subtitle">{props.CtaSubtitle}</div>
       <NavLink to={href} className="cs-btn cs-style1 cs-btn_lg">
        <span>{props.btnName}</span>
       </NavLink>
      </div>
     </div>
    </div>
   )}
  </>
 );
>>>>>>> fa9763aa0729f3a4e659860e14e490b71f8c85cf
}
