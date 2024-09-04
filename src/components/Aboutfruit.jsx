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

              <p className="text-lg  py-4  text-black">
                Elevate your diet with our carefully selected <br/>
                organic fruits. Packed with essential vitamins
                <br/> and antioxidants.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutfruit