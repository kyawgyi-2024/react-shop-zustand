import React from "react";
import Container from "../components/Container";
import { Link, useParams } from "react-router-dom";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import RatingStar from "../components/RatingStar";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { products } = useProductStore();
  const { addCart, carts } = useCartStore();
  const { id } = useParams();

  const handleAdded = (event) => {
    event.stopPropagation();
    toast.error('Product is Already.')
  };
  const product = products?.find((el) => el.id === parseInt(id));

  // console.log(carts);

  const handleAddCart = (event) => {
    event.stopPropagation();
    const newCart = { id: Date.now(), productId: parseInt(id), quantity: 1 };
    addCart(newCart);
  };
  const isAddedToCart = carts?.some((el) => el.productId === parseInt(id));

  return (
    <Container className="mt-10">
      <Link to={"/"} className="p-2 text-slate-400">
        Home
      </Link>
      /
      <Link to={"/"} className="text-slate-500 p-2">
        Detail
      </Link>
      <div className=" mt-3 flex gap-x-5 border rounded-md md:px-24 px-2 items-center py-4 md:flex-row flex-col gap-y-4 ">
        <div className="md:w-1/2 w-full flex justify-center items-center flex-col gap-y-4">
          <img
            src={product.image}
            alt={product.title}
            className="md:h-[280px] h-[160px]"
          />
          <div className=" flex gap-3 justify-center items-center ">
            <img src={product.image} className="h-[80px]" alt={product.title} />
            <img
              src={product.image}
              className="h-[90px]"
              alt={product.title}
            />
            <img
              src={product.image}
              className="h-[100px]"
              alt={product.title}
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-y-2 ">
          <h3 className=" md:line-clamp-2 md:text-4xl font-bold text-slate-500">
            {product.title}
          </h3>
          <p className="px-3 py-2 bg-indigo-200 text-slate-100 w-fit text-md rounded">
            {product.category}
          </p>
          <p className=" text-md leading-6 tracking-wider">
            {product.description}
          </p>
          <div>
            <RatingStar
              rate={product.rating.rate}
              className="self-start mt-auto mb-3"
            />
            <div className=" w-full flex justify-between mt-auto">
              <p className=" text-md  text-nowrap text-slate-500">
                Price ( ${product.price} )
              </p>
              {isAddedToCart ? (
                <button
                  onClick={handleAdded}
                  className=" text-nowrap text-sm shadow-md text-slate-50 transition-all duration-150  rounded-md py-2 px-4 capitalize bg-indigo-400 hover:bg-indigo-600 active:scale-90 "
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
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;