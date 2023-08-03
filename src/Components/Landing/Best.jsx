import React from "react";
import { Icon } from "@iconify/react";
import Yam from "../../assets/yam.png";
import Rice from "../../assets/rice.png";

function Best() {
  return (
    <div>
      <section className="flex py-14 bg-black text-white gap-8 justify-center  items-center">
        <div className="flex flex-col gap-4 justify-center items-start">
          <h2 className="text-5xl font-bold">Best seller product</h2>
          <p className="w-96 text-base font-bold">
            We are diligent in offering all our services, These services involve
            the planning,organizing, directing and handling of agricultural
            produce in such a way as to satisfy farmer, intermediaries and
            consumers.
          </p>
          <button className="text-4xl font-bold border border-default-green bg-white rounded-xl text-black px-8 py-4">
            Buy Now
          </button>
        </div>
        <div className="flex gap-8 justify-center items-center pt-4">
          <div className="flex flex-col gap-4 bg-white text-black">
            <img className="w-72 h-80" src={Yam} alt="Yam" />
            <div className="flex flex-col gap-2 justify-center items-center pb-4">
              <div className="flex gap-2">
                <Icon icon="ic:outline-star" color="#e97000" />
                <Icon icon="ic:outline-star" color="#e97000" />
                <Icon icon="ic:outline-star" color="#e97000" />
                <Icon icon="ic:outline-star" color="#e97000" />
                <Icon icon="ic:outline-star" color="#e97000" />
              </div>
              <p className="text-5xl font-medium">Yam</p>
              <p className="text-2xl font-medium">₦185.000</p>
              <button className="text-2xl font-medium bg-button-default rounded-xl px-4 py-2">
                Buy Now
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white text-black">
            <img className="w-72 h-80" src={Rice} alt="Yam" />
            <div className="flex flex-col gap-2 justify-center items-center pb-4">
              <div className="flex gap-2">
                <Icon icon="ic:outline-star" color="#e97000" />
                <Icon icon="ic:outline-star" color="#e97000" />
                <Icon icon="ic:outline-star" color="#e97000" />
                <Icon icon="ic:outline-star" color="#e97000" />
                <Icon icon="ic:outline-star" color="#e97000" />
              </div>
              <p className="text-5xl font-medium">Rice</p>
              <p className="text-2xl font-medium">₦36.000</p>
              <button className="text-2xl font-medium bg-button-default rounded-xl px-4 py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Best;
