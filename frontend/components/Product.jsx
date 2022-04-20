import {
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
  StarIcon,
} from "@heroicons/react/outline";
import React from "react";
import { useStateValue } from "../context/StateProvider";

function Product({ id, title, description, image, price }) {
  const [{}, dispatch] = useStateValue();
  const addBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        description: description,
      },
    });
  };
  return (
    <>
      <div className="shadow-lg w-[300px] border-[#E9E9E9] p-4 space-y-3 rounded-2xl">
        <img src={image} height={268} width={223} alt="" />

        <div className=" flex align-center justify-between">
          <p className=" text-[#06623B] bg-[#FFD607]  rounded-xl px-2  ">
            Fruits
          </p>

          <div className="flex align-center">
            <span className="flex">
              <StarIcon className="h-4 text-[#DDDDDD]" />
              <StarIcon className="h-4 text-[#DDDDDD]" />
              <StarIcon className="h-4 text-[#DDDDDD]" />
              <StarIcon className="h-4 text-[#DDDDDD]" />
            </span>
            <span>(0)</span>
          </div>
        </div>
        <div>
          <p className="text-[#06623B] font-bold text-[600]">{description}</p>
        </div>
        <div className="flex align-center justify-between">
          <span className="text-sm text-bold bg-[#FFD607] px-2 rounded-xl">
            2kg
          </span>
          <div className="flex space-x-2">
            <MinusCircleIcon className="h-5" />
            <span>1</span>
            <PlusCircleIcon className="h-5" />
          </div>
        </div>
        <div className="border-t-2 border-t-gray-500 rounded-md">
          <p className="text-bold text-[#06623B] ">UGX{price}</p>
          <div
            onClick={addBasket}
            className="flex align-center justify-center space-x-4 px-2 py-2 bg-[#FFD607] hover:bg-[#06623B] rounded-full"
          >
            <p>Add Chart</p>
            <ShoppingBagIcon className="h-5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
