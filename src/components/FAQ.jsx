import React from 'react'
import { Container } from './Container';

const FAQ = () => {
  return (
    <div>
      <section className=" mt-44 right-0 text-center mb-32 ">
        <span className=" inline-block right-0 text-center font-dancing text-2xl  ">
          ___HelpfulInformation___
        </span>
        <h1 className=" text-5xl  font-bold  mb-5  ">
          {" "}
          Frequently Ask Questions{" "}
        </h1>
        <p className=" right-0 text-center text-gray-400">
          Explore our comprehensive for dieting and nutrition
        </p>
      </section>

      {/* <main className=" mt-10 h-[400px]   bg-slate-600">
        <Container>
          <div className=" grid grid-cols-2 gap-5 p-6">
            <section className="">
              <div className=" my-5">
                <p className=" font-bold text-xl block mb-5">
                  How does your diet plan service work?{" "}
                </p>
                <span className=" block  ">
                  Plans are updated monthly to ensure continued progress and
                  <br></br>
                  cater to your evolving preferences
                </span>
              </div>
              <div className=" mb-5 ">
                <p className=" font-bold text-xl block">
                  What is the cancellation policy?
                </p>
                <span className=" block">
                  You can cancel your subscription at any time. Please refer to
                  our <br /> terms of service for details.
                </span>
              </div>
            </section>

            <section className="">
              <div className=" my-5">
                <p className=" font-bold text-xl block mb-5">
                  How does your diet plan service work?{" "}
                </p>
                <span className=" block  ">
                  Plans are updated monthly to ensure continued progress and
                  <br></br>
                  cater to your evolving preferences
                </span>
              </div>
              <div className=" mb-5 ">
                <p className=" font-bold text-xl block">
                  What is the cancellation policy?
                </p>
                <span className=" block">
                  You can cancel your subscription at any time. Please refer to
                  our <br /> terms of service for details.
                </span>
              </div>
            </section>
          </div>
        </Container>
      </main> */}

      <Container>
        <main className=" mt-10 h-[400px]  mx-auto w-[950px]  ">
          <div className=" flex gap-4  ">
            <section className="">
              <div className=" my-5">
                <p className=" font-bold text-xl block mb-5">
                  How does your diet plan service work?{" "}
                </p>
                <span className=" block  text-gray-500 ">
                  Plans are updated monthly to ensure continued progress and
                  <br></br>
                  cater to your evolving preferences
                </span>
              </div>
              <div className=" mb-5 ">
                <p className=" font-bold text-xl block mb-5">
                  What is the cancellation policy?
                </p>
                <span className=" block  text-gray-500 ">
                  You can cancel your subscription at any time. Please refer to
                  our <br /> terms of service for details.
                </span>
              </div>

              <div className=" mb-5 ">
                <p className=" font-bold text-xl block mb-5">
                  Will I receive support from a nutritionist?
                </p>
                <span className=" block text-gray-500">
                  Yes, our plans come with access to certified nutritionists for
                  <br /> guidance and support throughout your journey.
                </span>
              </div>
            </section>

            <section className="">
              <div className=" my-5">
                <p className=" font-bold text-xl block mb-5">
                  How do I get started with a diet plan?(20){" "}
                </p>
                <span className=" block text-gray-500  ">
                  Simply sign up on our website, provide your details, and our{" "}
                  <br />
                  team will create a tailored plan for you.
                </span>
              </div>
              <div className=" mb-5 ">
                <p className=" font-bold text-xl block mb-5">
                  What type of diets do you offer?
                </p>
                <span className=" block text-gray-500">
                  We provide a range of diet options including balanced, keto,{" "}
                  <br />
                  vegetarian, and more. You can choose based on your needs.
                </span>
              </div>

              <div className=" mb-5 ">
                <p className=" font-bold text-xl block mb-5">
                  Can I customize my diet plan?
                </p>
                <span className=" block text-gray-500">
                  Yes, you can customize your plan based on dietary
                  restrictions, <br /> allergies, and food preferences.
                </span>
              </div>
            </section>
          </div>
        </main>
      </Container>
    </div>
  );
}

export default FAQ