import React from 'react'
import customeroneset from '../assets/image/customeroneset.png'
import johana from '../assets/image/johana.png'
import { Container } from './Container';

const Creationproduct = () => {
  return (
    <div className=" mt-44  w-full   ">
      <Container>
        <section className=" grid grid-cols-2 bg-yellow-100 bg-opacity-90 h-[450px] ">
          <div className=" image  ">
            <img
              src={customeroneset}
              alt="Healthy Food and Salad"
              className="w-full h-[450px] bg-cover  object-contain "
            />
          </div>
          <div className=" card">
            <h4 className="text-2xl mt-20 mb-4 font-mono font-bold ">
              Create Special_____
            </h4>
            <h1 className="text-5xl leading-tight font-mono font-semibold text-black">
              Make you own <br /> Creation Special set
            </h1>
            <p className="text-lg text-slate-500  mt-3">
              Energize with our nutritious healthy salad,
              <br />
              bursting with fresh greens and vibrant superfoods.
            </p>
            <div className=' flex justify-between w-full'>
              <button class="text-white bg-slate-950 border-0 py-6 flex items-center text-center h-10 px-6 focus:outline-none hover:bg-slate-600  rounded-2xl text-lg mt-5">
                Create Set
              </button>
              <img src={johana} alt="" className=" object-contain   h-[150px]" />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Creationproduct