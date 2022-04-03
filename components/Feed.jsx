import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import React from "react";

function Feed() {
  return (
    <div className="bg-[url('/images/feed.webp')] h-[100%]">
      <div>
        <p className="text-6xl">Organic Fresh Fruits For Your Health</p>
        <p>
          A Fruit Is A Mature, Ripened Ovary, Along With The Contents Of The
          Ovary. The Ovary Is The Ovule-Bearing Reproductive Structure In The
          Plant Flower.
        </p>
        <div className="bg-[#06623B] flex space-x-4 h-10">
          <p>Shop Now</p>

          <ArrowNarrowRightIcon className="text-white h-4" />
        </div>
      </div>
    </div>
  );
}

export default Feed;
