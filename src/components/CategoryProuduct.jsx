import React from "react";
import RatingStar from "./RatingStar";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";
import Container from "./Container";

const CategoryProuduct = ({ id, title, price, image, rating: { rate } }) => {
  const { addCart, carts } = useCartStore();
  const nav = useNavigate();

  const handleAdded = (event) => {
    event.stopPropagation();
    toast.error("Product is Already.");
  };
  const handleNavigate = () => {
    nav(`/detail/${id}`);
  };
  const handleAddCart = (event) => {
    event.stopPropagation();
    const newCart = { id: Date.now(), productId: id, quantity: 1 };
    addCart(newCart);
  };
  const isAddedToCart = carts?.some((el) => el.productId === id);
  return (
    
      <div
        onClick={handleNavigate}
        className=" m-1 content-center active:scale-90 duration-150 hover:scale-105 transition-all border border-indigo-300 p-3 flex rounded-md items-stretch w-[250px] flex-col "
      >
        <img src={image} alt={title} className="h-[120px] self-center" />
        <h3 className=" line-clamp-2 text-sm font-semibold text-slate-500">
          {title}
        </h3>
        <RatingStar rate={rate} className="self-start mt-auto" />
        <div className=" w-full flex justify-between mt-auto">
          <p className=" text-sm font-semibold text-nowrap text-slate-500">
            Price ${price}
          </p>
          {isAddedToCart ? (
            <button
              onClick={handleAdded}
              className=" text-nowrap text-sm shadow-md text-slate-50 transition-all duration-150  rounded-md py-2 px-4 capitalize bg-indigo-600 active:scale-90 "
            >
              Added
            </button>
          ) : (
            <button
              onClick={handleAddCart}
              className=" text-nowrap text-sm shadow-md text-slate-50 transition-all duration-150  rounded-md py-2 px-4 capitalize bg-indigo-400 hover:bg-indigo-500 active:scale-90 "
            >
              Add Cart
            </button>
          )}
        </div>
      </div>
   
  );
};

export default CategoryProuduct;
