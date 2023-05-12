import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  imageUrl: string;
  id: string;
  name: string;
  price: number;
  oldPrice: number;
}

const ProductCard: React.FC<Props> = ({
  id,
  imageUrl,
  name,
  price,
  oldPrice,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick() {
    navigate(`/product/${id}`);
  }

  return (
    <div className="group relative bg-white rounded pt-2 pb-12 px-2 hover:drop-shadow-lg transition-all">
      <div className="flex items-center justify-center">
        {" "}
        <img src={imageUrl} alt="category product" />{" "}
      </div>
      <div className="mt-0  text-left text-lg ">
        <div className="">
          <p className="font-bold">{name}</p>
          <div className="flex items-center mb-4 h-">
            <p className="mr-8">
              $
              {price
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p className="line-through">
              $
              {oldPrice
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute  bottom-2 w-full mt-auto flex justify-center">
        <button
          onClick={handleClick}
          className="bg-dark_blue text-white hover:bg-blue-400 transition-all px-4 py-2 rounded-md"
        >
          See Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
