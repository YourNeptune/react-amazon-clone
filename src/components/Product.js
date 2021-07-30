import React from "react";
import "../css/Product.css";

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__title">
        <p>{title}</p>
      </div>

      <div className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </div>

      <div className="product__image">
        <img src={image} alt="productImg" />
      </div>

      <div className="product__button">
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
