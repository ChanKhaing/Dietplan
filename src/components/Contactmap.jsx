import React from "react";
import { Container } from "./Container";

const Contactmap = () => {
  return (
    <div className=" mt-44 mb-44">
      <section className="  right-0 text-center mb-20 ">
        <span className=" inline-block right-0 text-center font-dancing text-2xl  ">
          ___Contact with us___
        </span>
        <h1 className=" text-5xl  font-bold  mb-5  ">Feel Free to reach out</h1>
        <p className=" right-0 text-center text-gray-400">
          Feel free to contact us for any assistance you may need
        </p>
      </section>

      <Container>
        <section className=" flex justify-between">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.2278004210445!2d96.13915756278593!3d16.806500384142712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1edbb8a89416d%3A0x64420f52367032b9!2sMMS%20IT!5e1!3m2!1sen!2smy!4v1686286820285!5m2!1sen!2smy"
              className=" w-[600px] h-[600px] rounded-2xl"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className=" w-[600px] h-[600px] rounded-2xl ">
            <span className=" block mb-4 text-lg rounded-lg">Full Name</span>
            <input
              className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900   p-2.5 text-sm rounded-lg"
              type="text"
              required=""
              id="Full Name"
            ></input>

            <span className=" block mb-4 text-lg mt-10 rounded-lg">Email</span>
            <input
              class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900   p-2.5 text-sm rounded-lg"
              type="text"
              required=""
              id="Email"
            ></input>

            <span className=" block mb-4  text-lg mt-10 rounded-lg">
              Message
            </span>
            <textarea
              class="block w-full h-[200px] mb-4 border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900   p-2.5 text-sm rounded-lg"
              type="text"
              required=""
              id="Quantity"
            ></textarea>

            <button class="  p-2  font-serif rounded-lg    items-center m-2 text-white bg-black border-0  px-8 focus:outline-none  text-lg">
              SUBMIT REQUEST
            </button>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Contactmap;
