import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from '../components/globalComponents/BackButton';
import ReactPaginate from 'react-paginate';
import { globalState } from '../store/globalStore';
import ProductCard from '../components/clientComponents/ProductCard';
const CategoryProducts = () => {
  const { products } = globalState((state) => state);
  const location = useLocation();
  const categoryId = location.pathname.split('/').at(-1).split('-').at(0);
  const productsInCategory = products.filter(
    (item) => item._doc?.categoryId === categoryId
  );

  // pagination
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;

  const selectedProducts = productsInCategory
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item, index) => {
   
      return (
        <ProductCard
          imageUrl={item?.pictures[0]}
          id={item?._doc?._id}
          name={item?._doc?.name}
          price={item?._doc?.price}
          oldPrice={item?._doc?.oldPrice}
          key={index}
        />
      );
    });

  const pageCount = Math.ceil(productsInCategory.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="default-container py-28">
      <BackButton />
      <div>
        {selectedProducts.length ? (
          <div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6">
              {selectedProducts}
            </div>
            <ReactPaginate
              previousLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              nextLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={
                'flex items-center justify-center space-x-4 mt-8 text-[20px]'
              }
              previousLinkClassName={''}
              nextLinkClassName={''}
              disabledClassName={'text-[#D8D8D8]'}
              activeClassName={'bg-blue-400 text-white px-2 py-[2px] rounded'}
            />
          </div>
        ) : (
          <p className="text-xl mt-8">
            There are currently no products in this category
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
