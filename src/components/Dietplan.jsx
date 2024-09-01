import React from 'react'
import { Container } from './Container'

const Dietplan = () => {
  return (
    <div className="mt-44 w-full h-[300px] bg-black flex items-center  opacity-90 text-gray-300 ">
      <Container>
        <section classsName="flex justify-between p-6">
          <div className=" grid grid-cols-2">
            <div className="red ">
              <div>
                <h1 className="text-xl mb-4 font-mono font-bold leading-normal">
                  Diet Plan
                </h1>

                <p className="text-lg text-slate-500">
                  Our comprehensive diet plan is designed to optimize <br />
                  your nutrition and support your health goals, ensuring a{" "}
                  <br />
                  balanced and sustainable approach to eating.overall
                  well-being.
                </p>
              </div>
            </div>
            <div className="">
              <div className='flex justify-evenly text-gray-500'>
                <ul>
                  <li className=' text-white'>Products</li>
                  <li>How it works</li>
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Test monials</li>
                </ul>

                <ul>
                  <li className=' text-white'>About</li>
                  <li>How it works</li>
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Test monials</li>
                </ul>

                <ul>
                  <li className=' text-white'>Products</li>
                  <li>How it works</li>
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Test monials</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Dietplan