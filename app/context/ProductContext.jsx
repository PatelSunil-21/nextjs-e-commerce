"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const API_BASE_URL = "/api";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const fetchAllProduct = async () => {
    const api = await axios.get(`${API_BASE_URL}/products`);
    setProducts(api.data.product);
    setData(api.data.product);
    // console.log("fetchAllProduct", products);
  };

  const addToCart = async (imgSrc, title, price, toast) => {
    const api = await axios.post(`${API_BASE_URL}/cart`, {
      imgSrc,
      title,
      price,
    });

    if (api.data.success) {
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1500,
      });
    }

    // console.log("product added to cart ",api.data);
  };

  const getCartItems = async () => {
    const api = await axios.get(`${API_BASE_URL}/cart`);
    setCart(api.data.cartItems);
    // console.log("cart items", api.data.cartItems);
  };

  const clearCart = async ()=>{
    const api = await axios.delete(`${API_BASE_URL}/cart`);
    getCartItems();
  }

  useEffect(() => {
    getCartItems();
    fetchAllProduct();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        data,
        setData,
        cart,
        addToCart,
        getCartItems,
        clearCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);

export default ProductContext;
