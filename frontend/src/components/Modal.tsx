'use client';

import { Bag, Vector } from '@/images';
import { Contact } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const Modal = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
    console.log(open);
  };
  const router = useRouter();
  return (
    <div className='flex w-[300px] flex-col gap-8 font-semibold items-center text-[#284CE5] z-10 bg-slate-500 h-64'>
      <button className='flex gap-2 items-center'>
        <Bag /> Дэлгүүрт зочлох
      </button>
      <button
        className='flex gap-2 items-center'
        onClick={() => router.push('/aboutUs')}
      >
        <Vector /> Бидний тухай
      </button>
      <button
        className='flex gap-2 items-center bg-[#284CE5] text-white p-3 rounded-full'
        onClick={() => router.push('/contact')}
      >
        <Contact /> Холбоо барих
      </button>
      <button onClick={openModal}>close</button>
    </div>
  );
};
