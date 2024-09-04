import React from 'react'
// import Aboutimage from '../assets/image/Aboutus'
// import Aboutus from '../pages/Aboutus';
import { Container } from './Container';
import Aboutimage from '../assets/image/Aboutimage.jpg';
const AboutCover = () => {
  return (
    <div className="relative w-full h-full">
      <img
        src={Aboutimage}
        alt="Healthy Food and Salad"
        className="w-full h-full bg-cover object-cover "
      />

      <div className="absolute top-0 left-0 text-center w-full h-full  bg-opacity-70   text-white p-4">
        <Container>
          <section className="mt-44">
            <h1 className="text-6xl leading-tight  font-semibold text-black">
              About Us
            </h1>

            <p className="text-xl my-4 text-slate-700">Home / About Us</p>

          </section>
        </Container>
      </div>
    </div>
  );
}

export default AboutCover