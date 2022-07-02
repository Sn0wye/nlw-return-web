import React from 'react';

export const Home = () => {
  return (
    <main>
      <article className='mx-6 md:mx-20 lg:mx-40 mt-12 h-32 rounded-lg flex items-center bg-zinc-800'>
        <p className='text-zinc-400 mx-14'>
          Experimente enviar um feedback de um bug na aplicação 🐛
        </p>
      </article>
      <div className='w-full grid gap-6 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-20 lg:px-40 my-4'>
        <div className='bg-zinc-800 w-full h-80 rounded-lg' />
        <div className='bg-zinc-800 w-full h-80 rounded-lg' />
        <div className='bg-zinc-800 w-full h-80 rounded-lg' />
        <div className='bg-zinc-800 w-full h-80 rounded-lg' />
        <div className='bg-zinc-800 w-full h-80 rounded-lg' />
      </div>
    </main>
  );
};
