import React from "react";
import Palm from "../../assets/Palm.png";
import CountdownTimer from "../Countdown/CountdownTimer";

function Deal() {
  return (
    <div className="bg-default-bg">
      <section className="bg-deal-default flex justify-around items-center ">
        <div className=" gap-8 flex flex-col justify-center p-8 items-start m-8">
          <h1 className="text-5xl font-bold text-white">Deal Of The Day</h1>
          <p className="text-base font-bold text-white w-96">
            We are diligent in offering all our services,, These services
            involve the planning,organizing, directing and handling of
            agricultural produce in such a way as to satisfy farmer,
            intermediaries and consumers.
          </p>
          <CountdownTimer />
          <button className="text-4xl font-bold shadow-md inset-shadow-md px-12 py-3 flex justify-center items-center text-center bg-white rounded-xl border-default-green">
            Buy Now
          </button>
        </div>
        <div>
          <img src={Palm} alt="Palm Oil" />
        </div>
      </section>
    </div>
  );
}

export default Deal;
