import React from 'react'
import Navbar from './components/Navbar'
import Coversection from './components/Coversection'
import HeroSection from './components/HeroSection'
// import ProdutService from './components/ProdutService'
import Footer from './components/Footer'
import Healthy from './components/Healthy'
import Sign from './components/Sign'
import Dietplan from './components/Dietplan'
import MainContainer from './components/MainContainer';

const App = () => {
  return (
    <div>
   
        <HeroSection />
        <ProdutService />
        <Healthy />
        <Sign />
        <Dietplan />
        <Footer />
  
    </div>
  );
}

export default App