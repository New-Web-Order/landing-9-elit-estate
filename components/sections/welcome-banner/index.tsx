'use client';
import React from 'react';
import Button from '@/components/ui/button';
import NextImage from 'next/image';
import BannerImage from '@/public/assets/images/welcome-banner-image.webp';
// import Blob from '@/public/assets/images/blob.webp';
import data from '@/dictionaries/en.json';
const WelcomeBanner = () => {
  return (
    <section
      className='w-full py-10 lg:py-0 px-3 md:px-8 2xl:px-0 flex items-center justify-center bg-primary-line'
      aria-label='Welcome Banner'
      id='welcome'
    >
      <div className='flex w-full max-w-screen-xl items-center justify-between gap-8 lg:gap-20 flex-col-reverse md:flex-row'>
        <div className='flex flex-1 flex-col justify-start gap-4 lg:gap-9 '>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-text-contrast max-w-80 md:max-w-full'>
            {data.heroSection.heading}{' '}
            <span className='text-primary-solid'>problems</span>
          </h1>
          <p className='font-medium text-base md:text-lg text-fg-text max-w-[25rem] md:max-w-[35rem]'>
            {data.heroSection.subheading}
          </p>
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='flex w-fit gap-4 items-center'
          >
            <Button shape='filled'>{data.heroSection.buttonText}</Button>
            <Button shape='surface'>{data.heroSection.buttonTextTwo}</Button>
          </a>
        </div>
        <div className='flex flex-1 justify-end items-center w-full max-w-[30rem] lg:max-w-full'>
          <NextImage
            src={BannerImage}
            alt='banner-image'
            className=' h-full'
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;
