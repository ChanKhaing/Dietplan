import React from "react";
import Dietplan from "./Dietplan";
// import { Container } from "./Container";
import MainContainer from "./MainContainer";

const Footer = () => {
  const date = new Date();
  return (
    <div>
      <Dietplan />
      <footer className=" mt-auto bg-black text-white text-lg">
        <MainContainer>
          <div className=" flex justify-between">
            <div className=" py-6">
              © {date.getFullYear()}{" "}
              <a href="https://mms-it.com" className="  underline text-gray-300">
                MMS IT
              </a>
              .| All rights reserved.
            </div>
            <span className=" bg-black flex items-center text-white">MMSIT BUD</span>
          </div>
        </MainContainer>
      </footer>
    </div>
  );
};

export default Footer;
