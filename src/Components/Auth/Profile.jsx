import React from "react";
import profileImg from "../../assets/profile.png";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

function Profile() {
  return (
    <div>
      <div className="bg-profile-background h-[15.8rem]  ">
        <div className="mx-auto flex flex-col justify-center items-center">
          <img
            src={profileImg}
            className="w-[19rem] h-[19rem] mt-16 rounded-full "
            alt="Profile Image"
          />
          <div className="text-center">
            <h2 className="text-5xl font-semibold">Ajayi Sunday</h2>
            <h2 className="text-5xl font-semibold">Consultant</h2>
          </div>
        </div>
      </div>
      <ProfileInfo />
    </div>
  );
}

export default Profile;
