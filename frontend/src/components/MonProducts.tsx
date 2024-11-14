import { Chrome } from '@/assets/images';

const mock = [
  {
    number: '+13',
    desc: 'Европын Холбооны хэлний сонголттой',
  },
  {
    number: '14',
    desc: 'Улсад байнгын нийлүүлэлт',
  },
  {
    number: '+13',
    desc: 'Төрлийн бараа бүтээгдэхүүний сонголт',
  },
];

export const MonProducts = () => {
  return (
    <div className='bg-[#060813] text-white py-24 flex relative inset-0 gap-10'>
      <div className='flex flex-col gap-16 container mx-auto max-xl:items-center'>
        <div className='flex flex-col gap-6 max-xl:text-center max-xl:items-center w-full xl:pl-14 2xl:pl-0'>
          <h1 className='lg:text-5xl text-3xl lg:w-[528px] font-extrabold w-full max-2xl:text-center'>
            Монгол бүтээгдэхүүнийг Европоос
          </h1>
          <p className='text-lg w-fit lg:w-[584px]'>
            Европын хэрэглэгч нарт зориулсан Монгол брэнд бүхий цахим худалдааны
            платформыг бий болгосон www.onedayinmongolia.eu
          </p>
        </div>
        <div className='flex items-center'>
          <div className='flex justify-center items-center gap-6 flex-wrap w-auto'>
            {mock.map((elem, index: number) => {
              return (
                <div
                  className='flex justify-center flex-col rounded-lg text-center w-[265px] h-[136px] items-center p-8 border border-[#595A61]'
                  key={index}
                >
                  <h1 className='font-bold text-4xl text-[#284CE5]'>
                    {elem.number}
                  </h1>
                  <p className='text-base font-normal'>{elem.desc}</p>
                </div>
              );
            })}
          </div>
          <div className='w-[596px] h-28 max-xl:hidden'></div>
        </div>
      </div>
      <div className='flex items-center absolute right-0 bottom-0 w-[600px] max-xl:hidden'>
        <Chrome />
      </div>
    </div>
  );
};
