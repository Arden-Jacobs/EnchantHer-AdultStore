import React from "react";
import "../../App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselProduct from "../CarouselProduct";
import { carouselData, responsive } from "../CarouselData";

const BlackFriday = () => {

  const product = carouselData.map((item) => (
    <CarouselProduct
      name={item.name}
      url={item.imageUrl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <>
      <h1 className="products">Black Friday Sales</h1>
      <br></br>
      <Carousel responsive={responsive}>{product}</Carousel>
    </>
  );
};

export default BlackFriday;
