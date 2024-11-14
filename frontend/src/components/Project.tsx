import { Partnership, Puzzle, Watering } from '@/assets/icons';

const mock = [
  {
    icon: Watering,
    title: 'АЛСЫН ХАРАА',
    desc: 'Lorem ipsum dolor sit amet consectetur. Convallis ac massa elit sit consequat ut. Senectus integer nulla sit ut consectetur. Sed pellentesque netus est tempus tortor.',
  },
  {
    icon: Puzzle,
    title: 'ЭРХЭМ ЗОРИЛГО',
    desc: 'Lorem ipsum dolor sit amet consectetur. Convallis ac massa elit sit consequat ut. Senectus integer nulla sit ut consectetur. Sed pellentesque netus est tempus tortor.',
  },
  {
    icon: Partnership,
    title: 'ҮНЭТ ЗҮЙЛ',
    desc: 'Lorem ipsum dolor sit amet consectetur. Convallis ac massa elit sit consequat ut. Senectus integer nulla sit ut consectetur. Sed pellentesque netus est tempus tortor.',
  },
];

export const Project = () => {
  return (
    <div className='bg-[#F2F5FC]'>
      <div className='flex flex-col container mx-auto items-center py-40'>
        <div className='flex flex-col gap-5 items-center w-fit lg:w-[908px] text-center'>
          <h1 className='text-lg font-bold text-[#284CE5]'>PROJECT</h1>
          <h2 className='font-bold text-4xl'>“ONE DAY MONGOLIA”</h2>
          <p className='text-[#5A5D72] text-base font-normal'>
            Энэхүү төсөл нь Монголын соёл-бизнесийн төвөөр дамжуулан, Монголын
            уламжлалт ахуй, соёлын өвийг дэлхий нийтэд сурталчлан дэлгэрүүлж,
            Монголын үндэсний үйлдвэрлэгчдийг нэгтгэн дэлхийн зах зээлд Монгол
            брэндийг бий болгох зорилготойгоор 2021 онд үүсгэн байгуулагдсан.
          </p>
        </div>
        <div className='flex justify-center items-center mt-20 w-full flex-wrap gap-6'>
          {mock.map((elem, index: number) => {
            const Icoon = elem.icon;
            return (
              <div
                key={index}
                className='flex justify-center items-center flex-col bg-white gap-5 p-6 text-center rounded-xl w-[464px] h-[460px]'
              >
                <Icoon />
                <h1 className='font-semibold text-xl'>{elem.title}</h1>
                <p>{elem.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
