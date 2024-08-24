import React from "react";
import Dietimage from "../assets/image/Dietimage.jpg";
import { Container } from "./Container";

const Coversection = () => {
  return (
    <div className="relative w-full h-full">
      <img
        src={Dietimage}
        alt="Healthy Food and Salad"
        className="w-full h-full bg-cover object-cover "
      />

      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-70   text-white p-4">
        <Container>
          <section className="mt-44">
            <h1 className="text-6xl leading-tight font-mono font-semibold text-black">
              Healthy Food
            </h1>
            <h1 className="text-6xl mb-4 font-mono font-semibold text-black leading-normal">
              And Salad
            </h1>

            
              <p className="text-lg  text-black">
                We provide essential nutrients, vitamins,
              </p>
              <p className="text-lg  text-black">
                and minerals that nourish the body and support
              </p>
              <p className="text-lg  text-black">overall well-being.</p>
            

            <div class="grid gap-1 grid-cols-3 text-black w-2/6">
              <span>
                <p>100%</p>
                <p>Organic</p>
              </span>

              <span>
                <p>0%</p>
                <p>Fat</p>
              </span>
              <span>
                <p>+90%</p>
                <p>Protein</p>
              </span>
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default Coversection;
