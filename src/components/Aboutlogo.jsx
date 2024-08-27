import React from 'react'
import { Container } from './Container'
import fruitlogo from '../assets/image/fruitlogo.jpg'


const Aboutlogo = () => {
  return (
    <div className=' bg-slate-500'>
      <Container>
        <section className="mt-44 flex  gap-5  bg-red-400 mx-20 opacity-50">
          <img src={fruitlogo} alt="" className=" h-[50px] " />
          <img src={fruitlogo} alt="" className=" h-[50px] " />
          <img src={fruitlogo} alt="" className=" h-[50px] " />
          <img src={fruitlogo} alt="" className=" h-[50px] " />
        </section>
      </Container>
    </div>
  );
}

export default Aboutlogo