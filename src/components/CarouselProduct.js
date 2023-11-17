import React from "react";

const CarouselProduct = (props) => {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Purchase</button>
      </p>
    </div>
  );
};

export default CarouselProduct;
