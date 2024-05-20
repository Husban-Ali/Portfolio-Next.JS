"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="p-4 dark:bg-black dark:text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <a href="#" aria-label="Back to homepage" className="flex items-center p-2">
        <img className='img'
      src="/Logo.png" 
      alt="Logo" 
       // specify height
    />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link href="#Hero" className="flex items-center px-4 -mb-1 border-b-2 dark:text-white">
              Home
            </Link>
          </li>
          <li className="flex">
            <Link href="#Service" className="flex items-center px-4 -mb-1 border-b-2 dark:text-white">
              Services
            </Link>
          </li>
          <li className="flex">
            <Link href="#Team" className="flex items-center px-4 -mb-1 border-b-2 dark:text-white">
              Team
            </Link>
          </li>
          <li className="flex" >
            <Link href="#Contact" className="flex items-center px-4 -mb-1 border-b-2 dark:text-white">
              Contact
            </Link>
          </li>
          
        </ul>
        <div className="lg:hidden">
          <button className="p-4" onClick={() => setNavbarOpen(!navbarOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={navbarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"} />
            </svg>
          </button>
        </div>
      </div>
      {navbarOpen && (
        <ul className="flex flex-col items-center lg:hidden mt-4 space-y-2">
          <li className="flex">
          <Link href="#Hero" className="flex items-center px-4 -mb-1 border-b-2 dark:text-white">
              Home
            </Link>          </li>
          <li className="flex">
          <Link href="#Service" className="flex items-center px-4 -mb-1 border-b-2 dark:text-white">
              Services
            </Link>          </li>
          <li className="flex">
          <Link href="#Team" className="flex items-center px-4 -mb-1 border-b-2 dark:text-white">
              Team
            </Link>          </li>
          <li className="flex">
          <Link href="#Contact" className="flex items-center px-4 -mb-1 border-b-2 dark:text-white">
              Contact
            </Link>          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;