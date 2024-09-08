import React from "react";
import CategoryProduct from "./CategoryProuduct";
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/useCategoryStore";
import Container from "./Container";

const CategorySection = () => {
  const { products } = useProductStore();
  const { activeCategoryTitle } = useCategoryStore();
  // console.log(activeCategoryTitle);

  const filterProducts =
    activeCategoryTitle === "all"
      ? products
      : products?.filter((el) => el.category === activeCategoryTitle);
  return (
    <Container className={"space-x-3"} >
      <div className=" w-full grid sm:grid-cols-2 md:gap-1 md:grid-cols-3 lg:grid-cols-4  mt-7 mx-auto m-1">
        {filterProducts.map((product) => (
          <CategoryProduct key={filterProducts.id} {...product} />
        ))}
      </div>
    </Container>
  );
};

export default CategorySection;
