import crete, { create } from 'zustand';
import { getCategories, getProducts } from '../api/api';
interface State {
  categories: object[];
  products: object[];
  cartItems: object[];
  getCategories: () => Promise<void>;
  getProducts: () => Promise<void>;
}

export const globalState = create<State>((set) => ({
  categories: [],
  products: [],
  cartItems: [],
  getCategories: async () => {
    const res = await getCategories();
    set({ categories: res.data });
  },

  getProducts: async () => {
    const res = await getProducts();
    set({ products: res.data });
  },
}));
