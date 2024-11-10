import React from "react";
import DevicesPrice from "../../components/pages/home/devices-price/DevicesPrice";
import Partners from "../../components/pages/home/partners/Partners";
import Features from "../../components/pages/home/Features/Features";
import Products from "../../components/pages/home/products/Products";

const Home = () => {
  return (
    <div>
      <DevicesPrice />
      <Partners />
      <Products />
      <Features />
    </div>
  );
};

export default Home;
