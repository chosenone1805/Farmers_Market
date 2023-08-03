import React from "react";
import plank from "../../assets/plank.png";

function Market() {
  return (
    <div className="bg-default-bg">
      <section className="py-14">
        <div className="w-[70rem] h-[38rem] py-8 bg-white border border-black rounded-bl-[17.5rem] ml-auto mr-auto">
          <div className="flex justify-center gap-8 items-center">
            <img
              src={plank}
              className="w-[30.375rem] h-[26.875rem] mt-[50px]"
              alt="pic"
            />
            <div className="flex flex-col gap-24 pt-20 justify-center items-center">
              <div className="flex flex-col gap-4">
                <h2 className="text-5xl font-bold w-[23rem]">
                  Best Agricultral Market Center
                </h2>
                <p className="w-96 text-base font-bold">
                  We are deligent in offering all our services,, These services
                  involve the planning,organizing, directing and handlingof
                  agricultral produce in sucha way as to satisfy farmer,
                  intermediaries and consumers.
                </p>
              </div>
              <div className="bg-black text-white py-4 px-4 flex gap-4 justify-around items-center">
                <div>
                  <p className="font-bold text-3xl">8900 + </p>
                  <p className="font-bold">Product sold</p>
                </div>
                <div>
                  <p className="font-bold text-3xl">1.5M + </p>
                  <p className="font-bold">Farmers</p>
                </div>
                <div>
                  <p className="font-bold text-3xl">2.8M +</p>
                  <p className="font-bold"> Buyers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Market;
