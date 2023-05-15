import React from "react";

export function SecitonVideo() {
  return (
    <div className="container-auto">
      <h2 className="cs-section_heading cs-style1 text-center">
        Games Market with Everything for Everyone
      </h2>
      <div className="cs-height_45 cs-height_lg_45" />
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <a
            hrefLang="https://www.youtube.com/embed/jRcfE2xxSAw?autoplay=1"
            className="cs-video_block cs-style1 cs-zoom_effect cs-video_open"
          >
            <div className="cs-video_block_in">
              <div
                className="cs-video_block_bg cs-bg cs-zoom_item"
                data-src="assets/img/video_bg.jpeg"
              />
            </div>
            <div className="cs-play_btn cs-center">
              <svg
                width={28}
                height={33}
                viewBox="0 0 28 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.98474 0.457254C2.24375 -0.616351 0 0.63608 0 2.68148V30.3185C0 32.3639 2.24375 33.6164 3.98474 32.5427L26.3932 18.7242C28.0485 17.7034 28.0485 15.2966 26.3932 14.2758L3.98474 0.457254Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
