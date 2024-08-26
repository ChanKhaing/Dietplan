import React from "react";
import HeroSection from "../components/HeroSection";
import ProdutService from "../components/ProdutService";
import Healthy from "../components/Healthy";
import Sign from "../components/Sign";
import Dietplan from "../components/Dietplan";
import { Container } from "../components/Container";
import Coversection from "../components/Coversection";

const HomePage = () => {
  return (
    <>
      <Coversection />
      <ProdutService />
      <Healthy />
      <Sign />
      <Dietplan />
    </>
  );
};

export default HomePage;
