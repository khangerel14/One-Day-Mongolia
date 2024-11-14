'use client';

import { YelClothe } from '@/assets/images';
import { useState } from 'react';

const mock = [
  {
    category: 'Байгаль орчин',
  },
  {
    category: 'Нийгмийн хариуцлага',
  },
  {
    category: 'Эдийн засгийн чадамж',
  },
  {
    category: 'Бусад',
  },
];

const nature = [
  {
    head: 'Байгальд ээлтэй материал',
    desc: 'Бид тогтвортой хөгжлийг хангах материал, үйлдвэрлэлийн процессыг илүүд үзэх ба хог, эрчим хүчний ханган нийлүүлэгчдийг нэн тэргүүнд тавьж хамтран ажиллах болно',
  },
  {
    head: 'Нүүрстөрөгчийн ул мөр',
    desc: 'Бид нийлүүлэгчдийн хүлэмжийн хийн ялгарлыг бууруулах, уур амьсгалд ээлтэй туршлагыг сурталчлах хүчин чармайлтыг үнэлэх болно',
  },
  {
    head: 'Баталгаажуулалт',
    desc: 'Бид тогтвортой хөгжлийн төлөөх амлалтаа харуулсан ISO, органик, гарал үүслийг тодорхойлсон стандарт гэх мэт зөвшөөрөгдсөн байгаль орчны гэрчилгээтэй ханган нийлүүлэгчдийг хайж байна.',
  },
];
const social = [
  {
    head: 'Тогтвортой хөгжлийн',
    desc: 'Oрганик, гарал үүслийг тодорхойлсон стандарт гэх мэт зөвшөөрөгдсөн байгаль орчны гэрчилгээтэй ханган нийлүүлэгчдийг хайж байна.',
  },
  {
    head: 'Ээлтэй материал',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima culpa expedita nobis, illum eaque impedit incidunt.',
  },
  {
    head: 'Төрөгчийн ул мөр',
    desc: 'Бид нийлүүлэгчдийн хүлэмжийн хийн ялгарлыг бууруулах, уур амьсгалд ээлтэй туршлагыг сурталчлах хүчин чармайлтыг үнэлэх болно',
  },
];
const economic = [
  {
    head: 'Байгалын материал',
    desc: 'quibusdam blanditiis deleniti reprehenderit ipsum praesentium veniam nemo esse at voluptatibus molestias odit laborum.',
  },
  {
    head: 'Баталгаажуулалт',
    desc: 'Бид тогтвортой хөгжлийн төлөөх амлалтаа харуулсан ISO, органик, гарал үүслийг тодорхойлсон стандарт гэх мэт зөвшөөрөгдсөн байгаль орчны гэрчилгээтэй ханган нийлүүлэгчдийг хайж байна.',
  },
  {
    head: 'Нүүрстөрөгчийн ул мөр',
    desc: 'Бид нийлүүлэгчдийн хүлэмжийн хийн ялгарлыг бууруулах, уур амьсгалд ээлтэй туршлагыг сурталчлах хүчин чармайлтыг үнэлэх болно',
  },
];
const others = [
  {
    head: 'Нүүрстөрөгчийн мөрөөр',
    desc: 'Бид нийлүүлэгчдийн хүлэмжийн хийн ялгарлыг бууруулах, уур амьсгалд ээлтэй туршлагыг сурталчлах хүчин чармайлтыг үнэлэх болно',
  },
  {
    head: 'Баталгаажуулах заавар',
    desc: 'Бид тогтвортой хөгжлийн төлөөх амлалтаа харуулсан ISO, органик, гарал үүслийг тодорхойлсон стандарт гэх мэт зөвшөөрөгдсөн байгаль орчны гэрчилгээтэй ханган нийлүүлэгчдийг хайж байна.',
  },
  {
    head: 'Байгал дахь материал',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit veniam nemo esse at voluptatibus molestias odit laborum.',
  },
];

export const Examination = () => {
  const [active, setActive] = useState('Байгаль орчин');

  const convertor = () => {
    switch (active) {
      case 'Байгаль орчин':
        return nature;
      case 'Нийгмийн хариуцлага':
        return social;
      case 'Эдийн засгийн чадамж':
        return economic;
      case 'Бусад':
        return others;
      default:
        return [];
    }
  };

  const categoryContent = convertor();
  return (
    <div className='bg-white'>
      <div className='flex flex-col container mx-auto pt-28 max-sm:pb-10'>
        <div className='flex flex-col gap-10 lg:w-[711px] w-fit'>
          <h1 className='font-bold sm:text-4xl text-3xl'>
            Ханган нийлүүлэгчийг сонгох шалгуур
          </h1>
          <p className='text-[#616161] text-sm'>
            Бид нийлүүлэлтийн сүлжээгээрээ тогтвортой байдлыг дэмжих үүрэг
            хүлээдэг. Тогтвортой бүтээгдэхүүнээр ханган нийлүүлэгчдийг сонгохдоо
            бид байгаль орчин, нийгэм, эдийн засгийг дэмжих бодлогуудтай
            нийцүүлэхийн тулд дараахи стандарт, шалгуурыг баримталдаг.
          </p>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center md:mx-16 pt-14 md:w-[650px] w-full max-md:overflow-x-auto'>
            {mock.map((elem, index: number) => {
              return (
                <div key={index}>
                  <button
                    className='flex font-semibold md:w-fit max-md:min-w-[214px] justify-center h-1 text-center p-4 mb-4'
                    onClick={() => setActive(elem.category)}
                    style={{ color: active === elem.category ? '#284CE5' : '' }}
                  >
                    {elem.category}
                  </button>
                  {active === elem.category && (
                    <div className='w-full h-px bg-[#284CE5] mt-4'></div>
                  )}
                </div>
              );
            })}
          </div>
          <div className='w-full h-px bg-[#D6D9EB]'></div>
        </div>
        <div className='flex sm:p-14 pt-14 lg:justify-between justify-center gap-10'>
          <div className='flex w-[512px] gap-6'>
            <div className='flex flex-col'>
              <div className='flex flex-col items-center'>
                <h1 className='h-14 w-14 flex justify-center items-center border rounded-full drop-shadow-xl font-bold text-3xl border-[#BAC5FF] shadow-inner'>
                  1
                </h1>
                <div className='h-44 border border-dashed w-px border-[#BAC5FF]'></div>
              </div>
              <div className='flex flex-col items-center'>
                <h1 className='h-14 w-14 flex justify-center items-center border rounded-full drop-shadow-xl font-bold text-3xl border-[#BAC5FF] shadow-inner'>
                  2
                </h1>
                <div className='h-44 border border-dashed w-px border-[#BAC5FF]'></div>
              </div>
              <div className='flex flex-col items-center'>
                <h1 className='h-14 w-14 flex justify-center items-center border rounded-full drop-shadow-xl font-bold text-3xl border-[#BAC5FF] shadow-inner'>
                  3
                </h1>
              </div>
            </div>
            <div className='flex flex-col my-3'>
              {categoryContent.map((element: any, index: number) => {
                return (
                  <div className='flex flex-col gap-4 h-[231px]' key={index}>
                    <h1 className='font-bold text-2xl'>{element.head}</h1>
                    <p className='text-[#616161] text-base h-[162px] overflow-hidden'>
                      {element.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='max-lg:hidden'>
            <YelClothe />
          </div>
        </div>
      </div>
    </div>
  );
};
