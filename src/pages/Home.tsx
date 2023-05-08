import React, { useEffect } from 'react';
import Hero_Img from '../assets/hero-img.jpg';
import { globalState } from '../store/globalStore';

import CategoryCard from '../components/clientComponents/CategoryCard';

const Home = () => {
  const { categories, getCategories } = globalState((state) => state);

  useEffect(() => {
    getCategories();
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

      <div className="default-container pt-10 pb-28">
        <h2 className="text-center text-4xl font-semibold mb-10">Categories</h2>
        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 place-items-center ">
          {categories.length > 0 &&
            categories.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  imageUrl={item.imageUrl}
                  categoryLetter={item._doc.letter}
                  categoryName={item._doc.name}
                  categoryId={item._doc._id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
