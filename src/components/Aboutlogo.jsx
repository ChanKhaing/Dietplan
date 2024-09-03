import React from 'react'
import { Container } from './Container'
import organic from '../assets/image/organicslogo.png'  
import planta from '../assets/image/plantalogo.png'
import lefruiter from '../assets/image/lefruitierlogo.png'
import Juicelogo from '../assets/image/Juicelogo.png'

const Aboutlogo = () => {
  return (
    <div className=" bg-transparent">
      <Container>
        <div className=" grid grid-cols-4 gap-2  ">
          <button className=" border h-[100px] px-16 bg-gray-100 rounded-3xl  mx-auto">
            <img src={organic} alt="" className='' />
          </button>
          <button className=" border h-[100px] px-16 bg-gray-100 rounded-3xl  mx-auto">
            <img src={planta} alt="" />
          </button>
          <button className=" border h-[100px] px-16 bg-gray-100 rounded-3xl  mx-auto">
            <img src={lefruiter} alt="" />
          </button>
          <button className=" border h-[100px] px-16 bg-gray-100  rounded-3xl mx-auto">
            <img src={Juicelogo} alt="" />
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Aboutlogo