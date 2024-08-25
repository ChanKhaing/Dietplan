import React from 'react'
import HeroSection from '../components/HeroSection';
import ProdutService from '../components/ProdutService';
import Healthy from '../components/Healthy';
import Sign from '../components/Sign';
import Dietplan from '../components/Dietplan';

const HomePage = () => {
  return (
      <>
      <HeroSection />
      <ProdutService />
      <Healthy />
      <Sign/>
      <Dietplan />
    </>
  );
}

export default HomePage