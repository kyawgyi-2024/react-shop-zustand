import React from "react";
import CategorieBtn from "./CategoriesBtn";
import useCategoryStore from "../store/useCategoryStore";
import Container from "./Container";

const CategoriesBtnGroup = () => {
  const { categories } = useCategoryStore();
  return (
    <Container>
      <div className=" flex overflow-visible gap-x-3">
        {categories.map((category) => (
          <CategorieBtn key={category.id} {...category} />
        ))}
      </div>
    </Container>
  );
};

export default CategoriesBtnGroup;
