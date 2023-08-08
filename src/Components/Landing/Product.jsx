import React from "react";
import { Icon } from "@iconify/react";
import orange from "../../assets/orange.png";
import banana from "../../assets/banana.png";
import beans from "../../assets/beans.png";
import cocoyam from "../../assets/cocoyam.png";
import plantain from "../../assets/plantain.png";
import potatoes from "../../assets/potatoes.png";
import wheat from "../../assets/wheat.png";
import yam from "../../assets/yam.png";
import rice from "../../assets/rice.png";

const food = [
  {
    name: "Orange",
    imageUrl: orange,
    price: "₦200/6",
  },
  {
    name: "Plantain",
    imageUrl: plantain,
    price: "₦2,299/1",
  },
  {
    name: "Banana",
    imageUrl: banana,
    price: "₦2,299/1",
  },
  {
    name: "Wheat",
    imageUrl: wheat,
    price: "₦28.000/B",
  },
  {
    name: "Rice",
    imageUrl: rice,
    price: "₦36.000",
  },
  {
    name: "Beans",
    imageUrl: beans,
    price: "₦185.000",
  },
  {
    name: "Yam",
    imageUrl: yam,
    price: "₦185.000",
  },
  {
    name: "Cocoyam",
    imageUrl: cocoyam,
    price: "₦4.000",
  },
  {
    name: "Potatoes",
    imageUrl: potatoes,
    price: "₦185.000",
  },
];

function Product() {
  return (
    <div className="bg-default-bg">
      <section className="flex flex-col justify-center gap-8 items-center">
        <div className="flex flex-col justify-center gap-4 items-center">
          <h2 className="text-5xl font-bold">Our Product</h2>
          <ul className="text-xl font-semibold flex justify-between items-center gap-8">
            <li>Hot On Sale</li>
            <li>Trending Now</li>
            <li>New Arrival</li>
          </ul>
        </div>
        <div>
          <ul
            role="list"
            className="flex flex-wrap items-center justify-center gap-8 py-8"
          >
            {food.map((crops) => (
              <li className="list-none" key={crops.name}>
                <div className="flex flex-col justify-center items-center gap-4">
                  <img src={crops.imageUrl} alt={crops.name} />
                  <div>
                    <div className="flex gap-4">
                      <Icon
                        className="w-[1.875rem] h-[1.875rem]"
                        icon="ic:outline-star"
                        color="#e97000"
                      />
                      <Icon
                        className="w-[1.875rem] h-[1.875rem]"
                        icon="ic:outline-star"
                        color="#e97000"
                      />
                      <Icon
                        className="w-[1.875rem] h-[1.875rem]"
                        icon="ic:outline-star"
                        color="#e97000"
                      />
                      <Icon
                        className="w-[1.875rem] h-[1.875rem]"
                        icon="ic:outline-star"
                        color="#e97000"
                      />
                      <Icon
                        className="w-[1.875rem] h-[1.875rem]"
                        icon="ic:outline-star"
                        color="#e97000"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="text-4xl font-medium">{crops.name}</h3>
                      <p className="text-2xl font-medium">{crops.price}</p>
                    </div>
                  </div>
                  <button className="bg-default-green text-2xl font-medium py-[0.625rem] px-[0.9375rem] rounded-lg text-white">
                    Buy Now
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Product;

//
// import { Icon } from '@iconify/react';
