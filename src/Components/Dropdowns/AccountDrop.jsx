import React from "react";
import { Link } from "react-router-dom";

function AccountDrop({ position }) {
  return (
    <div
      className={`absolute ${
        position === "bottom" ? "bottom-full" : "top-full"
      } left-0 bg-white p-4 border border-gray-300 rounded-md shadow-md w-32`}
    >
      <ul className="flex flex-col gap-2">
        <Link to="/profile">My Account</Link>
        <li>Order</li>
        <li>
          <Link
            to="/login"
            className="text-base font-semibold bg-button-default py-2 px-4 rounded-md border border-solid border-yellow-fine text-white"
          >
            SIGN IN
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AccountDrop;
