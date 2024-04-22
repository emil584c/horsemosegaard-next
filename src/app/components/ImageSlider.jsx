"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Slider({ images = [{ url: "", alt: "" }] }) {
  return (
    <>
      <section className="image-slider">
        <Swiper
          navigation={true}
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            100: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            668: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 28,
            },
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.alt}>
              <div className="image-slider__slide object-fit">
                <img
                  src={image.url}
                  alt={image.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Slider;
