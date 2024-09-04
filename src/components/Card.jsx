import React from 'react'
import Product1 from '../assets/image/product1.jpg'
import Starview from './Starview';

const Card = () => {
  const numbers = 4;
                  const starts = [];

  return (
    <div className=''>
      <div className="ms-5 bg-black  text-white container w-[400px] h-[500px] rounded-2xl p-4 mt-44">
        <div className=" grid grid-cols-3  h-24 bg-transparent -translate-y-3 relative">
          <img
            src={Product1}
            alt="Special Set"
            className=" inline-block col-span-2 -translate-y-1/2  w-[200px]  object-contain rounded-full"
          />
          <button className="bg-slate-700 text-slate-100  h-10 font-bold mt-2  px-4 rounded-lg">
            Hot Items
          </button>
        </div>
        <div className=" mt-5">
          <h1 className="text-3xl font-bold z-10  ">Special Set</h1>
          <span className=" text-lg text-white inline-block my-5  ">
            {/* <div className=" flex gap-2 ">

      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 stroke-yellow-500 ${
            numbers <= 5 && "fill-yellow-500"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
          <span>
               25 reviews 
          </span>
  
            </div> */}
            <Starview numbers={numbers} />
          </span>
          <p className="text-lg  z-10 mb-5  ">
            Energize with our nutritious healthy salad, bursting with fresh
            greens and vibrant superfoods.
          </p>
          <div className="flex justify-between text-xl font-bold mb-2">
            <span className=" font-bold">$100</span>
            <span>+110 Available</span>
          </div>
          <button className=" my-6 text-black bg-white w-full font-bold py-4 px-4 rounded-xl">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card