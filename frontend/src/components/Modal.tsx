'use client';

import { Bag, Vector, Contact, Close } from '@/images';
import { useRouter } from 'next/navigation';

interface ModalProps {
  open: boolean;
  setOpen: () => void;
}

export const Modal = ({ open, setOpen }: ModalProps) => {
  const router = useRouter();

  return (
    <div className='flex flex-col min-h-full h-screen bg-white z-20 p-5 gap-6'>
      <button className='flex justify-end' onClick={setOpen}>
        <Close />
      </button>
      <button
        className='flex gap-2 items-center text-sm font-semibold'
        onClick={() => router.push('/shop')}
      >
        <Bag /> Дэлгүүрт зочлох
      </button>
      <button
        className='flex gap-2 items-center text-sm font-semibold'
        onClick={() => router.push('/about-us')}
      >
        <Vector /> Бидний тухай
      </button>
      <button
        className='flex gap-2 items-center bg-[#284CE5] text-white p-3 rounded-full text-sm font-semibold'
        onClick={() => router.push('/contact')}
      >
        <Contact /> Холбоо барих
      </button>
    </div>
  );
};
