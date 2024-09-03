import React from 'react'
import { Container } from './Container'
import Ellipse from '../assets/image/Ellipse5.png'
import Ellipse6 from '../assets/image/Ellipse6.png'
import Ellipse7 from '../assets/image/Ellipse7.png'
import AboutIcon from './AboutIcon';

const AboutTeam = () => {
  return (
    <div className="mt-44">
      <Container>
        <header>
          <h4 className=" text-center text-xl">__Our team__</h4>
          <h1 className="text-6xl my-4 font-mono font-semibold text-black text-center">
            Meet with us
          </h1>
          <h3 className=" text-center text-xl">
            {" "}
            We offers a wide range of high-quality products
          </h3>
        </header>
        <section className="grid grid-cols-3 gap-5  ">
          <div className=" border w-[400px]  rounded-2xl h-[500px] mt-20 bg-gray-200  ">
            <img src={Ellipse} alt="" className=" mx-auto mt-10 pt-8" />
            <h1 className="text-3xl font-mono font-semibold text-center text-black">
              David James
            </h1>
            <h4 className=" text-center text-base my-2">Nutrition chef</h4>
             <AboutIcon/>
          </div>

          <div className=" border w-[400px]  rounded-2xl h-[500px] mt-20 bg-gray-200  ">
            <img src={Ellipse6} alt="" className=" mx-auto mt-10 pt-8" />
            <h1 className="text-3xl font-mono font-semibold text-center text-black">
              Ella Wendy
            </h1>
            <h4 className=" text-center text-base my-2">Nutrition chef</h4>
            <AboutIcon/>
          </div>

          <div className=" border w-[400px]  rounded-2xl h-[500px] mt-20 bg-gray-200  ">
            <img src={Ellipse7} alt="" className=" mx-auto mt-10 pt-8" />
            <h1 className="text-3xl font-mono font-semibold text-center text-black">
              Robert Allen
            </h1>
            <h4 className=" text-center text-base my-2 ">Nutrition chef</h4>
            <AboutIcon/>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default AboutTeam