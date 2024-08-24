import React from 'react'
import Product1 from '../assets/image/product1.jpg'

const Card = () => {
  return (
    <div>
      <div className="ms-5 bg-black  text-white w-[400px] rounded-2xl p-4 mt-44">
        <div className="flex justify-center relative h-80 p-4">
          <img
            src={Product1}
            alt="Special Set"
            className=" w-52 h-48 object-cover rounded-full absolute -top-1/3 left-0 "
          />
        </div>
        <h1 className="text-3xl font-bold -translate-y-40 z-10  ">
          Special Set
              </h1>
        <span className=' text-lg text-white block -translate-y-36'>25 reviews</span>
        <p className="text-lg  -translate-y-28 z-10  ">
          Energize with our nutritious healthy salad, bursting with fresh greens
          and vibrant superfoods.
        </p>
        <button className=" text-black bg-white w-full font-bold py-2 px-4 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card