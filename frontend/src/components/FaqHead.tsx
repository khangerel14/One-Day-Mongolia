import { Right, Telephone } from '@/images';

export const FaqHead = () => {
  return (
    <div className='bg-[#F2F5FC]'>
      <div className='flex items-center container py-20 mx-auto'>
        <div className='flex flex-col bg-white gap-8 px-[80px] h-[420px] justify-center w-[600px]'>
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
        <div className='lg:rounded-r-xl rounded-b-xl max-xl:hidden max-lg:block'>
          <Telephone />
        </div>
      </div>
    </div>
  );
};
