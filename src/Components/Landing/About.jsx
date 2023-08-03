import React from "react";
import Ajayi from "../../assets/Ajayi.png";
import Dami from "../../assets/Dami.png";

function About() {
  return (
    <div>
      <section className="flex flex-col bg-default-bg justify-center items-center p-10 gap-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-5xl font-bold">What people say about us</h2>
          <p className="text-base font-bold w-[34rem]">
            We are deligent in offering all our services,, These services
            involve the planning,organizing, directing and handlingof
            agricultral produce in sucha way as to satisfy farmer,
            intermediaries and consumers.
          </p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="w-[33.75rem] h-[34.08rem] gap-4 flex flex-col justify-center items-center bg-default-orange rounded-xl">
            <div className="flex flex-col gap-4 w-72">
              <h2 className="text-xl font-medium">
                I get what i paid for within the stipulated time
              </h2>
              <p className="text-base font-normal">
                Your service is well ok for me, i love your delivery as fast as
                it was
              </p>
            </div>
            <img src={Ajayi} alt="Ajayi Dami" />
            <p className="text-4xl font-bold text-white">Ajayi Dami</p>
          </div>
          <div className="w-[33.75rem] h-[34.08rem] gap-4 flex flex-col justify-center items-center bg-default-orange rounded-xl">
            <div className="flex flex-col gap-4 w-72">
              <h2 className="text-xl font-medium">
                I get what i paid for within the stipulated time
              </h2>
              <p className="text-base font-normal">
                Your service is well ok for me, i love your delivery as fast as
                it was
              </p>
            </div>
            <img src={Dami} alt="Ajayi Dami" />
            <p className="text-4xl font-bold text-white">Ajayi Dami</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
