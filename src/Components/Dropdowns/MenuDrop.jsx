import React from "react";

function MenuDrop({ visible }) {
  if (!visible) {
    return null;
  }

  return (
    <div className="absolute bottom-[-110%] left-0 bg-white p-4 border border-gray-300 rounded-md shadow-md">
      <ul className="flex flex-col gap-2">
        <li>profile</li>
        <li>profile</li>
        <li>profile</li>
      </ul>
    </div>
  );
}

export default MenuDrop;
