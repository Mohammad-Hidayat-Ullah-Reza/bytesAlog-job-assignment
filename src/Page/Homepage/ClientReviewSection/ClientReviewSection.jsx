import React from "react";
import CarouselSlides from "./CarouselSlides";

const carouselData = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Client Name 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos perspiciatis accusantium recusandae laborum numquam, reprehenderit doloremque nesciunt quam maiores excepturi mollitia sunt corporis ipsum! Dolorum at velit iusto quae!",
  },
  {
    id: "2",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Client Name 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos perspiciatis accusantium recusandae laborum numquam, reprehenderit doloremque nesciunt quam maiores excepturi mollitia sunt corporis ipsum! Dolorum at velit iusto quae!",
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
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
