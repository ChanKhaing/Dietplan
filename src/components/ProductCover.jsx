import React from 'react'
import { Container } from './Container'
import pineapple from '../assets/image/pineapple.jpg'


const ProductCover = () => {
  return (
    <div>
      <Container>
        <div className="relative w-full h-full">
          <img
            src={pineapple}
            alt="Healthy Food and Salad"
            className="w-full h-full bg-cover object-cover "
          />

          <div className="absolute top-0 left-0 text-center w-full h-full  bg-opacity-70   text-white p-4">
            <section className="mt-44">
              <h1 className="text-6xl leading-tight font-mono font-semibold text-black">
                Welcome to Diet plan
              </h1>

              <p className="text-lg text-black font-bold">Home / Product</p>
            </section>
          </div>
        </div>

    
      </Container>
    </div>
  );
}

export default ProductCover