import React from "react";
import { Icon } from "@iconify/react";

function ProfileInfo() {
  return (
    <div>
      <div className="mt-64">
        <div className="flex flex-col pl-12">
          <div className="flex">
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
            <Icon
              className="w-[1.875rem] h-[1.875rem]"
              icon="ic:outline-star"
              color="#C5C0C0"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-4xl font-semibold">User Information</h1>
              <p className="text-base">
                I'm Ajayi Sunday, I study crop science, let your information be
                brief and meaningful
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Icon className="w-8 h-12" icon="codicon:location" />
              <div>
                <p className="text-2xl font-medium opacity-70">From </p>
                <p className="text-2xl font-medium opacity-70">
                  Oye, Ekiti- State
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Icon className="w-8 h-12" icon="iconamoon:profile-light" />
              <div>
                <p className="text-2xl font-medium opacity-70">Member since </p>
                <p className="text-2xl font-medium opacity-70">Sept 2021</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div></div>
              <div></div>
              <div>
                <p className="text-2xl font-medium opacity-70">Category</p>
                <p className="text-2xl font-medium opacity-70"> Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
