import React from "react";
import { TestimonialData } from "../..";
import TestimonialItems from "./TestimonialItems";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <section className="py-20 bg-green-50">
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col gap-3">
          <h3 className="uppercase font-primary text-lg text-center font-medium text-primary">
            Our Testimonials
          </h3>
          <h2 className="heading2 text-center">What’s people say’s</h2>
          <p className="text-base leading-6 text-center">
            Our seasoned team excels in real estate with years of successful
            market navigation, offering informed decisions and optimal results.
          </p>
        </div>
        <div className="slider-container py-20">
          <Slider {...settings}>
            {TestimonialData.map((item, key) => (
              <TestimonialItems key={item.id} data={item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
