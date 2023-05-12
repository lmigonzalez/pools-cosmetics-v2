import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import CategoryCard from "../components/clientComponents/CategoryCard";
import BackButton from "../components/globalComponents/BackButton";
import { globalState } from "../store/globalStore";
const Categories = () => {
  const { categories } = globalState();
  // pagination
  const [pageNumber, setPageNumber] = useState(0);

  const categoriesPerPage = 12;
  const pagesVisited = pageNumber * categoriesPerPage;

  const selectedCategories = categories
    .slice(pagesVisited, pagesVisited + categoriesPerPage)
    .map((item, index) => {
      return (
        <CategoryCard
          imageUrl={item.imageUrl}
          categoryLetter={item._doc.letter}
          categoryName={item._doc.name}
          categoryId={item._doc._id}
          key={index}
        />
      );
    });

  const pageCount = Math.ceil(categories.length / categoriesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="default-container py-28">
      <BackButton />
      <div>
        {selectedCategories.length ? (
          <div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6">
              {selectedCategories}
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
                "flex items-center justify-center space-x-4 mt-8 text-[20px]"
              }
              previousLinkClassName={""}
              nextLinkClassName={""}
              disabledClassName={"text-[#D8D8D8]"}
              activeClassName={"bg-blue-400 text-white px-2 py-[2px] rounded"}
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

export default Categories;
