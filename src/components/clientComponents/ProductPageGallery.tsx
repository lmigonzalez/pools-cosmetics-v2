import React, { useState, useEffect } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

const ProductGallery = ({ imagesUrl }) => {

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  let [galleryImage, setGalleryImage] = useState(imagesUrl);

  function nextImg() {
    if (currentImgIndex === galleryImage.length - 1) {
      setCurrentImgIndex(0);
      return;
    }
    setCurrentImgIndex(currentImgIndex + 1);
  }

  function prevImg() {
    if (currentImgIndex === 0) {
      setCurrentImgIndex(galleryImage.length - 1);
      return;
    }
    setCurrentImgIndex(currentImgIndex - 1);
  }

  function setCurrentActiveImg(current) {
    setCurrentImgIndex(current);
  }
  //   let demoImages = generateImages();
  return (
    <div className="md:w-1/2">
      <div className="relative text-transparent  hover:text-gray-200 transition-all">
        <div className="flex items-center justify-between  text-4xl font-bold absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {' '}
          <button
            onClick={prevImg}
            className="w-12 flex justify-center items-center "
          >
            {' '}
            <BsFillCaretLeftFill />{' '}
          </button>{' '}
          <button
            onClick={nextImg}
            className="w-12 flex justify-center items-center "
          >
            {' '}
            <BsFillCaretRightFill />{' '}
          </button>{' '}
        </div>
        <img src={galleryImage[currentImgIndex].url || galleryImage[currentImgIndex].fileUrl} alt="product image" />
      </div>

      <div className={`flex justify-start mt-4 space-x-1 w-full h-24`}>
        {galleryImage.map((img, index) => {
          return (
            <img
              key={index}
              src={img.url || img.fileUrl}
              alt="product image"
              // width={100}
              // height={100}
              className={` cursor-pointer h-20 w-auto`} 
              onClick={() => setCurrentActiveImg(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
