import React from "react";
import applefirst from "../../assets/applefirst.jpg";
import women from "../../assets/women.jpg";
import hello from "../../assets/hello.jpg";
import earth from "../../assets/earth.jpg";
import icon from "../../assets/icon.jpg";
import mac from "../../assets/mac.jpg";
import mobile from "../../assets/mobile.jpg";
import appleicon from "../../assets/appleicon.jpg"
import { IoMdAdd } from "react-icons/io";

const Hero = () => {
  const item = [
    {
      title: "Getting Started",
      subtitle: "Easy to use. Easy to love.",
      image: hello,
      color:"text-white"
    },
    {
      title: "Performance and Battery Life",
      subtitle: "Go fast. Go far.",
      image: women,
      color:"text-white"
    },
    {
      title: "Mac and iPhone",
      subtitle: "Dream team.",
      image: mobile,
      color:"text-black"
    },
    {
      title: "Compatibility",
      subtitle: "Mac runs your favourite apps.",
      image: icon,
      color:"text-black"
    },
    {
      title: "Privacy and Security",
      subtitle: `Your business is nobody else’s.`,
      image: appleicon,
      color:"text-white"
    },
    {
      title: "Durability",
      subtitle: "Built to stand the test of time.",
      image: mac,
      color:"text-black"
    },
    {
        title: "Apple Values",
        subtitle: "Our values drive everything we do.",
        image: earth,
        color:"text-black"
      },
  ];

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
        <img className="rounded-3xl" src={applefirst} alt="appleimage" />
      </div>

      <h1 className="text-6xl font-medium m-12">Get to know Mac.</h1>

      <div className="overflow-x-auto whitespace-nowrap">
        {item.map((item, index) => (
          <div key={index} className="inline-block p-4">
            <div className="relative rounded-3xl  w-64">
              {/* Image with rounded corners */}
              <img className="rounded-3xl  " src={item.image} alt="appleimage" />

              {/* Text overlay positioned at the top */}
              <div className="absolute top-0 left-0 p-4">
              <h2 className={`text-sm ${item.color}`}>{item.title}</h2>

        <h2 className={`${item.color} text-lg font-medium break-words`}>
                  {item.subtitle}
                </h2>
              </div>

              {/* Icon positioned at the bottom */}
              <div className="absolute bottom-0 right-0 m-4 p-2   bg-yellow-950 bg-opacity-60 rounded-full">
                <IoMdAdd className="text-white text-3xl" size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img className="rounded-3xl" src={applefirst} alt="appleimage" />
    </div>
  );
};

export default Hero;
