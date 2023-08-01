"use client";

import React from "react";
import useSWR from "swr";

const Products = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/products",
    fetcher
  );

  console.log(data);

  if (error) return <p>Failed to fetch</p>;
  if (isLoading) return <p>Loading...</p>;
  return <div>page</div>;
};

export default Products;
