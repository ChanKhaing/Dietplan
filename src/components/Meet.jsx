import React from 'react'
import { Container } from './Container';
import Choose from '../assets/image/choose.jpg'

const Meet = () => {
  return (
    <div className=" w-full h-full mt-44">
      <Container>
        <div className=" flex relative ">
          <img
            src={Choose}
            alt="Healthy Food and Salad"
            className="w-1/3 h-1/3 bg-cover object-cover "
          />
          <section className=' ms-16 mt-9'>
            <p>Choose us Today</p>
            <h1 className="text-6xl  font-mono font-semibold text-black leading-normal">
              Chan Khine
            </h1>
            <h1 className="text-6xl font-mono font-semibold text-black leading-normal ">
              {" "}
              Nutrient Diet
            </h1>
            <p className="text-lg text-slate-500">
              We provide essential nutrients, vitamins,
            </p>
            <p className="text-lg text-slate-500">
              and minerals that nourish the body and support
            </p>
            <p className=' inline-block leading-normal m-2'>Natural Food</p>
            <div className=' leading-normal m-2'>Organic Juice</div>
            <button class="  inline-block font-serif  items-center m-2 text-white bg-slate-800 border-0  px-8 focus:outline-none  rounded text-lg">
              See more
            </button>
          </section>
        </div>
      </Container>
    </div>
  );
}

export default Meet