import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

// import the images
import gallery from "../pages/gallery";
const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8" id="gallery">
      <h2 className="text-center text-3xl font-bold mb-4 mt-4 max-sm:text-2xl">
        Restaurant Gallery
      </h2>
      <p className="text-center mb-4 text-2xl max-sm:text-lg">
        This is our Batangas Restaurant Gallery
      </p>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {gallery.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.path} alt={image.alt} className="w-full h-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
