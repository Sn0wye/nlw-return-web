import React from 'react';
import hamburguerImg from '../../assets/hamburguer.svg';

export const Navbar = () => {
  return (
    <nav className='h-[72px] w-full bg-zinc-800 flex justify-between items-center px-4 md:px-20 lg:px-40'>
      <div className='h-10 w-40 bg-zinc-700 rounded-lg hidden md:block' />
      <img src={hamburguerImg} className='md:hidden' />
      <div className='gap-6 hidden lg:flex'>
        <div className='w-24 h-4 bg-zinc-700 rounded-full' />
        <div className='w-24 h-4 bg-zinc-700 rounded-full' />
        <div className='w-24 h-4 bg-zinc-700 rounded-full' />
        <div className='w-24 h-4 bg-zinc-700 rounded-full' />
      </div>
      <div className='flex items-center gap-4'>
        <div className='bg-zinc-700 w-8 h-8 rounded-lg' />
        <div className='bg-zinc-700 w-8 h-8 rounded-lg' />
        <div className='bg-zinc-700 w-12 h-12 rounded-full' />
      </div>
    </nav>
  );
};
