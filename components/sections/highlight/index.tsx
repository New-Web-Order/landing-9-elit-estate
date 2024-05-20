'use client';
import React from 'react';
// import Button from '@/components/ui/button';
import data from '@/dictionaries/en.json';
import Highlightcard from '@/components/ui/highlight-card';

const Highlight = () => {
  return (
    <section
      className='w-screen flex items-center justify-center flex-col px-3 md:px-8 2xl:px-0 py-9 sm:py-14 lg:py-28 gap-10 lg:gap-20'
      aria-label='Social-Media-Links-Section'
      id='features'
    >

        <div className='flex w-full justify-center items-center flex-col gap-10'>
          <p className='text-base font-semibold text-fg-text-contrast'>
            {data.highlight.tag}
          </p>
          <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-primary-text-contrast'>
            {data.highlight.heading}
          </h1>

        </div>
      <div className='w-full max-w-screen-xl grid md:grid-cols-2 xl:grid-cols-4 md:gap-12 gap-6 justify-items-center '>
        {data.highlight.cardInfo.map((option, index) => (
          <Highlightcard
            key={index}
            title={option.title}
            image={option.image}
            description={option.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Highlight;
