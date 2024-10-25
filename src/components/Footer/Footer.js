import React from 'react';
import { FaApple } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const Footer = () => {
  return (
    <div className='flex space-x-5  justify-center items-center p-3  '>
      <FaApple/>
       <h3 className='text-gray-500 hover:text-black'>Store</h3>
      <h3 className='text-gray-500 hover:text-black'>Mac</h3>
      <h3 className='text-gray-500 hover:text-black'>iPad</h3>
      <h3 className='text-gray-500 hover:text-black'>iPhone</h3>
      <h3 className='text-gray-500 hover:text-black'>Watch</h3>
      <h3 className='text-gray-500 hover:text-black'>TV & Home</h3>
      <h3 className='text-gray-500 hover:text-black'>Entertainment</h3>
      <h3 className='text-gray-500 hover:text-black'>Accessories</h3>
      <h3 className='text-gray-500 hover:text-black'>Support</h3>
      <CiSearch/>
      <MdOutlineShoppingBag/>
    
    </div>
  )
}

export default Footer
