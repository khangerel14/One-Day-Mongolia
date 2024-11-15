'use client';

import { useState } from 'react';
import Image from 'next/image';
import CarouselFirst from '@/../public/first.png';
import CarouselTwo from '@/../public/two.png';
import CarouselThree from '@/../public/three.png';
import CarouselFour from '@/../public/four.png';
import { LeftArrow, RightArrow } from '@/assets/icons';

const images = [CarouselFirst, CarouselFour, CarouselThree, CarouselTwo];

export const CarouselSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const progressPercentage = ((currentIndex + 1) / images.length) * 100;

  return (
    <div className='relative md:w-[560px] md:h-[550px] w-full h-full rounded-lg'>
      <div className='relative h-full w-full overflow-hidden'>
        {images.map((image, index) => {
          let paddingLeft = 0;
          if (index === (currentIndex + 3) % images.length) {
            paddingLeft = 33;
          } else if (index === (currentIndex + 2) % images.length) {
            paddingLeft = 48;
          } else if (index === (currentIndex + 1) % images.length) {
            paddingLeft = 63;
          }
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex ? 'z-20 scale-100' : 'z-10 scale-95'
              }`}
              style={{
                paddingLeft: `${paddingLeft}px`,
                transformOrigin: 'center center',
                transition: 'all 0.7s ease-in-out',
              }}
            >
              <Image
                src={image}
                alt={`Carousel Image ${index + 1}`}
                width={500}
                height={500}
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          );
        })}
      </div>
      <div className='flex justify-between items-center gap-3'>
        <div className='relative h-[2px] w-full bg-[#C2C2C2] rounded-full overflow-hidden'>
          <div
            className='absolute h-full bg-black transition-width duration-500'
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className='flex gap-2 items-center'>
          <button
            className='border border-[#D1D3EB] rounded-full h-10 w-10 flex justify-center items-center bg-white'
            onClick={handlePrev}
          >
            <LeftArrow />
          </button>
          <button
            className='border border-[#D1D3EB] rounded-full h-10 w-10 flex justify-center items-center bg-white'
            onClick={handleNext}
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};
