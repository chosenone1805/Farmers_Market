import React from "react";

function HelpDrop({ position }) {
  return (
    <div
      className={`absolute ${
        position === "bottom" ? "bottom-full" : "top-full"
      } left-0 bg-white p-4 border border-gray-300 rounded-md shadow-md w-32`}
    >
      <ul className="flex flex-col gap-2">
        <li>Help Center</li>
        <li>Place & Track Order</li>
        <li>Return & Refungs</li>
        <li>Payment & Account</li>
      </ul>
    </div>
  );
}

export default HelpDrop;
