import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex justify-center items-center">
      <section className="bg-default-green w-[37.4rem] h-[41rem] ">
        <div className="ml-[0.06rem] w-[35.5rem] h-[39rem] bg-white rounded-tl-[6.875rem] rounded-br-[6.875rem] flex flex-col gap-16 ">
          <div className="flex flex-col justify-center items-center gap-2">
            <img className="w-28 h-20" src={Logo} alt="Logo" />

            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-4xl text-default-text">Sign Up</h2>
              <p className="text-xs">Create an account with us today</p>
            </div>
          </div>
          <form className="flex flex-col gap-4 max-w-lg px-12">
            <div className="flex gap-6">
              <input
                type="text"
                className="border border-default-input rounded-lg py-2 px-2 bg-input-background"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                className="border border-default-input rounded-lg py-2 px-2 bg-input-background"
                placeholder="Last Name"
                required
              />
            </div>

            <input
              type="email"
              className="border border-default-input rounded-lg py-2 px-2 bg-input-background"
              placeholder="Email Address"
              required
            />
            <input
              type="password"
              className="border border-default-input rounded-lg py-2 px-2 bg-input-background"
              placeholder="Password"
              required
            />
            <input
              type="password"
              className="border border-default-input rounded-lg py-2 px-2 bg-input-background"
              placeholder="Confirm Password"
              required
            />

            <button
              className="bg-default-green text-white py-2 rounded-md border border-yellow-fine "
              type="submit"
            >
              Sign Up
            </button>

            <p className="text-sm">
              By Signing up it means you agee with all policy
            </p>

            <p className="mt-4 text-end">
              Already have an account ?
              <span className="text-red-600 font-semibold">
                <Link to="/login"> SignIn</Link>
              </span>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Signup;
