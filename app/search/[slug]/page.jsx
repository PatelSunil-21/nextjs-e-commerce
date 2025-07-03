"use client";
import React from "react";

import ProductPage from "@/app/components/Product";
import { useProductContext } from "@/app/context/ProductContext";

const page = ({ params }) => {
  const { slug } = React.use(params);

  const { products } = useProductContext();

  const items = products.filter((p) =>
    p.title.toLowerCase().includes(slug.toLowerCase())
  );

  return (
    <div>
     <ProductPage items={items} />
    </div>
  );
};

export default page;