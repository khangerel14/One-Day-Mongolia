import { Lightening, WorldFrame } from '@/images';

export const Carousel = () => {
  return (
    <div className='flex justify-center w-full'>
      <div className='relative'>
        <WorldFrame />
        <div className='absolute inset-0 w-[1440px] mx-auto flex flex-col gap-12'>
          <h1 className='font-extrabold text-5xl'>
            Монголоос экспорт хийхэд тань бүх талаар тусалъя
          </h1>
          <div className='flex items-center gap-3'>
            <button className='rounded-full p-2 px-4 bg-transparent text-white border border-white font-bold'>
              Нэвтрэх
            </button>
            <button className='rounded-full p-2 px-4 bg-white text-black font-bold'>
              Бүртгүүлэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
