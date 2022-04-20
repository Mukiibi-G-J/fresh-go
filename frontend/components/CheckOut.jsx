import React from "react";
import { useStateValue } from "../context/StateProvider";

function CheckOut({ id, image, title, description, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBakset = () => {
    dispatch({
      type: "Remove_FROM_BASKET",
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
    <div>
      <>
        <div className=" flex align-center  bg-white p-5 shadow-lg rounded-2xl">
          <img src={image} alt="" height={268} width={223} />
          <div className="mt-10 space-y-2">
            <p className="text-bold text-black">{title}</p>
            <p className="text-bold text-black">{description}</p>

            <p>UGX:{price}</p>
            <button
              onClick={removeFromBakset}
              className="text-white bg-[#FFD607] rounded-md w-15"
            >
              Remove
            </button>
          </div>
        </div>
      </>
    </div>
  );
}

export default CheckOut;
