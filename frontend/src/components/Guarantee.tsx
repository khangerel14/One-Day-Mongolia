'use client';

import { File, Book, Truck, Check, Bank, Exe } from '@/images';
import { Separator } from './ui/separator';
import { useState } from 'react';

const exported = [
  {
    icon: File,
    desc: 'Экспорт, импортын худалдааны гэрээ ба экспортонд бэлтгэх үйлчилгээ',
  },
  {
    icon: Book,
    desc: 'Экспортын гаалийн баримт бичгийн бүрдлийг хангах үйлчилгээ',
  },
  {
    icon: Truck,
    desc: 'Экспортын тээвэрлэлтийн үйлчилгээ ',
  },
  {
    icon: Check,
    desc: 'Импортлогч улсын гаалийн дүрэм журмын нийцлийг хангах баримт бичгийн үйлчилгээ',
  },
  {
    icon: Bank,
    desc: 'Бараагаа борлуулсны төлбөр дамжууах санхүүгийн хэрэгсэл түүний шимтгэл хураамж, банкны шимтгэл хураамж',
  },
  {
    icon: Exe,
    desc: 'Европын холбоонд борлуулалт хийсний татвар, НӨАТ гэх зэрэг нягтлан бодох бүртгэлийн тайлагнал',
  },
];
const sold = [
  {
    icon: Exe,
    desc: 'Европын холбоонд борлуулалт хийсний татвар, НӨАТ гэх зэрэг нягтлан бодох бүртгэлийн тайлагнал',
  },
  {
    icon: Bank,
    desc: 'Бараагаа борлуулсны төлбөр дамжууах санхүүгийн хэрэгсэл түүний шимтгэл хураамж, банкны шимтгэл хураамж',
  },
  {
    icon: Check,
    desc: 'Импортлогч улсын гаалийн дүрэм журмын нийцлийг хангах баримт бичгийн үйлчилгээ',
  },
  {
    icon: Truck,
    desc: 'Экспортын тээвэрлэлтийн үйлчилгээ ',
  },
  {
    icon: Book,
    desc: 'Экспортын гаалийн баримт бичгийн бүрдлийг хангах үйлчилгээ',
  },
  {
    icon: File,
    desc: 'Экспорт, импортын худалдааны гэрээ ба экспортонд бэлтгэх үйлчилгээ',
  },
];

const buttons = [
  {
    name: 'Экспортын цогц үйлчилгээ',
  },
  {
    name: 'Борлуулалтын цогц үйлчилгээ',
  },
];

export const Guarantee = () => {
  const [active, setActive] = useState('Экспортын цогц үйлчилгээ');

  const convertOnCategory = () => {
    switch (active) {
      case 'Экспортын цогц үйлчилгээ':
        return exported;
      case 'Борлуулалтын цогц үйлчилгээ':
        return sold;
      default:
        return [];
    }
  };

  const guaranteed = convertOnCategory();
  return (
    <div className='flex items-center justify-center bg-[#EAEBFA]'>
      <div className='flex flex-col max-md:pt-20'>
        <div className='flex flex-col items-center justify-end container text-black h-[188px] border-b border-[#D6D9EB]'>
          <h1 className='font-bold text-4xl'>Бид танд юу өгч чадах вэ?</h1>
          <div className='flex font-semibold text-sm mt-10'>
            {buttons.map((elem, index: number) => (
              <div key={index} className='flex flex-col'>
                <button
                  className='p-1 px-4 text-sm font-semibold'
                  onClick={() => setActive(elem.name)}
                  style={{
                    color: active === elem.name ? '#284CE5' : '',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {elem.name}
                </button>
                {active === elem.name && (
                  <div className='h-[2px] bg-[#284CE5] w-full'></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center flex-wrap container mb-20 p-14 gap-3 max-xl:gap-3 mx-auto'>
          {guaranteed.map((element, index: number) => {
            const IconComponent = element.icon;
            return (
              <div
                className='flex flex-col gap-6 border-[#D2D9F9] border rounded-xl p-8 w-full md:w-[432px] h-[212px] bg-white'
                key={index}
              >
                <div className='flex justify-center items-center h-14 w-14 rounded-full bg-white shadow-md border-[#D2D9F9] border'>
                  <IconComponent />
                </div>
                <p className='text-black max-sm:overflow-hidden'>
                  {element.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
