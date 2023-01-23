import React from "react";
import CarouselSlides from "./CarouselSlides";

const carouselData = [
  {
    id: "1",
    img: "https://placeimg.com/100/100/arch",
    name: "Client Name 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos perspiciatis accusantium recusandae laborum numquam, reprehenderit doloremque nesciunt quam maiores excepturi mollitia sunt corporis ipsum! Dolorum at velit iusto quae!",
  },
  {
    id: "2",
    img: "https://placeimg.com/100/100/arch",
    name: "Client Name 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos perspiciatis accusantium recusandae laborum numquam, reprehenderit doloremque nesciunt quam maiores excepturi mollitia sunt corporis ipsum! Dolorum at velit iusto quae!",
  },
  {
    id: "3",
    img: "https://placeimg.com/100/100/arch",
    name: "Client Name 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos perspiciatis accusantium recusandae laborum numquam, reprehenderit doloremque nesciunt quam maiores excepturi mollitia sunt corporis ipsum! Dolorum at velit iusto quae!",
  },
];

const carouselDataLength = carouselData.length;

const ClientReviewSection = () => {
  return (
    <div id="clientReview" className="lg:px-24">
      <div className="carousel w-full">
        {carouselData.map((d, i) => (
          <CarouselSlides
            key={d.id}
            d={d}
            i={i}
            length={carouselDataLength}
          ></CarouselSlides>
        ))}
      </div>
    </div>
  );
};

export default ClientReviewSection;
