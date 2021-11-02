import React from "react";
import About from "../About/About";
import Faq from "../Faq/Faq";
import HeroPart from "../HeroPart/HeroPart";
import TourPacks from "../TourPacks/TourPacks";

const Home = () => {
  return (
    <div>
      <HeroPart></HeroPart>
      <About></About>
      <TourPacks></TourPacks>
      <Faq></Faq>
    </div>
  );
};

export default Home;
