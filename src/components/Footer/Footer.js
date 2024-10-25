import React from 'react';
import { FaApple } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const Footer = () => {
  return (
    <div className='flex space-x-5  justify-centers items-center '>
      <FaApple/>
       <h3>Store</h3>
      <h3>Mac</h3>
      <h3>iPad</h3>
      <h3>iPhone</h3>
      <h3>Watch</h3>
      <h3>TV & Home</h3>
      <h3>Entertainment</h3>
      <h3>Accessories</h3>
      <h3>Support</h3>
      <CiSearch/>
      <MdOutlineShoppingBag/>
    
    </div>
  )
}

export default Footer
