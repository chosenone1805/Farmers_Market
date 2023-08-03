import React from "react";
import Header from "../Components/Landing/Header";
import Categories from "../Components/Landing/Categories";
import Connect from "../Components/Landing/Connect";
import Market from "../Components/Landing/Market";
import Best from "../Components/Landing/Best";
import Product from "../Components/Landing/Product";

function Homepage() {
  return (
    <div>
      <Header />
      <Connect />
      <Categories />
      <Market />
      <Best />
      <Product />
    </div>
  );
}

export default Homepage;
