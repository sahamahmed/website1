'use client'
import React, { useRef, useState } from 'react';
import laptop from "../public/assets/laptop.jpg";
import setup from "../public/assets/setup.jpg";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';




import { Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="max-w-screen-2xl bg-slate-600 h-fit p-4 text-center border-b-2 border-b-gray-300 pb-6 md:h-[694px]">
    <div className="md:text-5xl text-xl m-4 font-extrabold"><Swiper navigation={true} loop = {true} allowTouchMove = {true} effect='fade' modules={[Navigation]} className="mySwiper h-[400px] sm:h-[530px] md:h-[660px] lg:h-[780px]">
        <SwiperSlide>
          <Image src={laptop} alt='laptop image' className='w-full h-[370px] sm:h-[500px] md:h-[650px] lg:[800px]'/>
          </SwiperSlide>
        <SwiperSlide><Image src={setup} alt='setup image' className='w-full h-[370px] sm:h-[500px] md:h-[650px] lg:[800px]'/></SwiperSlide>       
      </Swiper></div>
   
</div>
  )
}
export default Slider