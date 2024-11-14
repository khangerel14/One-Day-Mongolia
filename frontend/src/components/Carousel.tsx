'use client';

import { WorldFrame } from '@/assets/images';
import { useRouter } from 'next/navigation';

export const Carousel = () => {
  const router = useRouter();
  return (
    <div className='flex justify-center'>
      <div className='relative w-full bg-cover 2xl:h-[740px] max-md:h-[380px]'>
        <WorldFrame />
        <div className='absolute inset-0 container mx-auto flex flex-col sm:gap-12 gap-5 h-full justify-center'>
          <h1 className='font-extrabold md:text-5xl text-2xl sm:w-[470px] w-fit text-white'>
            Монголоос экспорт хийхэд тань бүх талаар тусалъя
          </h1>
          <div className='flex items-center gap-3'>
            <button
              className='rounded-full p-2 px-4 bg-transparent text-white border border-white font-bold'
              onClick={() => router.push('/log-in')}
            >
              Нэвтрэх
            </button>
            <button className='rounded-full p-2 px-4 bg-white text-[#1D212D] font-bold'>
              Бүртгүүлэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
