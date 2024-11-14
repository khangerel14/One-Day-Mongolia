const mock = [
  { number: '+13', title: 'Үйлдвэрлэгч' },
  { number: '+745', title: 'EU барааны тэмдэг' },
  { number: '+6542', title: 'Бараа экспортлосон' },
  { number: '+30', title: 'Улсад экспортлосон' },
  { number: '+1M$', title: 'Борлуулалт' },
];

export const Statistics = () => {
  return (
    <div className='flex items-center bg-[#EAEBFA] justify-center mx-auto py-10 h-fit max-xl:py-24'>
      <div className='flex container items-center justify-between text-[#284CE5] h-full max-md:justify-center px-10 flex-wrap max-xl:gap-10'>
        {mock.map((element, index) => {
          return (
            <div key={index} className='flex items-center justify-center'>
              <div className='text-center md:w-[260px] w-fit'>
                <h1 className='font-bold text-4xl'>{element.number}</h1>
                <p className='text-black'>{element.title}</p>
              </div>
              {index < mock.length - 1 && (
                <div className='h-16 w-px bg-[#D0D4E8] hidden appear'></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
