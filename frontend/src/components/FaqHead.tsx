import { Right, Telephone } from '@/images';

export const FaqHead = () => {
  return (
    <div className='bg-[#F2F5FC]'>
      <div className='flex items-center container mx-auto py-20 max-lg:flex-col'>
        <div className='flex flex-col w-full lg:w-[605px] h-[420px] bg-white p-20 gap-8 rounded-t-xl lg:rounded-l-xl'>
          <h1 className='font-extrabold text-4xl'>
            Олон улсын зах зээл таныг хүлээж байна
          </h1>
          <p className='font-normal text-lg'>
            Бид нартай нэгдэж бүтээгдэхүүнээ олон улсруу гаргаарай
          </p>
          <button className='flex gap-2 items-center rounded-full px-4 py-3 text-white w-fit bg-[#284CE5]'>
            Одоо эхлэе <Right />
          </button>
        </div>
        <div className='lg:rounded-r-xl rounded-b-xl max-lg:w-fit'>
          <Telephone />
        </div>
      </div>
    </div>
  );
};
