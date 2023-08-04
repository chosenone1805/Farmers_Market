import React from "react";

function Subscribe() {
  return (
    <div>
      <section className="bg-default-bg flex flex-col gap-8 justify-center items-start center py-8 px-32">
        <div>
          <h2 className="text-5xl font-bold">NEW TO ?</h2>
          <p className="text-4xl font-bold">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <input
            className="w-[29rem] px-2 py-4 rounded-lg border-2 border-default-text outline-none"
            placeholder="Email Address"
            type="email"
          />
          <button className="py-2 rounded-lg px-[3.125rem] w-64 text-center text-white text-4xl font-medium bg-default-green ">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}

export default Subscribe;
