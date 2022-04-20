import {
  ArrowNarrowRightIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import React from "react";

function Feed() {
  return (
    <div>
      <div className="relative">
        <img src="/images/feed.webp" alt="" className="object-cover h-auto" />
        <div className="grid grid-col-1 sm:grid-cols-2 gap-8 absolute top-2 sm:top-2 md:top-12 px-10 md:px-20  h-20">
          <div className="space-y-1 md:space-y-4">
            <p className="hidden sm:flex text-white text-md">
              🥬 Organic Store
            </p>
            <p className="text-xl  md:text-4xl font-san text-[#06623B] font-semibold text-[50px]">
              Organic Fresh Fruits
              <br /> For Your Health
            </p>
            <p className="hidden md:text-white text-sm  md:flex">
              A Fruit Is A Mature, Ripened Ovary, Along With The Contents Of The
              Ovary. The Ovary Is The Ovule-Bearing Reproductive Structure In
              The Plant Flower.
            </p>
            <div className="bg-[#06623B] hover:bg-black mt-10 rounded-3xl spacce-x-4 px-4 justify-center py-4 md:py-6 flex items-center h-5 md:h-12 w-[150px] md:w-[200px]">
              <p className="text-white">Shop Now</p>

              <ArrowNarrowRightIcon className="text-white ml-3 h-6" />
            </div>
          </div>
          <div className="relative">
            <div className="hidden absolute bg-[#06623B] left-20 top-17.5 md:top-40 md:flex align-center rounded-xl p-2 md:p-4">
              <div className="flex flex-col">
                <span className="text-[#FFD607] text-xl font-[500]  text-[21px]">
                  Pomegranate - Small
                </span>
                <span className="font-[600] text-[16px] text-white text-center">
                  UGx 50000
                </span>
              </div>

              <div className="ml-4 border-[5px] border-[#FFD607] rounded-full bg-[#06623B]">
                <button title="Add to chart">
                  <ShoppingBagIcon className="h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
