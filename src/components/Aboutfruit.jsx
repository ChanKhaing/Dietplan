import React from 'react'
import fruit from '../assets/image/fruit.jpg'

const Aboutfruit = () => {
  return (
    <div>
      <div>
        <div className="relative w-full h-full my-44">
          <img
            src={fruit}
            alt="Healthy Food and Salad"
            className="w-full h-full bg-cover object-cover "
          />

          <div className="absolute top-0 right-24  h-full  bg-opacity-70   text-white p-4">
            <section className="mt-44">
              <h4 className=" text-2xl font-dancing leading-tight  font-semibold text-black">
                Organic Meal Plan<span className=" font-mono">_____</span>
              </h4>
              <h1 className="text-6xl leading-tight  font-mono font-semibold text-black">
                Nutrient Rich <br />
                Fruit
              </h1>

              <p className="text-lg  my-4  text-black">
                Elevate your diet with our carefully selected <br />
                organic fruits. Packed with essential vitamins
                <br /> and antioxidants.
              </p>
              <button class="  inline-block font-serif rounded-2xl  items-center my-2 text-slate-100 bg-black border-0  px-10 py-2 focus:outline-none   text-lg">
                SHOW ALL
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutfruit