import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center">
      <section className="bg-default-green w-[37.4rem] h-[41rem] ">
        <div className="ml-[0.06rem] w-[35.5rem] h-[39rem] bg-white rounded-tl-[6.875rem] rounded-br-[6.875rem] flex flex-col gap-16 ">
          <div className="flex flex-col justify-center items-center gap-2">
            <img className="w-28 h-20" src={Logo} alt="Logo" />

            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-4xl text-default-text">Sign In</h2>
              <p className="text-xs">Sign in to your account</p>
            </div>
          </div>
          <form className="flex flex-col gap-4 max-w-lg px-12">
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

            <a href="/" className="text-end text-red-600">
              Forgot Password?
            </a>
            <button
              className="bg-default-green text-white py-2 rounded-md border border-yellow-fine "
              type="submit"
            >
              Sign In
            </button>
            <p className="mt-4">
              If you don't have Account with us{" "}
              <span className="font-semibold">
                <Link to="/signup">Signup</Link>
              </span>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
