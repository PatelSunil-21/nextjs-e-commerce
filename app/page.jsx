"use client";

import React from 'react'
import ProductPage from './components/Product'
import { useProductContext } from './context/ProductContext';


const page = () => {
   const {data} = useProductContext();
  return (
    <div>

   <ProductPage items={data}/>
    </div>
  )
}

export default page
