import React from "react";
import { Icon } from "@iconify/react";

function Product() {
  return (
    <div className="bg-default-bg">
      <section className="flex flex-col justify-center gap-8 items-center">
        <div className="flex flex-col justify-center gap-4 items-center">
          <h2 className="text-5xl font-bold">
            Our Product <Icon icon="ic:outline-star" color="#e97000" />
          </h2>
          <ul className="text-xl font-semibold flex justify-between items-center gap-8">
            <li>Hot On Sale</li>
            <li>Trending Now</li>
            <li>New Arrival</li>
          </ul>
        </div>
        <div>
          <ul></ul>
        </div>
      </section>
    </div>
  );
}

export default Product;

// <Icon icon="ic:outline-star" color="#e97000" />
// import { Icon } from '@iconify/react';