import React from "react";
import { Accordion } from "src/components/Accordion";

export function Accordians(
  props: React.PropsWithChildren & {
    datas: any[];
  }
) {
  return (
    <>
      {props.datas.map((item, idx) => (
        <Accordion
          key={idx}
          content={item.content}
          title={item.title}
        ></Accordion>
      ))}
    </>
  );
}
