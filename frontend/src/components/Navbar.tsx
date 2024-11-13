'use client';

import { Bag, Contact, Hamburger, OneDay, Vector } from '@/images';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Modal } from './Modal';

export const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div>
      <div className='flex items-center justify-between bg-white container h-20 mx-auto relative inset-0 overflow-hidden'>
        <div className='flex items-center'>
          <button onClick={() => router.push('/')}>
            <OneDay />
          </button>
        </div>
        <div className='flex items-center'>
          <button className='max-md:block sm:hidden' onClick={openModal}>
            <Hamburger />
          </button>
          <div
            className='sm:hidden max-md:block w-[85%] fixed top-0 right-0 z-20 transition-transform duration-300'
            style={{
              transform: open ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 300ms ease',
            }}
          >
            <Modal open={open} setOpen={openModal} />
          </div>
          <div className='flex md:w-[548px] w-[480px] justify-between font-semibold items-center text-[#284CE5] max-sm:hidden'>
            <button
              className='flex gap-2 items-center text-sm font-semibold'
              onClick={() => router.push('/shop')}
            >
              <Bag /> Дэлгүүрт зочлох
            </button>
            <button
              className='flex gap-2 items-center text-sm font-semibold'
              onClick={() => router.push('/about-Us')}
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
      </div>
    </div>
  );
};
