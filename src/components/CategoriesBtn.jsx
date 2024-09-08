import React from "react";
import useCategoryStore from "../store/useCategoryStore";
import Container from "./Container";

const CategoriesBtn = ({ id, title, isActive }) => {
  const { activeCategory } = useCategoryStore();

  const handleCategory = () => {
    activeCategory(id);
  };
  return (
    <button
      onClick={handleCategory}
      className={` text-nowrap text-sm  text-slate-50 shadow-md ${
        isActive ? "bg-indigo-900" : " bg-indigo-400"
      } transition-all duration-150  rounded-md py-2 px-4 capitalize hover:bg-indigo-500 active:scale-105 
        `}
    >
      {title}
    </button>
  );
};

export default CategoriesBtn;
