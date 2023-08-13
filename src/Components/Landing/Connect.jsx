import React from "react";
import man from "../../assets/man.png";
import woman from "../../assets/woman.png";

function Connect() {
  return (
    <div>
      <div className="">
        <div className="bg-profile-background rounded-tl-[4.5rem] rounded-br-[4.5rem] flex justify-center items-center">
          <img src={man} alt="man" />
          <div className="justify-start items-start flex flex-col gap-4">
            <h2 className=" font-bold text-white text-5xl">
              Connect With over 10 Milion Farms In Nigeria
            </h2>
            <p className="text-base font-medium text-header-p">
              Find market for your farm products while still on farm
            </p>
            <button className="text-default-text text-3xl font-bold bg-white py-2 border border-yellow-fine rounded-md px-11">
              JOIN NOW
            </button>
          </div>
          <img src={woman} alt="woman" />
        </div>
      </div>
    </div>
  );
}

export default Connect;
