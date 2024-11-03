import React, { useState , useRef,useEffect} from "react";
import applefirst from "../../assets/applefirst.jpg";
import { IoIosArrowForward } from "react-icons/io";
import air13 from "../../assets/air13.png";
import air14 from "../../assets/air14.png";
import { MdOutlinePayment } from "react-icons/md";
import "./hero.css";
import { FaApple } from "react-icons/fa";
import { PiLaptopDuotone } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { GrDeliver } from "react-icons/gr";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import applepc from "../../assets/applepc.png";
import laptopmouse from "../../assets/laptopmouse.png";
import desktop from "../../assets/desktop.png";
import macpro from "../../assets/macproultra.png";
import macstudio from "../../assets/macstudio.png";
import minichip from "../../assets/minichip.png";
import applestar from "../../assets/applestar.png";
import GetToKnownMac from "../GetToKnownMac/GetToKnownMac";
import Laptops from "../Laptops/Laptops";
import Desktops from "../Desktops/Desktops";
import Display from "../Display/Display";
import WhyAppleMac from "../WhyAppleMac/WhyAppleMac";
import Significant from "../Significant/Significant";
import MacEssentials from "../MacEssentials/MacEssentials";
import xlarge from "../../assets/xlarge.mp4";
import  appleThamnail from "../../assets/appleThamnail.png";


const Hero = () => {

  const [activeTab, setActiveTab] = useState(0); // Default to first tab

  const tabs = ["Laptops", "Desktops", "Displays"];



  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <div className="flex justify-between p-16">
        <h1 className="text-6xl font-medium">Mac</h1>
        <h1 className="text-3xl font-medium">
          If you can dream it,
          <br />
          Mac can do it.
        </h1>
      </div>

      <div className="justify-center w-full items-center flex p-12">
  <video
    ref={videoRef}
    onPlay={() => setIsPlaying(true)}
    onPause={() => setIsPlaying(false)}
    className="rounded-3xl w-full h-[600px]"
    src={xlarge}
    poster={appleThamnail}
    controls
    alt="apple video"
    style={{ objectFit: 'cover' }}
    
  />

</div>

      <GetToKnownMac/>

      <div className="w-full h-auto bg-slate-50  p-28">
        <div className="flex justify-between ">
          <h1 className="text-5xl font-medium ">Explore the line-up.</h1>
          <div className="flex items-center">
            <h5 className=" text-blue-600 ">Compare all models</h5>{" "}
            {/* <div className="text-blue-600"> */}
            <IoIosArrowForward className="text-blue-600" size={10} />
            {/* </div> */}
          </div>
        </div>

        <div className="w-full max-w-md pt-16">
          {/* Tab Header */}
          <div className="flex bg-white rounded-full justify-evenly">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-2  text-sm font-medium focus:outline-none ${
                  activeTab === index
                    ? "text-white bg-black rounded-full m-1 px-4 "
                    : "text-black hover:text-blue-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4 w-screen mt-12">
            {/* tap 0 code here */}
            {activeTab === 0 && (
             <Laptops/>
            )}

            {/* tap 2 code here */}
            {activeTab === 1 && (
              <Desktops/>
            )}

            {/* tap 3 code here */}
            {activeTab === 2 && <Display/>}
          </div>
        </div>
       
       <WhyAppleMac/>
       
      </div>

       <Significant/>

      
      <MacEssentials/>

      
    </div>
  );
};

export default Hero;
