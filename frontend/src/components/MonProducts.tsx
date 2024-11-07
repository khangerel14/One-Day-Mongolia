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
    <div className='bg-[#060813] text-white relative inset-0'>
      <div className='flex items-center container mx-auto h-[685px]'>
        <div className='flex flex-col w-[845px] h-[438px] justify-between'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-5xl w-[528px] font-extrabold'>
              Монгол бүтээгдэхүүнийг Европоос
            </h1>
            <p className='text-lg w-[584px]'>
              Европын хэрэглэгч нарт зориулсан Монгол брэнд бүхий цахим
              худалдааны платформыг бий болгосон www.onedayinmongolia.eu
            </p>
          </div>
          <div className='flex justify-between items-center'>
            {mock.map((elem, index: number) => {
              return (
                <div
                  className='flex justify-center flex-col rounded-lg text-center w-[265px] h-[136px] items-center p-8 border border-white'
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
      </div>
      <div className='absolute right-0 top-[75px]'>
        <Chrome />
      </div>
    </div>
  );
};
