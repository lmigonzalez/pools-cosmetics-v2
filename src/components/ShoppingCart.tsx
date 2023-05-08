import React from 'react';
import Shopping_cart from '../assets/shopping-cart.png'
import { globalState } from '../store/globalStore';
const ShoppingCart = () => {
  const { cartItems } = globalState((state) => state);
  return (
    <div className="w-10 h-10 relative">
      <div className="bg-black text-white font-light text-base rounded-full w-6 h-6 flex items-center justify-center absolute -right-2 -top-1">
        <p className="">{cartItems.length > 9 ? 9 : cartItems.length}</p>
      </div>
      <img src={Shopping_cart} alt="shopping cart" />
    </div>
  );
};

export default ShoppingCart;
