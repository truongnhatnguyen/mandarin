import React, { useMemo } from "react";
import { Link } from "../../../shared/components/Link";

export function CTA(
 props: React.PropsWithChildren & {
  CtaTitle: string;
  CtaSubtitle: string;
  btnName: string;
  textLeft: boolean;
  href?: string;
 }
) {
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
       <Link
        to={href}
        className="cs-btn cs-style1 cs-btn_lg sm:inline-block flex !justify-center !items-center "
       >
        <span>{props.btnName}</span>
       </Link>
      </div>
      <div className="cs-cta_img text-center">
       <img src="/assets/img/general/cta2.svg" alt="" />
      </div>
     </div>
    </div>
   ) : (
    <div className="container-auto">
     <div className="cs-cta cs-style1 cs-bg">
      <div className="cs-cta_img">
       <img src="/assets/img/general/cta.svg" alt="" />
      </div>
      <div className="cs-cta_right">
       <h2 className="cs-cta_title">{props.CtaTitle}</h2>
       <div className="cs-cta_subtitle">{props.CtaSubtitle}</div>
       <Link
        to={href}
        className="cs-btn cs-style1 cs-btn_lg sm:inline-block flex !justify-center !items-center"
       >
        <span>{props.btnName}</span>
       </Link>
      </div>
     </div>
    </div>
   )}
  </>
 );
}
