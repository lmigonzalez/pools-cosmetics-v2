import React from 'react';
import Hero_Img from '../assets/hero-img.jpg';
const Home = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${Hero_Img})` }}
        className="w-full h-auto py-48 bg-cover bg-bottom flex flex-col justify-center items-center relative"
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
      <div className='h-10 bg-green-400'>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
