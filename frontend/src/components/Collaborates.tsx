import {
  Erdenet,
  ErdenetCash,
  Evseg,
  Husug,
  Montulgat,
  Yalguun,
} from '@/assets/images';

export const Collaborates = () => {
  return (
    <div className='flex items-center bg-[#F2F5FC] py-24 w-full justify-center'>
      <div className='flex justify-between items-center container max-xl:flex-col-reverse gap-10'>
        <div className='flex xl:w-[704px] w-fit h-fit lg:h-[456px] justify-between gap-5 max-md:flex-col max-xl:justify-center'>
          <div className='flex flex-col items-start gap-8 bottom-8'>
            <div className='bg-white border rounded-lg sm:w-[336px] h-[120px] w-full flex items-center justify-center'>
              <Erdenet />
            </div>
            <div className='bg-white border rounded-lg sm:w-[336px] h-[120px] w-full flex items-center justify-center'>
              <Evseg />
            </div>
            <div className='bg-white border rounded-lg sm:w-[336px] h-[120px] w-full flex items-center justify-center'>
              <Montulgat />
            </div>
          </div>
          <div className='flex flex-col justify-end gap-8 top-8'>
            <div className='bg-white border rounded-lg sm:w-[336px] h-[120px] w-full flex items-center justify-center'>
              <Yalguun />
            </div>
            <div className='bg-white border rounded-lg sm:w-[336px] h-[120px] w-full flex items-center justify-center'>
              <Husug />
            </div>
            <div className='bg-white border rounded-lg sm:w-[336px] h-[120px] w-full flex items-center justify-center'>
              <ErdenetCash />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 w-1/2 pl-32 pr-20 text-black max-xl:w-fit max-sm:px-3'>
          <h1 className='font-bold text-4xl'>Бидний хамтрагчид</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            expedita eos minus quasi eum impedit laboriosam harum dolorem, quia
            molestiae dolores odit ratione aperiam, obcaecati totam natus, a
            illum laborum.
          </p>
        </div>
      </div>
    </div>
  );
};
