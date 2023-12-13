
'use client'
import React, { useRef, useState } from 'react';
import coding from "../public/assets/light.jpg";
import coding2 from "../public/assets/light2.jpg";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Dotslider = () => {
    return (
      <div className="w-full bg-slate-600 h-[350px] p-4 text-center border-b-2 border-b-gray-300 ">
      <div className="md:text-5xl text-xl mt-6 font-extrabold">  
      <Swiper
    
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
         
        }}
        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
       
      >
        <SwiperSlide>
            <div className="swiper-slide-container">
              <Image src={coding} alt="coding image" className="w-fit h-fit mx-auto my-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-container">
              <Image src={coding2} alt="coding image" className="w-64 h-52 mx-auto my-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-container">
              <Image src={coding} alt="coding image" className="w-fit h-fit mx-auto my-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-container ">
              <Image src={coding2} alt="coding image" className="w-64 h-52 mx-auto my-auto " />
            </div>
          </SwiperSlide>
          </Swiper>
          </div>
     
  </div>
    )
  }
  export default Dotslider
