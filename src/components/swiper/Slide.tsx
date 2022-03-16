import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";
import {SlideItem} from './SlideItem'


export default function Slide() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        style={{width: '100%', flex: '1', height: '100vh'}}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"   
       >
        <SwiperSlide>
        <SlideItem
          name='Europa'
          description='O continente mais antigo.'
          link='europa'
          imageUrl="/images/europe.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          name='Ásia'
          description='O continente mais populoso.'
          link='asia'
          imageUrl="/images/asia1.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          name='África'
          description='O continente mais colorido.'
          link='africa'
          imageUrl="/images/africa1.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          name='América do Sul'
          description='O melhor continente.'
          link='america-do-sul'
          imageUrl="/images/americadosul.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          name='América do Norte'
          description='O continente mais tecnológico.'
          link='america-do-norte'
          imageUrl="/images/americadonorte.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          name='Oceania'
          description='O continente mais peculiar.'
          link='oceania'
          imageUrl="/images/oceania.jpg"
        />
      </SwiperSlide>
       
      </Swiper>
    </>
  );
}