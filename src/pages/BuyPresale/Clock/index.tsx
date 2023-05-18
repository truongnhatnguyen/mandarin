import React, { useEffect, useMemo, useState } from "react";
import { ENV } from "../../../environment";

export const Clock: React.FC = () => {
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
  <div className="flex w-full justify-around items-center">
   <ClockItem value={value[0]} title="Days" />
   <div>:</div>
   <ClockItem value={value[1]} title="Hours" />
   <div>:</div>
   <ClockItem value={value[2]} title="Minutes" />
   <div>:</div>
   <ClockItem value={value[3]} title="Seconds" />
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
  <div>
   <div className="font-bold text-3xl">{value}</div>
   <p>{props.title}</p>
  </div>
 );
}
