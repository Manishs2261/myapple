import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import maciPad from "../../assets/macipad.png";
import maciphone from "../../assets/maciphone.png";
import macwatch from "../../assets/macwatch.png";

const Significant = () => {
  // State to manage dropdown visibility
  const [isOpenFirst, setIsOpenFirst] = useState(true);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [isOpenThird, setIsOpenThird] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdownFirst = () => {
    setIsOpenFirst(true);
    setIsOpenSecond(false);
    setIsOpenThird(false);
  };
  const toggleDropdownSecond = () => {
    setIsOpenSecond(true);
    setIsOpenFirst(false);
    setIsOpenThird(false);
  };
  const toggleDropdownThird = () => {
    setIsOpenThird(true);
    setIsOpenFirst(false);
    setIsOpenSecond(false);
  };

  return (
    <div>
      <h1 className="text-5xl font-medium my-16 ml-24">Significant others.</h1>
      <div className="w-full h-[700px] bg-slate-50 items-center flex justify-center">
        <div className="flex flex-col">
          {/* The button to trigger dropdown one */}
          <button onClick={toggleDropdownFirst} style={{ fontSize: "16px" }}>
            <div className="flex items-center">
              <h1 className="mr-32 text-2xl font-medium">Mac and iPhone</h1>
              {isOpenFirst ? (
                <IoIosArrowUp size={30} />
              ) : (
                <IoIosArrowDown size={30} />
              )}
            </div>
          </button>

          {/* Dropdown content, displayed only when isOpenFirst is true */}
          {isOpenFirst && (
            <div className="w-[280px] ">
              <h2>
                You can answer calls or messages from your iPhone directly on
                your Mac. Copy images, video or text on your iPhone, then paste
                into another app on your nearby Mac. With iCloud, you can access
                your favourite files from either your iPhone or your Mac. And so
                much more.
              </h2>
            </div>
          )}

          {/* The button to trigger dropdown two */}

          <button onClick={toggleDropdownSecond} style={{ fontSize: "16px" }}>
            <div className="flex items-center mt-8">
              <h1 className="mr-40 text-2xl font-medium">Mac and iPad</h1>
              {isOpenSecond ? (
                <IoIosArrowUp size={30} />
              ) : (
                <IoIosArrowDown size={30} />
              )}
            </div>
          </button>

          {/* Dropdown content, displayed only when isOpenSecond is true */}
          {isOpenSecond && (
            <div className="w-[280px] ">
              <h2>
                You can answer calls or messages from your iPhone directly on
                your Mac. Copy images, video or text on your iPhone, then paste
                into another app on your nearby Mac. With iCloud, you can access
                your favourite files from either your iPhone or your Mac. And so
                much more.
              </h2>
            </div>
          )}

          {/* The button to trigger dropdown three */}
          <button onClick={toggleDropdownThird} style={{ fontSize: "16px" }}>
            <div className="flex items-center mt-8">
              <h1 className="mr-16 text-2xl font-medium">
                Mac and Apple Watch
              </h1>
              {isOpenThird ? (
                <IoIosArrowUp size={30} />
              ) : (
                <IoIosArrowDown size={30} />
              )}
            </div>
          </button>

          {/* Dropdown content, displayed only when isOpenThird is true */}
          {isOpenThird && (
            <div className="w-[280px] ">
              <h2>
                You can answer calls or messages from your iPhone directly on
                your Mac. Copy images, video or text on your iPhone, then paste
                into another app on your nearby Mac. With iCloud, you can access
                your favourite files from either your iPhone or your Mac. And so
                much more.
              </h2>
            </div>
          )}
        </div>

        <div>
          {isOpenFirst && (
            <img
              className="w-[900px] h-[500px] rounded-2xl ml-16 "
              src={maciPad}
              alt="oneimage"
            />
          )}

          {isOpenSecond && (
            <img
              className="w-[900px] h-[500px] rounded-2xl ml-16 "
              src={maciphone}
              alt="oneimage"
            />
          )}

          {isOpenThird && (
            <img
              className="w-[900px] h-[500px] rounded-2xl ml-16 "
              src={macwatch}
              alt="oneimage"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Significant;
