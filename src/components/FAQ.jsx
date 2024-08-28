import React from 'react'
import { Container } from './Container';

const FAQ = () => {
  return (
    // <div>
    //   <Container>
    //     <p>__HelpfulInformation__</p>
    //     <h1> Frequently Ask Questions </h1>
    //     <h3>Explore our comprehensive for dieting and nutrition</h3>
    //   </Container>
    // </div>
    <div>
      <section className=" mt-44 right-0 text-center mb-32 ">
        <span className=" inline-block right-0 text-center font-serif  ">
          {" "}
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

      <section className=" m-10 h-[500px] bg-slate-600">
        <Container>
          <div>
            <section>
              <div className=" mb-5">
                <p className=" font-bold text-xl block mb-5">
                  How does your diet plan service work?{" "}
                </p>
                <span className=" block  ">
                                  Plans are updated monthly to ensure continued progress and
                                  <br></br>
                  cater to your evolving preferences
                </span>
              </div>
              <div className=" mb-5">
                <p className=" font-bold text-xl block">
                  How does your diet plan service work?{" "}
                </p>
                <span className="">
                  Plans are updated monthly to ensure continued progress and
                  cater to your evolving preferences.
                </span>
              </div>
              <div className=" mb-5">
                <p className=" font-bold text-xl block">
                  How does your diet plan service work?{" "}
                </p>
                <span className="">
                  Plans are updated monthly to ensure continued progress and
                  cater to your evolving preferences.
                </span>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default FAQ