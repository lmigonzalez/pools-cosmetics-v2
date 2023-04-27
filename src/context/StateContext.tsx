import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { getCategories, getProducts } from '../api/api';

type ThemeContextType = {
  cartItems: any[];
  categories: any[];
  products: any[];
  productsArray: any[];
  orders: any[];
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
  setCategories: React.Dispatch<React.SetStateAction<any[]>>;
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
  setProductsArray: React.Dispatch<React.SetStateAction<any[]>>;
  setOrders: React.Dispatch<React.SetStateAction<any[]>>;
};

type ThemeProviderProps = {
  children: ReactNode;
  saveCartInLocalStorage: () => void;
};

const Context = createContext<ThemeContextType>({} as ThemeContextType);

export const StateContext: React.FC<ThemeProviderProps> = ({
  children,
  saveCartInLocalStorage,
}) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([1, 2,3]);
  const [products, setProducts] = useState<any[]>([]);
  const [productsArray, setProductsArray] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);

//   getCategories()
//     .then((res) => {
//       console.log(res.data);
//       setCategories(res?.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   getProducts()
//     .then((res) => {
//       console.log(res);
//       setProducts(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

  useEffect(() => {
    saveCartInLocalStorage();
  }, [cartItems]);

  return (
    <Context.Provider
      value={{
        cartItems,
        categories,
        products,
        productsArray,
        orders,
        setCartItems,
        setCategories,
        setProducts,
        setProductsArray,
        setOrders,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
