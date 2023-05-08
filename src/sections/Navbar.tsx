import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { BsSearch } from 'react-icons/bs';
import { globalState } from '../store/globalStore';

import ShoppingCart from '../components/ShoppingCart';
const Navbar = () => {
  const { products } = globalState((state) => state);
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);

  function handleCallClick() {
    window.location.href = `tel: ${786 - 879 - 4236}`;
  }

  function onProductClick(id) {
    navigate(`/product/${id}`);
    setShowSearchBar(false);
    setSearchProducts([]);
    setInputValue('');
  }
  function handleSearchBar(e) {
    setInputValue(e.target.value);
    searchValues(inputValue);
    setSearchProducts(() => searchValues(e.target.value));
    console.log(searchProducts);
  }

  function searchValues(query) {
    let array = [];

    products.map((product) => {
      let newQuery = query.split(' ').join('');
      let newProduct = product._doc.name.split(' ').join('');

      if (
        newProduct.toLowerCase().trim().includes(newQuery.toLowerCase().trim())
      ) {
        array.push(product);
      }
      if (query.length === 0) {
        array = [];
      }
    });
    return array;
  }

  console.log(showSearchBar);
  return (
    <div className="relative">
      <nav className="absolute top-0 left-0 z-30 w-full flex flex-col bg-white mb-12">
        <div className="flex justify-between items-center py-2 px-4 w-full">
          <Link to="/">
            <img src={Logo} alt="" width={150} height={150} />
          </Link>
          <ul className="flex items-center text-xl font-semibold space-x-6">
            <li>
              <NavLink to="/categories"> Shop </NavLink>
            </li>
            <li>
              <NavLink to="/about"> About </NavLink>
            </li>
            <li>
              <NavLink to="/contact"> Contact </NavLink>
            </li>

            <li>
              <button onClick={handleCallClick}>(305) 875-7466</button>
            </li>
            <li>
              <button
                onClick={() => setShowSearchBar(!showSearchBar)}
                className=" w-0 mr-4 hover:scale-110 transition-all"
              >
                {' '}
                <BsSearch />{' '}
              </button>
            </li>

            <li>
              <NavLink to="/contact">
                {' '}
                <ShoppingCart />{' '}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {showSearchBar && (
        <div
          className={`flex flex-col items-center m-auto px-4 mt-4 w-full  absolute top-14 z-20`}
        >
          <input
            onChange={handleSearchBar}
            className="px-4 rounded-full h-10 bg-white shadow-2xl w-[700px] max-w-full"
            type="text"
            value={inputValue}
            placeholder="Search"
          />
          {searchProducts.length > 0 && (
            <ul className="bg-white mt-4">
              {searchProducts.map((product, index) => {
                return (
                  <li
                    onClick={() => onProductClick(product._doc._id)}
                    key={index}
                    className={`flex space-x-4 items-center text-lg my-2 cursor-pointer ${
                      index === searchProducts.length - 1
                        ? 'border-none'
                        : 'border-b-2'
                    } `}
                  >
                    {' '}
                    <img
                      src={product.pictures[0].fileUrl}
                      alt={product._doc.name + 'image'}
                      width={40}
                    />{' '}
                    <p>{product._doc.name}</p> <p>${product._doc.price}</p>{' '}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
