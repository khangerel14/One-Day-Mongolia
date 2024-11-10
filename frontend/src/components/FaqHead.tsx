import { Right, Telephone } from '@/images';

export const FaqHead = () => {
  return (
    <div className='bg-[#F2F5FC]'>
      <div className='flex items-center container py-20 mx-auto max-lg:flex-col'>
        <div className='flex flex-col rounded-l-xl bg-white gap-8 md:px-5 lg:px-14 2xl:px-[80px] sm:px-20 px-5 h-[420px] justify-center xl:w-[600px] max-lg:justify-center max-xl:w-full max-xl:rounded-xl rounded-t-xl max-lg:rounded-b-none'>
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
        <div className='rounded-r-xl rounded-b-xl max-xl:hidden max-lg:block bg-cover'>
          <Telephone />
        </div>
      </div>
    </div>
  );
};
