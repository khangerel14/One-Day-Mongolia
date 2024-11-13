'use client';

import { useState } from 'react';
import Image from 'next/image';
import CarouselFirst from '@/../public/first.png';
import CarouselTwo from '@/../public/two.png';
import CarouselThree from '@/../public/Featured event cover.png';
import CarouselFour from '@/../public/four.png';
import { LeftArrow } from '@/images/LeftArrow';
import { RightArrow } from '@/images/RightArrow';
import { Carous } from '@/images';

const images = [CarouselFirst, CarouselTwo, CarouselThree, CarouselFour];

export const CarouselSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const progressPercentage = ((currentIndex + 1) / images.length) * 100;

  return (
    <div className='md:w-[540px] md:h-[540px] w-full h-full'>
      <div className='relative h-full w-full overflow-hidden'>
        <Carous />
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex
                ? 'opacity-100 z-10 visible'
                : 'opacity-0 z-0 invisible'
            }`}
            style={{
              transition: 'opacity 0.7s ease-in-out',
            }}
          >
            <Image
              src={image}
              alt={`Carousel Image ${index + 1}`}
              fill
              sizes='100%'
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      <div className='flex justify-between items-center py-5 gap-3'>
        <div className='relative h-[2px] w-full bg-[#C2C2C2] rounded-full overflow-hidden'>
          <div
            className='absolute h-full bg-black transition-width duration-500'
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className='flex gap-2 items-center'>
          <button
            className='border border-[#D1D3EB] rounded-full h-10 w-10 flex justify-center items-center'
            onClick={handlePrev}
          >
            <LeftArrow />
          </button>
          <button
            className='border border-[#D1D3EB] rounded-full h-10 w-10 flex justify-center items-center'
            onClick={handleNext}
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};
