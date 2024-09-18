import React from 'react'

const MainContainer = ({children}) => {
  return (
     <div className={`w-full md:w-[1020px]  px-20  lg:w-[1400px] mx-auto`}>
      {children}
    </div>
  )
}

export default MainContainer