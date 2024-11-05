import { File, Book, Truck, Check, Bank, Exe } from '@/images';

const mock = [
  {
    icon: File,
    desc: 'Экспорт, импортын худалдааны гэрээ ба экспортонд бэлтгэх үйлчилгээ',
  },
  {
    icon: Book,
    desc: 'Экспортын гаалийн баримт бичгийн бүрдлийг хангах үйлчилгээ',
  },
  {
    icon: Truck,
    desc: 'Экспортын тээвэрлэлтийн үйлчилгээ ',
  },
];

const mockss = [
  {
    icon: Check,
    desc: 'Импортлогч улсын гаалийн дүрэм журмын нийцлийг хангах баримт бичгийн үйлчилгээ',
  },
  {
    icon: Bank,
    desc: 'Бараагаа борлуулсны төлбөр дамжууах санхүүгийн хэрэгсэл түүний шимтгэл хураамж, банкны шимтгэл хураамж',
  },
  {
    icon: Exe,
    desc: 'Европын холбоонд борлуулалт хийсний татвар, НӨАТ гэх зэрэг нягтлан бодох бүртгэлийн тайлагнал',
  },
];

export const Guarantee = () => {
  return (
    <div className='flex items-center h-[797px] justify-center bg-[#EAEBFA]'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center justify-end w-[1440px] text-black h-[188px]'>
          <h1 className='font-bold text-4xl'>Бид танд юу өгч чадах вэ?</h1>
          <div className='flex font-semibold text-sm mt-10'>
            <button className='p-1 px-4'>Экспортын цогц үйлчилгээ</button>
            <button className='p-1 px-4'>Борлуулалтын цогц үйлчилгээ</button>
          </div>
          <div className='w-full h-1 rounded-full bg-[#D6D9EB]'></div>
        </div>
        <div className='flex justify-between flex-wrap w-[1440px] h-[529px] p-14'>
          {mock.map((element, index: number) => {
            const IconComponent = element.icon;
            return (
              <div
                className='flex flex-col gap-6 border-[#D2D9F9] border rounded-xl p-8 w-[432px] h-[189px] bg-white'
                key={index}
              >
                <div className='flex justify-center items-center h-14 w-14 rounded-full bg-white shadow-lg border-[#D2D9F9] border'>
                  <IconComponent />
                </div>
                <p className='text-black'>{element.desc}</p>
              </div>
            );
          })}
          {mockss.map((element, index: number) => {
            const IconComponent = element.icon;
            return (
              <div
                className='flex flex-col gap-6 border-[#D2D9F9] border rounded-xl p-8 w-[432px] h-[212px] bg-white'
                key={index}
              >
                <div className='flex justify-center items-center h-14 w-14 rounded-full bg-white shadow-lg border-[#D2D9F9] border'>
                  <IconComponent />
                </div>
                <p className='text-black'>{element.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
