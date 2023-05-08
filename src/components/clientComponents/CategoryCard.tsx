import React from 'react';
import { useNavigate } from 'react-router-dom';
interface Props {
  imageUrl: string;
  categoryLetter: string;
  categoryName: string;
  categoryId: string;
}

const CategoryCard: React.FC<Props> = ({
  imageUrl,
  categoryLetter,
  categoryName,
  categoryId,
}) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/categories/${categoryId}`);
  }
  return (
    <div className="relative h-80 w-full max-w-[300px] bg-white rounded hover:drop-shadow-lg transition-all">
      <div className="absolute top-0 right-0 px-4 py-2 rounded-tr bg-dark_blue text-white">
        {categoryLetter}
      </div>
      <div className="flex justify-center w-full h-3/5">
        <img src={imageUrl} alt="" className="w-auto h-auto" />
      </div>
      <div className="relativeh-2/5 flex justify-center items-start">
        <p className="mt-4 text-xl">{categoryName}</p>
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
"
        >
          <button
            onClick={handleClick}
            className="bg-dark_blue text-white hover:bg-blue-400 transition-all px-4 py-2 rounded-md"
          >
            Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
