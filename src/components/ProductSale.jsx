import React from 'react'
import { Container } from "./Container";
import Card from "./Card";

const ProductSale = () => {
  return (
    <div>
      <template className=" mt-44 flex justify-between">
        <Container>
          <section className=" flex justify-between">
            <div>
              <h1 className="text-6xl font-mono font-semibold text-black">
                |Daily Best Sale
              </h1>
              <p className=" ms-9 mt-2 text-gray-500">
                We offers a wide range of high-quality products and services
                tailored <br /> to meet the diverse needs and preferences
              </p>
            </div>
            <div>
              <div className="parent flex gap-4">
                <button class="text-white bg-slate-950 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600  rounded-md  text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button class="text-white bg-slate-950 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded-md   text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
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