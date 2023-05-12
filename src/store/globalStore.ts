import crete, { create } from 'zustand';
import { getCategories, getProducts } from '../api/api';
import { string, z } from "zod";
import Categories from '../pages/Categories';

const categories = z.object({
  id: z.string(),
  name: z.string(),
  letter: z.string(),
  date: z.date(),
});
const img = z.object({ img: z.string() })
const catWithImg = categories.merge(img)

interface state{
  categories: (z.infer<typeof catWithImg>)[],
  getCategories: () => void,   
}
export const globalState = create<state>()((set) => ({
  categories: [],
  products: [],
  cartItems: [],
  getCategories: async () => {
    const res = await getCategories();
    set({ categories : res.data.map((item) => catWithImg.parse({img: item.data.imageUrl,...item.data._doc}))});
  },

  getProducts: async () => {
    const res = await getProducts();
  },
}));


interface BearState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))