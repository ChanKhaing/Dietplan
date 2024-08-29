import React from 'react'
import specialset from "../assets/image/specialset.png";
import freshjuice from '../assets/image/freshjuice.png';
import customset from '../assets/image/customset.png'
import { Container } from './Container';


const Productset = () => {
  return (
    <div className="mt-44">
      <Container>
        <section className=" flex justify-evenly ">
          <div className=" bg-green-100   flex justify-between  rounded-xl border border-slate-500  w-[450px]   h-[200px]  text-center ">
            <div className=" ps-2">
              <h1 className="text-3xl pt-6  leading-tight z-10 font-mono font-semibold text-black">
                Special set
              </h1>
              <p className=" ps-5 z-10">
                A healthy balanced diet plan <br /> to individual health goals.
              </p>
            </div>
            <img
              src={specialset}
              alt="Healthy Food and Salad"
              className=" w-[200px] z-5   bg-cover   "
            />
          </div>

          <div className=" bg-red-100   flex justify-between  rounded-xl border border-slate-500  w-[450px]   h-[200px]  text-center ">
            <div className=" ps-2">
              <h1 className="text-3xl pt-6  leading-tight z-10 font-mono font-semibold text-black">
                Special set
              </h1>
              <p className=" ps-5 z-10">
                A healthy balanced diet plan <br /> to individual health goals.
              </p>
            </div>
            <img
              src={freshjuice}
              alt="Healthy Food and Salad"
              className=" w-[200px] z-5   bg-cover   "
            />
          </div>

          <div className=" bg-yellow-100  flex justify-between  rounded-xl border border-slate-500  w-[450px]   h-[200px]  text-center ">
            <div className=" ps-2">
              <h1 className="text-3xl pt-6  leading-tight z-10 font-mono font-semibold text-black">
                Special set
              </h1>
              <p className=" ps-5 z-10">
                A healthy balanced diet plan <br /> to individual health goals.
              </p>
            </div>
            <img
              src={customset}
              alt="Healthy Food and Salad"
              className=" w-[200px] z-5   bg-cover   "
            />
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Productset