import { Telephone } from '@/images';

export const FaqHead = () => {
  return (
    <div className='bg-[#F2F5FC]'>
      <div className='flex items-center w-[1440px] mx-auto py-20'>
        <div className='flex flex-col w-[605px] h-[420px] bg-white p-20 gap-8 rounded-l-xl'>
          <h1 className='font-extrabold text-4xl'>
            Олон улсын зах зээл таныг хүлээж байна
          </h1>
          <p className='font-normal text-lg'>
            Бид нартай нэгдэж бүтээгдэхүүнээ олон улсруу гаргаарай
          </p>
          <button className='rounded-full px-4 py-3 text-white w-fit bg-[#284CE5]'>
            Одоо эхлэе
          </button>
        </div>
        <div className='rounded-r-xl'>
          <Telephone />
        </div>
      </div>
    </div>
  );
};
