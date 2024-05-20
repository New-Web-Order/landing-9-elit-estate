import React from 'react';
import Welcome from '@/components/sections/welcome';
import About from '@/components/sections/about';
import Highlights from '@/components/sections/highlight';
import FeatureOne from '@/components/sections/features-one';
import Testimonial from '@/components/sections/testimonial';  

const Homepage = () => {
  return (
    <main className='flex flex-col w-screen items-center'>
      <Welcome/>
      <About />
      <Highlights />
      <FeatureOne />
      <Testimonial/>
    </main>
  );
};
export default Homepage;
