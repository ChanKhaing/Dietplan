import React from 'react'
import { Container } from './Container';
import Health from '../assets/image/Health.jpg';
const Healthy = () => {
  return (
    <div>
      <div className="relative w-full h-full mt-44">
        <img
          src={Health}
          alt="Healthy Food and Salad"
          className="w-full h-full bg-cover object-cover "
        />

        <div className="absolute top-0 right-24  h-full  bg-opacity-70   text-white p-4">
          <section className="mt-44">
            <div className=" flex">
              <h1 className="text-3xl  font-dancing  leading-tight  text-black">
                Why Choose us?{" "}
              </h1>
            </div>

            <h1 className="text-5xl font-mono leading-tight  font-semibold text-black">
              Refreshing <br/>
              Fruit Juice
            </h1>

            <p className="text-lg text-slate-500 ">
              Start your day with a burst of freshness,
              <br />
              indulge in our invigorating range of fresh
              <br />
              juices crafted from the finest fruits
            </p>
            <button class=" inline-flex font-serif  text-center  items-center text-white bg-black mx-auto border-2 border-slate-800  px-8 py-2 duration-1000 mt-6	 focus:outline-none rounded-xl text-lg">
              Show All
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Healthy