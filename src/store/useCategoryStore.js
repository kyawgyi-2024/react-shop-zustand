import { create } from "zustand";

const useCategoryStore = create((set) => ({
  activeCategoryTitle: "all",
  categories: [
    { id: 0, title: "all", isActive: true },
    { id: 1, title: "electronics", isActive: false },
    { id: 2, title: "jewelery", isActive: false },
    { id: 3, title: "men's clothing", isActive: false },
    { id: 4, title: "women's clothing", isActive: false },
  ],
  activeCategory: (categoryId) =>
    set((state) => {
      const activeCategoryTitle =
        state.categories.find((el) => el.id === categoryId)?.title || "all";

      return {
        categories: state.categories.map((el) => ({
          ...el,
          isActive: el.id === categoryId,
        })),
        activeCategoryTitle,
      };
    }),
}));

export default useCategoryStore;