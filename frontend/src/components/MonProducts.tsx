import { Chrome } from '@/images';

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
      <div className='flex flex-col gap-16 container mx-auto'>
        <div className='flex flex-col gap-6 max-lg:text-center w-full'>
          <h1 className='lg:text-5xl text-3xl lg:w-[528px] font-extrabold w-full'>
            Монгол бүтээгдэхүүнийг Европоос
          </h1>
          <p className='text-lg w-fit lg:w-[584px]'>
            Европын хэрэглэгч нарт зориулсан Монгол брэнд бүхий цахим худалдааны
            платформыг бий болгосон www.onedayinmongolia.eu
          </p>
        </div>
        <div className='flex justify-center items-center gap-6 flex-wrap lg:w-[845px]'>
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
      </div>
      <div className='flex items-center absolute right-0 bottom-0 w-[600px] max-xl:hidden min-[1280px]:block min-[1601px]:hidden'>
        <Chrome />
      </div>
    </div>
  );
};
