import { Right, Telephone } from '@/images';

export const FaqHead = () => {
  return (
    <div className='bg-[#F2F5FC]'>
      <div className='flex items-center container py-20 h-fit mx-auto max-lg:flex-col'>
        <div className='flex justify-end relative inset-0 w-full max-lg:flex-col max-md:h-[420px] max-lg:h-[800px]'>
          <div className='absolute left-0 flex flex-col max-lg:bottom-96 max-md:bottom-0 max-sm:bottom-auto rounded-l-xl bg-white gap-8 md:px-5 lg:px-14 2xl:px-[80px] sm:px-20 px-5 h-[420px] justify-center xl:w-[610px] max-lg:justify-center max-xl:w-full max-xl:rounded-xl rounded-t-xl max-lg:rounded-b-none'>
            <h1 className='font-extrabold text-4xl'>
              Олон улсын зах зээл таныг хүлээж байна
            </h1>
            <p className='font-normal text-lg max-xl:hidden'>
              Бид нартай нэгдэж бүтээгдэхүүнээ олон улсруу гаргаарай
            </p>
            <button className='flex gap-2 items-center rounded-full px-4 py-3 text-white w-fit bg-[#284CE5]'>
              Одоо эхлэе <Right />
            </button>
          </div>
          <div className='max-md:hidden'>
            <Telephone />
          </div>
        </div>
      </div>
    </div>
  );
};
