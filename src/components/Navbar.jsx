import React from 'react'
import { Container } from './Container';

const Navbar = () => {
  return (
    <div className="border-s-gray-200 sticky top-0 z-10 w-full	py-3 shadow-lg">
      <Container>
        <div className="flex justify-between px-2 py-4    ">
          <div className=" text-xl font-bold font-serif  bg-white ">
            Diet plan
          </div>
          <nav>
            <ul className=" flex gap-3">
              <li>Home</li>
              <li class="flex items-center">
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>Product</li>
              <li>About Us</li>
              <li>Contact Us </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </li>
            </ul>
          </nav>
        </div>
      </Container>

      {/* <div class="container py-4">
          <div class="flex justify-between">
            <div class="logo"></div>
            <nav>
              <ul class="flex space-x-4">
                <li class="flex items-center">
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Home
                  </a>
                </li>
                <li class="flex items-center">
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Products
                  </a>
                </li>
                <li class="flex items-center">
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    About Us
                  </a>
                </li>
                <li class="flex items-center">
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            <div class="flex items-center space-x-4"></div>
          </div>
        </div> */}
    </div>
  );
}

export default Navbar