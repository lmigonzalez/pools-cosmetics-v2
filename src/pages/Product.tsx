import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductGallery from '../components/clientComponents/ProductPageGallery';
import BackButton from '../components/globalComponents/BackButton';
import { BsDash, BsPlus } from 'react-icons/bs';
import { globalState } from '../store/globalStore';
import { fetchProductById } from '../api/api';

const Product = () => {
  const { products } = globalState((state) => state);
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);

  useEffect(() => {
    getProductById();
  }, []);

  async function getProductById() {
    const productId = location.pathname.split('/').at(-1);

    const res = await fetchProductById(productId);
    let productFound;

    if (products.length) {
      productFound = products.find(
        (item) => item?._doc?._id === location.pathname.split('/').at(-1)
      );
      setProduct(productFound);
    }

    if (!productFound) {
      const res = await fetchProductById(location.pathname.split('/').at(-1));
      setProduct(res.data);
    }
  }

  function handleQty(action) {
    if (action === 'add') {
      setQty(qty + 1);
    }
    if (action === 'subtract' && qty > 1) {
      setQty(qty - 1);
    }
  }

  function handleQtyInput(e) {
    if (e.target.value == '') {
      e.target.value = 0;
    }
    setQty(parseInt(e.target.value));
  }

  function addToCart() {
    console.log(product);
    let productObj = {
      productId: product._doc._id,
      productName: product._doc.name,
      productPrice: product._doc.price,
      productImageUrl: product.imagesUrl
        ? product.imagesUrl[0].url
        : product.pictures[0].fileUrl,
      quantity: qty,
    };

    if (productObj.qty < 0) return;

    let itemExist = false;

    const updatedCart = cartItems.map((item) => {
      if (item.productId === productObj.productId) {
        item.quantity += productObj.quantity;
        itemExist = true;
      }
      return item;
    });

    if (!itemExist) {
      updatedCart.push(productObj);
    }

    setCartItems(updatedCart);

    setQty(0);
  }

  function goToCheckOut() {
    navigate('/checkouts');
  }

  return (
    <div className="default-container py-28">
      <BackButton />
      {Object.keys(product).length && (
        <div className="w-[700px] max-w-full m-auto">
          <div className="flex flex-col md:flex-row mt-10">
            <ProductGallery imagesUrl={product.imagesUrl || product.pictures} />
            <div className="md:w-1/2  ml-8 min-h-full  flex flex-col ">
              <p className="text-start text-2xl mb-8">{product._doc.name}</p>
              <div className="flex text-2xl mb-4">
                <p className="mr-8 font-bold">
                  $
                  {product._doc.price
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
                <p className="text-gray-500 font-light line-through">
                  $
                  {product._doc.oldPrice
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              </div>
              <div className="text-start text-xl mt-4 ">
                <p>Quantity:</p>
                <div className=" flex items-center mt-2 mb-4 bg-transparent border-black border-2 border-solid w-min rounded">
                  <button
                    onClick={() => handleQty('subtract')}
                    className="w-10 h-10 flex justify-center items-center"
                  >
                    <BsDash />
                  </button>
                  <input
                    type="text"
                    name="quantity"
                    value={qty}
                    onChange={handleQtyInput}
                    className="w-14 px-1 rounded text-center bg-transparent"
                  />
                  {/* <p className='text-center'>{qty}</p> */}
                  <div className="flex text-2xl font-extrabold">
                    <button
                      onClick={() => handleQty('add')}
                      className="w-10 h-10 flex justify-center items-center"
                    >
                      <BsPlus />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-start mt-4">
                <button
                  disabled={qty > 0 ? false : true}
                  onClick={addToCart}
                  className="px-4 py-2 bg-dark_blue mr-8  text-white text-lg cursor-pointer font-semibold rounded hover:bg-blue-400 transition-all"
                >
                  Add To Cart
                </button>
                <button
                  onClick={goToCheckOut}
                  className="px-4 py-2 border-dark_blue border-2 border-solid cursor-pointer  text-dark_blue text-lg font-semibold rounded hover:bg-blue-400 hover:text-white  transition-all"
                >
                  Go To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="text-start mt-16">
            <h3 className="text-2xl">Product description:</h3>
            <p className="bg-white p-2 rounded">{product._doc.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
