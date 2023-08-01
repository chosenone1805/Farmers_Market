import React from "react";
import Menu from "../assets/Menu.svg";
import Logo from "../assets/Logo.png";

function Header() {
  return (
    <div className="bg-default-bg">
      <nav className="bg-white flex pl-8 pr-28 py-0 gap-5 h-20 items-center justify-center ">
        <div className="flex flex-row items-center justify-around gap-12 ">
          <img src={Menu} alt="" Menubar />
          <img src={Logo} alt="Logo" />
          <input
            className="border-4 w-96 py-2 px-4 outline-none border-input-green-border rounded-xl "
            placeholder="search"
            type="text"
          />
          <div className="flex flex-row items-center justify-center gap-14">
            <ul className="flex flex-row items-center justify-center gap-8">
              <li>Account</li>
              <li>Help</li>
              <li>Cart</li>
            </ul>
            <div className="flex flex-row items-center justify-center gap-4">
              <button>SIGN IN</button>
              <button>SIGN UP</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
