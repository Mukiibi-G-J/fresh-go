import React from "react";
import {
  ChevronDownIcon,
  CogIcon,
  HomeIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <nav className="bg-white  ">
      <div className="bg-[#06623B] hidden px-10 py-4 items-center md:flex justify-between">
        <div>
          <span className="text-white  flex items-center text-sm">
            <CogIcon className="h-5" />
            Get Special Deal today! Get 3 products for 2. Limited offer. Read
            <a href=""> More</a>
          </span>
        </div>
        <div className="flex space-x-2">
          <div className="flex">
            <span className="text-white text-sm"> Uganda (UGX 🇺🇬 )</span>

            <ChevronDownIcon className="text-white h-4" />
          </div>

          <div className="flex">
            <span className="text-white text-sm">English</span>

            <ChevronDownIcon className="text-white h-4" />
          </div>
        </div>
      </div>
      <div className=" mx-w-[960px] pt-[22px] pb-2 sm:p-[22px] sm:px-10 md:pr-5 xl:px-20 mb-0  px-3 ">
        <div className="flex justify-between items-center">
          <div className="flex justify-start">
            <a href="#" className="flex items-center">
              <img
                src="/images/logo-fresh.png"
                className="mr-3 h-8 sm:h-10 "
                alt="Flowbite Logo"
              />
            </a>
          </div>

          <div className="hidden sm:flex items-center rounded-3xl h-10  bg-gray-100">
            <input
              type="search"
              className=" w-[250px] md:w-[400px] h-6 ml-2 items-center xl:w-[550px] bg-gray-100  outline-none placeholder-gray-500 flex-shrink"
              placeholder="Search"
              aria-label="Search"
            />

            <span className=" flex items-center ">
              <SearchIcon className="h-4 mr-3" />
            </span>
          </div>

          <div className="flex items-center space-x-3 justify-end ">
            <div className="hidden xl:flex  flex-col space-x-3   justify-center">
              <span className="text-[#06623B] "> 610-403-403</span>
              <span className="text-sm ">support 24/7</span>
            </div>
            <div className="md:pr-6">
              <UserIcon className="h-5  text-gray-800" />
              <span className="text-sm text-gray-800">Profile</span>
            </div>
            {/* <-----responsive build---> */}
            <div className="sm:hidden">
              <ShoppingBagIcon className="h-6 text-gray-700 flex-inline font-light" />
              <span className="text-sm  text-gray-700 ">Chart</span>
            </div>
            {/* <----end--responsive--> */}

            <div className="bg-[#A8C73A] h-[45px] rounded-xl p-1 hidden  sm:flex">
              <ShoppingBagIcon className="h-8 text-[#06623B]" />
              <div className="flex flex-col">
                <span className="text-sm text-[#06623B]">My chart</span>
                <span className="text-white text-sm">$000</span>
              </div>

              <ChevronDownIcon className="text-white h-4" />
            </div>
          </div>
        </div>
      </div>
      {/* <------mobile design--> */}
      <div className="mb-5 mt-0 ml-2 sm:hidden pl-5   flex mx-10 flex-shrink items-center rounded-3xl h-10  bg-gray-100">
        <input
          type="search"
          className="h-6 ml-1 w-[100px] items-center flex-shrink  bg-gray-100  outline-none placeholder-gray-500"
          placeholder="Search"
          aria-label="Search"
        />

        <span className=" flex items-center absolute right-12">
          <SearchIcon className="h-4" />
        </span>
      </div>
      {/* <------mobile end--> */}
      <div className="hidden xl:flex items-center px-20 py-2 justify-between">
        <div className="flex">
          <div className="bg-[#06623B] p-3 space-x-5 rounded-3xl flex items-center">
            <HomeIcon className="text-white h-4" />
            <p className="text-white">Show Categories</p>
            <ChevronDownIcon className="text-white h-4" />
          </div>
          <div className="flex">
            <ul className="flex items-center space-x-3 ml-5">
              <li className="text-[#83838c] cursor-pointer hover:underline">
                Top Product
              </li>
              <li className="text-[#83838c] cursor-pointer hover:underline">
                Tomato
              </li>
              <li className="text-[#83838c] cursor-pointer hover:underline">
                Orange
              </li>
              <li className="text-[#83838c] cursor-pointer hover:underline">
                Blog
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="flex items-center space-x-3">
            <li className="text-[#83838c] cursor-pointer hover:underline">
              Sales
            </li>
            <li className="text-[#83838c] cursor-pointer hover:underline">
              Special Offers
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
