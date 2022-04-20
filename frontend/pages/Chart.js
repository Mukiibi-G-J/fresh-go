import React from "react";
import CheckOut from "../components/CheckOut";
import Header from "../components/Header";
import { useStateValue } from "../context/StateProvider";

function Chart() {
  const [{ basket }] = useStateValue();
  // console.log(basket);

  return (
    <div className=" ">
      <Header />
      {/* <div className="h-20 bg-cyan-500 ">
        {/* <img src="/images/add.png" className="object-contain" alt="" /> */}
      {/* </div> */}
      <div className="p-20 bg-gray-400 space-y-4">
        {basket.length === 0 ? (
          <p className="text-2xl font-bold  "> Your Chart is empty</p>
        ) : (
          <p className="text-2xl font-bold  "> Your Shoping Chart</p>
        )}
        {basket.map((item) => (
          <CheckOut
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Chart;
