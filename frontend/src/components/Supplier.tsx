import { Right } from '@/images';
import { Chat } from '@/images/Chat';
import { GiveGet } from '@/images/GiveGet';
import { Meet } from '@/images/Meet';
import { Social } from '@/images/Social';

const mock = [
  {
    number: '1',
    picture: Social,
    title: 'Бүртгүүлэх, хүсэлт илгээх',
    desc: 'Веб сайтад бүртгүүлж анхны нийлүүлэх барааны хүсэлтээ илгээх',
  },
  {
    number: '2',
    picture: Chat,
    title: 'Уулзалт товлох',
    desc: 'Ерөнхий шалгуур хангаж байвал бид танд уулзалт товлох хүсэлт илгээнэ',
  },
  {
    number: '3',
    picture: Meet,

    title: 'Гэрээ байгуулах',
    desc: 'Гэрээ байгуулж нөхцөлөө тодорхойлоно',
  },
  {
    number: '4',
    picture: GiveGet,
    title: 'Бараа нийлүүлэх',
    desc: 'Бараагаа тогтмол нийлүүлж, борлуулалтаа хянах',
  },
];

export const Supplier = () => {
  return (
    <div className='bg-[#EAEBFA] h-fit py-24'>
      <div className='flex items-center justify-center container mx-auto flex-col h-full gap-12'>
        <h1 className='text-black font-bold text-4xl'>
          Нийлүүлэгч болох алхамууд
        </h1>
        <div className='flex justify-between gap-6 flex-wrap'>
          {mock.map((element, index) => {
            const PictureComponent = element.picture;
            return (
              <div
                className='flex flex-col gap-40 h-[383px] w-[342px] bg-white rounded-xl p-6 text-center text-black'
                key={index}
              >
                <div className='relative flex items-start'>
                  <h1 className='text-4xl font-bold text-[#DEE5FF]'>
                    {element.number}
                  </h1>
                  <div className='absolute inset-0 top-28 flex justify-center items-center'>
                    <PictureComponent />
                  </div>
                </div>
                <div className='flex flex-col justify-end gap-4 p-4 bottom-2'>
                  <h1 className='font-bold text-lg'>{element.title}</h1>
                  <p>{element.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className='flex gap-2 items-center bg-[#284CE5] text-white p-3 px-5 rounded-full'>
          Одоо эхлэе
          <Right />
        </button>
      </div>
    </div>
  );
};
