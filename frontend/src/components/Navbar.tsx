'use client';

import { Bag, Contact, OneDay, Vector } from '@/images';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Modal } from './Modal';

export const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };
  return (
    <div className='flex items-center justify-between bg-white container h-20 mx-auto'>
      <div className='flex items-center'>
        <button onClick={() => router.push('/')}>
          <OneDay />
        </button>
      </div>
      <div className='flex w-[548px] justify-between font-semibold items-center text-[#284CE5] max-md:hidden'>
        <button className='flex gap-2 items-center text-sm font-semibold'>
          <Bag /> Дэлгүүрт зочлох
        </button>
        <button
          className='flex gap-2 items-center text-sm font-semibold'
          onClick={() => router.push('/aboutUs')}
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
    </div>
  );
};
