import React from "react";

export  const Container = ({ children }) => {
  return (
    <div className={`w-full md:w-[1020px]  lg:w-[1400px] mx-auto`}>
      {children}
    </div>
  );
};
