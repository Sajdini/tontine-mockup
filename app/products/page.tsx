"use client";
import Product from "@/components/product/Product";
import React, { useMemo, useState } from "react";
import useSWR from "swr";
import "./products.css";
import { useDebounce } from "use-debounce";

const Products = () => {
  const [isAscending, setIsAscending] = useState(true);
  const [searchedValue, setSearchedValue] = useState("");
  const debouncedSearchValue = useDebounce(searchedValue, 500)[0];

  ////fetching the data
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products`,
    fetcher
  );

  /// searching for data by name
  const filteredData = useMemo(() => {
    return data?.products.filter((unit) => {
      return unit.brand
        .toLowerCase()
        .includes(debouncedSearchValue.toLowerCase());
    });
  }, [data, debouncedSearchValue]);

  console.log(searchedValue, filteredData);

  ///sorting data by price
  const sortedData = () => {
    const dataToBeSorted = debouncedSearchValue ? filteredData : data.products;
    const sortedProducts = [...dataToBeSorted].sort((a, b) => {
      const multiplier = isAscending ? 1 : -1;
      return (a.price - b.price) * multiplier;
    });

    return sortedProducts;
  };
  const toggleSort = () => {
    setIsAscending((prevIsAscending) => !prevIsAscending);
  };

  const deleteProduct = async (id: number) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers you might need, e.g., authorization token
        },
      });

      if (!response.ok) {
        throw new Error("Delete request failed");
      }

      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  if (error) return <p>Failed to fetch</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="products-section">
      <div className="search-and-sort ">
        <form className="search-form">
          <label htmlFor="text">Search for a particular item</label>
          <input
            type="text"
            id="text"
            value={searchedValue}
            onChange={(e) => setSearchedValue(e.target.value)}
            placeholder="Your search goes in here"
          />
        </form>
        <div role="button" onClick={toggleSort} className="sorter">
          <p>{isAscending ? "↑" : "↓"}</p>
        </div>
      </div>
      <div className="grid-container ">
        {sortedData().map((unit) => (
          <Product
            key={unit.id}
            id={unit.id}
            thumbnail={unit.thumbnail}
            brand={unit.brand}
            price={unit.price}
            ondelete={deleteProduct}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
