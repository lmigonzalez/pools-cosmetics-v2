import React, { useState, useEffect } from 'react';
import Hero_Img from '../assets/hero-img.jpg';
import { getCategories } from '../api/api';

import { useStateContext } from '../context/StateContext';

const Home = () => {
  const {categories, setCategories, setProducts} = useStateContext()
  console.log(categories)

  useEffect(() => {
    getCategories()
    .then((res) =>{
      console.log(res)
      setCategories(res.data)

    }).catch((err) =>{
      console.log(err)
    })
  }, []);



  return (
    <div>
      <div
        style={{ backgroundImage: `url(${Hero_Img})` }}
        className="w-full h-auto py-48 bg-cover bg-bottom flex flex-col justify-center items-center relative mb-20"
      >
        <div className="bg-white bg-opacity-60 backdrop-blur-sm py-10 px-4 mx-4  text-center flex items-center flex-col justify-center shadow-2xl rounded">
          <h2 className="text-2xl mb-4 font-bold">
            Dive into Luxurious Pool Care with Pool Cosmetic
          </h2>
          <p className="text-lg font-bold">
            Experience the Beauty of Crystal Clear Waters with Our Premium Pool
            Cosmetics
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-center text-4xl font-semibold mb-10">Categories</h2>
        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 place-items-center ">
          {categories.map((item, index) => {
            return (
              <div className="relative h-80 w-full max-w-[300px] bg-white rounded hover:drop-shadow-lg transition-all">
                <div className="absolute top-0 right-0 px-4 py-2 rounded-tr bg-dark_blue text-white">
                  A
                </div>
                <div className="flex justify-center w-full h-3/5">
                  <img src={item.imageUrl} alt="" className="w-auto h-auto" />
                </div>
                <div className="relative bg-white h-2/5 flex justify-center items-start">
                  <p className="mt-4 text-xl">Category Name</p>
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
"
                  >
                    <button className="bg-dark_blue text-white px-4 py-2 rounded-md">
                      Products
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
