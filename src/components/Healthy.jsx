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
            <h1 className="text-3xl  leading-tight font-mono font-semibold text-black">
             Why Choose us
            </h1>
            <h1 className="text-6xl leading-tight font-mono font-semibold text-black">
              Refreshing
            </h1>
            <h1 className="text-6xl mb-4 font-mono font-semibold text-black leading-normal">
              Fruit Juice
            </h1>

            <p className="text-lg  text-black">
              Start your day with a burst of freshness,
            </p>
            <p className="text-lg  text-black">
              indulge in our invigorating range of fresh
            </p>
            <p className="text-lg  text-black">
              juices crafted from the finest fruits
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Healthy