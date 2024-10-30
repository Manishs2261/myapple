import React from "react";
import Desktopimage from "../../assets/desktop.png";
import { IoIosArrowForward } from "react-icons/io";
import air13 from "../../assets/air13.png";
import { FaApple } from "react-icons/fa";
import applestar from "../../assets/applestar.png";
import macproultra from "../../assets/macproultra.png";
import macstudio from "../../assets/macstudio.png";
import minichip from "../../assets/minichip.png";

const Desktops = () => {
  return (
    <div>
      <div className="bg-white max-w-fit">
        <div className="flex justify-evenly">
          {/* image one */}
          <div className="items-center  max-w-fit p-4 justify-end flex flex-col text-center">
            <img className="" width={250} src={Desktopimage} alt="appleimage" />
            <h5 className="text-red-600 text-xs mt-4">New</h5>
            <h1 className="text-xl font-medium mt-2">iMac</h1>
            <h4 className="font-medium">M4 chip</h4>
            <h3 className="text-sm mt-2">A stunning all-in-one desktop for </h3>
            <h3 className="text-sm">creativity and productivity.</h3>
            <h3 className="font-medium mt-2">From $134900</h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-blue-500 py-1 px-4 rounded-full text-white mr-8">
                Learn more
              </button>

              <div className="flex items-end ">
                <h5 className=" text-blue-600 ">buy</h5>{" "}
                {/* <div className="text-blue-600"> */}
                <IoIosArrowForward
                  className="text-blue-600 items-end justify-items-end"
                  size={10}
                />
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* image two */}
          <div className="items-end  max-w-fit p-4 justify-end  flex flex-col text-center">
            <img className="" width={250} src={minichip} alt="appleimage" />
            <h5 className="text-red-600 text-xs mt-4">Mac mini</h5>
            <h1 className="text-xl font-medium mt-2">
              MacBook Air 13" and 15"
            </h1>
            <h4 className="font-medium">M2 or M3 chip</h4>
            <h3 className="text-sm mt-2">
              Strikingly thin and fast so you can{" "}
            </h3>
            <h3 className="text-sm">work, play or create anywhere</h3>
            <h3 className="font-medium mt-2">From $999</h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-blue-500 py-1 px-4 rounded-full text-white mr-8">
                Learn more
              </button>

              <div className="flex items-end ">
                <h5 className=" text-blue-600 ">buy</h5>{" "}
                {/* <div className="text-blue-600"> */}
                <IoIosArrowForward
                  className="text-blue-600 items-end justify-items-end"
                  size={10}
                />
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* image three */}
          <div className="items-end  max-w-fit p-4 justify-end  flex flex-col text-center">
            <img className="" width={250} src={macstudio} alt="appleimage" />
            <h5 className="text-red-600 text-xs mt-4">Mac Studio</h5>
            <h1 className="text-xl font-medium mt-2">
              MacBook Air 13" and 15"
            </h1>
            <h4 className="font-medium">M2 or M3 chip</h4>
            <h3 className="text-sm mt-2">
              Strikingly thin and fast so you can{" "}
            </h3>
            <h3 className="text-sm">work, play or create anywhere</h3>
            <h3 className="font-medium mt-2">From $999</h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-blue-500 py-1 px-4 rounded-full text-white mr-8">
                Learn more
              </button>

              <div className="flex items-end ">
                <h5 className=" text-blue-600 ">buy</h5>{" "}
                {/* <div className="text-blue-600"> */}
                <IoIosArrowForward
                  className="text-blue-600 items-end justify-items-end"
                  size={10}
                />
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* image four */}
          <div className="items-end  max-w-fit p-4 justify-end  flex flex-col text-center">
            <img className="" width={250} src={macproultra} alt="appleimage" />
            <h5 className="text-red-600 text-xs mt-4">Mac Pro</h5>
            <h1 className="text-xl font-medium mt-2">
              MacBook Air 13" and 15"
            </h1>
            <h4 className="font-medium">M2 or M3 chip</h4>
            <h3 className="text-sm mt-2">
              Strikingly thin and fast so you can{" "}
            </h3>
            <h3 className="text-sm">work, play or create anywhere</h3>
            <h3 className="font-medium mt-2">From $999</h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-blue-500 py-1 px-4 rounded-full text-white mr-8">
                Learn more
              </button>

              <div className="flex items-end ">
                <h5 className=" text-blue-600 ">buy</h5>{" "}
                {/* <div className="text-blue-600"> */}
                <IoIosArrowForward
                  className="text-blue-600 items-end justify-items-end"
                  size={10}
                />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-0.5 bg-gray-500 my-8"></div>

        <div className="flex">
          {/* item one */}
          <div className="  p-7 items-center flex-col max-w-fit text-center">
            <h1 className="text-2xl font-medium py-2">60.96 cm</h1>
            <h6 className="text-xs">
              (24″) 4.5K Retina display with 500 nits of brightness
            </h6>
            <h6 className="text-xs">delivers sharp and vibrant detail9</h6>

            <div className="flex justify-center items-center mt-8 mb-2 space-x-2">
              <div className="max-w-fit p-1 bg-black justify-center items-center flex rounded-md">
                <FaApple className="text-white" />
                <h2 className="text-white">M4</h2>
              </div>
              <div className="max-w-fit p-1 bg-black justify-center items-center flex rounded-md">
                <FaApple className="text-white" />
                <h2 className="text-white">M4</h2>
              </div>
            </div>
            <h5 className="text-xs mb-8">Apple M4 chip</h5>

            <div className="flex justify-center items-center">
              <img src={applestar} alt={applestar} />
            </div>
            <h5 className="text-xs mb-8">Built for Apple Intelligence1</h5>

            <h1 className="text-xl font-medium mb-8">—</h1>

            <h5 className="text-xs">Up to</h5>

            <h1 className="text-xl font-medium ">6 ports</h1>
            <h5 className="text-xs">
              2x Thunderbolt / USB 4 or 4x Thunderbolt 4,
            </h5>
            <h5 className="text-xs">Gigabit Ethernet, headphone jack</h5>
          </div>

          {/* item two */}
          <div className="  p-7 items-center flex-col max-w-fit text-center">
            <h1 className="text-2xl font-medium py-2">60.96 cm</h1>
            <h6 className="text-xs">
              (24″) 4.5K Retina display with 500 nits of brightness
            </h6>
            <h6 className="text-xs">delivers sharp and vibrant detail9</h6>

            <div className="flex justify-center items-center mt-8 mb-2 space-x-2">
              <div className="max-w-fit p-1 bg-black justify-center items-center flex rounded-md">
                <FaApple className="text-white" />
                <h2 className="text-white">M4</h2>
              </div>
              <div className="max-w-fit p-1 bg-black justify-center items-center flex rounded-md">
                <FaApple className="text-white" />
                <h2 className="text-white">M4</h2>
              </div>
            </div>
            <h5 className="text-xs mb-8">Apple M4 chip</h5>

            <div className="flex justify-center items-center">
              <img src={applestar} alt={applestar} />
            </div>
            <h5 className="text-xs mb-8">Built for Apple Intelligence1</h5>

            <h1 className="text-xl font-medium mb-8">—</h1>

            <h5 className="text-xs">Up to</h5>

            <h1 className="text-xl font-medium">6 ports</h1>
            <h5 className="text-xs">
              2x Thunderbolt / USB 4 or 4x Thunderbolt 4,
            </h5>
            <h5 className="text-xs">Gigabit Ethernet, headphone jack</h5>
          </div>

          {/* item three */}
          <div className="  p-7 items-center flex-col max-w-fit text-center">
            <h1 className="text-2xl font-medium py-2">60.96 cm</h1>
            <h6 className="text-xs">
              (24″) 4.5K Retina display with 500 nits of brightness
            </h6>
            <h6 className="text-xs">delivers sharp and vibrant detail9</h6>

            <div className="flex justify-center items-center mt-8 mb-2 space-x-2">
              <div className="max-w-fit p-1 bg-black justify-center items-center flex rounded-md">
                <FaApple className="text-white" />
                <h2 className="text-white">M4</h2>
              </div>
              <div className="max-w-fit p-1 bg-black justify-center items-center flex rounded-md">
                <FaApple className="text-white" />
                <h2 className="text-white">M4</h2>
              </div>
            </div>
            <h5 className="text-xs mb-8">Apple M4 chip</h5>

            <div className="flex justify-center items-center">
              <img src={applestar} alt={applestar} />
            </div>
            <h5 className="text-xs mb-8">Built for Apple Intelligence1</h5>

            <h1 className="text-xl font-medium mb-8">—</h1>

            <h5 className="text-xs">Up to</h5>

            <h1 className="text-xl font-medium">6 ports</h1>
            <h5 className="text-xs">
              2x Thunderbolt / USB 4 or 4x Thunderbolt 4,
            </h5>
            <h5 className="text-xs">Gigabit Ethernet, headphone jack</h5>
          </div>

          {/* item four */}
          <div className="  p-7 items-center flex-col max-w-fit text-center">
            <h1 className="text-2xl font-medium py-2">60.96 cm</h1>
            <h6 className="text-xs">
              (24″) 4.5K Retina display with 500 nits of brightness
            </h6>
            <h6 className="text-xs">delivers sharp and vibrant detail9</h6>

            <div className="flex justify-center items-center mt-8 mb-2 space-x-2">
              <div className="max-w-fit p-1 bg-black justify-center items-center flex rounded-md">
                <FaApple className="text-white" />
                <h2 className="text-white">M4</h2>
              </div>
              <div className="max-w-fit p-1 bg-black justify-center items-center flex rounded-md">
                <FaApple className="text-white" />
                <h2 className="text-white">M4</h2>
              </div>
            </div>
            <h5 className="text-xs mb-8">Apple M4 chip</h5>

            <div className="flex justify-center items-center">
              <img src={applestar} alt={applestar} />
            </div>
            <h5 className="text-xs mb-8">Built for Apple Intelligence1</h5>

            <h1 className="text-xl font-medium mb-8">—</h1>

            <h5 className="text-xs">Up to</h5>

            <h1 className="text-xl font-medium">6 ports</h1>
            <h5 className="text-xs">
              2x Thunderbolt / USB 4 or 4x Thunderbolt 4,
            </h5>
            <h5 className="text-xs">Gigabit Ethernet, headphone jack</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktops;
