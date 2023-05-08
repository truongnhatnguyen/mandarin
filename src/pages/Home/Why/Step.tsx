import { useMemo, useState } from "react";
import { useData } from "../../../hooks/useData";
import { Dot } from "../../../shared/components/Dot";
import { Splitter } from "../../../shared/components/Spliiter";
import { ViewDocButton } from "../../../shared/components/ViewDocButton";

interface IData {
 title: string;
 desc: string;
 link: string;
}

export function WhyStep() {
 const [selected, setSelected] = useState(0);
 const { data } = useData<IData[]>({
  path: "/assets/why/data.json",
  defaultValue: [],
 });
 return (
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-16 xl:gap-x-40 gap-y-8">
   <WhyStepContainer data={data} selected={selected} onSelected={setSelected} />
   <WhyStepImage />
  </div>
 );
}

function WhyStepContainer(props: {
 selected: number;
 onSelected: (val: number) => void;
 data: IData[];
}) {
 const { selected, onSelected: setSelected, data } = props;

 return (
  <div>
   <p className="text-2xl font-bold">Why Atus</p>
   <div className="relative">
    <Splitter />
    <div className="ml-4 mt-2 flex flex-col space-y-3">
     {data.map((d, idx) => (
      <WhyStepItem
       key={d.title}
       value={d}
       display={idx === selected}
       onClick={() => setSelected(idx)}
      />
     ))}
    </div>
   </div>
  </div>
 );
}

function WhyStepItem(props: {
 display?: boolean;
 value: IData;
 onClick: () => void;
}) {
 const titleStyles = useMemo(() => {
  let _titleStyles = "font-medium text-sm ";
  if (props.display) {
   _titleStyles += "text-primary   ";
  } else {
   _titleStyles += "cursor-pointer text-[#4d4d4d]";
  }
  return _titleStyles;
 }, [props.display]);
 return (
  <div className="relative">
   <Dot className="-left-[1.38rem] top-1" />
   <span className={titleStyles} onClick={props.onClick}>
    {props.value.title}
   </span>
   <div
    className={`mt-1 transition-all duration-700 overflow-hidden  
    ${props.display ? "max-h-[500px]" : "max-h-0"}
    `}
   >
    <p className=" text-sm">{props.value.desc}</p>
    <div className="mt-4">
     <ViewDocButton link={props.value.link} />
    </div>
   </div>
  </div>
 );
}

function WhyStepImage() {
 return (
  <div className="flex items-center justify-self-center md:justify-self-auto md:h-auto max-h-[395px] w-[320px] md:w-full">
   <video autoPlay muted loop playsInline>
    <source src="/assets/why/video.mp4" type="video/mp4" />
   </video>
  </div>
 );
}
