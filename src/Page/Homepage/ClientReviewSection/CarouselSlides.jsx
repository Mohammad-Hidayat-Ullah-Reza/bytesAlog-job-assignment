import React, { useState } from "react";

const CarouselSlides = ({ d, i, length }) => {
  const { img, name, description } = d;
  return (
    <div id={`slide${i + 1}`} className="carousel-item relative w-full my-10">
      <div className="flex items-center justify-center w-full">
        <div className="avatar mr-5">
          <div className="rounded-full">
            <img className="w-10 sm:w-24" src={img} alt={name} />
          </div>
        </div>
        <div className="max-w-lg w-1/2 sm:w-2/3">
          <h4 className="text-base font-bold uppercase">{name}</h4>
          <p className="text-xs sm:text-base">{description}</p>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={i === 0 ? `#slide${length}` : `#slide${i}`}
          className="text-black text-4xl"
        >
          ❮
        </a>
        <a
          href={i === length - 1 ? `#slide1` : `#slide${i + 2}`}
          className="text-black text-4xl"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselSlides;
