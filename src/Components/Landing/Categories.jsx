import React from "react";
import Selling from "../../assets/selling.png";
import sellers from "../../assets/sellers.png";
import consultant from "../../assets/consultant.png";
import ict from "../../assets/ict.png";
import { Icon } from "@iconify/react";

function Categories() {
  return (
    <div className="bg-default-bg">
      <section className="flex flex-col gap-8 items-center justify-center py-14 ">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h2 className="text-5xl font-extrabold">Categories</h2>
          <p className="text-base font-normal">
            Find where you fit in for all our serviced, as we walk you arround
            our programs
          </p>
        </div>
        <div className="flex gap-4 items-center justify-center flex-wrap">
          <div className="w-[18.75rem] h-[14.4375] rounded-xl items-center justify-center bg-white flex flex-col gap-4 pb-8">
            <img
              className="w-full rounded-xl rounded-bl-[0] rounded-br-[0]"
              src={Selling}
              alt="selling"
            />
            <div className="flex gap-2">
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
            </div>

            <h2 className="font-bold text-3xl">Buying</h2>
            <p className="font-bold">We bring seller to buyers at all time</p>
          </div>
          <div className="w-[18.75rem] h-[14.4375] rounded-xl items-center justify-center bg-white flex flex-col gap-4 pb-8">
            <img
              className="w-full rounded-xl rounded-bl-[0] rounded-br-[0]"
              src={sellers}
              alt="selling"
            />
            <div className="flex gap-2">
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
            </div>
            <h2 className="font-bold text-3xl">Sellers</h2>
            <p className="font-bold">We bring seller to buyers at all time</p>
          </div>
          <div className="w-[18.75rem] h-[14.4375] rounded-xl items-center justify-center bg-white flex flex-col gap-4 pb-8">
            <img
              className="w-full rounded-xl rounded-bl-[0] rounded-br-[0] "
              src={consultant}
              alt="selling"
            />
            <div className="flex gap-2">
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
            </div>
            <h2 className="font-bold text-3xl">Consultant</h2>
            <p className="font-bold">We bring seller to buyers at all time</p>
          </div>
          <div className="w-[18.75rem] h-[14.4375] rounded-xl items-center justify-center bg-white flex flex-col gap-4 pb-8">
            <img
              className="w-full rounded-xl rounded-bl-[0] rounded-br-[0]"
              src={ict}
              alt="selling"
            />
            <div className="flex gap-2">
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
              <Icon
                className="w-[1.875rem] h-[1.875rem]"
                icon="ic:outline-star"
                color="#e97000"
              />
            </div>
            <h2 className="font-bold text-3xl">I.C.T</h2>
            <p className="font-bold">We bring seller to buyers at all time</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
