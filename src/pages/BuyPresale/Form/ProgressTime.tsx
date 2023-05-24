import { useEffect, useState } from "react";
import { ENV } from "../../../environment";

export function ProgressTime() {
 const [progress, setProgress] = useState(0);
 const startDate = new Date(
  ENV.beginTime.year,
  ENV.beginTime.month - 1,
  ENV.beginTime.day,
  ENV.beginTime.hour,
  ENV.beginTime.minute,
  0
 );
 const endDate = new Date(
  ENV.countdown.year,
  ENV.countdown.month - 1,
  ENV.countdown.day,
  ENV.countdown.hour,
  ENV.countdown.minute,
  0
 );
 const diffTime = endDate.getTime() - startDate.getTime();
 useEffect(() => {
  const now = Date.now();
  const diffNow = now - startDate.getTime();
  const value = (diffNow * 100) / diffTime;
  setProgress(value);
 }, []);

 return (
  <>
   <div className="bg-gray-400 rounded-full w-full h-5 relative">
    <div
     className="bg-gray-200 rounded-full  h-5"
     style={{
      width: progress + "%",
     }}
    ></div>
    <div
     className="absolute top-0 
     -translate-x-1/2 left-1/2
     text-sm font-extrabold text-transparent  bg-clip-text bg-gradient-to-r to-blue-600 from-pink-600"
    >
     1 BNB = 3,500 DRI / 40 BNB = 140,000 DRI
    </div>
   </div>
   <div>
    LISTING TIME: {ENV.countdown.day}-{ENV.countdown.month}-{ENV.countdown.year}
   </div>
  </>
 );
}
