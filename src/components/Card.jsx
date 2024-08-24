import React from 'react'
import Product1 from '../assets/image/product1.jpg'

const Card = () => {
  return (
    <div>
      <div className=" bg-black text-white w-72 rounded-lg p-4 mt-44">
        <div className="flex justify-center relative h-48 p-4">
          <img
            src={Product1}
            alt="Special Set"
            className=" w-44 h-48 object-cover rounded-full absolute -top-1/2 left-0"
          />
        </div>
        <h1 className="text-2xl font-bold  ">Special Set</h1>
        <p className="text-lg ">
          Energize with our nutritious healthy salad, bursting with fresh greens
          and vibrant superfoods.
        </p>
        <button
          className=" text-black bg-white w-full font-bold py-2 px-4 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card