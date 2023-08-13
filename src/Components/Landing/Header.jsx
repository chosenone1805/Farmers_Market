import React from "react";
import { useState } from "react";
import Menu from "../../assets/Menu.svg";
import Logo from "../../assets/Logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import HelpDrop from "../Dropdowns/HelpDrop";
import AccountDrop from "../Dropdowns/AccountDrop";
import MenuDrop from "../Dropdowns/MenuDrop";

function Header() {
  const [isHelpDropdownOpen, setHelpDropdownOpen] = useState(false);
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [isMenuDropOpen, setMenuDropOpen] = useState(false);
  return (
    <div className="bg-default-bg">
      <nav className="bg-white flex pl-8 pr-28 py-0 gap-5 h-20 items-center justify-center ">
        <div className="flex flex-row items-center justify-around gap-12 ">
          <img
            src={Menu}
            alt="Menubar"
            className="cursor-pointer"
            onClick={() => setMenuDropOpen(!isMenuDropOpen)}
          />
          {isMenuDropOpen && <MenuDrop visible={true} />}

          <img src={Logo} alt="Logo" />
          <input
            className="border-4 w-96 py-2 px-4 outline-none border-input-green-border rounded-xl "
            placeholder="search"
            type="text"
          />
          <div className="flex flex-row items-center justify-center gap-14">
            <ul className="flex flex-row items-center justify-center gap-8">
              <li
                className="flex gap-2 justify-center items-center relative"
                onMouseEnter={() => setAccountDropdownOpen(true)}
                onMouseLeave={() => setAccountDropdownOpen(false)}
              >
                <Icon icon="clarity:avatar-line" />
                Account
                <Icon icon="bxs:down-arrow" />
                {isAccountDropdownOpen && <AccountDrop />}
              </li>
              <li
                className="flex gap-2 justify-center items-center relative"
                onMouseEnter={() => setHelpDropdownOpen(true)}
                onMouseLeave={() => setHelpDropdownOpen(false)}
              >
                Help
                <Icon icon="bxs:down-arrow" />
                {isHelpDropdownOpen && <HelpDrop />}
              </li>
              <li className="flex gap-2 justify-center items-center">
                Cart
                <Icon icon="bi:cart4" />
              </li>
            </ul>
            <div className="flex flex-row items-center justify-center gap-4">
              <Link to="/login" className="text-base font-semibold">
                SIGN IN
              </Link>
              <Link
                to="/signup"
                className="text-base font-semibold bg-button-default py-2 px-4 rounded-md border border-solid border-yellow-fine text-white"
              >
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
