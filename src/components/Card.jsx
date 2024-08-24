import React from 'react'

const Card = () => {
  return (
    <div>
      <div className=" bg-black text-white w-72 h-96 rounded-lg p-4">
        <h1 className="text-3xl font-bold text-center">Special Set</h1>
        <p className="text-lg text-center">
          Energize with our nutritious healthy salad, bursting with fresh greens
          and vibrant superfoods.
        </p>
        <div className="flex justify-center mt-4">
          <img
            src="/path/to/your/image.jpg"
            alt="Special Set"
            className="w-48 h-48 object-cover rounded-full"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4   
 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card