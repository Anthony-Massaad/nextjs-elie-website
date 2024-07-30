import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import SlideReveal from "@/animations/SlideReveal";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <SlideReveal>
      <div className="carousel-wrapper">
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          onChange={(index) => setCurrentSlide(index)}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                className="custom-arrow control-prev"
              ></button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                className="custom-arrow control-next"
              ></button>
            )
          }
          renderThumbs={() =>
            images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`carousel-thumb ${
                  currentSlide === index ? "current" : ""
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))
          }
        >
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={500}
                height={500}
                quality={100}
                layout="responsive"
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </SlideReveal>
  );
};

export default ImageCarousel;
