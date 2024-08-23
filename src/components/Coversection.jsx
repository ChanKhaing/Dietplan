import React from 'react'
import Dietimage from '../assets/image/Dietimage.jpg'

const Coversection = () => {
  return (
    <div className="relative w-full h-[700px]">
      <img
        src={Dietimage}
        alt="Healthy Food and Salad"
        className="w-full h-full object-cover"
      />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-4xl font-bold">
          Nourish Your Body with Fresh and Delicious Salads
        </h1>
        <p className="text-lg mb-4">
          Discover a world of healthy and flavorful salad recipes. From classic
          Caesar to vibrant Mediterranean, we have something for everyone.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Start Your Salad Adventure
        </button>
      </div> */}
    </div>
  );
}

export default Coversection