import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import applepc from "../../assets/applepc.png";
import laptopmouse from "../../assets/laptopmouse.png";

const MacEssentials = () => {
  return (
    <div>
       <div className="flex justify-between  mb-24 px-28">
        <h1 className="text-5xl font-medium ">Mac essentials.</h1>
        <div className="flex items-center">
          <h5 className=" text-blue-600 ">All Mac accessories</h5>{" "}
          {/* <div className="text-blue-600"> */}
          <IoIosArrowForward className="text-blue-600" size={10} />
          {/* </div> */}
        </div>
      </div>

      <div className="flex my-28 mx-16 space-x-4">
        <div className="flex-1 h-[500px] rounded-2xl bg-slate-50 items-center justify-center flex flex-col overflow-hidden">
          <h2 className="text-2xl font-medium mt-2">Mac accessories</h2>
          <h5>Explore keyboards,mice and other essentials.</h5>
          <div className="flex items-center text-blue-400">
            <h5>Shop Mac accessories</h5>
            <IoIosArrowForward />
          </div>
          <img src={laptopmouse} alt="laptopmouse" className="mt-8 " />
        </div>
        <div className="flex-1 rounded-2xl h-[500px] bg-slate-50 items-center justify-center flex flex-col  ">
          <h2 className="text-2xl font-medium mt-2 ">Studio Display</h2>
          <h5>
            The 68.29 cm (27″) 5K Retina display pairs beautifully with any Mac.
          </h5>
          <div className="flex items-center text-blue-400">
            <h5>Learn more</h5>
            <IoIosArrowForward />
          </div>
          <img
            src={applepc}
            alt="laptopmouse"
            className="mt-8 h-[350px] w-[400px]"
          />
        </div>
      </div>
    </div>
  )
}

export default MacEssentials
