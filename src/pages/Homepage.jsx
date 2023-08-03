import React from "react";
import Header from "../Components/Landing/Header";
import Categories from "../Components/Landing/Categories";
import Connect from "../Components/Landing/Connect";
import Market from "../Components/Landing/Market";
import Best from "../Components/Landing/Best";
import Product from "../Components/Landing/Product";
import Deal from "../Components/Landing/Deal";
import About from "../Components/Landing/About";
import Footer from "../Components/Landing/Footer";

function Homepage() {
  return (
    <div>
      <Header />
      <Connect />
      <Categories />
      <Market />
      <Best />
      <Product />
      <Deal />
      <About />
      <Footer />
    </div>
  );
}

export default Homepage;
