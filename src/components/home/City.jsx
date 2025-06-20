import React from "react";
import CityDetails from "./CityDetails";
import { cityList } from "../../assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const City = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="property" className="py-28 bg-blue-100">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="uppercase font-primary text-lg text-center font-medium text-primary">
          Explore cities
        </h3>
        <h2 className="heading2 text-center">Our Location For You</h2>
        <div className="slider-container py-20">
          <Slider {...settings}>
            {cityList.map((item, key) => (
              <CityDetails data={item} key={item.key} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default City;
