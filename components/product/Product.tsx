import React from "react";
import Image from "next/image";
import "./Product.css";

interface Props {
  thumbnail: string;
  brand: string;
  price: number;
  id: number;
  ondelete: (id: number) => void;
}

const Product = ({ thumbnail, brand, price, ondelete, id }: Props) => {
  return (
    <div className="product-card">
      <Image
        src={thumbnail}
        height={150}
        width={300}
        alt="Project Image"
        className="product-img"
      />
      <div className="info-container">
        <h2 className="product-name">{brand}</h2>
        <p className="product-price">$ {price}</p>
        <div role="button" className="delete-btn">
          <Image
            src="/delete.svg"
            alt="delete button"
            width={20}
            height={20}
            onClick={() => ondelete(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
