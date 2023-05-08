import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://pools-cosmetics.up.railway.app/api',
});

// Category

export const getCategories = () => {
  return instance.get('/get-categories');
};

export const createCategory = () => {
  return instance.post('/create-category');
};

export const deleteCategory = () => {
  return instance.delete('/delete-category');
};

// Product

export const getProducts = () => {
  return instance.get('/get-products');
};

export const fetchProductById = (productId) => {
  return instance.get(`/get-product-by-id/${productId}`);
};

export const createProduct = () => {
  return instance.post('/create-product');
};

export const deleteProduct = () => {
  return instance.delete('/delete-product');
};

export const updateProduct = () => {
  return instance.put('/edit-product');
};

export const updateProductStatus = () => {
  return instance.put('/toggle-product');
};

// Orders

export const getOrders = () => {
  return instance.get('/get-orders');
};

export const createOrder = () => {
  return instance.post('/create-order');
};

// Mail

export const sendMessage = () => {
  return instance.post('/send-message');
};
