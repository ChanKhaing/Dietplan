import React from "react";
import Dietimage from "../assets/image/Dietimage.jpg";
// import { Container } from "./Container";
import MainContainer from "./MainContainer";

const Coversection = () => {
  return (
    <div className="relative w-full h-full">
      <img
        src={Dietimage}
        alt="Healthy Food and Salad"
        className="w-full h-full bg-cover object-contain "
      />

      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-70   text-white p-4">
        <MainContainer>
          <section className="mt-44">
            <h1 className="text-6xl leading-normal  font-semibold text-black">
              Healthy Food <br />
              And Salad
            </h1>

            <p className="text-xl text-slate-500">
              We provide essential nutrients, vitamins,
              <br />
              and minerals that nourish the body and <br /> support overall
              well-being.
            </p>

            <div class="flex justify-between text-black w-2/6 mt-10">
                <span>
                <p className=" text-4xl">100%</p>
                <p className=" font-bold text-4xl text-bold"> Organic </p>
              </span>

              <span>
                <p className=" text-4xl">0%</p>
                <p className=" font-bold text-4xl text-bold">Fat</p>
              </span>

              <span>
                <p className=" text-4xl">+90%</p>
                <p className=" font-bold text-4xl text-bold">Protein</p>
              </span>
            </div>
          </section>
        </MainContainer>
      </div>
    </div>
  );
};

export default Coversection;
