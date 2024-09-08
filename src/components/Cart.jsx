import React from "react";
import useProductStore from "../store/useProductStore";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Cart = ({ id, productId, quantity }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();
  const product = products?.find((el) => el.id === productId);

  const cost = product?.price * quantity;

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are You sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success("Cart is Remove success.");
        }
      });
    }
  };
  return (
    <div className=" flex items-center justify-between px-4 py-2 border mt-5 rounded-md">
      <div className="w-3/4 flex items-center gap-x-3">
        <img src={product?.image} alt="" className="w-[60px]" />
        <div>
          <h4 className=" text-slate-500">{product?.title}</h4>
          <p className=" text-slate-500">$ ( {product?.price} )</p>
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-between ">
        <div className="flex flex-col items-center">
          <p className=" text-slate-500">Quantity</p>
          <div className="flex items-center gap-x-2">
            <button onClick={handleDecreaseQuantity}>
              <MinusIcon className=" rounded-xl size-8 p-1 bg-indigo-500 hover:bg-indigo-600 active:scale-90 duration-150 transition-all text-slate-50 cursor-pointer" />
            </button>
            <p className=" text-slate-500">{quantity}</p>
            <button onClick={handleIncreaseQuantity}>
              <PlusIcon className=" rounded-xl size-8 p-1 bg-indigo-500 hover:bg-indigo-600 active:scale-90 duration-150 transition-all text-slate-50 cursor-pointer" />
            </button>
          </div>
        </div>
        <p className=" text-slate-500">${cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;