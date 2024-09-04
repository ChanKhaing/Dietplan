import React from "react";
import { Container } from "./Container";

const Sign = () => {
  return (
    <div className="mt-44">
      <Container>
        <section className="flex justify-between mb-10">
          <h1 className="text-5xl font-mono font-semibold text-black">
            |Start using Today
          </h1>
          <div className="grid grid-cols-2 gap-5">
            <button class=" inline-flex font-serif  text-center  items-center text-white bg-black mx-auto border-2 border-slate-800  px-8 py-2 duration-1000	 focus:outline-none rounded-xl text-lg">
              SIGNUP Now
            </button>
            <button class="inline-flex font-serif text-center mx-auto  items-center text-dark hover:text-white hover:bg-black bg-white border-slate-800 border-2  px-12 py-2 focus:outline-none  rounded-xl text-lg">
              REGISTER
            </button>
          </div>
        </section>
        <p className="text-lg  text-slate-500 ms-10 ">
          Sign up today and unlock a world of exclusive
        </p>
        <p className="text-lg ms-10 text-slate-500">benefits and exciting offers</p>
      </Container>
    </div>
  );
};

export default Sign;
