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
    <nav className="bg-white ">
      <div className="bg-[#06623B] px-10 py-4 items-center flex justify-between">
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
      <div className=" mx-w-[960px] p-[22px] px-20   mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex justify-start">
            <a href="#" className="flex items-center">
              <img
                src="/images/logo-fresh.png"
                className="mr-3 h-6 sm:h-10"
                alt="Flowbite Logo"
              />
            </a>
          </div>
          <div className="flex items-center rounded-3xl h-10  bg-gray-100">
            <input
              type="search"
              className=" h-6 ml-2 items-center w-[550px] bg-gray-100  outline-none placeholder-gray-500 flex-shrink"
              placeholder="Search"
              aria-label="Search"
            />

            <span className=" flex items-center ">
              <SearchIcon className="h-4 mr-3" />
            </span>
          </div>

          <div className="flex items-center space-x-3 justify-end ">
            <div className="flex flex-col space-x-3 justify-center">
              <span className="text-[#06623B]"> 610-403-403</span>
              <span className="text-sm ">support 24/7</span>
            </div>
            <div>
              <UserIcon className="h-5" />
              <span className="text-sm">Profile</span>
            </div>
            <div className="bg-[#A8C73A] h-[45px] rounded-xl p-1 flex">
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
      <div className="flex items-center px-20 py-2 justify-between">
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
