import React from 'react'
import { Container } from './Container'

const Dietplan = () => {
  return (
    <div className="mt-44 w-full h-[300px] bg-black flex items-center  opacity-90 text-gray-300 ">
      <Container>
        <section >
          <h1 className="text-xl mb-4 font-mono font-semibold leading-normal">
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
  );
}

export default Dietplan