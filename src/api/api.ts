import axios from "axios";
import { date, z,ZodSchema } from "zod";
import { responseCategorySchema, responseProductSchema } from "../Schemas/responses";


const instance = axios.create({
  baseURL: "http://pools-cosmetics.up.railway.app/api",
});

// Category

export const getCategories = async () => {
  const res = await instance.get('/get-categories');
  return responseCategorySchema.parse(res.data)
};

export const createCategory = () => {
  return instance.post("/create-category");
};

export const deleteCategory = () => {
  return instance.delete("/delete-category");
};

// Product

export const getProducts = async() => {
  const res = await instance.get("/get-products");
  return responseProductSchema.parse(res.data)
};

export const fetchProductById = (productId) => {
  return instance.get(`/get-product-by-id/${productId}`);
};

export const createProduct = () => {
  return instance.post("/create-product");
};

export const deleteProduct = () => {
  return instance.delete("/delete-product");
};

export const updateProduct = () => {
  return instance.put("/edit-product");
};

export const updateProductStatus = () => {
  return instance.put("/toggle-product");
};

// Orders

export const getOrders = () => {
  return instance.get("/get-orders");
};

export const createOrder = () => {
  return instance.post("/create-order");
};

// Mail

export const sendMessage = () => {
  return instance.post("/send-message");
};
