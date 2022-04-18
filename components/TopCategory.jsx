import React from "react";
import { data } from "../data/data";

function TopCategory() {
  return (
    <div className="p-20">
      <h1 className="text-2xl text-[#06623B] p  font-[500]">Top Category</h1>
      <div className="flex flex-wrap space-x-8">
        {data.map((data) => (
          <>
            <div className="shadow-lg space-y-4 py-8 px-10 rounded-2xl  bg-[#f1f1f1]">
              <img src={data.image} alt="" />
              <p className="font-[18px] text-[500] text-[rgb(6, 98, 59)]">
                {data.name}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default TopCategory;
