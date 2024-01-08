import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate(`/product/${5}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
        <div className="h-[20rem]">
          <img
            className="h-full w-full object-cover object-center"
            src={product.imageUrl}
            alt=""
          />
        </div>

        <div className="textPart bg-white p-3">
          <div>
            <p className="font-bold opacity-60">{product.brand}</p>
            <p>{product.title}</p>
            <p className="text-gray opacity-60">{product.color}</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">Rs.{product.discountedPrice}</p>
            <p className="line-through opacity-50">Rs.{product.price} </p>
            <p className="text-green-600 semibold">
              {product.discountPersent}% OFF
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
