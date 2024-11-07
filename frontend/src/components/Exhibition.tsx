import { Carous, Location } from '@/images';

export const Exhibition = () => {
  return (
    <div className='bg-white'>
      <div className='flex justify-between container items-center mx-auto h-[794px]'>
        <div className='flex flex-col gap-10 h-[318px] w-[592px] justify-between'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-2xl text-[#284CE5]'>Бидний</h1>
            <h3 className='font-extrabold text-5xl'>үзэсгэлэнгээр зочлоорой</h3>
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
          <Carous />
        </div>
      </div>
    </div>
  );
};
