import { Location } from '@/images';
import { CarouselSlider } from './CarouselSlider';

export const Exhibition = () => {
  return (
    <div className='bg-white'>
      <div className='flex justify-between container items-center mx-auto py-24 max-xl:flex-col gap-20'>
        <div className='flex flex-col gap-10 h-[318px] lg:w-[592px] w-fit justify-between'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-2xl text-[#284CE5]'>БИДНИЙ</h1>
            <h3 className='font-extrabold sm:text-5xl text-3xl'>
              ҮЗЭСГЭЛЭНГЭЭР ЗОЧЛООРОЙ
            </h3>
          </div>
          <p>
            Бид 2022 онд Унгар улсын Дебрецен хотод Монголын соёл бизнесийн
            төвийг үүсгэн байгуулж амжилттай үйл ажиллагаа эрхэлж байна.
          </p>
          <button className='flex gap-2 items-center bg-[#284CE5] text-white w-fit px-4 py-2 rounded-full'>
            <Location />
            Байршил харах
          </button>
        </div>
        <div>
          <CarouselSlider />
        </div>
      </div>
    </div>
  );
};
