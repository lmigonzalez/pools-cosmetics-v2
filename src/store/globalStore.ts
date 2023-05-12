import crete, { create } from 'zustand';
import { getCategories, getProducts } from '../api/api';
import { z } from "zod";
import { responseCategorySchema, responseProductSchema } from '../Schemas/responses';


interface state{
  categories: z.infer<typeof responseCategorySchema>,
  products: z.infer<typeof responseProductSchema>
  getCategories: () => void,
  getProducts: () => void
}
export const globalState = create<state>()((set) => ({
  categories: [],
  products: [],
  cartItems: [],
  getCategories: async () => {
    const res = await getCategories();
    set({ categories : res});
  },

  getProducts: async () => {
    const res = await getProducts();
    set({products: res})
  },
}));

