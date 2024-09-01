import React from 'react'
import { Container } from "./Container";
import Card from "./Card";

const ProductSale = () => {
  return (
    <div>
      <template className="mt-44 flex justify-between">
        <Container>
          <section className=" flex justify-between">
            <div>
              <h1 className="text-6xl font-mono font-semibold text-black">
                |Daily Best Sale
              </h1>
              <p className=" ms-9 mt-2 text-gray-500">
                We offers a wide range of high-quality products and services
                tailored <br/> to meet the diverse needs and preferences
              </p>
            </div>
            <div>
              <button class="text-white bg-slate-950 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600  rounded-2xl text-lg">
                SEE MORE
              </button>
            </div>
          </section>
          <section className="grid grid-cols-3 gap-5 mt-5">
            <Card />
            <Card />
            <Card />
          </section>
        </Container>
      </template>
    </div>
  );
}

export default ProductSale