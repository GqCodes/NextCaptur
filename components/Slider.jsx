import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides?.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='mx-auto max-w-[1240px]'>
      <h1 className='text-center text-2xl font-bold'>Gallery</h1>
      <div className='relative flex justify-center p-4'>
        {SliderData.map((slide, index) => {
          return (
            <div key={index} className={index === current ? 'opacity-[1] duration-1000 ease-in' : 'opacity-0'}>
              <FaArrowCircleLeft
                onClick={prevSlide}
                size={50}
                className='absolute top-[50%] left-[30px] z-[2] cursor-pointer select-none text-white/70 '
              />
              {index === current && <Image src={slide.image} alt='/' width='1440' height='600' objectFit='cover' />}
              <FaArrowCircleRight
                onClick={nextSlide}
                size={50}
                className='absolute top-[50%] right-[30px] z-[2] cursor-pointer select-none text-white/70 '
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
