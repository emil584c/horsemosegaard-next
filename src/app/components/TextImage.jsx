"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import PrimaryButton from "./PrimaryButton";

function TextImage({
  title,
  text,
  images = [{ url: "", alt: "" }],
  listItems = [],
  backgroundSecondary,
  reverse,
  id,
  primaryButtonText,
  primaryButtonHref,
  primaryButtonTargetBlank,
  children,
}) {
  return (
    <>
      <section
        className={`text-image ${
          backgroundSecondary ? "background-secondary" : ""
        }`}
        id={id}
      >
        <div
          style={reverse ? { flexDirection: "row-reverse" } : {}}
          className="text-image__inner page-container"
        >
          <div className="text-image__text-container">
            <h2 className="text-image__title">{title}</h2>
            <p className="text-image__text">{text}</p>
            {listItems && (
              <ul className="text-image__list">
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-image__list-item"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {primaryButtonText && (
              <PrimaryButton
                text={primaryButtonText}
                href={primaryButtonHref}
                targetBlank={primaryButtonTargetBlank}
              />
            )}
            {children}
          </div>
          <div className="text-image__image-slider">
            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={50}
              slidesPerView={1}
            >
              {images.map((image) => (
                <SwiperSlide key={image.alt}>
                  <div className="text-image__slide object-fit">
                    <img
                      src={image.url}
                      alt={image.alt}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default TextImage;
