import React, { useState } from "react";

export function Accordion(
  props: React.PropsWithChildren & {
    content: string;
    title: string;
  }
) {
  const [accordion, setAccordion] = useState<boolean>(false);

  function handleClick() {
    setAccordion(!accordion);
  }
  return (
    <div className={`cs-accordian ${accordion ? "active" : ""}`}>
      <div className="cs-accordian_head">
        <h2 className="cs-accordian_title" onClick={handleClick}>
          {props.title}
        </h2>
        <span className="cs-accordian_toggle" onClick={handleClick}>
          <svg
            width={13}
            height={7}
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className={`cs-accordian-body ${!accordion ? "hidden" : ""}`}>
        {props.content}
      </div>
    </div>
  );
}
