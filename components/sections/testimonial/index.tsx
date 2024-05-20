'use client';
import React from 'react';
import data from '@/dictionaries/en.json';
import Button from '@/components/ui/button';
import TestimonialCard from '@/components/ui/testimonial-card';

const Testimonial = () => {
  return (
    <section
      className='w-full flex justify-center py-9 lg:py-20 h-fit px-3 md:px-8 2xl:px-0'
      aria-label='Testimonial'
      id='testimonial'
    >
      <div className='w-full max-w-screen-xl flex flex-col gap-6 lg:gap-9'>
        <div className='w-full flex md:items-center justify-between md:flex-row flex-col gap-6 '>
        <div className='w-full flex flex-col gap-3'>
        <p className='text-base font-semibold text-fg-text-contrast'>
            {data.testimonial.tag}
          </p>
          <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-primary-text-contrast max-w-[25rem] lg:max-w-[35rem] xl:max-w-[45rem]'>
            {data.testimonial.mainHeading}
          </h1>
          <p className='text-sm text-fg-text lg:text-base font-medium lg:max-w-[35rem]'>
            {data.testimonial.mainText}
          </p>
        </div>
        <a href='#' target='_blank' rel='noopener noreferrer' className='flex w-fit h-fit gap-3'>
        <Button shape='surface'>{data.testimonial.buttonTextOne}</Button>
            <Button shape='filled'>{data.testimonial.buttonTextTwo}</Button>
            <Button shape='surface'>{data.testimonial.buttonTextThree}</Button>
          </a>
        </div>

        <div className='w-full flex gap-6 overflow-x-auto justify-start flex-row no-scrollbar pb-3 pt-3 px-1'>
          {data.testimonial.cardInfo.map((option, index) => (
            <TestimonialCard
              key={index}
              price={option.price}
              description={option.description}
              descriptionTwo={option.descriptionTwo}
              status={option.status}
              bed={option.bed}
              bath={option.bath}
              bedImage={option.bedImage}
              bathImage={option.bathImage}
              
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
