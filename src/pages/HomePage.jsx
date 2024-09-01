import React from "react";
import Healthy from "../components/Healthy";
import Sign from "../components/Sign";
import Homeproduct from "../components/Homeproduct";
import Coversection from "../components/Coversection";

const HomePage = () => {
  return (
    <div>
      <Coversection />
     <Homeproduct />
      <Healthy />
      <Sign />
      
    </div>
  );
};

export default HomePage;
