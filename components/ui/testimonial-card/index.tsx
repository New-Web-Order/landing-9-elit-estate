'use client';
import React from 'react';
// import Button from '@/components/ui/button';
import NextImage from 'next/image';
import TestimonialImage from '@/public/assets/images/testimonial.png';

interface TestimonialCardProps {
  price: string;
  status: string;
  description: string;
  descriptionTwo: string;
  bed: string;
  bath: string;
  bedImage: string;
  bathImage: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  price,
  status,
  description,
  descriptionTwo,
  bed,
  bath,
  bedImage,
  bathImage
  
}) => {
  return (
    <div className='min-w-80 flex flex-col gap-4 items-start p-5 rounded-2xl box-shadow'>
      <NextImage src={TestimonialImage} alt='double-quotes' 
      aria-label='double-quotes'
      />
      <div className='flex w-fit h-fit gap-3 items-center'>
        {/* <NextImage
          src={image}
          alt='double-quotes'
          width={500}
          height={500}
          className='w-10 h-10'
        /> */}
        <div className='flex flex-col w-fit'>
      <h1 className='text-lg text-fg-text-contrast font-bold'>{price}</h1>
      <p className='font-normal text-sm text-fg-text-contrast'>{description}</p>
      <p className='font-normal text-xs text-fg-text'>{descriptionTwo}</p>
      <p className='text-xs font-normal text-fg-text'>{status}</p>
      <div className='flex gap-3 itmes-center w-fit h-fit'>
        <div className='flex items-center gap-1 h-fit w-fit pt-2'>
          <NextImage
          src={bedImage}
          alt='bed'
          width={500}
          height={500}
          className='w-4 h-4'
        />
        <p className='text-xs font-normal text-fg-text'>{bed}</p>
        </div>
        <div className='flex items-center gap-1 h-fit w-fit pt-2'>
          <NextImage
          src={bathImage}
          alt='bed'
          width={500}
          height={500}
          className='w-4 h-4'
        />
        <p className='text-xs font-normal text-fg-text'>{bath}</p>
        </div>
      </div>


        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
