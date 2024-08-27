import React from 'react'
import { Container } from './Container';
import contactimage from '../assets/image/contactimage.jpg';

const ContactCover = () => {
  return (
    <div className="relative w-full h-full ">
      <img
        src={contactimage}
        alt="Healthy Food and Salad"
        className="w-full h-full bg-cover object-cover"
      />

      <div className="absolute top-0 left-0  text-center  w-full h-full bg-opacity-70 text-white p-4 flex justify-center items-center">
        <Container>
          <section>
            <h1 className="text-6xl leading-tight font-mono font-semibold text-black">
              Healthy Food
            </h1>
            <h1 className="text-6xl mb-4 font-mono font-semibold text-black leading-normal">
              And Salad
            </h1>

            <p className="text-lg text-slate-500">
              We provide essential nutrients, vitamins,
            </p>
            <p className="text-lg text-slate-500">
              and minerals that nourish the body and support
            </p>
            <p className="text-lg text-slate-500">overall well-being.</p>
          </section>
        </Container>
      </div>
    </div>
  );
}

export default ContactCover