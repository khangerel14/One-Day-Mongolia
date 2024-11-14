import { Right, Telephone } from '@/images';

export const FaqHead = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center h-fit mx-auto max-lg:flex-col mt-[70px] to-bottom'>
        <div className='flex justify-end relative inset-0 w-full max-lg:flex-col max-lg:h-fit'>
          <div className='absolute left-0 flex flex-col max-lg:bottom-96 z-20 max-md:bottom-0 max-sm:bottom-auto max-lg:rounded-xl lg:rounded-l-xl bg-white gap-8 2xl:px-[80px] sm:px-20 px-5 max-xl:py-16 justify-center xl:w-[610px] max-lg:justify-center max-md:h-[350px] md:h-[420px]'>
            <h1 className='font-extrabold xl:w-full md:text-4xl text-3xl'>
              Олон улсын зах зээл таныг хүлээж байна
            </h1>
            <p className='font-normal text-lg'>
              Бид нартай нэгдэж бүтээгдэхүүнээ олон улсруу гаргаарай
            </p>
            <button className='flex gap-2 items-center rounded-full px-4 py-3 text-white w-fit bg-[#284CE5]'>
              Одоо эхлэе <Right />
            </button>
          </div>
          <div className='relative w-auto lg:rounded-r-xl sm:rounded-b-xl sm:rounded-t-xl max-sm:rounded-t-none xl:border-l-none max-md:hidden'>
            <div className='absolute inset-0 lg:bg-gradient-to-r max-xl:bg-gradient-to-b from-white to-transparent opacity pointer-events-none to-60%'></div>
            <Telephone />
          </div>
        </div>
      </div>
    </div>
  );
};
