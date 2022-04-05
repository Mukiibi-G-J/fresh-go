import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import React from "react";

function Feed() {
  return (
    <div>
      <div className="relative">
        <img src="/images/feed.webp" alt="" />
        <div className="grid grid-cols-2 gap-8 absolute top-12 px-20 h-20">
          <div>
            <p className="text-6xl font-san text-[#06623B] font-semibold text-[50px]">
              Organic Fresh Fruits For Your Health
            </p>
            <p className="text-white">
              A Fruit Is A Mature, Ripened Ovary, Along With The Contents Of The
              Ovary. The Ovary Is The Ovule-Bearing Reproductive Structure In
              The Plant Flower.
            </p>
            <div className="bg-[#06623B] mt-10 rounded-3xl spacce-x-4 px-4 justify-center py-6 flex items-center h-12 w-[200px]">
              <p className="text-white">Shop Now</p>

              <ArrowNarrowRightIcon className="text-white ml-3 h-6" />
            </div>
          </div>
          <div>
            pagamoe
            <span>uGx 50000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
