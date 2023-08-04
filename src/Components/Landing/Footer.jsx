import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div>
      <footer className="bg-black text-white pt-4 flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl font-bold">Follow Us On</h1>
        <div className="flex gap-10 justify-center items-center">
          <Icon className="w-[30px] h-[30px]" icon="logos:facebook" />
          <Icon className="w-[30px] h-[30px]" icon="skill-icons:twitter" />
          <Icon className="w-[30px] h-[30px]" icon="skill-icons:instagram" />
          <Icon className="w-[30px] h-[30px]" icon="skill-icons:linkedin" />
        </div>
        <div className="flex justify-between items-start gap-[120px]">
          <div className="flex justify-center items-center  flex-col gap-4">
            <h2 className="text-xl font-semibold">Help</h2>
            <ul>
              <li>Contact Us</li>
              <li>Report a Seller</li>
              <li>Report a Buyer</li>
              <li>Shipping</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Categories</h2>
            <ul>
              <li>Seller</li>
              <li>Buyer</li>
              <li>Consultant</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">About Us</h2>
            <ul>
              <li>About</li>
              <li>Terms and condiction </li>
              <li>Privacy policy</li>
              <li>Billing policy</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Hot Links </h2>
            <ul>
              <li>Company</li>
              <li> Brand</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
