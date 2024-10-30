import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { PiLaptopDuotone } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { GrDeliver } from "react-icons/gr";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const WhyAppleMac = () => {


  const itemcard = [
    {
      title: "Monthly payment options available.",
      icon: MdOutlinePayment,
      discription:
        "choose the easy to finance with convenient monthly payment options.",
    },
    {
      title: "Save with Apple Trade In.",
      icon: PiLaptopDuotone,
      discription:
        "Get credit towards your next Mac when you trade in an eligible device at an Apple&nbsp;Store.",
    },
    {
      title: "Customise Your Mac.",
      icon: HiOutlineComputerDesktop,
      discription: "Choose your chip, memory, storage, even color.",
    },
    {
      title: "Get flexible delivery and easy pickup.",
      icon: GrDeliver,
      discription: "Get free delivery or pickup at your Apple Store.",
    },
    {
      title: "Meet your new Mac with Personal Setup.",
      icon: LiaPeopleCarrySolid,
      discription:
        "Jump into online sessions with a Specialist to set up your Mac and discover new features.",
    },
  ];

  return (
    <div>
        <div className="flex justify-between  mt-40 items-center">
          
          <div>
            <h1 className="text-4xl font-medium">Why Apple is the best</h1>
            <h1 className="text-4xl font-medium  ">place to buy Mac.</h1>
          </div>

          <div className="flex text-blue-500 justify-center items-center">
            <h5>Shop Mac</h5>
            <IoIosArrowForward />
          </div>
        </div>

        <div className="flex overflow-x-scroll mt-20 space-x-5">
          {itemcard.map((item, index) => (
            <div
              key={index}
              className="w-[330px] h-[230px] bg-white shadow-lg rounded-lg border border-gray-300 p-4"
            >
              {<item.icon size={40} />}

              <div className="w-[240px] ">
                <h1 className="text-2xl font-medium">{item.title}</h1>
              </div>

              <div className="w-[240px]">
                <h5 className="text-sm">{item.discription}</h5>
              </div>

              <div className=" p-1  bg-black  rounded-full justify-end items-end flex  max-w-fit ml-auto">
                <IoMdAdd className="text-white text-3xl" size={25} />
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default WhyAppleMac
