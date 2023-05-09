import crete, { create } from 'zustand';
import { getCategories, getProducts } from '../api/api';
import { z } from "zod";
import Categories from '../pages/Categories';

const categories = z.object({
  id: z.string(),
  name: z.string(),
  letter: z.string(),
  date: z.date(),
});



interface state{
  categories:z.infer<typeof categories>,
}
export const globalState = create<state>()((set) => ({
  categories: {id:"default", name:"DefaultName", letter:"Def",date:new Date(0)},
  products: [],
  cartItems: [],
  asd:categories,
  getCategories: async () => {
    const res = await getCategories();
    set({ categories: categories.parse(res.data._doc) });
  },

  getProducts: async () => {
    const res = await getProducts();
    set({ products: res.data });
  },
}));
