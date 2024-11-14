import { Right, Telephone } from '@/images';

export const AboutUsFaqHead = () => {
  return (
    <div className='bg-[#F2F5FC] py-20 flex items-end max-sm:h-[500px] max-md:h-[520px] max-lg:h-[960px]'>
      <div className='container mx-auto'>
        <div className='flex justify-end relative items-center inset-0 w-full max-lg:flex-col max-lg:h-fit'>
          <div className='absolute left-0 flex flex-col max-lg:bottom-96 z-20 max-md:bottom-0 lg:rounded-xl md:rounded-b-none r-xl rounded-xl bg-white gap-8 2xl:px-[80px] sm:px-20 px-5 max-lg:py-16 justify-center xl:w-[610px] max-md:h-[350px] h-64 md:h-[420px]'>
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
          <div className='relative w-auto lg:rounded-r-xl sm:rounded-xl sm:rounded-t-xl max-sm:rounded-t-none xl:border-l-none rounded-xl max-md:hidden'>
            <div className='absolute inset-0 lg:bg-gradient-to-r max-xl:bg-gradient-to-b from-white to-transparent opacity pointer-events-none from-5% to-60%'></div>
            <Telephone />
          </div>
        </div>
      </div>
    </div>
  );
};
