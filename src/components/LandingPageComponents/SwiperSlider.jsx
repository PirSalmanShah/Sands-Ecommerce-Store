import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const SwiperSlider = () => {
    const brands = [
    { src: "./images/apple-13.svg", alt: "Apple", href: "https://apple.com" },
    { src: "./images/asus-4.svg", alt: "Asus", href: "https://asus.com" },
    { src: "./images/calvin-klein-1.svg", alt: "Calvin Klein", href: "https://calvinklein.com" },
    { src: "./images/chanel-2.svg", alt: "Chanel", href: "https://chanel.com" },
    { src: "./images/chic.svg", alt: "Chic Cosmetics", href: "#" },
    { src: "./images/couture-style.svg", alt: "Nail Couture", href: "#" },
    { src: "./images/dell-computer.svg", alt: "Dell", href: "https://dell.com" },
    { src: "./images/dior.svg", alt: "Dior", href: "https://dior.com" },
    { src: "./images/essence.svg", alt: "Essence", href: "https://essencemakeup.com" },
    { src: "./images/furniture-brands.svg", alt: "Furniture", href: "#" },
    { src: "./images/glamour-2.svg", alt: "Glamour Beauty", href: "#" },
    { src: "./images/gucci-4.svg", alt: "Gucci", href: "https://gucci.com" },
    { src: "./images/lenovo-logo-2015.svg", alt: "Lenovo", href: "https://lenovo.com" },
    { src: "./images/nike-8-1.svg", alt: "Nike", href: "https://nike.com" },
    { src: "./images/puma.svg", alt: "Puma", href: "https://puma.com" },
    { src: "./images/rolex.svg", alt: "Rolex", href: "https://rolex.com" },
    { src: "./images/velvet.svg", alt: "Velvet Touch", href: "#" }
  ];
  return (
    <Swiper
        className="flex"
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        speed={800}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 7 },
        }}

      >
        {brands.map((brand, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="bg-white flex justify-center items-center rounded-2xl h-40 w-40 overflow-hidden mx-auto">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </SwiperSlide>


          );
        })}

      </Swiper>
  )
}

export default SwiperSlider
