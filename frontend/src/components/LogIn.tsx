import { OneDay, WorldFrame } from '@/images';
import { Separator } from './ui/separator';
import { Africa } from '@/images/Africa';

export const LogIn = () => {
  return (
    <div className='flex flex-col items-center bg-[#F6F6FE]'>
      <div className='flex flex-col gap-20 items-center my-20'>
        <div className='flex gap-4 items-center'>
          <OneDay />
          <Separator orientation='vertical' className='bg-black h-10' />
          <h1 className='font-medium text-2xl'>Supplier Portal</h1>
        </div>
        <div className='flex w-[1128px] h-[720px] rounded-lg bg-cover bg-black'>
          <div className='relative inset-0 w-[395px] h-full flex items-end justify-center z-10 bg-cover'>
            <Africa />
            <div className='absolute top-0 text-white flex flex-col gap-3 p-10'>
              <h1 className='font-bold text-4xl text-start'>
                Дэлхийд бүтээгдэхүүнээ таниулахад бэлэн үү?
              </h1>
              <p>
                Таны бүтээгдэхүүнийг хүлээж байгаа сая сая худалдаан авагчид
                байна.
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center bg-white w-[733px] h-full rounded-r-sm'>
            <div className='flex flex-col gap-10 items-start w-[358px] h-[394px]'>
              <h1 className='text-2xl font-extrabold'>Нэвтрэх</h1>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                  <h1>Утасны дугаар</h1>
                  <input
                    type='text'
                    className='border outline-none py-2 px-3 rounded-md w-[358px]'
                    placeholder='Утасны дугаар'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' />
                  <p>Сануулах</p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <button className='w-[358px] h-12 py-2 px-4 bg-[#0E3ED0] rounded-lg text-white'>
                  Нэвтрэх
                </button>
                <div className='flex w-full items-center justify-between'>
                  <Separator className='w-[151px]' />
                  <p className='text-[#5A5D72]'>эсвэл</p>
                  <Separator className='w-[151px]' />
                </div>
                <button className='w-[358px] h-12 py-2 px-4 bg-white rounded-lg border border-[#0E3ED0] text-[#0E3ED0]'>
                  Бүртгүүлэх
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 aria-label='Footer'>One Day Mongolia© 2023. All rights reserved</h1>
    </div>
  );
};