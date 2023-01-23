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
    <div>
      <div className="carousel w-full">
        {carouselData.map((d, i) => (
          <CarouselSlides
            key={d.id}
            d={d}
            i={i}
            length={carouselDataLength}
          ></CarouselSlides>
        ))}
        {/* <div id="slide1" className="carousel-item relative w-full my-10">
          <div className="flex items-center justify-center w-full">
            <div className="avatar mr-5">
              <div className="rounded-full">
                <img
                  className="w-24"
                  src="https://placeimg.com/100/100/arch"
                  alt=""
                />
              </div>
            </div>
            <div className="max-w-lg w-2/3">
              <h4 className="text-xl font-bold uppercase">Client Name</h4>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus similique, necessitatibus recusandae, nihil qui
                eveniet ratione consectetur nemo, beatae at alias consequuntur
                ut officiis vitae. Suscipit et ab delectus hic!
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
        {/* <div id="slide2" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ClientReviewSection;
