'use client';

import { Minus, Plus } from '@/images';
import { Separator } from '@radix-ui/react-separator';
import { FaqHead } from './FaqHead';
import { useState } from 'react';

const mock = [
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    accordian:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi itaque, minus fuga.',
    plus: Plus,
    minus: Minus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    accordian:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi itaque, minus fuga.',
    plus: Plus,
    minus: Minus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    accordian:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi itaque, minus fuga.',
    plus: Plus,
    minus: Minus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    accordian:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi itaque, minus fuga.',
    plus: Plus,
    minus: Minus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    accordian:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi itaque, minus fuga.',
    plus: Plus,
    minus: Minus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    accordian:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi itaque, minus fuga.',
    plus: Plus,
    minus: Minus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odiofae.',
    accordian:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi itaque, minus fuga.',
    plus: Plus,
    minus: Minus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    accordian:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi itaque, minus fuga.',
    plus: Plus,
    minus: Minus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    accordian:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi itaque, minus fuga.',
    plus: Plus,
    minus: Minus,
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-[#F2F5FC]'>
      <div className='pb-20 flex justify-center h-fit max-lg:pt-[400px] max-md:pt-[350px]'>
        <FaqHead />
      </div>
      <div className='flex items-center flex-col mx-auto container lg:w-[800px] w-fit pb-40 gap-12'>
        <h1 className='text-4xl font-bold'>FAQs</h1>
        <div className='flex flex-col'>
          {mock.map((elem, index) => {
            const Icooon = openIndex === index ? Minus : elem.plus;
            const isOpen = openIndex === index;
            return (
              <div key={index} className='flex flex-col'>
                <div
                  className='flex items-center p-2 justify-between'
                  onClick={() => toggleAccordion(index)}
                >
                  <h1 className='font-semibold text-[#181B2C] h-fit w-[90%]'>
                    {elem.question}
                  </h1>
                  <button onClick={() => toggleAccordion(index)}>
                    <Icooon />
                  </button>
                </div>
                <div className='w-full h-px bg-[#D1D3EB]'></div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out text-black${
                    isOpen
                      ? 'max-h-[200px] p-4 opacity-100'
                      : 'max-h-0 p-0 opacity-0'
                  }`}
                >
                  <p>{elem.accordian}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
