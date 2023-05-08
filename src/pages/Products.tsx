import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { globalState } from '../store/globalStore';
import ProductCard from '../components/clientComponents/ProductCard';
import BackButton from '../components/globalComponents/BackButton';
import ReactPaginate from 'react-paginate';
const Products = () => {
  const { products } = globalState((state) => state);
  const location = useLocation();
  const categoryId = location.pathname.split('/').at(-1).split('-').at(0);
  const productsByCategory = products.filter(
    (item) => item?._doc?.categoryId === categoryId
  );

  // pagination
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 4;
  const pagesVisited = pageNumber * productsPerPage;

  const selectedProducts = productsByCategory
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item, index) => {
		console.log(item)
    //   return <ProductCard item={item} index={index} key={index} />;
    });

  const pageCount = Math.ceil(productsByCategory.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return <div>Products</div>;
};

export default Products;
