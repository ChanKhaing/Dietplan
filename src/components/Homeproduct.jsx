import React from 'react'
import { Container } from './Container.jsx';
import Card from './Card.jsx';

const Homeproduct = () => {
  return (
    <div>
      <Container>
    
        <section className="mt-44">
       
          <div className="flex justify-between mb-8">
          
            <h1 className="text-6xl font-mono font-semibold text-black">
            |Product Service 
            </h1>
          
            <button class="inline-flex font-serif  items-center text-white bg-slate-800 border-0  px-8 focus:outline-none  rounded text-lg">
            See more 
            </button>
          
          </div>
        
          <p className="text-lg  text-slate-500 ms-10">
          We offers a wide range of high-quality products and services
            tailored // to meet <br />
          the diverse needs and preferences of our customers 
          </p>
        
        </section>
      
        <section className="grid grid-cols-3  gap-10 row-span-3">
        <Card />
        <Card />
        <Card />
        
        </section>
      
      </Container>
    </div>
  );
}

export default Homeproduct