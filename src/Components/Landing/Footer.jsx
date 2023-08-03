import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div>
      <footer className="flex flex-col justify-center items-center gap-8">
        <h1>Follow Us On</h1>
        <div className="flex gap-10 justify-center items-center">
          <Icon icon="logos:facebook" />
          <Icon icon="skill-icons:twitter" />
          <Icon icon="skill-icons:instagram" />
          <Icon icon="skill-icons:linkedin" />
        </div>
        <div className="flex justify-between items-start gap-[120px]">
          <div className="flex  flex-col gap-4">
            <h2>Help</h2>
            <ul>
              <li>Contact Us</li>
              <li>Report a Seller</li>
              <li>Report a Buyer</li>
              <li>Shipping</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2>Categories</h2>
            <ul>
              <li>Seller</li>
              <li>Buyer</li>
              <li>Consultant</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2>About Us</h2>
            <ul>
              <li>About</li>
              <li>Terms and condiction </li>
              <li>Privacy policy</li>
              <li>Billing policy</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2>Hot Links </h2>
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
