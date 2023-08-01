import React from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import Connect from "../Components/Connect";
import Market from "../Components/Market";
import Best from "../Components/Best";
import Product from "../Components/Product";

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
