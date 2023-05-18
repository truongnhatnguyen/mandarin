/* eslint-disable jsx-a11y/anchor-is-valid */

export function SecitonVideo() {
 return (
  <div className="container-auto">
   <h2 className="cs-section_heading cs-style1 text-center">
    Games Market with Everything for Everyone
   </h2>
   <div className="cs-height_45 cs-height_lg_45" />
   <div className="row">
    <div className="col-lg-8 offset-lg-2">
     <video controls className="w-full">
      <source type="video/webm" src="/assets/about/video.webm" />
     </video>
    </div>
   </div>
  </div>
 );
}
