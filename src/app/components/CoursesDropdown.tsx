'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const CoursesDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  
  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-end focus:outline-none">
        Courses
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.69l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 010-1.08z" clipRule="evenodd" />
        </svg>
      </button>
      {isDropdownOpen && (
        <div style={{ opacity: isDropdownOpen ? 1 : 0 }} className="absolute text-nowrap top-full mt-2 bg-white text-gray-800 rounded-sm shadow-lg right-0 z-10 font-light px-3 py-1 transition-opacity duration-300 ease-in-out opacity-100">
         <ul>
            <li className="font-semibold text-lg px-4 py-1">Core Courses</li>
            <li>
              <Link href="#" className="block px-4 py-1 hover:bg-gray-200">Programming Fundamentals</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-1 hover:bg-gray-200">Web2 Using NextJS</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-1 hover:bg-gray-200">Earn as You Learn</Link>
            </li>
            <hr className="border-gray-300 mx-3 my-2" />
            <li className="font-semibold text-lg px-4 py-2">Advanced Courses</li>
            <li>
              <Link href="#" className="block px-4 py-1 hover:bg-gray-200">Web 3 and Metaverse</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-1 hover:bg-gray-200">Cloud-Native Computing</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-1 hover:bg-gray-200">AI and Deep Learning</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-1 hover:bg-gray-200">Ambient Computing and IoT</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-1 hover:bg-gray-200">Genomics and Bioinformatics</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-1 mb-1 hover:bg-gray-200">Network Programmability and Automation</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default CoursesDropdown