import { Separator } from '@/components/ui/separator';

const mock = [
  { number: '+13', title: 'Үйлдвэрлэгч' },
  { number: '+745', title: 'EU барааны тэмдэг' },
  { number: '6542', title: 'Бараа экспортлосон' },
  { number: '+30', title: 'Улсад экспортлосон' },
  { number: '+1M$', title: 'Борлуулалт' },
];

export const Statistics = () => {
  return (
    <div className='flex items-center bg-[#EAEBFA] justify-center mx-auto h-[158px]'>
      <div className='flex w-[1440px] items-center justify-between text-[#284CE5] h-[78px] px-10'>
        {mock.map((element, index) => {
          return (
            <div key={index} className='flex items-center justify-center'>
              <div className='text-center w-[260px]'>
                <h1 className='font-bold text-4xl'>{element.number}</h1>
                <p className='text-black'>{element.title}</p>
              </div>
              {index < mock.length - 1 && (
                <Separator
                  orientation='vertical'
                  className='h-16 w-px bg-[#D0D4E8]'
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
