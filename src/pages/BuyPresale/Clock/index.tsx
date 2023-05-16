import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getFormattedTime = (value: number) => {
    return value < 10 ? `0${value}` : value.toString();
  };

  const getTimeInVietnam = () => {
    const vietnamTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh",
    });
    return new Date(vietnamTime);
  };

  const vietnamTime = getTimeInVietnam();
  const day = getFormattedTime(vietnamTime.getDate());
  const hour = getFormattedTime(vietnamTime.getHours());
  const minute = getFormattedTime(vietnamTime.getMinutes());
  const second = getFormattedTime(vietnamTime.getSeconds());

  return (
    <div>
      <div className="flex w-full justify-around">
        <div>
          <div className="font-bold text-3xl">{day}</div>
          <p>Days</p>
        </div>
        <div>:</div>
        <div>
          <div className="font-bold text-3xl">{hour}</div>
          <p>Hour</p>
        </div>
        <div>:</div>
        <div>
          <div className="font-bold text-3xl">{minute}</div>
          <p>Minute</p>
        </div>
        <div>:</div>
        <div>
          <div className="font-bold text-3xl">{second}</div>
          <p>Second</p>
        </div>
      </div>
    </div>
  );
};

export default Clock;
