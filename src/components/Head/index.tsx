import React from "react";
import { NavLink } from "react-router-dom";

export function Head(
 props: React.PropsWithChildren & {
  title: string;
 }
) {
 return (
  <section
   className="cs-page_head cs-bg"
   data-src="/assets/img/page_head_bg.svg"
  >
   <div className="container-auto">
    <div className="text-center">
     <h1 className="cs-page_title">{props.title}</h1>
     <ol className="breadcrumb flex">
      <li className="breadcrumb-item">
       <NavLink to="/">Home</NavLink>
      </li>
      &nbsp; / &nbsp; <li className="breadcrumb-item active">{props.title}</li>
     </ol>
    </div>
   </div>
  </section>
 );
}
