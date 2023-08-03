import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const dealEndDate = new Date("2023-08-10T16:30:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const timeLeft = dealEndDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    return {
      days,
      hours,
      minutes,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center gap-8 ">
      <div className="bg-white flex flex-col justify-center items-center w-44 gap-2 h-36">
        <span className="text-8xl font-bold">{timeLeft.days}</span>
        <span className="text-base font-bold">Days</span>
      </div>
      <div className="bg-white flex flex-col justify-center items-center w-44 gap-2 h-36">
        <span className="text-8xl font-bold">{timeLeft.hours}</span>
        <span className="text-base font-bold">Hours</span>
      </div>
      <div className="bg-white flex flex-col justify-center items-center w-44 gap-2 h-36">
        <span className="text-8xl font-bold">{timeLeft.minutes}</span>
        <span className="text-base font-bold">Minutes</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
