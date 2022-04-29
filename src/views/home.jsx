import React from "react";
import About from "../components/About";
import BuyTokens from "../components/BuyTokens";
import CollectionSlider from "../components/CollectionSlider";
import Community from "../components/Community";
import Faq from "../components/Faq";
import GamePlay from "../components/GamePlay";
import Hero from "../components/Hero";
import HowWorks from "../components/HowWorks";
import NftContract from "../components/NftContract";
import Partners from "../components/Partners";
import Roadmap from "../components/Roadmap";
import WhatCanYouDo from "../components/WhatCanYouDo";
import Whitelist from "../components/Whitelist";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhatCanYouDo />
      <HowWorks />
      <BuyTokens />
      <Whitelist />
      <GamePlay />
      <CollectionSlider />
      <NftContract />
      <Roadmap />
      <Community />
      <Partners />
      <Faq />
    </div>
  );
};

export default Home;
