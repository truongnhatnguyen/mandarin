import React, { useEffect } from "react";

export function Preloader() {
  useEffect(() => {
    const preloader = document.querySelector(".cs-preloader") as HTMLElement;
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => {
          preloader.style.display = "none";
        }, 800);
      }, 250);
    }
  }, []);

  return (
    <>
      <div className="cs-preloader cs-center">
        <div className="cs-preloader_in"></div>
        <span>Loading</span>
      </div>
    </>
  ); // or any other JSX if needed;
}
