'use client';

import { YelClothe } from '@/images';
import { Separator } from '@radix-ui/react-separator';
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

const mocklo = [
  {
    head: 'Байгальд ээлтэй материал',
    desc: 'Бид тогтвортой хөгжлийг хангах материал, үйлдвэрлэлийн процессыг илүүд үзэх ба хог хаягдал, эрчим хүчний хэрэглээг багасгадаг ханган нийлүүлэгчдийг нэн тэргүүнд тавьж хамтран ажиллах болно',
  },
  {
    head: 'Нүүрстөрөгчийн ул мөр',
    desc: 'Бид нийлүүлэгчдийн хүлэмжийн хийн ялгарлыг бууруулах, уур амьсгалд ээлтэй туршлагыг сурталчлах хүчин чармайлтыг үнэлэх болно',
  },
  {
    head: 'Баталгаажуулалт',
    desc: 'Бид тогтвортой хөгжлийн төлөөх амлалтаа харуулсан ISO стандартын шаардлагууд, органик, гарал үүслийг тодорхойлсон стандарт гэх мэт хүлээн зөвшөөрөгдсөн байгаль орчны гэрчилгээтэй ханган нийлүүлэгчдийг хайж байна.',
  },
];

export const Examination = () => {
  const [active, setActive] = useState('Байгаль орчин');
  return (
    <div className='bg-white'>
      <div className='flex flex-col container mx-auto'>
        <div className='flex flex-col gap-10 lg:w-[711px] w-fit sm:m-14 max-sm:p-8'>
          <h1 className='font-bold text-4xl'>
            Ханган нийлүүлэгчийг сонгох шалгуур
          </h1>
          <p className='text-[#616161] text-sm'>
            Бид нийлүүлэлтийн сүлжээгээрээ тогтвортой байдлыг дэмжих үүрэг
            хүлээдэг. Тогтвортой бүтээгдэхүүнээр ханган нийлүүлэгчдийг сонгохдоо
            бид байгаль орчин, нийгэм, эдийн засгийг дэмжих бодлогуудтай
            нийцүүлэхийн тулд дараахи стандарт, шалгуурыг баримталдаг.
          </p>
        </div>
        <div className='flex flex-col max-lg:hidden'>
          <div className='flex items-center mx-14'>
            {mock.map((elem, index: number) => {
              return (
                <div key={index}>
                  <button
                    className='flex font-semibold w-full h-5 text-center p-4 mb-4'
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
        <div className='flex p-14 justify-between max-lg:hidden'>
          <div className='flex w-[592px] gap-6'>
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
            <div className='flex flex-col mt-3'>
              {mocklo.map((element, index: number) => {
                return (
                  <div className='flex flex-col gap-4 h-[231px]' key={index}>
                    <h1 className='font-bold text-2xl'>{element.head}</h1>
                    <p className='text-[#616161] text-base'>{element.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <YelClothe />
          </div>
        </div>
      </div>
    </div>
  );
};
