'use client';
import React from 'react';
import Link from 'next/link';
import data from '@/dictionaries/en.json';
import ThemeToggle from '../next-theme-toggle';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center  flex-col'>
      <div className='w-full max-w-screen-xl flex justify-between flex-col md:flex-row gap-8 md:gap-16 py-9 md:py-14 px-3 md:px-8 2xl:px-0'>
        <div className='w-full max-w-44 flex flex-col gap-3'>
          <h1 className='text-xl text-fg-text-contrast font-semibold'>
            {data.footer.contactHeading}
          </h1>
          <div className='flex flex-col w-full gap-3'></div>

          {data.footer.topLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=' text-sm font-medium text-fg-text hover:text-fg-text-contrast'
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className='flex w-full lg:w-fit lg:gap-20 xl:gap-24 justify-between lg:justify-center'>
          <div className='flex flex-col gap-4 lg:gap-5'>
            <h1 className='text-xl text-fg-text-contrast font-semibold'>
              {data.footer.aboutHeading}
            </h1>
            <div className='flex flex-col gap-2'>
              {data.footer.aboutLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=' text-sm font-medium text-fg-text hover:text-fg-text-contrast'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-4 lg:gap-5'>
            <h1 className='text-xl text-fg-text-contrast font-semibold'>
              {data.footer.exploreHeading}
            </h1>
            <div className='flex flex-col gap-2'>
              {data.footer.exploreLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=' text-sm font-medium text-fg-text hover:text-fg-text-contrast'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-4 lg:gap-5'>
            <h1 className='text-xl text-fg-text-contrast font-semibold'>
              {data.footer.servicesHeading}
            </h1>
            <div className='flex flex-col gap-2'>
              {data.footer.serviceLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=' text-sm font-medium text-fg-text hover:text-fg-text-contrast'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center py-7 bg-footer '>
        <div className='w-full max-w-screen-xl flex flex-col items-center gap-y-7 lg:gap-y-9 px-3 md:px-8 2xl:px-0'>
          <div className='w-full flex-col md:flex-row flex justify-between md:items-center gap-y-7'>
            <div className='w-fit flex gap-4'>
              {data.navbar.links.map((item) => (
                <a key={item.name} href={item.href}>
                  <p
                    className={classNames(
                      'text-sm font-medium text-[#dbdbdb] hover:text-primary-solid-hover '
                    )}
                    aria-current={item.name ? 'page' : undefined}
                  >
                    {item.name}
                  </p>
                </a>
              ))}
            </div>
            <p className='hidden md:block text-sm text-[#dbdbdb] cursor-pointer'>
              Realised by{' '}
              <a
                href='https://www.newweborder.co/'
                target='_blank'
                className='hover:cursor-pointer hover:bg-black/90 py-px rounded-sm hover:text-[#23FA4B] hover:transition-color ease-in-out duration-300 text-[#dbdbdb]'
              >
                ◬ ɴᴇᴡ ᴡᴇʙ ᴏʀᴅᴇʀ_
              </a>
            </p>
            <div className='w-fit flex items-center gap-3 text-primary-text-contrast'>
              {data.footer.SocialMediaLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xl text-[#dbdbdb] hover:text-primary-solid-hover'
                  aria-label={`MetroMed on ${link.name}`}
                >
                  {link.name === 'facebook' && (
                    <FaFacebook aria-hidden='true' />
                  )}
                  {link.name === 'instagram' && (
                    <FaInstagram aria-hidden='true' />
                  )}
                  {link.name === 'twitter' && <FaXTwitter aria-hidden='true' />}
                  {link.name === 'linkedin' && (
                    <FaLinkedin aria-hidden='true' />
                  )}
                  {link.name === 'youtube' && <FaYoutube aria-hidden='true' />}
                </Link>
              ))}
            </div>
            <p className='block md:hidden text-sm text-fg-text cursor-pointer'>
              Realised by{' '}
              <a
                href='https://www.newweborder.co/'
                target='_blank'
                className='hover:cursor-pointer hover:bg-black/90 py-px rounded-sm hover:text-[#23FA4B] hover:transition-color ease-in-out duration-300 text-fg-text'
              >
                ◬ ɴᴇᴡ ᴡᴇʙ ᴏʀᴅᴇʀ_
              </a>
            </p>
        <ThemeToggle/>    

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
