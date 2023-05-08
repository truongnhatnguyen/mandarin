import { useEffect, useMemo, useState } from "react";
import { ENV } from "../../environment";

export const Clock = () => {
 const [value, setValue] = useState<(number | null)[]>([
  null,
  null,
  null,
  null,
 ]);
 useEffect(() => {
  const date = new Date(
   ENV.countdown.year,
   ENV.countdown.month - 1,
   ENV.countdown.day,
   ENV.countdown.hour,
   ENV.countdown.minute,
   0
  );
  let interval: any;
  if (date.getTime() > Date.now()) {
   interval = setInterval(() => {
    let distance = date.getTime() - Date.now(),
     days = Math.floor(distance / (1000 * 60 * 60 * 24)),
     hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
     minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
     seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const newValue = [days, hours, minutes, seconds];
    setValue(newValue);
   }, 1000);
  } else {
   setValue([0, 0, 0, 0]);
  }
  return () => interval && clearInterval(interval);
 }, []);
 return (
  <div className="flex ">
   <div className="flex space-x-8 justify-center border-b border-t border-black px-4  py-1">
    <ClockItem value={value[0]} title="Days" />
    <ClockItem value={value[1]} title="Hours" />
    <ClockItem value={value[2]} title="Minutes" />
    <ClockItem value={value[3]} title="Seconds" />
   </div>
  </div>
 );
};

function ClockItem(props: { value: number | null; title: string }) {
 const value = useMemo(() => {
  if (props.value === null) {
   return "-";
  }
  if (props.value < 10) {
   return "0" + props.value;
  }
  return props.value + "";
 }, [props.value]);
 return (
  <div className="flex flex-col justify-center items-center">
   <div className="w-8  rounded  flex justify-center items-center  text-neutral-900 text-3xl font-medium">
    {value}
   </div>
   <span className="text-xs -mt-1 font-thin ">{props.title}</span>
  </div>
 );
}
