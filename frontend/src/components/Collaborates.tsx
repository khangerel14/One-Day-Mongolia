import {
  Erdenet,
  ErdenetCash,
  Evseg,
  Husug,
  Montulgat,
  Yalguun,
} from '@/images';

export const Collaborates = () => {
  return (
    <div className='flex items-center bg-[#F2F5FC] h-[664px] w-full justify-center'>
      <div className='flex justify-between items-center w-[1440px]'>
        <div className='flex w-[704px] h-[456px] justify-between'>
          <div className='flex flex-col items-start gap-8 bottom-8'>
            <div className='bg-white border rounded-lg px-6 py-9'>
              <Erdenet />
            </div>
            <div className='bg-white border rounded-lg px-6 py-9'>
              <Evseg />
            </div>
            <div className='bg-white border rounded-lg px-6 py-9'>
              <Montulgat />
            </div>
          </div>
          <div className='flex flex-col justify-end gap-8 top-8'>
            <div className='bg-white border rounded-lg px-6 py-9'>
              <Yalguun />
            </div>
            <div className='bg-white border rounded-lg px-6 py-9'>
              <Husug />
            </div>
            <div className='bg-white border rounded-lg px-6 py-9'>
              <ErdenetCash />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 w-1/2 pl-32 pr-20 text-black'>
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
